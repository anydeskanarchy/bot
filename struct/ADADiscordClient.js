import { Client } from 'discord.js'

export default class ADADiscordClient extends Client {
  constructor () {
    super({ intents: [] })
  }

  async start () {
    await this.login(process.env.DISCORD_TOKEN)
  }
}
