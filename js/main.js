// Scroll To Top

const $top = document.querySelector('#top')
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
$top.addEventListener('click', scrollToTop)

// Scroll Header 

const $wrapMainHeader = document.querySelector('.wrap-main-header')

function scrollHeader(scroll) {
    if (window.scrollY > 80) {
        $wrapMainHeader.classList.add('active-scroll')
    } else {
        $wrapMainHeader.classList.remove('active-scroll')
    }
}
document.addEventListener('scroll', scrollHeader);


/* <-------  Function filter products  -------> */

const $listItemFilter = document.querySelectorAll(".project .title a");
const $listItemMain = document.querySelectorAll(".list-project a");


const handleFilter = (e, element) => {
    e.preventDefault();
    const currentId = element.id;

    // var tl = gsap.timeline();
    // tl.to(".list-project .project-item", { y: 100, opacity: 0, duration: 1, stagger: 0.2 });

    // if (currentId === "all") {
    //     tl.to(`.list-project a`, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
    // } else {
    //     tl.to(`.list-project #${currentId}`, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
    // }

    $listItemFilter.forEach((item) => {
        if (item.id === currentId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");

        }
    })

    $listItemMain.forEach((elementMain) => {
        // if (currentId !== "all" && currentId !== elementMain.id) {
        //     elementMain.style.display = "none";
        // } else {
        //     elementMain.style.display = "block";
        // }
        if (currentId === "all") {
            elementMain.style.display = "block";
            return;
        }
        if (currentId === elementMain.id) {
            elementMain.style.display = "block";
            return;
        } else {
            elementMain.style.display = "none";
        }
    })

}



$listItemFilter.forEach((element) => {
    element.addEventListener("click", (e) => handleFilter(e, element));
})



window.onload = function loadPage() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".project",
            start: "top 90%",
        }
    });
    tl.to(".list-project .project-item", { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
}

const a = "";
console.log('a.test', a.test?.sss);