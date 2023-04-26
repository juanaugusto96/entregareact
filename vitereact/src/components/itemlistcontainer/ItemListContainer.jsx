import { useEffect, useState } from "react"
import ItemList from "../ItemList"

import pedirProductos from '../PedirProductos'

import './itemlistcontainer.css'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])


  useEffect(() => {
    pedirProductos()
      .then((res) => {
        setProductos(res)


      })

  }, [])

  return (<div className="itemlist">
    <h1>{greeting}</h1>
    <ItemList productos={productos} />
    </div>
  )

}
export default ItemListContainer;