const horaContainer = document.querySelector('.hora')


const actualizarHora = setInterval(function(){
    
    
    const date =  new Date()
 
     horaContainer.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}` 

},1000)




