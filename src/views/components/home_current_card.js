const CurrentCards = ({ current_orders, setCurrentCards , finishOrder}) => {
    return (<>{
        current_orders.map(function (order, i) {
            if (order) {
                return (
                    <div key={'current_' + order.id} className='current_card'>
                        <div className='current_card_title'>{order.id} <div className="current_card_title_remove" onClick={() => setCurrentCards(order.id)}>Remove</div></div>
                        <div className='current_card_content'>
                            {order.items.allItems.map((item, i) => {
                                return (
                                    <div key={order.id + '_' + item.name}>
                                        {item.amount}X {item.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div id="finish_order_button" className='current_card_finish' onClick={function(){finishOrder(order.id); setCurrentCards(order.id)}} key={'current_' + order.id}>
                            FINISH
                        </div>
                    </div>
                )
            }
        })
    }</>
    )
}

export default CurrentCards;