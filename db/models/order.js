const Sequelize = require('sequelize')
const db = require('APP/db')
const Orderline = require('./orderline')


const Order = db.define('orders', {
  status:{
    // only admin should be able to change the status -- make sure to check before updating
    type: Sequelize.ENUM,
    values: ['pending', 'processing', 'shipped', 'delivered'],
    defaultValue: 'pending',
  },

  shippingAddress:{
    // can be null if user is a guest user and is still browsing,
    // should not be null once they want to place order
    type: Sequelize.STRING,
  },

  shippingCost:{
    type: Sequelize.INTEGER,
  },

  tax: {
    type: Sequelize.INTEGER,
  },

  subtotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  totalCost: {
    type: Sequelize.INTEGER,
    defaultValue:0,
  }

}, {
  validate: {
    checkShippingUponOrder: function () {
      if(this.status !=='pending' && !this.shippingAddress){
        throw new Error('Shipping address needs to be present if order is not pending')
      }
    }
  }
})

module.exports = Order