var elem = document.querySelector(".hello");
var txt = elem.textContent;
console.log(txt);

let txtArr = txt.split("");
elem.textContent = "";
for(let i=0; i<txtArr.length; i++){
    elem.innerHTML += "<span>"+ txtArr[i] + "</span>";
}

let timer = setInterval(animChar, 50);

let id = 0;
function animChar(){
    let sp = document.querySelectorAll("span")[id];
    //console.log(sp);
    sp.className = "fade";
    id++;
    if(id === txtArr.length){
        clearInterval(timer);
    }
}

