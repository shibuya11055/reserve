class Company < ApplicationRecord
  belongs_to :owner
  has_many :menus
  has_many :options
end
