const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot =  new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("Services", {type: "STREAMING"});

    //bot.user.setGame("With Staff");

});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}services`){
        let sicon = message.guild.iconURL;
        let servicesEmbed = new Discord.RichEmbed()
        .addField("Our Services:", "Here you go. Enjoy our quality production:")
        .setColor("#27ae60")
        .setThumbnail(sicon)
        .addField("Graphics:", `Starting from 4.89$. `)
        .addField("Video Editing:", `Starting from 9.90$.`)
        .addField("Minecraft Setup", `Starting from 6$.`)
        .addField("Java Development", `Starting from 12.6$.`)
        .addField("Web Development", `Starting from 20.67$.`)
        .addField("Web Design", `Starting from 9.69$.`)
        .addField("Illustrations", `Starting from 5$.`)
        .addField("Discord Bot", `Starting from 9.43$.`)
        .addField("Advisor", `Starting from 5$.`)
        .addField("System Administration", `Starting from 10$.`)
        .addField("Tagging To", `@everyone`)
        .addField("Website:", `http://outdatedinc.services`)
        .addField("Note:", `Web development includes Backend development while Web Design is just front end.`)

        message.delete().catch(O_o=> {});
        message.channel.send(servicesEmbed);
        return;
    }

    if(cmd === `${prefix}rules`){
        let sicon = message.guild.iconURL;
        let rulesEmbed = new Discord.RichEmbed()
        .addField("Ourdated Inc. Services rules:", "Remember Breaking rules is an offensive act and you will be punished from the management.")
        .setColor("#c0392b")
        .setThumbnail(sicon)
        .addField("Chatting Rules", `Follow these rules while you chat.`)
        .addField("1.", `Do not send any links to scam websites, pornography websites, discord invite links.`)
        .addField("2.", `Do not spam in any way possible.`)
        .addField("3.", `Do not ask for a role, money and promotions.`)
        .addField("4.", `Do not post inappropriate messages in a channel, ex: chat in typography.`)
        .addField("5.", `Do not whine over not winning a giveaway.`)
        .addField("6.", `Do not promote or use any form of glitches, hacks or bugs.`)
        .addField("7.", `Do not dm advertise.`)
        .addField("8.", `Advertising in any possible is prohibited.`)
        .addField("9.", `Selling or promoting other services is prohibited and vice-versa.`)
        .addField("10.", `Disturbing any honourable members of our community will result to a punishment.`)
        .addField("Tagging To", `@everyone`)
        .addField("Website:", `http://outdatedinc.services`)
        .addField("Note:", `Management can also punish you for other reasons if they think so and vice-versa.`)

        message.delete().catch(O_o=> {});
        message.channel.send(rulesEmbed);
        return;
    }
    if(cmd === `${prefix}help`){
        let sicon = message.guild.iconURL;
        let helpEmbed = new Discord.RichEmbed()
        .setColor("#e67e22")
        .setThumbnail(sicon)
        .setFooter("Outdated Inc. Bot v1 | 2018 (c) Made by @Ribu#9301")
        .addField("Recruting Now:", `Contact Managemnet`)
        .addField("About:", `Hello i am a private bot serving people on Outdated Inc. Services. I have a lot of commands and a lot of fun in me.I am the official bot for Outdated Services Inc.I have been created to help users and management team.My aim is to make discord a better place.`)
        .addField("Commands:", `10`, true)
        .addField("Author", `Suchismit Ghosh or Ribu`, true)
        .addField("Main command:", `o.help`, true)
        .addField("Prefix:", `o.`, true)
        .addField("Management:", `2`, true)
        .addField("My language", `JavaScript`, true)
        .addField("Website:", `http://outdatedinc.services`)

        message.delete().catch(O_o=> {});
        message.channel.send(helpEmbed);
        return;
    }

        if(cmd === `${prefix}commisions`){
        let sicon = message.guild.iconURL;
        let commisionsEmbed = new Discord.RichEmbed()
        .addField("Ourdated Inc. Services Commisions:", "Official commisions for staff.")
        .setColor("#8e44ad")
        .setThumbnail(sicon)
        .addField("Commisions", `Money we pay for our staff.`)
        .addField("Graphics Designer: ", `84.2%       +1.2%`)
        .addField("Video Editor: ", `82.1%       -1.1%`)
        .addField("Minecraft Configurator: ", `81.9%       -1%`)
        .addField("Java Developer: ", `85%       +1.7%`)
        .addField("Web Developer: ", `86%       +1.4%`)
        .addField("Web Designer: ", `83%       -0.7%`)
        .addField("Illastrators: ", `85%       -1%`)
        .addField("Bot Developer: ", `85%       -1.2%`)
        .addField("Advisor: ", `82%       -1.8%`)
        .addField("System-Admin: ", `84%       +1.9%`)
        .addField("Tagging To", `@everyone`)
        .addField("Website:", `http://outdatedinc.services`)
        .addField("Note:", `This chart changes every week. Staff members will be payed every Sunday.`)

        message.delete().catch(O_o=> {});
        message.channel.send(commisionsEmbed);
        return;
    }

    if(cmd === `${prefix}order`){
      let oUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!oUser) return message.channel.send("Please Specify A Management User");
      let reason = args.join("").slice(21);

      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Order")
      .setColor("#c0392b")
      .addField("Order Tagged To", `${oUser} with ID: ${oUser.id}`)
      .addField("Reported By:", `${message.author} with ID ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Order Of", reason);

      let reportschannel = message.guild.channels.find(`name`, "developers")
      if(!reportschannel) return message.channel.send("Failed");

      message.delete().catch(O_o=> {});
      reportschannel.send(reportEmbed);
      return;
    }

    if(cmd === `${prefix}take94743230962004`){
        let uUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!uUser) return message.channel.send("Failed To Process Order: USER NOT FOUND");
        let order = args.join("").slice(21);


        let orderEmbed = new Discord.RichEmbed()
        .setDescription("Order Taken")
        .setColor("#c0392b")
        .addField("Expected Time", "Unknown")
        .addField("Order Of", order)
        .addField("Order Taken By:",`${uUser} With ID: ${uUser.id}`)
        .addField("Regards", "Orthem Web Development & Services")
        .addField("Orthem Bot", "Taken Order | Version 1.2");

        let orderchannel = message.guild.channels.find(`name`, "orders")
        if(!orderchannel) return message.channel.send("Failed");

        message.delete().catch(O_o=> {});
        orderchannel.send(orderEmbed);
        return;
    }

    if(cmd === `${prefix}m`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Please Specify A User");
        let reason = args.join("").slice(21);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Urgent Tag")
        .setColor("#c0392b")
        .addField("Channel", message.channel)
        .addField("Message Has Been Tagged", "--tag--m")
        .addField("Time", message.createdAt)
        .addField("Note", reason);

        let reportschannel = message.guild.channels.find(`name`, "developers")
        if(!reportschannel) return message.channel.send("Failed");

        message.delete().catch(O_o=> {});
        reportschannel.send(reportEmbed);
        return message.channel.send(reportEmbed);
    }



    if(cmd === `${prefix}info`){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server:")
        .setColor("#c0392b")
        .setThumbnail(sicon)
        .addField("Server Name:", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("Total Member", message.guild.memberCount);

        return message.channel.send(serverembed);
    }

    if(cmd == `${prefix}bot`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#c0392b")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt);

        return message.channel.send(botembed);
    }

});

bot.login(botconfig.token)
