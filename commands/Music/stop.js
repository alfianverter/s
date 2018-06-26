const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

            }

            if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(':x: | Il n\'y a pas de musique !');

                msg.guild.voiceConnection.player.dispatcher.end()

            let queue = client.fonctions.enqueue(msg.guild.id);

                msg.channel.send(`:white_check_mark: | Je me suis stoppé`);

                if (queue.length == 0) return;

                for (var i = queue.length - 1; i >= 0; i--) {
                    queue.splice(i, 1);
                }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["stop"],
    permLevel: 0
  };
exports.help = {
    name : "stop",
    usage: "stop",
    description: "Faire stop la queue et la mise en marche de la musique"
}
