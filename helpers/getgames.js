const fs = require("fs");

var getgames = (callback) => {
    fs.readFile("games.txt", "utf8", (err, gamesstring) => {
        if(err){
            callback("Could no retrieve gamelist")
        }else{
            callback(undefined, gamesstring)
        }

        return gamesstring;
    });
};

module.exports.getgames = getgames;