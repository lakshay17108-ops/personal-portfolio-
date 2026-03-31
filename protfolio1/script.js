document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Message sent successfully!");

    form.reset();

});