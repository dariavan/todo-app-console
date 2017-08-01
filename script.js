var myCommandsModule = require('./commands.js');
var fs = require('fs');
var obj;

parseFile()
.then( 
  function(resolve, reject){
    if (process.argv[2] != undefined){
    let choice = process.argv[2];
    switch(choice){
      case "add": {
        myCommandsModule.add(obj);
        break;
      }
      case "list": {
        myCommandsModule.list(obj);
        break;
      }
      case "read": {
        myCommandsModule.read(obj);
        break;
      }
      case "remove": {
        myCommandsModule.remove(obj);
        break;
      }
    }
  }else console.log("It works when you write a command (add, list, read, remove) and some paramethers");
  }
).then(() => console.log("\nSubscribe and wait for updates!"))
.catch(function(error) {
  console.log('Error: ' + error)
})

function parseFile(){
   return new Promise(function(resolve, reject) {
    obj = JSON.parse(fs.readFileSync('todo.json', 'utf8'));
    resolve(obj);
   })
}
