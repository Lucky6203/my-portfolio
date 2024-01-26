var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
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
