import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewQuoteButton from './NewQuoteButton.js';
import QuoteAuthorDisplay from './QuoteAuthorDisplay.js';
import QuoteContentDisplay from './QuoteContentDisplay';
import TwitterAnchor from './TwitterAnchor.js';

export default class RandomQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteContent: 'Insert Quote Content Here',
      quoteAuthor: 'Insert Quote Author Here'
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  componentDidMount() {
    this.getNewQuote();
  }
  // Gets quote from public server at web address
  getNewQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        //console.log(data['content']);
        this.setState({
          quoteContent: data['content'],
          quoteAuthor: data['author']
        });
    });
  }
  render() {
    return (
      
        <Container className='frame-border'>
          <Container className='portrait-mat'>
            <Container id='quote-box'>
              <Row>
                <QuoteContentDisplay quoteContent={this.state.quoteContent} />
              </Row>
              <Row>
                <Col className='center-elements'>
                  <TwitterAnchor />
                </Col>
                <Col xs={8}className='center-elements'>
                  <QuoteAuthorDisplay quoteAuthor={this.state.quoteAuthor} />
                </Col>
                <Col className='center-elements'>
                  <NewQuoteButton getNewQuote={this.getNewQuote} />
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      
    );
  }
} 