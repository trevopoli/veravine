class Api::WinesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        if params[:filters]
            # @wines = Wine.where("brand like ?", "%#{params[:filters][:brand_search]}%"))
        else
            @wines = Wine.all
        end

        render :index
    end

    def brand_search
        @wines = Wine.where("UPPER(brand) like UPPER(?)", "%#{params[:brand_search]}%")
        results = []
        @wines.each do |wine|
            results.push(wine.brand) unless results.include?(wine.brand)
        end
        render json: results.to_json
    end

    def show
        @wine = Wine.find_by(id: params[:id])

        if @wine
            render :show
        else
            render json: @wine.errors.full_messages, status: 404
            # insert 404 page
        end
    end

    def create
        @wine = Wine.new(wine_params)
        
        if @wine.save
            render :show
        else
            render json: @wine.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    private

    def wine_params
        params.require(:wine).permit(:brand, :category, :variety, :location, :vintage_year, :user_id)
    end
end