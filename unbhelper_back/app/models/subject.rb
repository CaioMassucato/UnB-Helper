class Subject < ApplicationRecord
    has_many :posts

    # Validações
    validates :name, presence: true, length: {minimum:3, maximum:30}
    validates :teacher, presence: true
    validates :year, presence: true, numericality: {greater_than: 2018}
    validates :semester, presence: true, inclusion => 1..2, numericality: {only_integer: true}
end