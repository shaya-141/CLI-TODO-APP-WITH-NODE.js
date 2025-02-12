const fs = require('fs')

let action = process.argv[2]
let value = process.argv[3]

const filePath = 'task.json'

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]')
}

if (action == "add") {
    addTask(value)

} else if (action == "list") {

    ListTask()

} else if (action == "remove") {
   
    
    removeTask(value)
    

} else if (action == "done") {

    done(value)

}else if (action == "help") {
    console.log(`
     Available Commands:
    - add "Task Description"  ➝ Add a new task
    - list                   ➝ Show all tasks
    - remove Task_ID         ➝ Remove a task
    - done Task_ID           ➝ Mark a task as completed
    `);
}
else {
    console.log("❌ Invalid command! Try: add, list, remove, done");
}



function addTask(value) {
   

    let task = fs.readFileSync(filePath).toString()
    task = JSON.parse(task)

    const newTask = {
        id: task.length + 1,
        todo: value,
        status: 'pending'
    }
    task.push(newTask)
    fs.writeFileSync(filePath, JSON.stringify(task, null, 4))

    console.log(`✅ Task "${value}" added successfully!`);
    return

}

function ListTask() {

  

    let task = fs.readFileSync(filePath).toString()
    task = JSON.parse(task)
    if (task.length === 0) {
        console.log("📭 No tasks found!");
        return;
    }

    console.log("\n📌 Your To-Do List:\n");
    
    task.forEach((t,i) => {
        console.log(`[${t.id} ${t.todo} ${t.status === 'pending' ? '⏳ Pending' : '✅ Completed'}]`)
    });

    return


}

function removeTask(value){
    

    let task = fs.readFileSync(filePath).toString()
    task = JSON.parse(task)
    
    const index = task.findIndex(t => t.id === Number(value));


    if (index !== -1) {
        task.splice(index,1)
        task.forEach((t,i) => {
            t.id = i + 1
        });
        console.log(`🗑️ Task ${value} removed successfully!`);
        fs.writeFileSync(filePath, JSON.stringify(task, null, 4))
    }
    else{
        console.log("❌ No task found with this ID!");
    }
    
    return


}

function done(value){
    
    let task = fs.readFileSync(filePath).toString()
    task = JSON.parse(task)
    const index = task.findIndex(t => t.id === Number(value));
    if(index != -1){
        task[index].status = 'completed'
        fs.writeFileSync(filePath,JSON.stringify(task,null,4))
        console.log(`your task is done`);
        
    }
    else{
        console.log(`plz enter valid index or type list to see`);
        
    }
    return
}

