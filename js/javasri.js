

const getColor=()=>{
    const randamNo=Math.floor(Math.random()*16777215);
   
    const randamCode= "#"+randamNo.toString(16);
    document.body.style.backgroundColor=randamCode;
    document.getElementById("color-code").innerHTML=randamCode;
    navigator.clipboard.writeText(randamCode);
}

document.getElementById("btn").addEventListener(
    "click",getColor
)
getColor();