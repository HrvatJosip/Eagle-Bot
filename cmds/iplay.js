const Discord = require("discord.js");
const getgames = require("./../helpers/getgames");

module.exports.run = async(bot, message, args) => {
    let game = args.join(" ").toLowerCase();
    getgames.getgames(async (err, gameliststring) => {
        if(err){
            console.log(err);
        }else{
            let gamelist = gameliststring.toLowerCase().split(",");
            if(!gamelist.includes(game)) return message.reply(`Not currently in out games list. Use .games to \
see available options or DM <@267017155441065985> to request to add it`);
            let role = message.guild.roles.find(`name`, game);
            if(!role) return message.channel.send("Something went wrong");
            let rmember = message.guild.member(message.author);
            if(rmember.roles.has(role.id)) return message.reply("You already play that game");
            await(rmember.addRole(role));

            return message.reply(`You now play ${game}. Welcome!`);

        }
    });
}

module.exports.help = {
    name: "iplay"
}