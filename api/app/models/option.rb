class Option < ApplicationRecord
  belongs_to :company
  has_many :menu_options
  has_many :menus, through: :menu_options
end
