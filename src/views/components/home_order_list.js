const OrderList = ({ orders, current_orders, setCurrentCards }) => {
    return (
        <div>
            <div className='home_titles'>Orders ({orders.length})</div>
            <div className='orders_container'>
                {orders.map((order, i) => {
                    return (
                        <div onClick={() => setCurrentCards(order.id)} key={order.id} className={current_orders.includes(order.id) ? 'selected order_row' : 'order_row'}>
                            <div className='order_row_content'>
                                <span className='order_row_title'>ORDER:{order.id}</span>
                                <span className='order_row_time'>{order.created_at}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderList;