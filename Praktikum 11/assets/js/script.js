// menangkap element a dengan menggunakan looping 
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click', (element) => {
        computerChoice(element);
    })

});

function computerChoice(element){
    // menangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap pilihan komputer pada result
    let pilihanKomputer = document.querySelector('#result');

    // membuat pilihan untuk komputer
    let choices = ['Rock', 'Paper', 'Scissors'];

    // membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

  //Kondisi Menang

    if(pilihanUser == 'Rock' && pilihanKomputer=='Scissors'){
    setTimeout(alert('YOU WIN!!'),100);
    }

    if(pilihanUser == 'Paper' && pilihanKomputer=='Rock'){
    setTimeout(alert('YOU WIN!!'),100);
    }

    if(pilihanUser == 'Scissors' && pilihanKomputer=='Paper'){
    setTimeout(alert('YOU WIN!!'),100);
    }

    //Kondisi kalah
    if(pilihanUser == 'Scissors' && pilihanKomputer=='Rock'){
    setTimeout(alert('YOU LOSE!!'),100);
    }

    if(pilihanUser == 'Rock' && pilihanKomputer=='Paper'){
    setTimeout(alert('YOU LOSE!!'),100);
    }

    if(pilihanUser == 'Paper' && pilihanKomputer=='Scissors'){
    setTimeout(alert('YOU LOSE!!'),100);
}

    //kondisi seri
    if(pilihanUser == 'Rock' && pilihanKomputer=='Rock'){
    setTimeout(alert('DRAW!!!!!'),100);
}

    if(pilihanUser == 'Paper' && pilihanKomputer=='Paper'){
    setTimeout(alert('DRAW!!!!!'),100);
}

    if(pilihanUser == 'Scissors' && pilihanKomputer=='Scissors'){
    setTimeout(alert('DRAW!!!!!'),100);
}


}


