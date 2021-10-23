class Rating < ApplicationRecord
    validates :value, inclusion: {in: 1..10}

    belongs_to :user
    belongs_to :wine
    
end