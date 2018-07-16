import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  constructor (props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    toastr.info('Hi! I am a nuevo message.');
    // console.log('Hola');
  }

  render () {
    return ( 
      <div>       
          Hola
      </div> 
    )
  }

}

render (<App />, document.getElementById('root') );