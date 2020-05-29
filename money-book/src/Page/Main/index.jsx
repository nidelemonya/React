import React, { Component } from 'react';


// class Main extends React.Component {
//   render() {
//     return 'Main'
//   }
// }


// export default Main;

export default class Title extends Component {
  handleClickOnTitle (word,e) {
    // console.log('Click on title.');
    console.log(this,word);
    console.log(e.target.innerHTML);
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this,'hello')}>React 小书</h1>
    )
  }
}