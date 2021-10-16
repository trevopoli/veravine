class Wine < ApplicationRecord
    validates :brand, :variety, :category, :location, presence: true
    validates :vintage_year, inclusion: {in: 1773..Date.current.year, message: "Not a valid year"}
    validates :variety, uniqueness: {:scope => [:brand, :location, :vintage_year]}

    belongs_to :user
end