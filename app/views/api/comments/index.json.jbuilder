
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :recipe_id, :body, :author, :created_at
  end
end
