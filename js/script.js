const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
});

hiddenElements.forEach((el) => observer.observe(el));

const software = [
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Photoshop"
];

let index = 0;

const softwareName = document.getElementById("software-name");

setInterval(() => {

    index++;

    if(index >= software.length){
        index = 0;
    }

    softwareName.textContent = software[index];

},2000);
