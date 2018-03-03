function showMenu() {
    document.getElementById("menu").classList.add('menuShow');
}

function hideMenu() {
    document.getElementById("menu").classList.remove('menuShow');
    document.getElementById("submenu1").style.display = "none";
    document.getElementById("submenu2").style.display = "none";
    document.getElementById("submenu3").style.display = "none";
    document.getElementById("submenu4").style.display = "none";
    document.getElementById("submenu5").style.display = "none";
}

closeMenu("item1", "submenu1");
closeMenu("item2", "submenu2");
closeMenu("item3", "submenu3");
closeMenu("item4", "submenu4");
closeMenu("item5", "submenu5");

// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "flex";
}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function closeMenu(elemId, submenuId) {
    var element = document.getElementById(elemId);
    element.onclick = function () {
        if (document.getElementById(submenuId).style.display === "block") {
            document.getElementById(submenuId).style.display = "none";
        } else {
            document.getElementById(submenuId).style.display = "block";
        }
    }
}
