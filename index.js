import ADADiscordClient from './struct/ADADiscordClient.js'
import ADATwitchClient from './struct/ADATwitchClient.js'

const discord = new ADADiscordClient()
const twitch = new ADATwitchClient()

await Promise.all([
  discord.start(),
  twitch.start()
])