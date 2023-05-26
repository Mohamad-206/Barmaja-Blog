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
let arrow_icon = document.querySelector(".fa-arrow-right");
const contact_me = document.getElementById("contact-me");
const last_p = document.getElementById("last-p");
const special_text = document.querySelector(".special-text");
const fa_github = document.querySelector(".fa-github");
const programming$h1 = document.querySelector(".programming h1");
const articles_p = document.querySelectorAll(".article-one .contenar p");
const articles_h3 = document.querySelectorAll(".article-one .contenar h3");
const articles_h4 = document.querySelectorAll(".article-one .contenar h4");
const articles_span = document.querySelectorAll(".article-one .contenar span");
const title_articles = document.querySelector(".title-articles");
const contents_the_articles = document.querySelector(".contents_the_articles");
const contents = document.querySelector(".contents");
const link_one = document.querySelector(".link-one");
const link_tow = document.querySelector(".link-tow"); 
const link_three = document.querySelector(".link-three"); 
const link_four = document.querySelector(".link-four"); 
const link_five = document.querySelector(".link-five");
const link_six = document.querySelector(".link-six");
const the_start = document.querySelector(".the_start");
const about = document.querySelector(".about")
const span_one = document.querySelector(".span_one");
const span_tow = document.querySelector(".span_tow");
const span_three = document.querySelector(".span_three");
const span_four = document.querySelector(".span_four");
const span_five = document.querySelector(".span_five");
const span_six = document.querySelector(".span_six");
const programming = document.querySelector(".programming")
const programming_p = document.querySelector(".programming_p")
const span_tow_p = document.querySelector(".span_tow_p")
const span_three_p = document.querySelector(".span_three_p")
const span_four_p = document.querySelector(".span_four_p")
const Web_Development = document.querySelector(".Web_Development")
const Web_Development_p = document.querySelector(".Web_Development_p")
const Frontend_Developer_Design = document.querySelector(".Frontend_Developer_Design")
const Frontend_Developer_Design_p = document.querySelector(".Frontend_Developer_Design_p")
const backend_developer_development = document.querySelector(".backend-developer_development")
const backend_developer_development_p = document.querySelector(".backend-developer_development_p")
const Mobile_Apps = document.querySelector(".Mobile_Apps")
const Mobile_Apps_P = document.querySelector(".Mobile_Apps_P")
const Native_applicattion_p = document.querySelector(".Native_applicattion_p")
const Hybrid_application_p = document.querySelector(".Hybrid_application_p")
const Desktop_Software = document.querySelector(".Desktop_Software")
const Desktop_Software_p = document.querySelector(".Desktop_Software_p")
const Games = document.querySelector(".Games")
const Games_p = document.querySelector(".Games_p")
const span_five_p = document.querySelector(".span_five_p")
const Computer = document.querySelector(".Computer")
const Computer_p = document.querySelector(".Computer_p")
const code_editor = document.querySelector(".code_editor")
const code_editor_p = document.querySelector(".code_editor_p")
const if_p = document.querySelector(".if_p")
const span_six_p = document.querySelector(".span_six_p")

// url of ar.json

const url = 'js/Ar.json';
const arabicArticles = 'js/arabicArticles.json'
const englishArticles = 'js/englishArticles.json'



// onclick on moon

moon.addEventListener("click", (e) => {
    border.style.backgroundColor = "#00abdf7a";
    border_span.style.backgroundColor = "#00abfd";
    document.body.style.backgroundColor = "#172028"
    border_span.classList.add("active")
    ul.classList.add("dark")
    select$lang.style.backgroundColor = "rgb(23, 32, 40)"
    select$lang.style.color = "#fff";
    header.style.backgroundColor = "#172028";
    contact_me.style.color = "#fff";
    last_p.style.color = "#fff";
    special_text.style.color = "#fff";
    fa_github.style.color = "#fff";
    arrow_icon.style.color = "#fff";
    bars.style.color = "#fff";
    title_articles.style.color = "#fff";
    contents_the_articles.style.color = "#fff";
    contents.style.borderColor = "#fff";
    box_container_p.forEach(p => {
        p.style.color = "#fff";
    });
    li.forEach((li) => {
        li.style.borderBottom = "none";
    })
    a.forEach((a) => {
        a.style.color = "#fff";
    })
    articles_p.forEach((p) => {
        p.style.color = "#fff";
    })
    articles_h3.forEach((h3) => {
        h3.style.color = "#fff";
    })
    articles_h4.forEach((h4) => {
        h4.style.color = "#fff";
    })
    articles_span.forEach((span) => {
        span.style.color = "#fff";
    })
})

// on click on sun

sun.addEventListener("click", (e) => {
    border.style.backgroundColor = "#f9d81c46";
    border_span.style.backgroundColor = "#f9d71c";
    border_span.classList.remove("active")
    document.body.style.backgroundColor = "#f6f6f6"
    header.style.backgroundColor = "#f6f6f6";
    ul.classList.remove("dark")
    select$lang.style.backgroundColor = "#f6f6f6"
    select$lang.style.color = "#2c3e50";
    bars.style.color = "#2c3e50";
    arrow_icon.style.color = "#2c3e50";
    contact_me.style.color = "#2c3e50";
    last_p.style.color = "#2c3e50";
    special_text.style.color = "#2c3e50";
    fa_github.style.color = "#2c3e50";
    title_articles.style.color = "#2c3e50";
    contents_the_articles.style.color = "#2c3e50";
    contents.style.borderColor = "#2c3e50";
    a.forEach((a) => {
        a.style.color = "#2c3e50"
    })
    articles_p.forEach((p) => {
        p.style.color = "#2c3e50";
    })
        articles_h3.forEach((h3) => {
        h3.style.color = "#2c3e50";
    })
    articles_h4.forEach((h4) => {
        h4.style.color = "#2c3e50";
    })
    articles_span.forEach((span) => {
        span.style.color = "#2c3e50";
    })
    box_container_p.forEach(p => {
        p.style.color = "#2c3e50";
    });
    li.forEach((li) => {
        li.style.borderBottom = "1px solid #ccc";
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
                async function getArart() {
                    let data = await fetch(arabicArticles)
                    let respons = await data.json();
                    title_articles.innerHTML = respons[0].title_articles;
                    link_one.innerHTML = respons[0].link_one
                    link_tow.innerHTML = respons[0].link_tow
                    link_three.innerHTML = respons[0].link_three
                    link_four.innerHTML = respons[0].link_four
                    link_five.innerHTML = respons[0].link_five
                    link_six.innerHTML = respons[0].link_six
                    contents_the_articles.innerHTML = respons[0].contents_the_articles
                    the_start.innerHTML = respons[0].about
                    span_one.innerHTML =  respons[0].span_one
                    span_tow.innerHTML =  respons[0].span_tow
                    span_three.innerHTML = respons[0].span_three
                    span_four.innerHTML = respons[0].span_four
                    span_five.innerHTML = respons[0].span_five
                    span_six.innerHTML =  respons[0].span_six
                    the_start.innerHTML = respons[0].the_start
                    about.innerHTML = respons[0].about
                    programming.innerHTML = respons[0].programming
                    programming_p.innerHTML = respons[0].programming_p
                    span_tow_p.innerHTML = respons[0].span_tow_p
                    span_three_p.innerHTML = respons[0].span_three_p
                    span_four_p.innerHTML = respons[0].span_four_p
                    Web_Development.innerHTML = respons[0].Web_Development
                    Web_Development_p.innerHTML = respons[0].Web_Development_p
                    Frontend_Developer_Design.innerHTML = respons[0].Frontend_Developer_Design
                    Frontend_Developer_Design_p.innerHTML = respons[0].Frontend_Developer_Design_p
                    backend_developer_development.innerHTML = respons[0].backend_developer_development
                    backend_developer_development_p.innerHTML = respons[0].backend_developer_development_p
                    Mobile_Apps.innerHTML = respons[0].Mobile_Apps
                    Mobile_Apps_P.innerHTML = respons[0].Mobile_Apps_P
                    Native_applicattion_p.innerHTML = respons[0].Native_applicattion_p
                    Hybrid_application_p.innerHTML = respons[0].Hybrid_application_p
                    Desktop_Software.innerHTML = respons[0].Desktop_Software
                    Desktop_Software_p.innerHTML = respons[0].Desktop_Software_p
                    Games.innerHTML = respons[0].Games
                    Games_p.innerHTML = respons[0].Games_p
                    span_five_p.innerHTML = respons[0].span_five_p
                    Computer.innerHTML = respons[0].Computer
                    Computer_p.innerHTML = respons[0].Computer_p
                    code_editor.innerHTML = respons[0].code_editor
                    code_editor_p.innerHTML = respons[0].code_editor_p
                    if_p.innerHTML = respons[0].if_p
                    span_six_p.innerHTML = respons[0].span_six_p
                }
                getArart()
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
                async function getArart() {
                    let data = await fetch(englishArticles)
                    let respons = await data.json();
                    title_articles.innerHTML = respons[0].title_articles;
                    link_one.innerHTML = respons[0].link_one
                    link_tow.innerHTML = respons[0].link_tow
                    link_three.innerHTML = respons[0].link_three
                    link_four.innerHTML = respons[0].link_four
                    link_five.innerHTML = respons[0].link_five
                    link_six.innerHTML = respons[0].link_six
                    contents_the_articles.innerHTML = respons[0].contents_the_articles
                    the_start.innerHTML = respons[0].about
                    span_one.innerHTML =  respons[0].span_one
                    span_tow.innerHTML =  respons[0].span_tow
                    span_three.innerHTML = respons[0].span_three
                    span_four.innerHTML = respons[0].span_four
                    span_five.innerHTML = respons[0].span_five
                    span_six.innerHTML =  respons[0].span_six
                    the_start.innerHTML = respons[0].the_start
                    about.innerHTML = respons[0].about
                    programming.innerHTML = respons[0].programming
                    programming_p.innerHTML = respons[0].programming_p
                    span_tow_p.innerHTML = respons[0].span_tow_p
                    span_three_p.innerHTML = respons[0].span_three_p
                    span_four_p.innerHTML = respons[0].span_four_p
                    Web_Development.innerHTML = respons[0].Web_Development
                    Web_Development_p.innerHTML = respons[0].Web_Development_p
                    Frontend_Developer_Design.innerHTML = respons[0].Frontend_Developer_Design
                    Frontend_Developer_Design_p.innerHTML = respons[0].Frontend_Developer_Design_p
                    backend_developer_development.innerHTML = respons[0].backend_developer_development
                    backend_developer_development_p.innerHTML = respons[0].backend_developer_development_p
                    Mobile_Apps.innerHTML = respons[0].Mobile_Apps
                    Mobile_Apps_P.innerHTML = respons[0].Mobile_Apps_P
                    Native_applicattion_p.innerHTML = respons[0].Native_applicattion_p
                    Hybrid_application_p.innerHTML = respons[0].Hybrid_application_p
                    Desktop_Software.innerHTML = respons[0].Desktop_Software
                    Desktop_Software_p.innerHTML = respons[0].Desktop_Software_p
                    Games.innerHTML = respons[0].Games
                    Games_p.innerHTML = respons[0].Games_p
                    span_five_p.innerHTML = respons[0].span_five_p
                    Computer.innerHTML = respons[0].Computer
                    Computer_p.innerHTML = respons[0].Computer_p
                    code_editor.innerHTML = respons[0].code_editor
                    code_editor_p.innerHTML = respons[0].code_editor_p
                    if_p.innerHTML = respons[0].if_p
                    span_six_p.innerHTML = respons[0].span_six_p
                }
                getArart()
            };
        };
    })
    // ===== arabic artilces =======


})