const CurrentCards = ({ orders, setCurrentCards }) => {
    return (<>{
        orders.map((order, i) => {
            return (
                <div onClick={() => setCurrentCards(order.id)} key={'current_'+order.id} className='current_card'>
                    <div className='current_card_title'>{order.id}</div>
                    <div className='current_card_content'>
                        {order.items.map((item, i) => {
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
        })
    }</>
    )
}

export default CurrentCards;