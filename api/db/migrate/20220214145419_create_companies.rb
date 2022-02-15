class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.uuid :uuid, null: false, default: 'gen_random_uuid()'
      t.integer :staff_id, null: false
      t.string :name, null: false
      t.string :open_at, null: false
      t.string :close_at, null: false
      t.timestamps
    end
  end
end