json.extract! wine, :id, :brand, :category, :variety, :vintage_year, :user_id
json.username wine.user.username
json.avgRating wine.avg_rating
json.favorited wine.favorited?
