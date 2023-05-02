const { REST, Routes } =require('discord.js');

const commands = [
  {
    name: "create",
    description: "Create a new URL",
  },
];
const rest = new REST({ version: '10' }).setToken('MTEwMzA0NTAxOTY4Mzc5MDg5OA.GHTQoW.ytKCCrkRsKsGgrMNLi-1-qHseW0SQn0knqA-AY');

(async()=>{ try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1103045019683790898'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
  }
)();