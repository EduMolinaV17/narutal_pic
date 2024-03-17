import { createContext, useEffect, useState } from 'react'

export const FotoContext = createContext()

const FotoContextProvider = ({ children }) => {
  const [fotos, setFotos] = useState([])
  const liked = fotos.filter((foto) => foto.liked)
  const ObtenerFotos = () => {
    fetch('./photos.json')
      .then((res) => res.json())
      .then(({ photos }) => {
        setFotos(photos)
      })
  }
  useEffect(() => { ObtenerFotos() }, [])
  const toggleLike = (id) => {
    const newPhotos = fotos.map((foto) => {
      if (foto.id === id) {
        return ({ ...foto, liked: !foto.liked })
      }
      return foto
    })
    setFotos(newPhotos)
  }
  const globalState = { fotos, liked, toggleLike }
  return (
    <FotoContext.Provider value={globalState}>
      {children}
    </FotoContext.Provider>
  )
}

export default FotoContextProvider
