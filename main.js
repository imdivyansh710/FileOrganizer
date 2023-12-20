//entry point of my command line
let helpFunc = require("./commands/help");
let intputArr = process.argv.slice(2);
let command = intputArr[0];
let path = intputArr[1];
switch (command) {
    case 'tree':
        //call tree function
        console.log('tree function called and executed successfully on path '+path);
        break;

    case 'help':
        // call help function
        //console.log('help function called and executed successfully');
        helpFunc.help();
        break;

    case 'organize':
        // call organize function
        console.log('organize function called and executed successfully on path '+path);
        break;

    default:
        console.log("Command not recognized :/");
}