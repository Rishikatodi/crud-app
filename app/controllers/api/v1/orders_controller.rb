class Api::V1::OrdersController < ApplicationController
  def index
    render json: Order.all
  end

  def create
    if(order_params)
      order = Order.create();
      render json: order
      params[:order][:orderItems].each do |item|
        oi = OrderItem.create(item);
        render json: oi
      end
    end
  end

  private

  def order_params
    params.require(:order).permit(:id, { orderItems: [:name,:quantity]});
  end
end