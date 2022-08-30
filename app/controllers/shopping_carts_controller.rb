class ShoppingCartsController < ApplicationController
  before_action :set_shopping_cart, only: %i[ show update destroy ]
  
  # GET /shopping_carts
  def index
    @shopping_carts = ShoppingCart.find_by(user_id: session[:user_id])

    render json: @shopping_carts
  end

  # GET /shopping_carts/1
  def show
    render json: @shopping_cart
  end

  def addToCart
    cart = ShoppingCart.find_or_create_by!(user_id: session[:user_id],item_id: params[:id])
    # cart.item_id = params[:id]
    # item = Item.find(params[:id])
    render json: cart
  end

  def displayCart
    cart = ShoppingCart.where(user_id: session[:user_id])
    render json: cart
  end

  # POST /shopping_carts
  def create
    @shopping_cart = ShoppingCart.new(shopping_cart_params)

    if @shopping_cart.save
      render json: @shopping_cart, status: :created, location: @shopping_cart
    else
      render json: @shopping_cart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shopping_carts/1
  def update
    if @shopping_cart.update(shopping_cart_params)
      render json: @shopping_cart
    else
      render json: @shopping_cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shopping_carts/1
  def destroy
    @shopping_cart = ShoppingCart.find(params[:id])
    @shopping_cart.destroy
    head :no_content
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shopping_cart
      @shopping_cart = ShoppingCart.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shopping_cart_params
      params.permit(:user_id, :item_id)
    end
end
