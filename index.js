
function newtask(){
    const text = document.getElementById("new")
    const ask = prompt("Enter the description of task");
    const para = document.createElement("label");
    const broke =document.createElement("br")
    var checkbox = document.createElement("INPUT");
    checkbox.type="checkbox"
    para.innerText = ask;
    text.appendChild(para);
    text.appendChild(checkbox)
    text.appendChild(broke)
    text.appendChild(broke)
}

