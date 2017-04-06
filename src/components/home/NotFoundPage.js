import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>404...</h1>
    <img src="images/BrokenArm.png" alt="Broken...Please try again"/><br/>


    <Link to="/"><RaisedButton label="Home" ></RaisedButton></Link>

  </div>
);