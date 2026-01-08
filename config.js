

module.exports = {
  TOKEN: "MTQ1ODUxNTc4NzA1MTQzMzk4NQ.Gq1hxO.qZ6NNb55dHO-rneZTqLwjwRI2I8XcL-2WS4TqE",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://smgknife:<db_password>@musicbot.3dk234o.mongodb.net/?appName=musicbot",
  spotifyClientId : "da88073ec4c14c3b8da27a4071482d51",
  spotifyClientSecret : "86db37d5aa3b43d4a65ec56f4d6d38d9",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5,
  showProgressBar: false,  // Show progress bar in track embed
  showVisualizer: false,  // Show visualizer on music card (disabled for low-memory optimization)
  generateSongCard: true,  // custom song card image, if false uses thumbnail
  // Performance optimizations for low-memory environments (512MB RAM)
  lowMemoryMode: true,  // Enable optimizations for low-memory hosting
  errorLog: "", 
  nodes: [
     {
      name: "GlceYT",
      password: "glace",
      host: "de-01.strixnodes.com",
      port: 2010,
      secure: false
    }
  ]
}
