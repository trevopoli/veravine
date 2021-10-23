class Api::RatingsController < ApplicationController

    def index
        @ratings = Rating.where(wine_id: params[:wine_id])

        render :index
    end

    def create
        @rating = Rating.new(rating_params)

        if @rating.save
            render :show # create show path for adding one to state?
        else
            render json: @rating.errors.full_messages, status: 422
        end
    end

    def destroy
        @rating = Rating.find_by(id: params[:id])
        @rating.destroy
        render json: params[:id]
    end

    private

    def rating_params
        params.require(:rating).permit(:wine_id, :user_id, :value, :comment)
    end
end