document.getElementById('start-editing').addEventListener('click', function() {
    const mapType = document.getElementById('map-type').value;

    // Provjeri koji je tip mape izabran i preusmjeri na odgovarajuću stranicu
    if (mapType === 'hrvatska') {
        window.location.href = '/hrvatska';
    } else if (mapType === 'europa') {
        window.location.href = '/europa';
    } else if (mapType === 'usa') {  // Added for USA
        window.location.href = '/usa';
    } else if (mapType === 'juzna-amerika') {
        window.location.href = '/juzna-amerika';
    } else if (mapType === 'afrika') {  // Added for Africa
        window.location.href = '/africa';
    } else if (mapType === 'azija') {  // Added for Asia
        window.location.href = '/azija';
    } else {
        alert('Molimo odaberite opciju iz izbornika.');
    }
    
});



document.addEventListener('DOMContentLoaded', () => {
    // Dohvaćamo korisničko ime iz localStorage
    const username = localStorage.getItem('username');

    if (username) {
        // Prikazujemo korisničko ime u pozdravnoj poruci
        document.querySelector('.welcome-message').textContent = `Bok, ${username}!`;
    }
});
