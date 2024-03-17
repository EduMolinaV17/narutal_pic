import { useContext } from 'react'
import { FotoContext } from '../context/FotoContext'
import Liked from '../components/Liked'

const Favorites = () => {
  const { liked } = useContext(FotoContext)
  return (
    <>
      <div className='Fav'>
        <h1>Fotos favoritas</h1>
        {liked.length ? <Liked /> : <div><h3>Agrega tus fotos favoritas</h3><img src='https://i.pinimg.com/originals/8f/6a/2b/8f6a2bf112d267932b31004311d8fc85.gif' alt='sin favoritos' /></div>}
      </div>
    </>
  )
}
export default Favorites
