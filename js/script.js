const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p> ... coletando suas informações ... </p>`

    let pronto = `<p> P-A-R-A-B-É-N-S, corre no seu email! As ofertas foram enviadas :) </p>`

    content.innerHTML = carregando
    
    
    setTimeout(() => {
        content.innerHTML = pronto
    },1000);
})