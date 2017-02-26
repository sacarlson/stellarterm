const React = window.React = require('react');

const isValidSecretKey = input => {
  try {
    StellarSdk.Keypair.fromSeed(input);
    return true;
  } catch (e) {
    return false;
  }
}

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretInput: '',
      invalidKey: false,
      publicInput: '',
      invalidPublicKey: false,
    }

    this.handleInput = (event) => {
      this.setState({secretInput: event.target.value});
    }

    this.handleInputPublic = (event) => {
      console.log("handleInputPublic envent:");
      console.log(event);
      this.setState({publicInput: event.target.value});
    }

    this.handleSubmit = (event) => {
      event.preventDefault();
      isValidSecretKey(this.state.secretInput);
      this.setState({
        invalidKey: true,
      })
      this.props.handler(this.state.secretInput,this.state.publicInput);
    }
  }

  render() {
    let errorMessage;
    if (this.state.invalidKey) {
      errorMessage = <div className="s-alert s-alert--alert">Invalid secret key. Hint: it starts with the letter S and is all uppercase</div>
    } else if (this.props.setupError) {
      errorMessage = <div className="s-alert s-alert--alert">Unable to find account. Make sure that your account is on the public network and funded with 20 lumens.</div>
    }
    return <div className="so-back islandBack islandBack--t">
      <div className="island island--pb">
        <div className="island__header">
          Log in
        </div>
        <div className="LoginForm">
          <div className="LoginForm__form">
            <p className="LoginForm__intro">Log in with your Secret Key OR Public Key to manage your account.</p>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input type="password" className="LoginForm__password" value={this.state.secretInput} onChange={this.handleInput} placeholder="Secret key (example: SBSMVCIWBL3HDB7N4EI3QKBKI4D5ZDSSDF7TMPB.....)" />
              </div>
              {errorMessage}
              <div>
                <input type="text" className="LoginForm__password" value={this.state.publicInput} onChange={this.handleInputPublic} placeholder="Public key (example: GAVUFP3ZYPZUI2WBSFAGRMDWUWK2UDCPD4ODIIA.....)" />
              </div>
              <div>
                <input type="submit" className="LoginForm__submit s-button" value="Log in"></input>
              </div>
            </form>
          </div>
          <div className="LoginForm__notes">
            <h3>Security notes</h3>
            <ul>
              <li>Can login with just publicID and perform signing of TX on alternate wallet, if Secret Key used you don't need to enter Public Key</li>
              <li>If Secret Key is used, make sure to check the url to make sure you are on the correct website.</li>
              <li>Stellarterm does not save your secret key. It is stored on your browser and will be deleted once the page is refreshed or exited.</li>
              <li>For extra security, you can <a href="https://github.com/irisli/stellarterm">build from source</a> or <a href="https://github.com/stellarterm/stellarterm.github.io/">download from GitHub</a> and verify the hash.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  }
}
