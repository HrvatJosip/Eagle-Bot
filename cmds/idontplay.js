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
see available options`);
            let role = message.guild.roles.find(`name`, game);
            if(!role) return message.channel.send("Something went wrong");
            let rmember = message.guild.member(message.author);
            if(!rmember.roles.has(role.id)) return message.reply("You aren't playing that game");
            await(rmember.removeRole(role));

            return message.reply(`You stopped playing ${game}. You will be missed ;-;!`);
        }
    });
}

module.exports.help = {
    name: "idontplay"
}