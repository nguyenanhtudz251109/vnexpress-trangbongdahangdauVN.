/* ===========================================
   FOOTBALL NEWS
   script.js
===========================================*/

/* ========= HEADER SHADOW ========= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});


/* ========= BACK TO TOP ========= */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "#d40000";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "22px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.transition = ".3s";
backToTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/* ========= FADE ANIMATION ========= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(

".headline,.card,.sidebar,.footer-left,.footer-right"

).forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ========= NEWS CARD EFFECT ========= */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

        card.style.boxShadow = "0 15px 30px rgba(0,0,0,.15)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

        card.style.boxShadow = "";

    });

});


/* ========= SEARCH ========= */

const input = document.querySelector(".search input");

const button = document.querySelector(".search button");

button.addEventListener("click", searchNews);

input.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        searchNews();

    }

});

function searchNews(){

    let keyword = input.value.trim();

    if(keyword===""){

        alert("Vui lòng nhập từ khóa.");

        return;

    }

    alert("Bạn tìm kiếm: " + keyword);

}


/* ========= CURRENT TIME ========= */

const today = document.querySelector(".today");

function updateClock(){

    const now = new Date();

    const options = {

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric"

    };

    today.innerHTML = "🗓 " +

        now.toLocaleDateString("vi-VN",options);

}

updateClock();


/* ========= RANDOM HOT NEWS ========= */

const titles=[

"Messi sẵn sàng cho trận đấu lớn",

"Tây Ban Nha tự tin trước giờ bóng lăn",

"Argentina hoàn tất buổi tập cuối",

"HLV hai đội công bố đội hình",

"World Cup nóng hơn bao giờ hết"

];

const headline=document.querySelector(".headline h1");

setInterval(()=>{

    headline.style.opacity="0";

    setTimeout(()=>{

        headline.style.opacity="1";

    },300);

},10000);


/* ========= LOADING EFFECT ========= */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/* ========= MOBILE MENU ========= */

const nav=document.querySelector("nav ul");

const menuBtn=document.createElement("button");

menuBtn.innerHTML="☰";

menuBtn.id="menuButton";

document.querySelector(".top-header .container").prepend(menuBtn);

menuBtn.style.display="none";

function mobile(){

    if(window.innerWidth<700){

        menuBtn.style.display="block";

        nav.style.display="none";

    }else{

        menuBtn.style.display="none";

        nav.style.display="flex";

    }

}

mobile();

window.addEventListener("resize",mobile);

menuBtn.onclick=()=>{

    if(nav.style.display==="none"){

        nav.style.display="block";

    }else{

        nav.style.display="none";

    }

};


/* ========= FADE CLASS ========= */

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(30px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

#menuButton{

background:#d40000;

color:#fff;

border:none;

padding:10px 15px;

border-radius:8px;

cursor:pointer;

font-size:18px;

}

.headline h1{

transition:.5s;

}

`;

document.head.appendChild(style);


/* ========= CONSOLE ========= */

console.log("Football News loaded successfully.");