import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'))
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(closeMenu())
    }, [])
    return (
      <div className='flex flex-col'>
      <div className='px-5'>
          <iframe
              width="1200"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get('v')}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
      </div>
    <CommentsContainer />
    </div>
     )
}

export default WatchPage