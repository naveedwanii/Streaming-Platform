import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { useState, useEffect } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { useSelector } from 'react-redux'
import { cacheResults } from '../utils/searchSlice'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState([])
  const [suggestions, setSuggestions] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()
  // console.log(searchQuery)
  useEffect(() => {
    // API call 
    console.log(searchQuery)
    // make an API call after every key press
    // but if the difference 2 API calls is < 200ms
    // decline the API call
    const timer = setTimeout(() => { 
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery])
    } else {
      getSearchSuggestions()
    }
  }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])
   
  /*
    key - i 
     -render the component
     -useEffect()
     -start timer - make api call after 200ms

    key - ip
      - render the component(useEffect render method)
      - re-render the component
      - useEffect()
      - start timer => make api call after 200ms

    setTimeout(200) - make an API cakk

  */

  const getSearchSuggestions = async () => {
    console.log('API call - ' + searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    console.log(json)
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  }



  // const dispatch = useDispatch()

  const toggleMenuHandler = () => {
      dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
          <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' />        
            <img className='h-8 mx-2' alt='youtube-logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg'/>
          </div>
      <div className='col-span-10 px-10'>
        <div>
            <input
          className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
          type='text'
          value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>   
        {showSuggestions && (
           <div className='fixed bg-white py-2 px-5 w-[36rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
             {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
            {suggestions && suggestions.map((s) => (
              <li className='py-2 shadow-sm hover:bg-gray-100'>{s}</li>
            ))}
            {/* // <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 iphone</li> */}
            {/* <li className='py-2 shadow-sm'>🔍 iphone</li>
            <li className='py-2 shadow-sm'>🔍 iphone</li>
            <li className='py-2 shadow-sm'>🔍 iphone</li> */}
          
           </ul>
        </div>
        )}
       
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeVjQDi3dH6L92Ydk-Ae3zmQmCxtjF6ZZw0tMuWYeiw&s' />
      </div>
    </div>
  )
}

export default Header