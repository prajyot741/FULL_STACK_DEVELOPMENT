const readline=require("readline")
const eventEmmiter=require("events");
const event=new eventEmmiter();
let rem,name,task;
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function repeat(){
     rl.question("how many task you want to add ",(task1)=>{
        console.log(task1);
        task=task1;
    if(task>0){
        rl.question("Enter the task description: ",(name1)=>{
        console.log(name1);
        name=name1;
    rl.question("Enter the reminder for the task: ",(rem1)=>{
        console.log(Number.parseInt(rem1))
        rem=rem1;
        event.emit("reminder");
    })
    })
    task--;
    

    event.on("reminder",(rem2)=>{
        setTimeout((rem)=>{
        console.log("The task is: "+name)
        console.log("The Time is Over")
        }  ,rem);
    })
    

}

else{
    return 0
}



repeat()
    })
}