class User < ApplicationRecord

    # Valicações
    validates :name, presence: true, length: {minimum:3, maximum:50}
    validates :email, presence: true, uniqueness: {case_sensitive: false}
    validates :password, presence: true, length: {minimum:6, maximum:20}
end
