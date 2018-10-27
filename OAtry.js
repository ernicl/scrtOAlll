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

const messageContent = "zizi";

//Create and log in client
const client = new discord.Client();
client.login(TOKEN).then(() => {
    console.log(`Logged in as ${client.user.tag}`);
    registerListeners();
}).catch(reason => {
    console.log(`Problem while logging in bot: ${reason}`);
    process.exit();
});

//Looks for emoji and registers a message handler
function registerListeners() {
    let emoji = client.emojis.find("name", emojiName0);
	let emoji1 = client.emojis.find("name", emojiName1);
	let emoji2 = client.emojis.find("name", emojiName2);
	let emoji3 = client.emojis.find("name", emojiName3);
	let emoji4 = client.emojis.find("name", emojiName4);
	let emoji5 = client.emojis.find("name", emojiName5);
	let emoji6 = client.emojis.find("name", emojiName6);
	let emoji7 = client.emojis.find("name", emojiName7);
	let emoji8 = client.emojis.find("name", emojiName8);
	let emoji9 = client.emojis.find("name", emojiName9);

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
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji1).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji2).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji3).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji4).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji5).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji6).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji7).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji8).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
	client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji9).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
}

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