import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 4,
};

class HomePage extends Component {

  selected = () => {
    console.log('Works');
  }

  render() {

    return (
      <div >
        <h1>Welcome back </h1>
          <article>
            <Link to="About"><RaisedButton label="About" style={style}></RaisedButton></Link>
            <Link to="Entry"><RaisedButton label="New Entry" onClick={e => this.selected()}></RaisedButton></Link>
            <Link to="PastEntries"><RaisedButton label="Past Entries" style={style}></RaisedButton></Link>
          </article>
      </div>
    )
  }
}

export default HomePage;