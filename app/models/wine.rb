class Wine < ApplicationRecord
    validates :brand, :variety, :category, :location, presence: true
    validates :category, inclusion: {in: %w(Red White Rose Sparkling Dessert Fortified)}
    validates :vintage_year, inclusion: {in: 1773..Date.current.year, message: "Not a valid year"}
    validates :variety, uniqueness: {:scope => [:brand, :location, :vintage_year]}

    belongs_to :user

    has_many :ratings, dependent: :destroy
end