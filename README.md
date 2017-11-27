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
  user_id: '<unique user id>', // Required
  skill_id: '<your skill id>', // Required
  lang: '<lang of the skill id>', // Required
  [ input: 'your input', // Required for newInput method ]
  [ user_data: {<your user data>} // Optional]
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

For more information, see our doc [Smartlyai's API documentation](https://docs.smartly.ai/#dialog) on section API/Dialog