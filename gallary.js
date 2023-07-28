var allimagetags=document.images
console.log(allimagetags)

for(i=0;i<=9;i++){
    allimagetags[i].src=`./images/${i}.jpg`
    allimagetags[i].addEventListener("click",function()
    {
      document.getElementById("bigimagecontainer").style.display="flex"
      document.getElementById("bigimage").style.backgroundImage=`url(${this.src})`
    })
}

function closewindow(){
    document.getElementById("bigimagecontainer").style.display="none"
}