class FixWineColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :wines, :type, :variety
  end
end
