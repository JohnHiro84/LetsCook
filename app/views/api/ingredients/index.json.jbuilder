
@ingredients.each do |ingredient|
  json.set! ingredient.id do
    json.extract! ingredient, :id, :recipe_id, :description
  end
end
