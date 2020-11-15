import React from 'react';

export default function TwitterAnchor(props) {
  return (
    <div>
      <a 
        id='tweet-quote'
        href='https://twitter.com/intent/tweet' 
        target='_blank' 
        rel='norefferer'
      >
        <img src='https://i.imgur.com/mo2kfUC.png' alt='Twitter Logo' />
      </a>
    </div>
  )
}