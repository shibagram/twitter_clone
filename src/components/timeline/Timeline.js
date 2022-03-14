import React from 'react'
import './Timeline.css'
import TweetBox from './TweetBox'
import Post from './Post'

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      <TweetBox />
      <Post />  
    </div>
  )
}

export default Timeline