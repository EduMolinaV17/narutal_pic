import { useContext } from 'react'
import IconHeart from './IconHeart'
import { FotoContext } from '../context/FotoContext'
import { Badge } from 'react-bootstrap'

const Liked = () => {
  const { liked, toggleLike } = useContext(FotoContext)
  return (
    <>
      <div className='gallery grid-columns-4 p-3'>
        {liked.map((foto) => (
          <div className='foto' key={foto.id} style={{ backgroundImage: `url(${foto.src.large})` }} onClick={() => toggleLike(foto.id)}>
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

export default Liked
