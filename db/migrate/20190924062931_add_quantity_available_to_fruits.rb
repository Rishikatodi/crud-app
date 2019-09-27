class AddQuantityAvailableToFruits < ActiveRecord::Migration
  def change
    add_column :fruits, :quantity, :number
  end
end
