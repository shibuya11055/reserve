# frozen_string_literal: true

module Types
  class OwnerType < Types::BaseObject
    field :uuid, String, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false
    field :age, String, null: false
    field :address, String, null: false
    field :phone_number, String, null: true
    field :gender, Integer, null: true
    field :email, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
