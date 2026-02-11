
const strt = document.getElementById("start");
const stp = document.getElementById("stop");
const rst = document.getElementById("reset");
let txt = document.getElementById("txt");

let count = 25;
let interval = null ;
 
txt.innerText = count ;


strt.addEventListener("click",()=>{
    if(interval !== null)return;
 interval = setInterval(()=>{
        count --; 
        txt.innerText = count ;

        if(count <= 0){
    clearInterval(interval);
    interval = null
  }
    },1000)

    
})
stp.addEventListener("click",()=>{
    clearInterval(interval);
    interval = null ;

})
rst.addEventListener("click",()=>{
   clearInterval(interval);
   interval = null ;
   count = 25 ;
   txt.innerText = count ;
   
})
   


