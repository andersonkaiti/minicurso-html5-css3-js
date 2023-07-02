function clique(b) {
    switch(b) {
        case 1:
            var local = 'Maceió';
            window.location.href = 'maceio.html';
            break;
        case 2:
            var local = 'Foz do Iguaçu';
            break;
        case 3:
            var local = 'Natal';
            break;
        case 4:
            var local = 'Gramado';
            break;
    }
    console.log(`Clicou no Saiba Mais de ${local}.`);
}

// document.querySelector("#saiba-mais1").addEventListener('click', clique);