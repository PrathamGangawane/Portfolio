

var items = document.querySelectorAll('.content2 a')
items.forEach(function(items){
    items.addEventListener('mousemove',(e)=>{
       
        let x = e.offsetX
        let y = e.offsetY

        let boxHeight = items.clientHeight
        let boxWidth = items.clientWidth
        let moveX = (x - boxWidth/2)
        let moveY = (y - boxHeight/2)

        console.log(moveX)
       items.style.transform = `translateX(${moveX}px) translateY(${moveY}px) `
    })
    items.addEventListener('mouseout',(e)=>{
      

        items.style.transform = ``
     })
   
})
  gsap.from('.middle,.display',{
    delay:2.8,
    duration:1,
    ease:Power4.easeOut,
    y:430
  })     

var element = document.querySelector('.content1')
element.addEventListener("mousemove",(e)=>{
let y = e.offsetY;
let x = e.offsetX;
let boxHeight = element.clientHeight;
let boxWidth = element.clientWidth;
let moveX = (x - boxWidth/2)
let moveY = (y - boxHeight/2)
element.style.transform =  `translateX(${moveX}px) translateY(${moveY}px)`

})
element.addEventListener('mouseout',(e)=>{
   element.style.transform = ""
})
function textAnimation(){
    gsap.from('.wrapper h1',{
        duration:1,
        opacity:0,
        stagger:0.8,
       
    })
    setTimeout(wrapper,2700)
}

function wrapper(){
    gsap.to('.wrapper',{
        duration:1,
        height:"0%"
    
    })
    setTimeout(() => {
        gsap.to('.frame',{
            display:'none'
        })
        gsap.to('.wrapper h1',{
           
            opacity:0,
           
        })
    },1500); 
}
textAnimation() 

function hoverMe(){
    var flag = 0
var hover = document.querySelector('.hover')
hover.addEventListener('mousemove',function(e){
    gsap.to('.small',{
        display:"block",
        duration:0.5,
        opacity:1,
        top:"-10%",
        height:"300px",
        width:"300px"

    })
  
})

hover.addEventListener('mouseout',function(){
    gsap.to('.small',{
        duration:0.5,
        top:"-120%",
        height:"0px",
        width:"0px"
  
    })
    var hover = document.querySelector('.hover')
    hover.style.transform = ""

    flag = 1

    if(flag = 1){
       setTimeout(function(e){
     gsap.to('.small',{
        top:"100%",
        height:"0px",
        width:"0px",
        opacity:0,
        display:"none"
     })
       },380)
    }
    
})

}
hoverMe()
function textA(){
  gsap.to('.section div h3',{
    opacity:1,
    top:"0%",
    scrollTrigger:{
  scroller:"body",
  trigger:'.section',
  start:"top 90%",
  end:"bottom 90%",
  
duration:1,
 scrub:5,
 ease:Elastic.easeOut

    },
   
  })
  gsap.from('.section p',{
    opacity:0,
    top:"100%",
    scrollTrigger:{
        scroller:"body",
        trigger:'.page2',
        start:"top 100%",
        end:"bottom 100%",
      
       scrub:0.1,
      
          },
  })
}
textA()

function cursor(){
let cursor = document.querySelector('.cursor')
var column = document.querySelectorAll('.column')
var projects = document.querySelector('.projects')
column.forEach(function(column){
    column.addEventListener("mouseenter",function(dets){
        column.addEventListener("mousemove",function(e){
            gsap.to('.cursor',{
             duration:2,
             scale:1,
             display:"block",

                left:e.x-(150),
                top:e.y-(150),
                scale:1
            })
        })
     
      var image = column.getAttribute('data-image')
     cursor.style.backgroundImage = `url(${image})`

        
    })
    projects.addEventListener("mouseleave",function(dets){
        gsap.to('.cursor',{
          display:"none",
           scale:0
        })
        
    })
    
})

}
function hoverme(){
var hover = document.querySelector('.hover')
var text = document.querySelector('.outer')
const activat = (event)=>{
let bounding = hover.getBoundingClientRect()
const hoverStrenth = 40;
const textStrenght = 80;
var newX = ((event.clientX - bounding.left)/hover.offsetWidth) - 0.5
var newY = ((event.clientY - bounding.top)/hover.offsetHeight) - 0.5
gsap.to(hover,{
    duration:1,
    x:newX * hoverStrenth,
    y:newY * hoverStrenth,
    ease:Power4.easeOut
    
})
gsap.to(text,{
    duration:1,
    x:newX * textStrenght,
    y:newY * textStrenght,
    ease:Power4.easeOut
    
})
}
const reset = (event)=>{
    gsap.to(hover,{
        duration:1,
        x:10,
        y:10,
       
        
    })
    gsap.to(text,{
        duration:1,
        x:0,
        y:0,
        ease:Elastic.easeOut
    })
    
}
hover.addEventListener('mousemove',activat)
hover.addEventListener('mouseleave',reset)
}
hoverme()

function projects(){
  var projects = document.querySelector('.projects')
  projects.addEventListener('mousemove',function(elem){
    let cursor = document.querySelector('.cursor')
   gsap.to(cursor,{
    scale:1,
    x:elem.x-(700),
    y:elem.y-(300),
   

   })
  
  })
  projects.addEventListener('mouseleave',function(elem){
    let cursor = document.querySelector('.cursor')
   gsap.to(cursor,{
   
    scale:0,
    duration:0.5,
  

   })
   
  })
   var star = document.querySelector('.star')
   star.addEventListener('mouseenter',(event)=>{
     gsap.to('.scroller',{
        marginTop:"-160px"
     })
     
   })
   star.addEventListener('mouseleave',(event)=>{
    gsap.to('.scroller',{
       marginTop:"50px"
    })
    
  })
}
projects()
function view(){
    var ball = document.querySelector('.ball')

const activat = (event)=>{
let bounding = ball.getBoundingClientRect()
const hoverStrenth = 100;
const textStrenght = 400;
var newX = ((event.clientX - bounding.left)/ball.offsetWidth) - 0.5
var newY = ((event.clientY - bounding.top)/ball.offsetHeight) - 0.5
gsap.to(ball,{
    duration:1,
    x:newX * hoverStrenth,
    y:newY * hoverStrenth,
    ease:Power4.easeOut
    
})

}
const reset = (event)=>{
    gsap.to(ball,{
        duration:1,
        x:10,
        y:10,
       
        
    })
 
    
}
ball.addEventListener('mousemove',activat)
ball.addEventListener('mouseleave',reset)
}
view()
function columnHover(){
    var star1 = document.querySelector('#star1')
    // fist function calling on event back functions
    star1.addEventListener('mouseenter',()=>{
      gsap.to('.column1 a',{
        color:"grey",
        duration:0.5,
        marginLeft:"-10px"
      })
    })
    star1.addEventListener('mouseleave',()=>{
        gsap.to('.column1 a',{
          color:"black",
          duration:0.5,
          marginLeft:"0px"
        })
      })
      var star2 = document.querySelector('#star2')
      star2.addEventListener("mouseenter",()=>{
        gsap.to('.column2 a',{
            color:"grey",
            marginLeft:"-10px",
            duration:0.5
        })
        
      })
      star2.addEventListener("mouseleave",()=>{
        gsap.to('.column2 a',{
            color:"black",
            marginLeft:"0px",
            duration:0.5
        })
        
      })
      
      
}
columnHover()
function lastPage(){
 gsap.to('.lastFrame',{
    height:"0%",
    top:"-15%",
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".page3",
        start:"top 80%",
        end:"bottom 10%",
     
  scrub:0.1,
    },
   
 })

 
}
lastPage()
    function get(){
        const magneto  = document.querySelector('.magnet')
        const magnetospan = document.querySelector('.text')
    
        
        const activate = (event)=>{
           console.log("enternig");
           
        let bounding = magneto.getBoundingClientRect()
        const magnetostrenth = 100;
        const magnetoText = 80;
        const newX = ((event.clientX - bounding.left)/magneto.offsetWidth) - 0.5;
        const newY = ((event.clientY - bounding.top)/magneto.offsetHeight) - 0.5;
        // we need calculate movement of positions of websites
        gsap.to(magneto,{
            duration:1,
            x:newX * magnetostrenth,
            y:newY * magnetostrenth,
            ease:Power4.easeOut
        })
        gsap.to(magnetospan,{
            duration:1,
            x:newX * magnetoText,
            y:newY * magnetoText,
            ease:Power4.easeOut
        })
        }
        const resetmagneto = (event)=>{
            gsap.to(magneto,{
                duration:1,
                x:10,
                y:10,
                
            })
            gsap.to(magnetospan,{
                duration:1,
                x:0,
                y:0,
                ease:Elastic.easeOut
            })
        }
        // addeventlistner to calling functions 
        magneto.addEventListener('mousemove',activate)
        magneto.addEventListener('mouseleave',resetmagneto)
    }
    get()
    function email(){
        const magneto  = document.querySelector('.email')
        const magnetospan = document.querySelector('.textEmail')
    
        
        const activate = (event)=>{
           console.log("enternig");
           
        let bounding = magneto.getBoundingClientRect()
        const magnetostrenth = 40;
        const magnetoText = 80;
        const newX = ((event.clientX - bounding.left)/magneto.offsetWidth) - 0.5;
        const newY = ((event.clientY - bounding.top)/magneto.offsetHeight) - 0.5;
        // we need calculate movement of positions of websites
        gsap.to(magneto,{
            duration:1,
            x:newX * magnetostrenth,
            y:newY * magnetostrenth,
            ease:Power4.easeOut
        })
        gsap.to(magnetospan,{
            duration:1,
            x:newX * magnetoText,
            y:newY * magnetoText,
            ease:Power4.easeOut
        })
        }
        const resetmagneto = (event)=>{
            gsap.to(magneto,{
                duration:1,
                x:10,
                y:10,
                
            })
            gsap.to(magnetospan,{
                duration:1,
                x:0,
                y:0,
                ease:Elastic.easeOut
            })
        }
        // addeventlistner to calling functions 
        magneto.addEventListener('mousemove',activate)
        magneto.addEventListener('mouseleave',resetmagneto)
    }
    email()
    function contact(){
        const magneto  = document.querySelector('.contact')
        const magnetospan = document.querySelector('.contactN')
    
        
        const activate = (event)=>{
           console.log("enternig");
           
        let bounding = magneto.getBoundingClientRect()
        const magnetostrenth = 40;
        const magnetoText = 60;
        const newX = ((event.clientX - bounding.left)/magneto.offsetWidth) - 0.5;
        const newY = ((event.clientY - bounding.top)/magneto.offsetHeight) - 0.5;
        // we need calculate movement of positions of websites
        gsap.to(magneto,{
            duration:1,
            x:newX * magnetostrenth,
            y:newY * magnetostrenth,
            ease:Power4.easeOut
        })
        gsap.to(magnetospan,{
            duration:1,
            x:newX * magnetoText,
            y:newY * magnetoText,
            ease:Power4.easeOut
        })
        }
        const resetmagneto = (event)=>{
            gsap.to(magneto,{
                duration:1,
                x:10,
                y:10,
                
            })
            gsap.to(magnetospan,{
                duration:1,
                x:0,
                y:0,
                ease:Elastic.easeOut
            })
        }
        // addeventlistner to calling functions 
        magneto.addEventListener('mousemove',activate)
        magneto.addEventListener('mouseleave',resetmagneto)
    }
    contact()

    function hamburger(){
      gsap.to('.navigationBar',{
        height:"10vh",
        width:"10vh",
        left:"93%",
        opacity:1,
        duration:0.5,
        scrollTrigger:{
  scroller:"body",
  trigger:".page2",
  start:"top 70%",
  end:" bottom 80%",

  scrub:0.5,
        },
        ease:Power4.easeOut
      })
    }
    hamburger()
    function cliking(){
   var hamburger = document.querySelector('.navigationBar')
   var icon = `<i class="ri-menu-3-fill"></i>`
   hamburger.addEventListener('click',()=>{
    let flag = 1
 var menu = document.querySelector('.menuBar');
    gsap.to('.menuBar',{
        duration:0.5,
        left:"80vw",
        borderRadius:"0%",

    })
 })
 let tag = document.querySelector('.tag')
 document.querySelector('.menuBar').addEventListener("mouseleave",function(){
    gsap.to('.menuBar',{
        duration:0.5,
        left:"100%",
        borderRadius:"50%",

    })
 })
    }
    cliking()