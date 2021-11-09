class Api::WinesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        if params[:filters]
            @wines = Wine.search_with_filters(params[:filters])
        else
            @wines = Wine.all
        end

        render :index
    end

    def brand_search
        wine_brands = Wine.brands_like(params[:brand_search])
        
        render json: wine_brands.to_json
    end

    def simple_search
        @wines = Wine.simple_search(params[:search_input]).includes(:ratings)

        render :index
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