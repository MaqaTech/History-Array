


var tab_content = document.querySelector(".tab-content")


const array = [
    {
        name: "Ferid",
        text:'Zarafat Mawini'
    },


    {
        name2: "Maqa",
        text2: 'HTML SCSS Master'
    },


    {
        name3: "Revan",
        text3:'ChatGBT Master Ustasidi bu adam onun'
    }



]











var divone = document.createElement('div')
divone.classList.add('vision-text')
tab_content.appendChild(divone);



var divtwo = document.createElement('div')
divtwo.classList.add('goals-text')
tab_content.appendChild(divtwo);



var divtree = document.createElement('div')
 divtree.classList.add('history-text')
 tab_content.appendChild(divtree);

 
 array.forEach(element => {
     
     var h_title = document.createElement('h2')
     var h_title2 = document.createElement('h2')
     var h_title3 = document.createElement('h2')
    
    
    
     var p_text = document.createElement('p')
     var p_text2 = document.createElement('p')
     var p_text3 = document.createElement('p')
     
     
     divone.appendChild(h_title);
     divtwo .appendChild(h_title2);
     divtree.appendChild(h_title3)
    
    
    
     divone.appendChild(p_text)
     divtwo.appendChild(p_text2)
     divtree.appendChild(p_text3)
    
    
    
    
    h_title.textContent = element.name
    h_title2.textContent = element.name2
    h_title3.textContent = element.name3
    
    
    
    p_text.textContent = element.text
    p_text2.textContent = element.text2
    p_text3.textContent = element.text3
});
    


var  historyBtn = document.getElementById("history-tab")
var visionBtn = document.getElementById("vision-tab")
var goalsBtn = document.getElementById("goals-tab")





var vision = document.querySelector(".vision-text")
var goals = document.querySelector(".goals-text")
var historyt = document.querySelector(".history-text")




visionBtn.addEventListener("click" , function(){
goals.style.display = 'none'
historyt.style.display = 'none'
vision.style.display = 'block'
visionBtn.style.border = '2px solid blue'
visionBtn.style.transform = 'scale(1.1)'
visionBtn.style.transition = '0.5s ease'
historyBtn.style.border = '1px solid lightgrey'
historyBtn.style.transform = 'scale(1)'
historyBtn.style.transition = '0.5s ease'
goalsBtn.style.border = '1px solid lightgrey'
goalsBtn.style.transform = 'scale(1)'
goalsBtn.style.transition = '0.5s ease'
})

historyBtn.addEventListener("click" , function(){
goals.style.display = 'none'
historyt.style.display = 'block'
vision.style.display = 'none'
visionBtn.style.transform = 'scale(1)'
visionBtn.style.border = '1px solid lightgrey'
visionBtn.style.transition = '0.5s ease'
historyBtn.style.border = '2px solid blue'
historyBtn.style.transform = 'scale(1.1)'
historyBtn.style.transition = '0.5s ease'
goalsBtn.style.border = '1px solid lightgrey'
goalsBtn.style.transform = 'scale(1)'
goalsBtn.style.transition = '0.5s ease'
})

goalsBtn.addEventListener("click" , function(){
goals.style.display = 'block'
historyt.style.display = 'none'
vision.style.display = 'none'
visionBtn.style.border = '1px solid lightgrey'
visionBtn.style.transform = 'scale(1)'
visionBtn.style.transition = '0.5s ease'
goalsBtn.style.border = '2px solid blue'
goalsBtn.style.transform = 'scale(1.1)'
goalsBtn.style.transition = '0.5s ease'
historyBtn.style.border = '1px solid lightgrey'
historyBtn.style.transform = 'scale(1)'
historyBtn.style.transition = '0.5s ease'
})

