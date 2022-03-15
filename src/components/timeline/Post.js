import React from 'react'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, PublicOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import './Post.css'

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className='post'>
        <div className='post_avatar'>
          <Avatar src={avatar}/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_header_text'>
                    <h3>{displayName}
                        <span className='post_header_special'>
                            <VerifiedUser className='post_badge'/>
                            {username}
                        </span>
                    </h3>
                </div>
                <div className='post_header_description'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className='post_footer'>
                <ChatBubbleOutline fontSize='small' />
                <Repeat fontSize='small' />
                <FavoriteBorder fontSize='small' />
                <PublicOutlined fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post