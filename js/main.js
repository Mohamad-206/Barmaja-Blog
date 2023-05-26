// All vars
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const border = document.querySelector(".border");
const border_span = document.querySelector(".border-span") ;
const a = document.querySelectorAll("a");
const bars = document.querySelector(".bars");
const ul = document.querySelector("header ul")
const header = document.querySelector("header");
const li = document.querySelectorAll("header ul li");
const main = document.querySelector("main");
const info = document.querySelector(".info");
const img = document.querySelector("main img");
const h1 = document.querySelector("h1");
const select$lang = document.getElementById("select-lang");
const options = document.querySelectorAll("select option");
const span = document.querySelector(".barmaja");
const p = document.querySelector(".info p");
const info_box_p = document.querySelector(".info-box p");
const info_box_h2 = document.querySelector(".info-box h2");
const about$us$img = document.querySelector(".about-us img");
const info_box = document.querySelector(".info-box");
const box_container_p = document.querySelectorAll(".box-container .container .box p");
const section_h2 = document.querySelector("section h2");
let   arrow_icon = document.querySelector("#Home > footer > div.container > div.box-one.box > i");
const contact_me = document.getElementById("contact-me");
const last_p = document.getElementById("last-p");
const special_text = document.querySelector(".special-text");
const fa_github = document.querySelector(".fa-github")
// url of ar.json

const url = 'js/Ar.json'


// onclick on moon

moon.addEventListener("click",(e)=> {
    border.style.backgroundColor =  "#00abdf7a";
    border_span.style.backgroundColor="#00abfd";
    document.body.style.backgroundColor = "#172028"
    border_span.classList.add("active")
    main.style.color = "#fff"
    ul.classList.add("dark")
    li.forEach((li)=> {
        li.style.borderBottom = "none";
})
a.forEach((a)=> {
    a.style.color = "#fff";
})     
info.style.color = "#fff";
h1.style.color = "#fff";
select$lang.style.backgroundColor = "rgb(23, 32, 40)"
select$lang.style.color = "#fff";
info_box_p.style.color="#fff";
info_box_h2.style.color="#fff";
header.style.backgroundColor = "#172028"
section_h2.style.color = "#fff"
box_container_p.forEach(p => {
    p.style.color="#fff";
});
arrow_icon.style.color = "#fff";
contact_me.style.color = "#fff";
last_p.style.color = "#fff";
special_text.style.color = "#fff";
fa_github.style.color = "#fff";
bars.style.color = "#2c3e50";
})

// on click on sun

sun.addEventListener("click",(e)=> {
    border.style.backgroundColor =  "#f9d81c46";
    border_span.style.backgroundColor = "#f9d71c";
    border_span.classList.remove("active")
    document.body.style.backgroundColor = "#f6f6f6"
    ul.classList.remove("dark")
    bars.style.color = "#fff";
    a.forEach((a)=> {
        a.style.color = "#2c3e50"
    }) 
    li.forEach((li)=> {
        li.style.borderBottom = "1px solid #ccc";
})
    h1.style.color = "#2c3e50"
    info.style.color = "#2c3e50"
    select$lang.style.backgroundColor = "#f6f6f6"
select$lang.style.color = "#2c3e50";
info_box_p.style.color="#2c3e50";
info_box_h2.style.color="#2c3e50";
header.style.backgroundColor = "#f6f6f6"
box_container_p.forEach(p => {
    p.style.color="#2c3e50";
});
section_h2.style.color = "#2c3e50"
arrow_icon.style.color = "#2c3e50";
contact_me.style.color = "#2c3e50";
last_p.style.color = "#2c3e50";
special_text.style.color = "#2c3e50";
fa_github.style.color = "#2c3e50";

})

// settings bars

bars.addEventListener("click",(e)=> {
    ul.classList.toggle('active')
 
})

// add active class on img and info 

window.onload = function() {
    info.classList.add("active");
    img.classList.add("active")
}

// set the event of select lang

select$lang.addEventListener("change",()=> {
         // check if the option value === select value
    options.forEach((options)=> {
    if (options.value === select$lang.value) {
    // check if the option value === Ar 
        if ( select$lang.value === "Ar")  {
            border_span.classList.remove("active");
            border_span.classList.add("activeT");
            sun.style.order = "2";
            moon.style.order = "1";
            document.body.setAttribute("dir","rtl")
        async function getAr() {
                let data = await fetch(url)
                let respons = await data.json();
                console.log(respons);
                a[1].innerHTML = respons[0].a_1;
                a[2].innerHTML = respons[0].a_2;
                a[3].innerHTML = respons[0].a_3;
                a[4].innerHTML = respons[0].a_4;
                h1.innerHTML =`${respons[0].h1} <span class="barmaja">${ respons[0].span}</span>` ;
                p.innerHTML = respons[0].main;
                info_box_p.innerHTML = ` <span>برمجة</span> ${respons[0].about_us}`;
                info_box_h2.innerHTML = `نبذة <span>عنا</span>`
                section_h2.innerHTML = respons[0].section_word
                box_container_p[0].innerHTML = respons[0].programming_field;
                box_container_p[1].innerHTML = respons[0].frontend;
                box_container_p[2].innerHTML = respons[0].backend;
                box_container_p[3].innerHTML = respons[0].Cyber_security;
                box_container_p[4].innerHTML = respons[0].artificial_intelligence;
                box_container_p[5].innerHTML = respons[0].work_environments;
                box_container_p[6].innerHTML = respons[0].Advice_for_junior_programmer;
                box_container_p[7].innerHTML = respons[0].questions_and_answers;
                box_container_p[8].innerHTML = respons[0].soon;
                contact_me.innerHTML = respons[0].contact_me;

                }  
                getAr()
                if (arrow_icon.classList.contains("fa-arrow-right")) {
                    arrow_icon.classList.add("fa-arrow-left");
                    arrow_icon.classList.remove("fa-arrow-right");
                }
            }
            else if ( select$lang.value === "En") {
            moon.style.order = "2"
            sun.style.order = "1"
            border_span.classList.add("active")
            border_span.classList.remove("activeT")
            document.body.setAttribute("dir","ltr")
        async function getAr() {
                let data = await fetch(url)
                let respons = await data.json();
                a[1].innerHTML = respons[1].a_1
                a[2].innerHTML = respons[1].a_2
                a[3].innerHTML = respons[1].a_3
                a[4].innerHTML = respons[1].a_4
                h1.innerHTML =`Welcome to <span class="barmaja"> barmaja </span> blog` 
                p.innerHTML = respons[1].main
                info_box_p.innerHTML = ` <span>barmaja</span> ${respons[1].about_us}`
                info_box_h2.innerHTML = `About <span>Us</span>`
                section_h2.innerHTML = respons[1].section_word
                box_container_p[0].innerHTML = respons[1].programming_field;
                box_container_p[1].innerHTML = respons[1].frontend;
                box_container_p[2].innerHTML = respons[1].backend;
                box_container_p[3].innerHTML = respons[1].Cyber_security;
                box_container_p[4].innerHTML = respons[1].artificial_intelligence;
                box_container_p[5].innerHTML = respons[1].work_environments;
                box_container_p[6].innerHTML = respons[1].Advice_for_junior_programmer;
                box_container_p[7].innerHTML = respons[1].questions_and_answers;
                box_container_p[8].innerHTML = respons[1].soon;
                contact_me.innerHTML = respons[1].contact_me;
            }  
            getAr()
                            if (arrow_icon.classList.contains("fa-arrow-left")) {
                    arrow_icon.classList.add("fa-arrow-right");
                    arrow_icon.classList.remove("fa-arrow-left");
                }
        };
    };
    })
})

// set the window offset page


window.onscroll = function () {
    if (window.pageYOffset >= 112) {
        setTimeout(()=> {
            about$us$img.classList.add("active");
            info_box.classList.add("active");
        },100)
    }
}
