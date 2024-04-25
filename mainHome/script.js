const slides = document.querySelectorAll(".slide");
var count = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;

    }
)

var goPrev = () => {
    if (count == 0) {
        count = 4;
    }

    count--;
    slideImg();
}


var goNext = () => {

    count++;
    slideImg();
    if (count == 4) {
        count = -1;
    }
}

const slideImg = () => {
    slides.forEach(

        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;


        }
    )


}
setInterval(goNext, 5000)





const home = document.getElementById("navLinksWrapperHome");
const dropeDown = document.getElementById("dropDownMenu");
dropeDown.addEventListener("mouseleave", () => {
    dropeDown.style.display = "none";


})
const pages = document.getElementById("navLinksWrapperPages");
const dropeDown2 = document.getElementById("dropDownMenu2");
dropeDown2.addEventListener("mouseleave", () => {
    dropeDown2.style.display = "none";


})

const doctors = document.getElementById("navLinksWrapperDoctors");
const dropeDown3 = document.getElementById("dropDownMenu3");
dropeDown3.addEventListener("mouseleave", () => {
    dropeDown3.style.display = "none";


})

const departments = document.getElementById("navLinksWrapperDepart");
const dropeDown4 = document.getElementById("dropDownMenu4");
dropeDown4.addEventListener("mouseleave", () => {
    dropeDown4.style.display = "none";


})

const blogs = document.getElementById("navLinksWrapperBlog");
const dropeDown5 = document.getElementById("dropDownMenu5");

home.addEventListener("mouseenter", () => {

    dropeDown.style.display = "block";
    dropeDown2.style.display = "none";
    dropeDown3.style.display = "none";
    dropeDown4.style.display = "none";
    dropeDown5.style.display = "none";

})

pages.addEventListener("mouseenter", () => {

    dropeDown.style.display = "none";
    dropeDown2.style.display = "block";
    dropeDown3.style.display = "none";
    dropeDown4.style.display = "none";
    dropeDown5.style.display = "none";

})
doctors.addEventListener("mouseenter", () => {

    dropeDown.style.display = "none";
    dropeDown2.style.display = "none";
    dropeDown3.style.display = "block";
    dropeDown4.style.display = "none";
    dropeDown5.style.display = "none";

})

departments.addEventListener("mouseenter", () => {

    dropeDown.style.display = "none";
    dropeDown2.style.display = "none";
    dropeDown3.style.display = "none";
    dropeDown4.style.display = "block";
    dropeDown5.style.display = "none";

})

blogs.addEventListener("mouseenter", () => {

    dropeDown.style.display = "none";
    dropeDown2.style.display = "none";
    dropeDown3.style.display = "none";
    dropeDown4.style.display = "none";
    dropeDown5.style.display = "block";

})
const secondNav = document.getElementById("firstNavBarForJs");
secondNav.addEventListener("mouseenter", () => {
    dropeDown.style.display = "none";
    dropeDown2.style.display = "none";
    dropeDown3.style.display = "none";
    dropeDown4.style.display = "none";
    dropeDown5.style.display = "none";

})


const slide2=document.querySelectorAll(".firstSectionImage1");

var count2 = 0;
slide2.forEach(
    (firstSectionImage1, index) => {
        firstSectionImage1.style.left = `${index * 100}%`;

    }
)

var goPrev2 = () => {
    if (count2 == 0) {
        count2 = 4;
    }

    count2--;
    slideImg();
}


const slideImg2 = () => {
    slides.forEach(

        (firstSectionImage1) => {
            firstSectionImage1.style.transform = `translateX(-${count * 100}%)`;


        }
    )


}

setInterval ( goPrev2,400);


var slider_img=document.querySelector('.slider_img')
var image=['https://i.pinimg.com/736x/7c/ab/9e/7cab9e1d435b5b8c51998bd2085e3b70.jpg','https://assets.technologynetworks.com/production/dynamic/images/content/370219/how-do-blood-tests-work-medical-laboratory-scientists-explain-the-pathway-from-blood-draw-to-370219-960x540.jpg?cb=12162794','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZBoUxiLEerDRf9lWh8RG4qER_mKcq99fydSQzos4lw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKqBaLtM3BmKfZYblaOn32aWLDgvI-_qyaml3mpYuMw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCBYnxhJ1CpFEU5iPs1TqOPJHZBA9u7hgWehRVew_kmttpESNxIM62c5B6FVOxkVgqBA&usqp=CAU','https://calldoctor.ae/wp-content/uploads/2023/03/Screening-Monitoring-and-Lab-Tests-in-Dubai-Blog-35-featured-image-Call-Doctor.jpg'];
var i=0;

var prev=()=>
{
if(i<=0)

 i=image.length;
i--;
return setImg();

}

var next=()=>
{
if(i>=image.length-1)

i=-1;
i++;
return setImg()
}

function setImg(){
    
return slider_img.setAttribute('src',''+image[i]);

}

setInterval(next,3000)