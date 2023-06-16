






const observer = new IntersectionObserver((enteries) => {

    enteries.forEach((el) => {
        console.log(el)
        if (el.isIntersecting) {
            el.target.classList.add('show');
        }else {
            el.target.classList.remove('show');
        }

    });
});





const lef =document.querySelectorAll('.left');

lef.forEach((el) => observer.observe(el));





const observers = new IntersectionObserver((enterie) => {

    enterie.forEach((entry) => {
       console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('slide');
        }else {
            entry.target.classList.remove('slide');
        }

    });
});





const right =document.querySelectorAll('.right');

right.forEach((entry) => observers.observe(entry));



































function toggleText() {
    var x = document.getElementById("ans");
    var icon = document.getElementById("icon");
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("test");
        icon.className = "fa fa-chevron-up";

    } else {
        x.style.display = "none";
        icon.className = "fa fa-chevron-down";
    };
}

function toggleTex() {
    var x = document.getElementById("answ");
    var icon = document.getElementById("icone");
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("test");
        icon.className = "fa fa-chevron-up";

    } else {
        x.style.display = "none";
        icon.className = "fa fa-chevron-down";
    };
}

function toggle() {
    var x = document.getElementById("answe");
    var icon = document.getElementById("icones");
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("test");
        icon.className = "fa fa-chevron-up";

    } else {
        x.style.display = "none";
        icon.className = "fa fa-chevron-down";
    };
}
function toggl() {
    var x = document.getElementById("answers");
    var icon = document.getElementById("iconess");
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("test");
        icon.className = "fa fa-chevron-up";

    } else {
        x.style.display = "none";
        icon.className = "fa fa-chevron-down";
    };
}
