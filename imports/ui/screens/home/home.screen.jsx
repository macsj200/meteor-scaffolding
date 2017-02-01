import React, { PropTypes } from 'react'
import './home.css'
import LogInSignUp from '/imports/ui/shared/account/logInSignUp.jsx';
import Screen from '/imports/ui/layout/screen.jsx';

class HomeScreen extends React.Component {
  render () {
    return (
      <Screen>
        <div style={{height: $(window).height()}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-center home-title">OJI</h1>
                <p>Objects / Jewels / Icons</p>
                <p>You virtual vault.... building a pedigree for your icons.</p>
              </div>
            </div>
          </div>
          <div className="navbar-fixed-bottom">
            <div className="container">
              <LogInSignUp/>
              <div style={{minHeight: '10px'}}></div>
            </div>
          </div>
        </div>
      </Screen>
    )
  }
}

export default HomeScreen;
