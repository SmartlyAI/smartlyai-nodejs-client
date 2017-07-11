# Smartly.ai node.js client

It's a node.js client for Smartly.ai; it simplifies calls to the api.

Sample use:

```javascript
const dialog = new Dialog()
dialog.init({
  ...
})
.then(() =>
  dialog.newSession({
    ...
  })
)
.then(data =>
  console.log(data)
)
.catch(err => {
  error.log(err.message)
})
```

You first have to call `init` to authenticate, then you can call `newSession` or `newInput`; the first create a new session (i.e. goes back to the `Welcome State`) while the second simulates user input (e.g. "Hello there.").

The three methods return native promises.
