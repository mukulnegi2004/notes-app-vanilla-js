const notescontainer = document.querySelector(".notes-container");
const createbutton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createbutton.addEventListener("click", ()=> {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true"); 
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
            nt.onkeyup = function(){  
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
    if(event.key === "Enter"){     
        document.execCommand("insertlinebreak");
        event.preventDefault();
    }
})
