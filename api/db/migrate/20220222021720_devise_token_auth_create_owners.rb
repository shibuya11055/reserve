class DeviseTokenAuthCreateOwners < ActiveRecord::Migration[6.1]
  def change

    create_table(:owners) do |t|
      ## Required
      t.string :provider, :null => false, :default => "email"
      t.string :uid, :null => false, :default => ""

      ## Database authenticatable
      t.string :encrypted_password, :null => false, :default => ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, :default => false

      ## Rememberable
      t.datetime :remember_created_at

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0, :null => false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      ## User Info
      t.uuid :uuid, null: false, default: 'gen_random_uuid()'
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :age, null: false
      t.string :address, null: false
      t.string :phone_number
      t.integer :gender,  default: 0
      t.string :email

      ## Tokens
      t.json :tokens

      t.timestamps
    end

    add_index :owners, :email,                unique: true
    add_index :owners, [:uid, :provider],     unique: true
    add_index :owners, :reset_password_token, unique: true
    add_index :owners, :confirmation_token,   unique: true
    # add_index :owners, :unlock_token,         unique: true
  end
end
