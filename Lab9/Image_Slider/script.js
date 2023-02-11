var imgs = [];
var next_btn = document.getElementById("next");
var prev_btn = document.getElementById("prev");
var img = document.getElementById("img");
var slider = document.getElementById("my_slider");
var body = document.getElementsByTagName("body");
var dots_div=document.getElementById("dots-div");
var x=document.getElementById('fig-div');
var dots;
var imageNumber = 0;

function load() {
    imgs = ['images/1.png','images/2.png','images/3.png','images/4.png'];
    create_Dots();
    document.getElementById("0").classList.add('active');
    dots = document.getElementsByClassName("dot");
}
next_btn.addEventListener('click', changeNextImage);
prev_btn.addEventListener('click', changePrevImage);

function changeNextImage() {
    imageNumber = (imageNumber + 1) % imgs.length;
    change_Img(imageNumber);
}

function changePrevImage() {
    imageNumber = (imageNumber > 0) ? (--imageNumber) : (imgs.length - 1);
    change_Img(imageNumber);
}

function change_Img(imageNumber) {
    img.src = imgs[imageNumber];
    img.style.opacity=0.2;
    fade_in();
    deactivate_dots(dots);
    dots[imageNumber].classList.add('active');
    console.log(dots[imageNumber].className);
}

function create_Dots() {
    for (let i = 0; i < imgs.length; i++) {
        var span_Dot = document.createElement('span');
        span_Dot.classList.add('dot', 'm-1');
        span_Dot.setAttribute('id', i);
        span_Dot.dataset.type = "dot";
        dots_div.appendChild(span_Dot);
    }
}

function deactivate_dots(dots)
{
    for (let x=0;x<dots.length;x++) {
        if(dots[x].classList.contains('active'))
        dots[x].classList.remove('active');
    }
}
dots_div.addEventListener("click", function (e) {
    if (e.target.dataset.type == "dot") {
        deactivate_dots(dots);
        e.target.classList.add('active');
        imageNumber=Number(e.target.id);
        change_Img(imageNumber)
    }
});

function fade_in()
{
   var fadeIn =setInterval(function () {
        if (img.style.opacity<1) {
            var oc=Number(img.style.opacity)+0.3;
            console.log(  oc)
            img.style.opacity =oc;
            console.log(  img.style.opacity)
        } 
        else{
            clearInterval(fadeIn)
        }
    }, 150);
}

setInterval(changeNextImage,4000);

