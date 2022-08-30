class ItemsController < ApplicationController
  before_action :set_item, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:show, :create, :index]

  # GET /items
  def index
    @items = Item.all

    render json: @items
  end

  # GET /items/1
  def show
    item = Item.find(params[:id])
    render json: item
  end

  # POST /items
  def create
    @item = Item.create!(item_params)
    render json: @item, status: :created

    # if @item
    #   render json: @item, status: :created
    # else
    #   render json: @item.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    # @item = Item.find(params[:id])
    @item.destroy
    render json: @item


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # def newParams
    #   params.permit(:item_name, :price, description, :item_image)
    # end

    # Only allow a list of trusted parameters through.
    def item_params
      params.permit(:item_name, :price, :description, :in_stock, :designer_id, :image)
    end
end
