'use strict'

const rpn = require('request-promise-native')
const DIALOG_URI = 'https://apis.smartly.ai/api/dialog/'
const NEW_SESSION_EV = 'NEW_DIALOG_SESSION'
const NEW_INPUT_EV = 'NEW_INPUT'
const PLATFORM = 'api'

class Dialog {

  constructor({ token }) {
    this.token = token
  }

  request({ user_id, skill_id, event_name, lang, input, user_data }) {
    if (this.token === undefined) {
      return Promise.reject({ message: 'Dialog not initialized.' })
    }
    return rpn({
      method: 'POST',
      uri: DIALOG_URI,
      auth: {
        'bearer': this.token
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

/**
 * Create an smartly.ai dialog.
 *
 * @param {string} clientAccessToken Access token. You can get from your smartly account
 * @return {Dialog}                  [description]
 */
function createDialogObj(clientAccessToken) {
    if (typeof clientAccessToken === "string") {
        return new Dialog({token:clientAccessToken});
    } else {
        throw new Error('Token\'s param typeof must be a string.');
    }
}

/**
 * Module exports.
 * @public
 */

exports = module.exports = createDialogObj
