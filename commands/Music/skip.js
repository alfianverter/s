const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

            if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(':x: | Il n\'y a pas de musique !');

                msg.guild.voiceConnection.player.dispatcher.end()
                msg.channel.send(':white_check_mark: | Changement de la musique en cours...');
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["s"],
    permLevel: 0
  };
exports.help = {
    name : "skip",
    usage: "skip",
    description: "Passer à la musique suivante"
}
