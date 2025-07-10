const notescontainer = document.querySelector(".notes-container");
const createbutton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createbutton.addEventListener("click", ()=> {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");  //This allows users to click inside the <p> and edit its content dynamically.
    img.src = "./assets/trash-can.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})

notescontainer.addEventListener("click",function(e){        
    if(e.target.tagName === "IMG"){          
        e.target.parentElement.remove();
        saveData()
    }
    else if(e.target.tagName === "P"){          
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {   
            nt.onkeyup = function(){   //onkeyup triggers saveData() every time the user types something.
                saveData();
            }
        })
    }
})

function saveData(){    
    localStorage.setItem("notes",notescontainer.innerHTML);  
}
function showTask(){    
    notescontainer.innerHTML = localStorage.getItem("notes");   
}
showTask();

document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){       //It manually inserts a <br> tag, ensuring proper formatting,The cursor moves to the next line properly.
        document.execCommand("insertlinebreak");
        event.preventDefault();
    }
})