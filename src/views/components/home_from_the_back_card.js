const FromTheBackCards = ({ orders }) => {
    return (<>{
        orders.map(function (order, i) {
            if (order) {
                return (
                    <div key={'fb_' + order.id} className="special_sub_container">
                        <div className="special_sub_title">{order.id}. From the back</div>
                        <div>
                            {order.items.getFromTheBack.map((item, i) => {
                                return (
                                    <div key={'fb_' + order.id + '_' + item.name}>
                                        {item.amount}X {item.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        })
    }</>
    )
}

export default FromTheBackCards;