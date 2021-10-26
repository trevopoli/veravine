class Wine < ApplicationRecord
    validates :brand, :variety, :category, :location, presence: true
    validates :category, inclusion: {in: %w(Red White Rose Sparkling Dessert Fortified)}
    validates :vintage_year, inclusion: {in: 1773..Date.current.year, message: "Not a valid year"}
    validates :variety, uniqueness: {:scope => [:brand, :location, :vintage_year]}

    belongs_to :user

    has_many :ratings, dependent: :destroy
    has_many :favorites, dependent: :destroy

    def avg_rating
        if self.ratings.size > 0 
            ratingValues = self.ratings.map{ |rating| rating.value }
            ratingValues.sum / ratingValues.size
        else
            nil
        end
    end

    # maybe don't query again for user, have controller tell the user instance
    def favorited?
        if Current.user
            Current.user.favorites.where(wine_id: self.id).length > 0
        else
            false
        end
    end
end