import './App.css'


import NavBar from './components/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import Footer from './components/Footer'







function App() {
return(
  <>
  <div className='main'>
  <NavBar/>
 
  <ItemListContainer greeting = {"bienvenidos"}/>

  <Footer/>

  </div>



</>)
}

export default App
