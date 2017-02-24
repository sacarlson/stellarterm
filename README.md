[![Travis CI status](https://travis-ci.org/irisli/stellarterm.svg?branch=master)](https://travis-ci.org/irisli/stellarterm) [ ![Codeship Status](https://img.shields.io/codeship/af24fda0-b980-0134-5c05-4ec9827c52a2/master.svg)](https://app.codeship.com/projects/195032)

# StellarTerm - Try it out at [stellarterm.com](https://stellarterm.com/)

StellarTerm is a web based trading client for use on the Stellar network. This client aims to make it easy and safe for users of any skill level to trade on the Stellar network by making a clear and secure user interface.

## Screenshots


### A detailed user friendly orderbook
![Orderbook](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/orderbook.png)

### Ability to add trust either from a curated list, manually, or via federation
![Adding trust from directories](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/adding-trust-from-directory.png)

![Adding trust via federation](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/adding-trust-via-federation.png)

### Price history charts (coming soon)
![Price history charts](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/history-chart.png)

### Ability to make offers in an intuitive manner
![Offer maker](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/offermaker.png)

### A directory of the asset pairs traded on the Stellar network
![Market directory](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/marketdirectory.png)

### Manage offers for an account
![Manage offers](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/manage-offers.png)

### Shows listing of balances with secure asset cards
![Detailed balances](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/detailed-balances.png)

### Compatible with accounts from any other client
![Universal login](https://raw.githubusercontent.com/irisli/stellarterm/master/screenshots/universal-login.png)

## Under the cover features
- No external dependencies or trackers
- All GitHub commits [securely signed with GPG](https://github.com/blog/2144-gpg-signature-verification)

## Deployment
The project is hosted on GitHub pages in the [stellarterm/stellarterm.github.io](https://github.com/stellarterm/stellarterm.github.io/) repository. The client is wrapped into a single html file and it's sha 256 sum is recorded on each git commit.
to deploy from source:
1). git clone https://github.com/sacarlson/stellarterm.git
2). cd stellarterm
3). gulp ; this will create a dist dir and run a server at port 3000 that can be used to pretest the app
4). after satisfied with mods you made, you can copy paste the dist directory into your apache or other server to run from
    it now contains everything needed from that point.

preliminary install on ubuntu you will need npm, and gulp
 install npm: sudo apt-get install nodejs
 optional: sudo apt-get install build-essential  ; not sure this is needed here
 npm install --global gulp-cli.

## License
StellarTerm is open source software licensed under the Apache-2.0 license.

### Credits
- Started the project using the super helpful [react-gulp-browserify yeoman generator](https://github.com/randylien/generator-react-gulp-browserify)
