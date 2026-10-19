const skills = document.getElementById("skills");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        

        if (!entry.isIntersecting) return;

       

        let circle = document.querySelectorAll(".profskill");

        circle.forEach(function (progress) {

            let degree = 0;
            let targetDegree = parseInt(progress.getAttribute("data-degree"));
            let color = progress.getAttribute("data-color");
            let number = progress.querySelector(".number");

            let interval = setInterval(function () {

                degree++;

                if (degree > targetDegree) {
                    clearInterval(interval);
                    return;
                }

                progress.style.background =
                    `conic-gradient(${color} ${degree}%, #222 ${degree}%)`;
                    
    

                number.innerHTML = degree + "<span>%</span>";
                number.style.color = color;

            }, 50);

            

        });

    });

}, {
    threshold: 0.4 // Starts when 40% of the skills section is visible
});

observer.observe(skills);







const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove("show");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});