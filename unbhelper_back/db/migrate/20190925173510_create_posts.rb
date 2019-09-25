class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.references :subject, null: false, foreign_key: true
      t.string :name
      t.string :content
      t.integer :likes

      t.timestamps
    end
  end
end
