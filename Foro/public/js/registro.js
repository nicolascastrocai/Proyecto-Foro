
console.log('hola');
let formulario=document.querySelector('form')

formulario.addEventListener('submit',function(e) {
    e.preventDefault()
    let inputs=document.querySelectorAll('input')
    console.log(inputs);
    
})

