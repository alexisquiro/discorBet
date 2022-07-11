const { Client, Intents,MessageEmbed } = require('discord.js');

const Binance = require('binance-api-node').default
const api_binance ="tItrNWd7lnFflfZ1x2knUHpiOczypID7QxBanFATkmAy2qH5vhwwP9qUPKIwC6MT";
const api_private= "OorKgPbwd1TonWmo31mxSNwQXVV3ycPJaUA1iN0AUrj6A65y9X0dKAw8TINZWD7o";

const binance = Binance({
	apiKey: api_binance,
	apiSecret: api_private,
  })


  // quiero que me traiga el historia de depositos
  const  deposit = async()=>{  return await binance.depositHistory()} ;


// Create a new client instance
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const prefix = "/"

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
})


client.on("messageCreate", async (msg)=>{
	console.log(msg);
	if (msg.author.bot) return;
	if(!msg.content.startsWith(prefix))return;
	const arg = msg.content.slice(prefix.length).split(/ +/);
    const command = arg.shift().toLowerCase();


	if(command === 'qr'){
		const me = new MessageEmbed()
	.addFields(
		{name: 'Pago', value:"10 usdt", inline:true},
	)
		msg.reply({embeds:[me],files:['QRPago.jpeg']});
	}

	if(command === 'verificar'){
		let code = msg.content.slice(prefix.length).split(" ")[1];
		

		// aqui quiero imprimir el historial

		
	} 
	if (command== "binancePing"){


	}
	
	
})




client.login('OTkzMzE5ODQ4NTQzMjcyOTkx.Gqi-8O.LrPP5JO6KiPJ-Dv4W0rzpyt9JCnVkFPshNEvpE');