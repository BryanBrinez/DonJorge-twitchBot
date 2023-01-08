const tmi = require("tmi.js");

const options = {
  options: {
    debug: true,
  },
  identity: {
    username: "donjorgebot",
    password: "oauth:pcnrsgb0h46bn87mlb03df59rojqpp",
  },
  channels: ["xsebasl"],
};

const client = new tmi.client(options);

client.connect();

client.on("connected", (address, port) => {
  //client.action("xsebasl", `pruebas`);
});

client.on("chat", (target, ctx, message, self) => {
  if (self) return;
  console.log(target);
  console.log(ctx);
  console.log(message);

  const commandName = message.toLowerCase().trim();

  if (commandName === "Hola") {
    client.say(target, `Bienvenido ${ctx.username}`);
  }
  
  if (commandName === "!piedra" || commandName === "!papel" || commandName ==="!tijera") {
    const num = numRandom();
    const resul = "";

    client.say(target, `${ctx.username} Mi respuesta es ${num}`);
  }
});

function numRandom() {
  const sides = 3;
  const numR = Math.floor(Math.random() * sides) + 1;
  const resultado = (numR === 1) ? "Tijera" : (numR === 2 ) ? "Piedra" :(numR === 3) ? "Papel" : "Error";
  return resultado
}
