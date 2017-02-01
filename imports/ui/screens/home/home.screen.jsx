import React, { PropTypes } from 'react'
import './home.css'

import Screen from '/imports/ui/layout/screen.jsx';

class HomeScreen extends React.Component {
  render () {
    return (
      <Screen>
        <div style={{height: $(window).height()}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-center home-title">Meteor-scaffolding</h1>
                <p>Swag and stuff</p>
              </div>
            </div>
          </div>
          <div className="navbar-fixed-bottom">
            <div className="container">
              <div style={{minHeight: '10px'}}></div>
            </div>
          </div>
        </div>
      </Screen>
    )
  }
}

export default HomeScreen;
