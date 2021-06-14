document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // I am declaring a variable that is equal to an element id named create-task-form
  const eventListener = document.getElementById('create-task-form');
  //
  eventListener.addEventListener('submit', (event) => {
    event.preventDefault();
    const listenEvent = document.getElementById("new-task-description").value;
    
    const list = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerHTML = listenEvent;

    list.appendChild(li)

    document.getElementById("new-task-description").value = ""
  
  })
  
});
