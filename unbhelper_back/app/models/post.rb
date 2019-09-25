class Post < ApplicationRecord
  belongs_to :subject

  # Validações
  validates :name, presence: true
  validates :content, presence: true, length: {minimum:0, maximum:400}
end
