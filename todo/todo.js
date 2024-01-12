let input = prompt("What would you like to do?..");
const todos = ["collect eggs", "work daily"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*******");
    for (i = 0; i <= todos.length; i++) {
      console.log(`${i}. ${todos[i]}`);
    }
    console.log("*******");
  } else if (input === "new") {
    const newtodo = prompt("Enter a new task: ");
    todos.push(newtodo);
    console.log(`${newtodo} added to the list`);
  } else if (input == "delete") {
    const index = parseInt(prompt("Enter an index to delete"));
    if (!isNaN(index) && index >= 0 && index < todos.length) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted: ${deleted[0]}`);
    } else {
      console.log("Invalid index");
    }
  }

  input = prompt("what would you like to do?..");
}
console.log("Ok Quit It");
