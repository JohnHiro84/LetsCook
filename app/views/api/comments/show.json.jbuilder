json.comment do
  json.extract! @comment, :id, :recipe_id, :body, :author, :created_at
end
