import React from 'react';

export default function QuoteContentDisplay(props) {
  return (
    <div id='text'>
      {props.quoteContent}
    </div>
  );
}