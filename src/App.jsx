import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorites from './views/Favorites'
import Home from './views/Home'
import FotoContextProvider from './context/FotoContext'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <FotoContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </FotoContextProvider>
      </>
    </BrowserRouter>
  )
}
export default App
