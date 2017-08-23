'use strict'

const rpn = require('request-promise-native')
const AUTH_URI = 'https://apis.smartly.ai/api/auth/oauth/token'
const DIALOG_URI = 'https://apis.smartly.ai/api/dialog/'
const NEW_SESSION_EV = 'NEW_DIALOG_SESSION'
const NEW_INPUT_EV = 'NEW_INPUT'
const PLATFORM = 'smartlyai-nodejs-client'

class Dialog {
  init({ grant_type='password', password, username, client_id, client_secret }) {
    return rpn({
      method: 'POST',
      uri: AUTH_URI,
      body: { grant_type, password, username, client_id, client_secret },
      json: true
    })
    .then(res => this.token = res)
  }
  request({ user_id, skill_id, event_name, lang, input, user_data }) {
    if (this.token === undefined) {
      return Promise.reject({ message: 'Dialog not initialized.' })
    }
    return rpn({
      method: 'POST',
      uri: DIALOG_URI,
      auth: {
        [this.token.token_type.toLowerCase()]: this.token.access_token
      },
      body: {
        user_id, skill_id, event_name, lang, input, user_data,
        platform: PLATFORM
      },
      json: true
    })
  }
  newSession({ user_id, skill_id, lang, user_data }) {
    return this.request({
      user_id, skill_id, lang, user_data,
      event_name: NEW_SESSION_EV
    })
  }
  newInput({ user_id, skill_id, lang, input, user_data }) {
    return this.request({
      user_id, skill_id, lang, input, user_data,
      event_name: NEW_INPUT_EV
    })
  }
}

module.exports = Dialog
