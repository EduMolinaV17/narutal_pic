import { useContext } from 'react'
import { FotoContext } from '../context/FotoContext'
import IconHeart from './IconHeart'
import { Badge } from 'react-bootstrap'
const Gallery = () => {
  const { fotos, toggleLike } = useContext(FotoContext)
  return (
    <>
      <div className='gallery grid-columns-5 p-3'>
        {fotos.map((foto) => (
          <div className='foto' key={foto.id} style={{ backgroundImage: `url(${foto.src.medium})` }} onClick={() => toggleLike(foto.id)}>
            {foto.liked ? <IconHeart filled /> : <IconHeart />}
            <div>
              <p>{foto.alt}</p>
              <h6><Badge bg='dark'>Autor: {foto.photographer}</Badge></h6>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Gallery
