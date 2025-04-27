function ShopItemFunc (props) {
    if (props.item) {
        let price = props.item.price
        if (price % 1 == 0) {
            price = `${price}.00`
        }

        return (
            <div className="main-content">
                <h2>{props.item.brand}</h2>
                <h1>{props.item.title}</h1>
                <h3>{props.item.description}</h3>
                <div className="description">
                    {props.item.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider">------------------------</div>
                <div className="purchase-info">
                    <div className="price">{props.item.currency}{price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    } else {
        return '<!-- No item info provided -->'
    }
}


export default ShopItemFunc