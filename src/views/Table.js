const Table = ({ items }) => {
    console.log(items)
    return (
        <div>
            Items
            <div>
            {items.map((item, i) => {
                    return (<div key={item.id}>{item.name}</div>)
                })}
            </div>
        </div>
    )
}

export default Table;