import { Client } from 'tmi.js'

export default class ADATwitchClient extends Client {
  constructor () {
    super({
      identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_PASSWORD
      },
      channels: [
        process.env.TWITCH_USERNAME
      ]
    })
  }

  async start () {
    await this.connect()
  }
}
