const discord = require("discord.js");

const TOKEN = "NTA1NzYyODg0ODIzOTQxMTQw.DrYqdg.1WzgMOZdiXtV4GEY_vJ9E-eJLJc";
const emojiName0 = "0OA"; //This only works with custom emojis atm
const emojiName1 = "1OA";
const emojiName2 = "2OA";
const emojiName3 = "3OA";
const emojiName4 = "4OA";
const emojiName5 = "5OA";
const emojiName6 = "6OA";
const emojiName7 = "7OA";
const emojiName8 = "8OA";
const emojiName9 = "9OA";
const test1 = new Array('0OA','1OA','2OA','3OA','4OA','5OA','6OA','7OA','8OA','9OA');

const messageContent = "z";

//Create and log in client
const client = new discord.Client();
client.login(TOKEN).then(() => {
    console.log(`Logged in as ${client.user.tag}`);
    registerListeners(),
	registerListeners1()
	registerListeners2()
	registerListeners3();
}).catch(reason => {
    console.log(`Problem while logging in bot: ${reason}`);
    process.exit();
});

//Looks for emoji and registers a message handler
function registerListeners() {
    let emoji = client.emojis.find("name", emojiName0); 

    if (emoji === null) {
        console.log(`Unable to find emoji with name '${emojiName}'`);
        process.exit(0);
        return;
    }
    client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
		
    });

};
function registerListeners1() {
    let emoji1 = client.emojis.find("name", emojiName1); 

    if (emoji1 === null) {
        console.log(`Unable to find emoji1 with name '${emojiName}'`);
        process.exit(0);
        return;
    }
    client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji1).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });

};
function registerListeners2() {
    let emoji2 = client.emojis.find("name", emojiName2); 

    if (emoji2 === null) {
        console.log(`Unable to find emoji1 with name '${emojiName}'`);
        process.exit(0);
        return;
    }
    client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji2).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });

};
function registerListeners3() {
    let emoji3 = client.emojis.find("name", emojiName3); 

    if (emoji3 === null) {
        console.log(`Unable to find emoji1 with name '${emojiName}'`);
        process.exit(0);
        return;
    }
    client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji3).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });

};

//On process exit stuff
const cleanupFunc = async (code) => {
    await client.destroy();
    process.exit(code);
};

process.once("exit", cleanupFunc);
process.once("SIGINT", cleanupFunc);
process.once("SIGTERM", cleanupFunc);
process.once("unhandledRejection", (async (reason, promise) => {
    console.log("Unhandled promise rejection at: Promise", promise, "reason:", reason);
    await cleanupFunc(0);
}));
process.once("uncaughtException", async error => {
    console.log(error.stack);
    await cleanupFunc(0);
});