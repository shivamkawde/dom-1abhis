let arr=document.querySelectorAll(".like")

for(let i=0;i<arr.length;i++){
arr[i].addEventListener("click",(e)=>{
    e.currentTarget.innerHTML="favorite"
    
})
}


 let parent=document.querySelectorAll(".divcls")
 console.log(parent)
for(i=0;i<parent.length;i++)
{
    parent[i].addEventListener("click",(e)=>{
        console.log(e.target.classList)
        // if(e.target.classList[3]=="kawde")
            if(e.target.classList[2]=="delete")        
            e.currentTarget.remove();

       // document.querySelector(".divcls").remove()

    })
    
}
