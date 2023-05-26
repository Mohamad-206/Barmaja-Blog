// All vars
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const border = document.querySelector(".border");
const border_span = document.querySelector(".border-span");
const a = document.querySelectorAll("a");
const bars = document.querySelector(".bars");
const ul = document.querySelector("header ul")
const header = document.querySelector("header");
const li = document.querySelectorAll("header ul li");
const select$lang = document.getElementById("select-lang");
const options = document.querySelectorAll("select option");
const span = document.querySelector(".barmaja");
const p = document.querySelector(".info p");
const info_box_p = document.querySelector(".info-box p");
const info_box_h2 = document.querySelector(".info-box h2");
const info_box = document.querySelector(".info-box");
const box_container_p = document.querySelectorAll(".box-container .container .box p");
const section_h2 = document.querySelector("section h2");
let arrow_icon = document.querySelector(".fa-arrow-right");
const contact_me = document.getElementById("contact-me");
const last_p = document.getElementById("last-p");
const special_text = document.querySelector(".special-text");
const fa_github = document.querySelector(".fa-github")
const programming$h1 = document.querySelector(".programming h1")
const articles_p = document.querySelector(".article-one .contenar p")
// url of ar.json

const url = 'js/Ar.json'



// onclick on moon

moon.addEventListener("click", (e) => {
    border.style.backgroundColor = "#00abdf7a";
    border_span.style.backgroundColor = "#00abfd";
    document.body.style.backgroundColor = "#172028"
    border_span.classList.add("active")
    ul.classList.add("dark")
    li.forEach((li) => {
        li.style.borderBottom = "none";
    })
    a.forEach((a) => {
        a.style.color = "#fff";
    })
    select$lang.style.backgroundColor = "rgb(23, 32, 40)"
    select$lang.style.color = "#fff";
    header.style.backgroundColor = "#172028";
    box_container_p.forEach(p => {
        p.style.color = "#fff";
    });
    contact_me.style.color = "#fff";
    last_p.style.color = "#fff";
    special_text.style.color = "#fff";
    fa_github.style.color = "#fff";
    arrow_icon.style.color = "#fff";
    bars.style.color = "#fff";
    programming$h1.style.color = "#fff";
})

// on click on sun

sun.addEventListener("click", (e) => {
    border.style.backgroundColor = "#f9d81c46";
    border_span.style.backgroundColor = "#f9d71c";
    border_span.classList.remove("active")
    document.body.style.backgroundColor = "#f6f6f6";
    programming$h1.style.color = "#2c3e50";
    ul.classList.remove("dark")
    a.forEach((a) => {
        a.style.color = "#2c3e50"
    })
    select$lang.style.backgroundColor = "#f6f6f6"
    select$lang.style.color = "#2c3e50";
    header.style.backgroundColor = "#f6f6f6"
    box_container_p.forEach(p => {
        p.style.color = "#2c3e50";
    });
    bars.style.color = "#2c3e50";
    arrow_icon.style.color = "#2c3e50";
    contact_me.style.color = "#2c3e50";
    last_p.style.color = "#2c3e50";
    special_text.style.color = "#2c3e50";
    fa_github.style.color = "#2c3e50";
    li.forEach((li) => {
        li.style.borderBottom = "1px solid #ccc";
        li[3].style.borderBottom = "none !important";
    })
})
// settings bars

bars.addEventListener("click", (e) => {
    ul.classList.toggle('active')

})


// set the event of select lang

select$lang.addEventListener("change", () => {
    // check if the option value === select value
    options.forEach((options) => {
        if (options.value === select$lang.value) {
            // check if the option value === Ar 
            if (select$lang.value === "Ar") {
                border_span.classList.remove("active");
                border_span.classList.add("activeT");
                sun.style.order = "2";
                moon.style.order = "1";
                document.body.setAttribute("dir", "rtl")
                async function getAr() {
                    let data = await fetch(url)
                    let respons = await data.json();
                    console.log(respons);
                    a[1].innerHTML = respons[0].a_1;
                    a[2].innerHTML = respons[0].a_2;
                    a[3].innerHTML = respons[0].a_3;
                    a[4].innerHTML = respons[0].a_4;
                    contact_me.innerHTML = respons[0].contact_me;

                }
                getAr()
                if (arrow_icon.classList.contains("fa-arrow-right")) {
                    arrow_icon.classList.add("fa-arrow-left");
                    arrow_icon.classList.remove("fa-arrow-right");
                }

            }
            else if (select$lang.value === "En") {
                moon.style.order = "2"
                sun.style.order = "1"
                border_span.classList.add("active")
                border_span.classList.remove("activeT")
                document.body.setAttribute("dir", "ltr")
                async function getAr() {
                    let data = await fetch(url)
                    let respons = await data.json();
                    a[1].innerHTML = respons[1].a_1
                    a[2].innerHTML = respons[1].a_2
                    a[3].innerHTML = respons[1].a_3
                    a[4].innerHTML = respons[1].a_4
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
