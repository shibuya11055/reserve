class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.uuid :uuid, null: false, default: 'gen_random_uuid()'
      t.integer :staff_id, null: false
      t.text :name, null: false
      t.text :open_at, null: false
      t.text :close_at, null: false
      t.timestamps
    end
  end
end