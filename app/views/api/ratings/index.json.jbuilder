@ratings.each do |rating|
    json.set! rating.id do
        json.partial! 'rating', rating: rating
        json.username rating.user.username
    end
end