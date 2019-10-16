class Recipe < ApplicationRecord


  # has_many :ingredients
  has_many :directions,
  class_name: :Direction,
  dependent: :destroy

  has_many :ingredients,
    class_name: :Ingredient,
    dependent: :destroy

  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag,
    dependent: :destroy

  has_many :comments,
    class_name: :Comment,
    dependent: :destroy

  has_many :likes,
    class_name: :Like,
    dependent: :destroy

    def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end
