var allimage=document.images
console.log(allimage)

for(i=0;i<=9;i++){
    allimage[i].src=`./images/${i}.jpg`
    allimage[i].addEventListener("click",function()
    {
     document.getElementById("bigimage").style.backgroundImage=`url(${this.src})`
    })
}