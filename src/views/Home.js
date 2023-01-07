import React from 'react';
import * as ReactDOM from 'react-dom/client';
import axios from 'axios'
import OrderList from './components/home_order_list.js';
import CurrentCard from './components/home_current_card';
import FromTheBackCards from './components/home_from_the_back_card';
import ExtraTimeCards from './components/home_extra_time_card';
import swap from '../images/swap.png';

const BACKOFFICE_URL = 'https://jellyfish-app-kkaj7.ondigitalocean.app/api/'
// const BACKOFFICE_URL = 'http://backoffice.test/api/'

function realtimeUpdate(that, newState = '') {
  axios({
    method: 'GET',
    url: BACKOFFICE_URL + 'orders?status=' + (newState ? newState : that.state.status ?? 'WAITING'),
  }).then(function (response) {
    that.setState({
      orders: response.data.data,
    })
  })
    .catch(function (error) {
      console.log(error);
    });
}

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
      url: BACKOFFICE_URL + 'orders',
    }).then(function (response) {
      console.log('response', response)
      if (response.data.data.length > 0) {
        console.log('data', response.data.data)

        that.setState({
          current_orders: [],
          orders: response.data.data,
          current: ReactDOM.createRoot(document.getElementById('current_container')),
          status: 'WAITING',
        })
      } else {
        console.log('No orders found!')
      }

      setInterval(() => {
        realtimeUpdate(that)
      }, 2500);
    })
      .catch(function (error) {
        console.log(error);
        alert('Failed to get orders! See console for error message.')
      });
  }
  swap_state() {
    console.log('SWAP')

    let newState = 'IN_PROGRESS'
    if (this.state.status === newState) {
      newState = 'WAITING'
    }

    console.log(newState)
    this.setState({
      current_orders: [],
      status: newState
    })
    realtimeUpdate(this, newState)
  }
  setCurrentCards(order_id) {
    let currentOrders = this.state.current_orders
    let inCurrent = this.state.current_orders.findIndex(function (order) {
      if (order) {
        return order.id == order_id
      }
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
  finishOrder(order_id) {
    axios({
      method: 'PUT',
      url: BACKOFFICE_URL + 'orders/' + order_id + '/finish',
    }).then(function (response) {
      console.log('response', response)
    })
      .catch(function (error) {
        console.log(error);
        alert('Failed to finish orders! See console for error message.')
      });
  }

  render() {
    return (
      <div className='page home'>
        <div className='home_left'>
          {this.state.orders && <OrderList orders={this.state.orders} current_orders={this.state.current_orders.map(function (o) { return (o ? o.id : -1) })} setCurrentCards={this.setCurrentCards} />}
        </div>
        <div className='home_right'>
          <div className='right_upper'>
            <div className='home_titles'>
              Current
              <div id='swap_btn' className='swap_container' onClick={() => this.swap_state()}><img className='swap_btn' src={swap} alt='swap'></img></div>
            </div>
            <div id='current_container' className='current_container'>
              {this.state.current_orders && <CurrentCard current_orders={this.state.current_orders} setCurrentCards={this.setCurrentCards} finishOrder={this.finishOrder} />}
            </div>
          </div>
          <div className='right_lower'>
            <div className='home_titles'>Special</div>
            <div id='special_container' className='special_container'>
              {this.state.current_orders && <FromTheBackCards orders={this.state.current_orders} />}
            </div>
            <div id='special_container' className='special_container'>
              {this.state.current_orders && <ExtraTimeCards orders={this.state.current_orders} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;