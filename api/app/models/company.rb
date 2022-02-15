class Company < ApplicationRecord
  belongs_to :staff, class_name: 'User'
end
