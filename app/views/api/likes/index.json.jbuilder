
@likes.each do |like|
  json.set! like.id do
    json.extract! like, :id, :recipe_id, :user_id, :is_true
  end
end
