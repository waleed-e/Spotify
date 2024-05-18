import React, { useEffect, useRef } from 'react'
import {Route,Routes,useLocation} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
const Display = () => {

 const displayRef = useRef()
const location = useLocation()
const isAlbum = location.pathname.includes("album")
const albumId = isAlbum ? location.pathname.slice(-1):"";
const bgColor = albumsData[Number(albumId)].bgColor

useEffect(()=>{
  if (isAlbum){
    displayRef.current.style.backgroundColor = `linear-gradient(${bgColor},#121212)`;
  }else{
    displayRef.current.style.backgroundColor = `#121212`;
  }
})

  return (
    <div ref={displayRef} className='w-screen m-2 px-6 pt-4 rounded bg-zinc-950 text-white overflow-auto lg:w-9/12 lg:ml-0'>
<Routes>
<Route path='/' element={<DisplayHome/>}/>
<Route path='/album/:id' element={<DisplayAlbum/>}/>
</Routes>
    </div>
  )
}

export default Display