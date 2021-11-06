@ratings.each do |rating|
    json.set! rating.created_at do
        json.partial! 'rating', rating: rating
        json.wine_brand rating.wine.brand
        json.wine_variety rating.wine.variety   
    end
end
