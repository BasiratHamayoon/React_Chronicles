import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './components/Product'
import { ProductDetail } from './components/ProductDetail'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Product /> }/>
        <Route path='/productdetail/:id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App;
