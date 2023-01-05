const ExtraTimeCards = ({ orders }) => {
    console.log('SPEICIACIAWIWIAWWA', orders)
    return (<>{
        orders.map(function (order, i) {
            if (order) {
                return (
                    <div className="special_sub_container">
                        <div className="special_sub_title">{order.id}. Extra cooking time</div>
                        <div>
                            {order.items.longerCookingTime.map((item, i) => {
                                return (
                                    <div key={order.id + '_' + item.name}>
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

export default ExtraTimeCards;