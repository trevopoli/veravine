class ChangeUserColumnDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default(
      :users,
      :about,
      from: nil,
      to: ""
    )
  end
end
