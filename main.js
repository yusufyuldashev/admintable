let elForm = document.querySelector("#form")
let elFirstInput = elForm.querySelector("#first-input")
let elSecondInput = elForm.querySelector("#second-input")
let elList = elForm.querySelector("#list")

let studentData = [
    {
        name:'muhammad',
        password:'admin123',
        role:'Admin'

    },
    {
        name:'javoxir',
        password:'1122',
        role:'student',
    },
    {
        name:'yusuf',
        password:'2903',
        role:'student',
    },
    {
        name:'komron',
        password:'7712',
        role:'student',
    },
    {
        name:'masharif',
        password:'3344',
        role:'worker'
    },
    {
        name:'nasriddin',
        password:'4422',
        role:'director '
    },
    {
        name:'Ahmadjon',
        password:'2004',
        role:'talaba'
    }
]


elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
   
    let newLii = document.createElement("li")

  
    if(( elFirstInput.value == studentData[0].name) && (elSecondInput.value  == studentData[0].password)){
       for(i = 0 ; i< studentData.length ; i++){
           let newLi = document.createElement("li")
           newLi.textContent = `Ismi ${studentData[i].name} password ${studentData[i].password} role ${studentData[i].role}`
           elList.appendChild(newLi)
       }
    } 
        for(j=0; j<studentData.length; j++){
            if( elFirstInput.value == studentData[j].name && elSecondInput.value  == studentData[j].password)
            newLii.textContent = `Ismi ${studentData[j].name} password ${studentData[j].password} role ${studentData[j].role}`
            elList.appendChild(newLii)
        }
    
    
    elFirstInput.value = ''
    elSecondInput.value = ''

})