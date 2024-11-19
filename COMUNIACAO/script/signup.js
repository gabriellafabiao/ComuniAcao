function saveUserData() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var pronoun = document.getElementById('pronoun').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('userData', JSON.stringify({ name: name, date: date, pronoun: pronoun, email: email }));
    
    window.location.href = "/dashboard.html";
}

