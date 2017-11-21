# Smartly.ai node.js client

It's a node.js client for Smartly.ai; it simplifies calls to the api.

* [Installation](#installation)
* [Usage](#usage)

# Installation

* Install [Node.js](https://nodejs.org/)
* Install Smartly.ai SDK with `npm`:
```shell
npm install smartlyai
```

# Usage

Sample use:

* Create `main.js` file with the following code:
```javascript
var smartlyai = require('smartlyai');

var dialog = smartlyai("<your client access token>");

dialog.newSession({
...
})
.then(data =>
  console.log(data)
)
.catch(err => {
  console.error(err.message)
})
```
* Run following command.
```shell
node main.js
```

You must first pass the `token` to the smartlyai module, then you can call `newSession` or `newInput`; the first create a new session (i.e. goes back to the `Welcome State`) while the second simulates user input (e.g. "Hello there.").

The two methods return native promises.
