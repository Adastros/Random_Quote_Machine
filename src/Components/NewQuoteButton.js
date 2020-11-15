import React from 'react';
import { Button } from 'react-bootstrap';

export default class NewQuoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    //console.log('click!');
    this.props.getNewQuote();
  }
  render() {
    return (
      <Button 
        id='new-quote'
        onClick={this.onClickHandler}
      >
        New Quote
      </Button>
    );
  }
  
}