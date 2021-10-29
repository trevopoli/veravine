json.extract! rating, :id, :wine_id, :user_id, :value, :comment
json.wine_brand rating.wine.brand
json.wine_variety rating.wine.variety
json.username rating.user.username