class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])

        if @user
            render :show
        else
            # 404
        end
    end

    def update
        @user = User.find(params[:id])
        
        if @user.update(about: params[:about])
            render :show
        else
            render json: ["Could not update the user profile"], status: 422
        end
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
