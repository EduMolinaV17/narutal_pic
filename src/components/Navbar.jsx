import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FotoContext } from '../context/FotoContext'

const Navbar = () => {
  const { liked } = useContext(FotoContext)
  return (
    <nav className='navbar'>
      <Link to='/' className='linkHome'> Home </Link> | <Link to='/favoritos' className='linkFav'> Favoritos{liked.length ? `: ${liked.length} 💖 ` : ''} </Link>
    </nav>
  )
}
export default Navbar
