const readline = require('readline');
const { on } = require('process');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = `182 Main St.
  You are standing on Main Street between Church and South Winooski with a flashlight.
  There is a door here. A keypad sits on the handle.
  On the door is a handwritten sign.\n`;
  let answer = await ask(welcomeMessage);

  for (;answer != "read" && answer != "Read";){
    console.log("I don't undrestand what do you want to do!!");
    answer = await ask('What will you do?\n');
  }
  
  
  
  if (answer === 'read' || answer === 'Read') {
    console.log("It's too dark!\n");
    console.log("You can use any item on you.\n");
  }
  
  answer = await ask('Which item will you use? \n');
  
  for (;answer != "Flashlight" && answer != "flashlight";){
    console.log("You don't have this item on you! \n");
    answer = await ask('Choose another item! \n');
  }
  
  if (answer === 'flashlight' || answer === 'Flashlight') {
    console.log("If you want to turn it on type on\n");
  }

  answer = await ask("");

  for (;answer != "on";){
    console.log("I don't understand");
    answer = await ask("If you want to turn it on type on\n");
  }
  if (answer === 'on') {
    console.log('The sign says ' + torch['on']);
  }
  let code = await ask("Type in the code")
  
  for (;code != 1234;){
    console.log("Worng code!!");
    code = await ask("Enter the code again");
  }
  if (code == 1234) {
    console.log("Code accepted \nEntering the building now...");
  }
  


  console.log("ready");
  process.exit();
}
torch = {
  'on' : 'The code is 1234',
}