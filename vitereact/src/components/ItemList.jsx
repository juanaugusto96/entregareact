import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div className="item" >
            {
                productos.length > 0 &&
                productos.map((productos) => {
                    return (
                        <Item productos={productos} />
                    )
                }
                )
            }
        </div>
    )
}
export default ItemList;