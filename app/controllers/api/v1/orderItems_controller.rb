class Api::V1::OrderItemsController < ApplicationController
  def index
    render json: Order.all
  end

  def create
    if(order_params.orderItems) do
    end
    order = Order.create(order_params)
    render json: order
  end

  private

  def orderItem_params
    params.require(:orderItem).permit(:id, :name, :quantity, :orderId);
  end
end