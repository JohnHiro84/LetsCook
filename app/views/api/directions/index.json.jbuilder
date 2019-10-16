
@directions.each do |direction|
  json.set! direction.id do
    json.extract! direction, :id, :recipe_id, :description
  end
end
