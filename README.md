# Smartly.ai node.js client

It's a node.js client for Smartly.ai; it simplifies calls to the api.

Sample use:

```javascript
const dialog = new Dialog({
  ...
})

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

You must first pass the `token` to the constructor to authenticate, then you can call `newSession` or `newInput`; the first create a new session (i.e. goes back to the `Welcome State`) while the second simulates user input (e.g. "Hello there.").

The two methods return native promises.
