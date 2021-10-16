class CreateWines < ActiveRecord::Migration[5.2]
  def change
    create_table :wines do |t|
      t.integer :user_id, null: false
      t.string :brand, null: false
      t.string :type, null: false
      t.string :category, null: false
      t.string :location, null: false
      t.integer :vintage_year, null: false

      t.timestamps
    end

    add_index :wines, :user_id
    add_index :wines, [:brand, :type, :category, :vintage_year], unique: true
  end
end
