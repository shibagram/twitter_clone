import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import { Button } from '@mui/material'
import './TweetBox.css'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import db from "../../firebase"


const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault()
    addDoc(collection(db, "posts"), {
      avatar: "https://source.unsplash.com/random",
      displayName: "turorial",
      image: tweetImage,
      text: tweetMessage,
      username: "masaki_toe",
      verified: true,
      createdAt: serverTimestamp(),
    });
    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className='tweetBox_input'>
          <Avatar />
          <input 
            placeholder='今どうしてる？'
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox