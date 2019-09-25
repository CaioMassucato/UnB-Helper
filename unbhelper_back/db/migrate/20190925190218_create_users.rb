class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.boolean :admin
      t.string :password_digest
      t.string :confirmation_token
      t.string :token

      t.timestamps
    end
  end
end
