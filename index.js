import inquirer from 'inquirer'

let printRoom=[]
const createRoom = () => console.log('.....................................')

//const prompt = inquirer.createPromptModule()
const questions = [

  
  {
      type: 'list',
      name: 'oneoffice',
      message: 'select rooms',
      choices: ['create_one_room', 'create_multiple_room']
  },
    
    {

        type: 'checkbox', 
        name: 'rooms', 
        message: 'roomColor',
        choices: ["Orange","Brown","Blue","Black",],
        //when: (answers) => console.log(answers.cp1, 'wewewe'),
        // choices: ["Orange","Brown","Blue","Black",],
    },
    {
        type:"list",
        
        name:"persons",
        message:"select you status",
        choices:["staff","fellow"]
    },
    {
        input:"type",
        name:"yourname",
        message:"plz whrite yoy name"
    },
    {

        type: 'checkbox', 
        name: 'roomtype', 
        message: 'room_Colorrr',
        choices: ["Orange","Brown","Blue","Black", ],
        
        //when: (answers) => console.log(answers.cp1, 'wewewe'),
        // choices: ["Orange","Brown","Blue","Black",],
    },
  
   
]


inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers)
    switch(answers.oneoffice){
        case "create_one_room":
            console.log(`An office called ${answers.rooms} has been successfully created!`)
            createRoom()
            break;
        case "create_multiple_room":
            console.log(
            `An office called ${answers.rooms} has been successfully created!
            `)
        createRoom()
        break;
    }
    switch(answers.persons){
        case "staff":
            console.log(
          `Staff ${answers.yourname} has been successfully added.
            ${answers.yourname} has been allocated the office ${answers.roomtype}
            `)
      
            createRoom()
            break;
            
        case "fellow":
            console.log(
         `fellow ${answers.yourname} has been successfully added.
            ${answers.yourname}  has been allocated the office ${answers.roomtype}`
            )
            createRoom()
            break;
    }
   printRoom.push(answers.yourname,
    answers.rooms,answers.roomtype)+
   console.log(printRoom)

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })


//  module.exports={
//     createRoom,
//     printRoom
//  }