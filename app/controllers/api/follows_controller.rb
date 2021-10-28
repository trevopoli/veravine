class Api::FollowsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @follow = Follow.new(follower_id: current_user.id, followed_id: params[:followed_id])

        if @follow.save
            render json: params[:followed_id]
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find_by(follower_id: current_user.id, followed_id: params[:followed_id])
        if @follow.destroy
            render json: params[:followed_id]
        end
    end

end