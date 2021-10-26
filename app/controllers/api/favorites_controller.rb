class Api::FavoritesController < ApplicationController 
    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @favorite = Favorite.new(wine_id: params[:wine_id], user_id: current_user.id)

        if @favorite.save
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422 
        end
    end

    def destroy
        @favorite = Favorite.find_by(wine_id: params[:wine_id], user_id: current_user.id)
        wine_id = @favorite.wine_id
        @favorite.destroy
        render json: wine_id
    end

end