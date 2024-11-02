var typed = new Typed(".text", {
    strings: [ "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


var numbersArray = [];
for (var i = 20; i <= 70; i++) {
    numbersArray.push(i.toString());
}

var typed = new Typed(".number", {
    strings: numbersArray,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// mail

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("BkvrMHOLhfHLE79Jd");
});

function sendMail() {
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_zptu0rs', 'template_2lunc02', templateParams)
        .then(function(response) {
            alert('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        })
    }
