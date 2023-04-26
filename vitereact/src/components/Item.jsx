const Item = ({ productos }) => {
    return (

        <div className="productos">
            <img src={productos.image} alt={productos.title} />
            <h2>{productos.title}</h2>
            <p>{productos.precio}</p>
            <button type="button" class="btn btn-success"><i class="bi bi-cart-check"></i></button>


        </div>

    )
}

export default Item;