import React from 'react';
import * as ReactDOM from 'react-dom/client';
import axios from 'axios'
import OrderList from './components/home_order_list.js';
import CurrentCard from './components/home_current_card';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { current_orders: [], orders: [], current: [] }
    this.setCurrentCards = this.setCurrentCards.bind(this);
  }

  componentDidMount() {
    let that = this
    axios({
      method: 'GET',
      url: 'https://jellyfish-app-kkaj7.ondigitalocean.app/api/orders',
    }).then(function (response) {
      if (response.data < 0) {
        that.setState({
          current_orders: [response.data.data[0], response.data.data[1], response.data.data[2]],
          orders: response.data.data,
          current: ReactDOM.createRoot(document.getElementById('current_container'))
        })
      }else{
        console.log('No orders found!')
      }
    })
      .catch(function (error) {
        console.log(error);
        alert('Failed to get orders! See console for error message.')
      });
  }
  setCurrentCards(order_id) {
    console.log(this.state)
    let currentOrders = this.state.current_orders
    let inCurrent = this.state.current_orders.findIndex(function (order) {
      return order.id == order_id
    });

    if (inCurrent > -1) {
      //remove
      console.log('remove')
      currentOrders.splice(inCurrent, 1)
      this.setState({
        current_orders: currentOrders
      })
    } else if (this.state.current_orders.length >= 3) {
      console.log('too much')
    }
    else {
      console.log('adding')
      let order_index = this.state.orders.findIndex(function (order) {
        return order.id == order_id
      });
      currentOrders.push(this.state.orders[order_index])

      this.setState({
        current_orders: currentOrders,
      })
    }

  }

  render() {
    return (
      <div className='page home'>
        <div className='home_left'>
          {this.state.orders && <OrderList orders={this.state.orders} setCurrentCards={this.setCurrentCards} />}
        </div>
        <div className='home_right'>
          <div className='right_upper'>
            <div className='home_titles'>Current</div>
            <div id='current_container' className='current_container'>
              {this.state.current_orders && <CurrentCard orders={this.state.current_orders} setCurrentCards={this.setCurrentCards} />}
            </div>
          </div>
          <div className='right_lower'>
            bottom
          </div>
        </div>
      </div>
    )
  }
}

export default Home;