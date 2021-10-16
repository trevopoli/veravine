class Api::WinesController < ApplicationController

    def index
        @wines = Wine.all

        render :index
    end

    def show

    end

    def create

    end

    def destroy

    end

    private

    def wine_params
        params.require(:wine).permit()
    end
end