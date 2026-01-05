import React, { useState, useEffect } from 'react'
import { dummyShowsData } from '../assets/assets'

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [nowPlayingMovies, setnowPlayingMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [dateTimeSelection, setDateTimeSelection] = useState({})
  const [dateTimeInput, setDateTimeInput] = useState('')
  const [showPrice, setShowPrice] = useState()

  const fetchNowPlayingMovies = async () => {
    setnowPlayingMovies(dummyShowsData)
  }

  useEffect(() => {
   fetchNowPlayingMovies()
  }, [])
  
  return (
    <div>
      <h1>Add shows</h1>
    </div>
  )
}

export default AddShows
