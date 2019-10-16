
json.recipe do
  json.extract! @recipe, :id, :title, :description, :author, :direction_ids, :ingredient_ids
  json.image_url image_path(@recipe.image_url)
end

  json.directions do
    @recipe.directions.each do |direction|
      json.set! direction.id do
        json.partial! 'api/directions/direction', direction: direction
      end
    end
  end


  json.ingredients do
    @recipe.ingredients.each do |ingredient|
      json.set! ingredient.id do
        json.partial! 'api/ingredients/ingredient', ingredient: ingredient
      end
    end
  end

  json.tags do
    @recipe.tags.each do |tag|
      json.set! tag.id do
        json.partial! 'api/tags/tag', tag: tag
      end
    end
  end


    json.comments do
      @recipe.comments.each do |comment|
        json.set! comment.id do
          json.partial! 'api/comments/comment', comment: comment
        end
      end
    end

    json.likes do
      @recipe.likes.each do |like|
        json.set! like.id do
          json.partial! 'api/likes/like', like: like
        end
      end
    end
