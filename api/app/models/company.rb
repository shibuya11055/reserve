class Company < ApplicationRecord
  belongs_to :staff, class_name: 'User'
  has_many :menus
  has_many :options
end
