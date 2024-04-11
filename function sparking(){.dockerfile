function sparking(){
    let body = document.querySelector("body")
    body.addEventListener("click",function(elment){
    let spark = document.createElement('div')
    spark.classList.add("spark")
    spark.style.top = element.clientX - body.offsetLeft+"px";
    spark.style.left = element.clientY - body.offsetTop+"px";
    
    setTimeout(function(){
        spark.remove()
    },1000)
    })
}

sparking(element)
//