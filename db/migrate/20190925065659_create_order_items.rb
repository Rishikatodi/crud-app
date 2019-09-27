class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.integer :orderId
      t.text :itemName
      t.integer :quantity

      t.timestamps null: false
    end
    add_foreign_key :orderId, :orders
  end
end
