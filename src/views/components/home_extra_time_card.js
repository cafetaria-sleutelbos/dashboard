const ExtraTimeCards = ({ orders }) => {
    return (<>{
        orders.map(function (order, i) {
            if (order) {
                return (
                    <div key={'et_' + order.id} className="special_sub_container">
                        <div className="special_sub_title">{order.id}. Extra cooking time</div>
                        <div>
                            {order.items.longerCookingTime.map((item, i) => {
                                return (
                                    <div key={'et_' + order.id + '_' + item.name}>
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