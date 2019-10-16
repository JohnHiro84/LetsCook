class Ingredient < ApplicationRecord


    # belongs_to :recipe

    belongs_to :recipe,
      class_name: 'Recipe',
      foreign_key: :recipe_id
end
