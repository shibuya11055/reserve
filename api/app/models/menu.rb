class Menu < ApplicationRecord
  belongs_to :company
  has_many :menu_options
  has_many :options, through: :menu_options
end
