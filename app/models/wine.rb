class Wine < ApplicationRecord
    include PgSearch::Model
    pg_search_scope :simple_search, against: {brand: 'A', variety: 'B', category: 'C', location: 'D', vintage_year: 'D'},
        using: { tsearch: { dictionary: "english"} }
    validates :brand, :variety, :category, :location, presence: true
    validates :category, inclusion: {in: %w(Red White Rose Sparkling Dessert Fortified)}
    validates :vintage_year, inclusion: {in: 1773..Date.current.year, message: "Not a valid year"}
    validates :variety, uniqueness: {:scope => [:brand, :location, :vintage_year]}

    belongs_to :user

    has_many :ratings, dependent: :destroy
    has_many :favorites, dependent: :destroy

    def self.brands_like(brand_search)
        wines = Wine.where("UPPER(brand) like UPPER(?)", "%#{brand_search}%")
        results = []
        wines.each do |wine|
            results.push(wine.brand) unless results.include?(wine.brand)
        end
        results
    end

    def self.search_with_filters(filters)
        if filters[:following_only].downcase! == 'true'
            Wine.search_followed_with_filters(filters)
        else
            wines = Wine.where("UPPER(brand) like UPPER(?)", "%#{filters[:brand]}")
                     
            wines = wines.where("UPPER(category) like UPPER(?)", "#{filters[:category]}") if filters[:category].length > 0
            wines = wines.where("UPPER(location) like UPPER(?)", "%#{filters[:location]}%") if filters[:location].length > 0
            wines = wines.where("UPPER(variety) like UPPER(?)", "%#{filters[:variety]}%") if filters[:variety].length > 0
            wines = wines.where("vintage_year=?", "%#{filters[:vintage_year]}%") if filters[:vintage_year].is_a? Integer
            wines = wines.includes(:ratings)

            wine_results = []
            wines.each do |wine|
                wine_results.push(wine) if wine.avg_rating && wine.avg_rating > filters[:min_rating].to_i
            end
            wine_results
        end
    end

    def self.search_followed_with_filters(filters)

    end

    # def self.simple_search(search_input)
    #     Wine.simple_search(search_input)
    # end

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