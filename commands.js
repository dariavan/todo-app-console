var fs = require('fs');
// filter, forEach , map 
let title = process.argv[3];
let body = process.argv[4];

var commands = {
    add: function (obj) {    
        let lastElement = obj.length;
        let isUnique = true;
        if (title != undefined && body != undefined){
        for (let i=0; i < obj.length; i++){
           if (obj[i].title == process.argv[3]){ 
                console.log("Not unique title. C'mon do smth with it!");
                isUnique = false;
                process.exit();
              } 
            }    
            if (isUnique){
                obj[lastElement] = {
                title: process.argv[3],
                body: process.argv[4]
                };
                 console.log("You've added: ");
                 console.log(`Title: ${obj[lastElement].title}.  Body: ${obj[lastElement].body}`);
                 fs.writeFile("todo.json", JSON.stringify(obj, null, '\t'));
             }
                  
     }else {
         console.log("Problems with adding! No title and body found")
     }      
     },  

    list: function (obj) {         
     console.log("All you have to do: ");
     for (let i=0; i < obj.length; i++){
       console.log(`Title: ${obj[i].title}. Body: ${obj[i].body}`);
       }
     },
    read:function (obj) { 
     if (title != undefined){
      let isFound = false;
      for (let i=0; i < obj.length; i++){          
          if (obj[i].title == title){
              console.log(`Title: ${obj[i].title}.  Body: ${obj[i].body}`);
              isFound = true;
          }
            if (i === obj.length-1 && isFound === false){
              console.log("No task found")
          }
      }} else {
          console.log("Problem with reading. No title found")
      }
     },
    remove:function (obj) { 
       if (title != undefined){
        let isFound = false;
        for (let i=0; i < obj.length; i++){          
            if (obj[i].title == title){
                console.log("Removed: ");
                console.log(`Title: ${obj[i].title}.  Body: ${obj[i].body}`);
                isFound = true;
                obj.splice(i,1);
            }
            if(i == obj.length-1 && isFound == false){
                console.log("Impossible to remove. No task found")
            }
            }
            fs.writeFile("todo.json", JSON.stringify(obj));
     } else{
         console.log("Promlem with removing. No title found");}
     }
    };

module.exports = commands;