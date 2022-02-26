# frozen_string_literal: true

class Owner < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :company
end
