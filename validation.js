//email= /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/
//password= /^(\.[a-z\A-Z\d]{,8})$/

// select elements
const inputs = document.querySelectorAll('input')
const sendBtn = document.querySelector('#send-button')
const resetBtn = document.querySelector('#reset-button')
const conditions = {
    name: /^[a-z]{3,40}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{3,8}$)/,
    email: /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/,
    adress: /^[a-z\d\.-]{2,100}$/,
    comments: /^[a-z\d\.-]{1,500}$/,
}


// condition inputs vide
sendBtn.addEventListener('click', function(e){
    e.preventDefault()
    inputs.forEach(input => {
        return x= input.value
    });
    if(x === '') {
        return alert('Please fill in all the fields required!')
    } else {
        alert('Submited')
    }
})

inputs.forEach(input => {
    input.addEventListener('keyup', function(e){
        validate(e.target, conditions['e.target.name'])
    })
})
function validate(field){
    if(conditions[field.name].test(field.value)){
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
    
}
resetBtn.addEventListener('click',function(e){
    e.preventDefault()
    inputs.forEach(input=>{
        return input.value=''
    });
})