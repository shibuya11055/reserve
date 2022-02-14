class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.uuid :uuid, null: false, default: 'gen_random_uuid()'
      t.text :name, null: false
      t.float :required_time, null: false
      t.integer :price
      t.text :note

      t.timestamps
      t.references :company, foreign_key: true
    end
  end
end
