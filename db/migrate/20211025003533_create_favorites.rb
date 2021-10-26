class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :wine_id, null: false
    end

    add_index :favorites, [:user_id, :wine_id], unique: true
  end
end
