// DARK MODE BUTTON SETUP =================================

const button = document.createElement(`button`)
button.id = `dark-mode`

const body = document.getElementsByTagName(`body`)[0]
body.appendChild(button)
button.innerText = `Dark Mode`

button.addEventListener(`click`,()=>{
    if(button.innerText===`Dark Mode`){
        darkMode()
    }else{
        lightMode()
    }
})

function darkMode(){
    body.style.backgroundColor = `black`
    body.style.color = `white`
    button.innerText = `Light Mode`
}

function lightMode(){
    body.style.backgroundColor = `white`
    body.style.color = `black`
    button.innerText = `Dark Mode`
}

// CHANGING HEADINGS DYNAMICALLY AND ADD BUTTON ============

const subHeading = document.querySelector(`#sub-heading`)

subHeading.innerText = `Daily Tasks\n\n`

if( subHeading.innerText === `Daily Tasks\n\n`){
    document.getElementsByClassName(`main-heading`)[0]
    .innerText = `The Complete Must-Do List`
    document.getElementsByClassName(`main-heading`)[0]
    .style.color = `crimson`
}

subHeading.appendChild(button)

const headingInstruction = document.querySelector(`#heading-instruction`)
headingInstruction.innerText = `Click each task once complete:\n`

const todaysTasks = document.querySelector(`#todaystasks`)
todaysTasks.innerText = `Today's Tasks`



// TABLE SETUP ==========================================

const mainDiv = document.querySelector(`#maindiv`)
mainDiv.style.backgroundColor = `crimson`
mainDiv.style.color = `white`



// FORM SETUP ===========================================
const mustDo = document.querySelector('#mustdo')
mustDo.addEventListener('submit',(event)=>{
    event.preventDefault() // Prevents browser from refreshing
    const taskName = getTaskName()
    console.log(taskName)
    handleTaskData(taskName)
})


function getTaskName(){
    const taskName = document.querySelector('#mustdoitem1').value
    return taskName

}

function handleTaskData(name){
    console.log(name)
    const div = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')
    div.id = `card-${name}`
    p.innerHTML = `<strong>${name}</strong>`
    img.src = "./static/incomplete.jpg"
    div.append(p,img)
    document.querySelector('.aside').appendChild(div)
    div.addEventListener('click', ()=>div.remove() )
    
}

