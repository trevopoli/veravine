class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :wine_id, null: false
      t.integer :user_id, null: false
      t.integer :value, null: false
      t.text :comment

      t.timestamps
    end

      add_index :ratings, [:wine_id, :user_id], unique: true
  end
end
