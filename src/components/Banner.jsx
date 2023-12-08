import React,{useEffect,useState} from 'react'
import tmdbAxiosinstance from '../tmdbAxiosinstance'
import './Row.css'
import './Banner.css'

function Banner({fetchUrl}) {
    const [allMovies,setAllMovies]=useState([])
    const base_url_img='https://image.tmdb.org/t/p/original'
      const fetchData=async()=>{
          const response=await tmdbAxiosinstance.get(fetchUrl)
          setAllMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
          console.log(Math.floor(Math.random()*response.data.results.length)  )
          console.log(allMovies)
  
      }
      // console.log(fetchUrl)
      useEffect(()=>{
        fetchData()
  
      },[])
  return (
    <div style={{
        height:'600px',width:'100%',
        backgroundImage:`url(${base_url_img}${allMovies.backdrop_path})`,backgroundSize:'cover',
        backgroundAttachment:'fixed'
    }}>
      <div className='banner-content'>
        <h1>
            {allMovies?.name}
        </h1>
        <h2>
            {allMovies?.overview}
        </h2>
      </div>
    </div>
  )
}

export default Banner