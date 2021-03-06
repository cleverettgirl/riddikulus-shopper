import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleProduct from '../components/SingleProduct'

import {addItemToUserCart, addItemToGuestCart} from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    singleProduct: state.singleProduct,
    product: state.product,
    cart: state.cart,
    reviews: state.reviews,
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserAdd (color, quantity, productId, orderId, price, size) {
      dispatch(addItemToUserCart(color, quantity, productId, orderId, price, size))
    },
    handleGuestAdd (product, color, quantity, productId, price, size) {
      dispatch(addItemToGuestCart(product, color, quantity, productId, price, size))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
