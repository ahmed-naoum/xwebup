var e = document.getElementById("header");
var E = document.getElementById("tabbir");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        e.classList.add("bacheader_blur");
        e.classList.add("border_bac");
    } else {
        e.classList.remove("bacheader_blur");
        e.classList.remove("border_bac");
    }
    if (document.documentElement.scrollTop > 750) {
        E.style.display = "none";
    }else {
    }
}
