const Discord = require("discord.js");
const getgames = require("./../helpers/getgames");

module.exports.run = async(bot, message, args) => {
    getgames.getgames(async (err, gameliststring) => {
        var gamelistmsg = "";
        let gamelist = gameliststring.split(",");
        gamelist.forEach((g, i) => {
            gamelistmsg += `-  ${String(g)}\n`;
        });
        let embed = new Discord.RichEmbed()
                    .setDescription("Our Games List")
                    .addField("Games", gamelistmsg);
        message.channel.send(embed);
        return;
    });
    
   
}

module.exports.help = {
    name: "games"
}