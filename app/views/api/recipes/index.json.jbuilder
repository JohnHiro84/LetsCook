
@recipes.each do |recipe|
  json.set! recipe.id do
    json.extract! recipe, :id, :title, :description, :author, :direction_ids, :ingredient_ids
    json.image_url image_path(recipe.image_url)
    # json.moves []
    # json.item_ids []

  json.tags do
    recipe.tags.each do |tag|
      json.set! tag.id do
        json.partial! 'api/tags/tag', tag: tag
      end
    end
  end
  end
end
