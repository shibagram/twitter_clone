import Search from '@mui/icons-material/Search'
import React from 'react'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets_input'>
            <Search className='widgets_search_icon'/>
            <input placeholder='キーワード検索' type='text'/>
        </div>
        <div className='widgets_widget_container'>
            <h2>今どうしてる？</h2>
            <TwitterTweetEmbed tweetId={"1503006403614576640"} />
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="masaki_toe"
                options={{ height: 400 }}
            />
            <TwitterShareButton
                url={"https://twitter.com/masaki_toe"}
                options={{ text: "#React.js勉強中", via: "masaki_toe" }}
            />
        </div>
    </div>
  )
}

export default Widgets