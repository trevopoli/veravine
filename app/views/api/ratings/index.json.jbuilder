@ratings.each do |rating|
    json.set! rating.id do
        json.partial! 'rating', rating: rating
    end
end