require "test_helper"

class ShoppingCartsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shopping_cart = shopping_carts(:one)
  end

  test "should get index" do
    get shopping_carts_url, as: :json
    assert_response :success
  end

  test "should create shopping_cart" do
    assert_difference("ShoppingCart.count") do
      post shopping_carts_url, params: { shopping_cart: { item_id: @shopping_cart.item_id, user_id: @shopping_cart.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show shopping_cart" do
    get shopping_cart_url(@shopping_cart), as: :json
    assert_response :success
  end

  test "should update shopping_cart" do
    patch shopping_cart_url(@shopping_cart), params: { shopping_cart: { item_id: @shopping_cart.item_id, user_id: @shopping_cart.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy shopping_cart" do
    assert_difference("ShoppingCart.count", -1) do
      delete shopping_cart_url(@shopping_cart), as: :json
    end

    assert_response :no_content
  end
end
