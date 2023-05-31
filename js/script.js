const data = [
    {
        nome: 'miguel',
        email: 'miguel@gmail.com',
        num: '987987'
    },
    {
        nome: 'karine',
        email: 'karine@gmail.com',
        num: '123123'
    },
    {
        nome: 'lucas',
        email: 'lucas@gmail.com',
        num: '321321'
    },
    {
        nome: 'amanda',
        email: 'amanda@gmail.com',
        num: '789789'
    },

]

let mensagens = []

const hearts = document.querySelectorAll('.coracao')
const contato = document.querySelector('.contato')
const modal = document.querySelector('#modal')
const closeBtn = document.querySelector('.close')
const send = document.querySelector('.send')


hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
        if(heart.classList.contains('desativado')){
            heart.setAttribute('src', '../icones/CoracaoVermelho.svg')
            heart.classList.remove('desativado')
        }
        else{
            heart.setAttribute('src', 'icones/Coracao.svg')
            heart.classList.add('desativado')
        }
    })
})

contato.addEventListener('click', () => {
    modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

send.addEventListener('click', () => {
    let inputName  = document.querySelector('.name')
    let inputEmail = document.querySelector('.email')
    let inputNum = document.querySelector('.num')
    let textarea = document.querySelector('.textarea')
    let existe = false
    
    if(inputName.value === '' || inputEmail.value === '' || inputNum.value === ''){
        alert('preencha todos os campos')
    }
    else{
        data.forEach((user) => {
            if(inputName.value == user.nome && inputEmail.value == user.email && inputNum.value == user.num){
                existe = true
            }
        })
        
        if(!existe){
            alert('Usuario não cadastrado')
            inputName.value = ''
            inputNum.value = ''
            inputEmail.value = ''
            inputName.focus()
        }
        else{
            mensagens.push(textarea.value)
            console.log(mensagens)
            modal.style.display = 'none'
        }
    }
})