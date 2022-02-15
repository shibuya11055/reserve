class CreateMenuOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_options do |t|
      t.references :menu, index: true, null: false
      t.references :option, index: true, null: false
      t.timestamps
    end
  end
end
