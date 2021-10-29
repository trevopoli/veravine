class Api::RatingsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def index
        @ratings = Rating.where(wine_id: params[:wine_id]).includes(:user)

        render :index
    end

    def index_by_user
        @ratings = Rating.where(user_id: params[:user_id]).includes(:wine)

        render :user_index
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