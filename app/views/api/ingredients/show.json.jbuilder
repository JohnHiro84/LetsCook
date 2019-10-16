json.ingredient do
  json.extract! @ingredient, :id, :recipe_id, :description
end
