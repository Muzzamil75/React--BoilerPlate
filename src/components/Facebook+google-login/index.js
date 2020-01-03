import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class FaceBook extends Component {

  render() {
    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div className="App">
        <h4>LOGIN WITH FACEBOOK AND GOOGLE</h4>
        <FacebookLogin
          appId="2522443967999804"
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <GoogleLogin
          clientId="290505105142-okv69jobdef0ii3bcabasr7egdc1ipsh.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default FaceBook;