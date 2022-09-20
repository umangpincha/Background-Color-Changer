let btn = document.getElementById("button");
let area = document.getElementById("canvas")

btn.addEventListener("click" , () => {
        let val = "0123456789ABCDEF";
        let cons = "#";
        for(let i=0;i<6;i++){
            cons = cons + val[Math.floor(Math.random() * 16)];
        }
        area.style.backgroundColor = cons;
})