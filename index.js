const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
     intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});
// connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>console.log("DataBase connected"));

client.on('messageCreate',(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "https://www.google.com/search?q=short+url+site&oq=short+url+site&aqs=chrome..69i57.4763j0j7&sourceid=chrome&ie=UTF-8",
        });
    }
    message.reply({
        content: "Hi from Bot",
    });
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!");

})

client.login(
    'MTEwMzA0NTAxOTY4Mzc5MDg5OA.GHTQoW.ytKCCrkRsKsGgrMNLi-1-qHseW0SQn0knqA-AY'
    );

