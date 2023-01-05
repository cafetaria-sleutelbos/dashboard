const CurrentCards = ({ orders, setCurrentCards }) => {
    console.log('current', orders)
    return (<>{
        orders.map(function (order, i) {
            if (order) {
                return (
                    <div onClick={() => setCurrentCards(order.id)} key={'current_' + order.id} className='current_card'>
                        <div className='current_card_title'>{order.id}</div>
                        <div className='current_card_content'>
                            {order.items.allItems.map((item, i) => {
                                return (
                                    <div key={order.id + '_' + item.name}>
                                        {item.amount}X {item.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='current_card_actions'>
                            ACTIONS
                        </div>
                    </div>
                )
            }
        })
    }</>
    )
}

export default CurrentCards;