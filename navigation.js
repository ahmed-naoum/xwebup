var e = document.getElementById("header");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
        e.classList.add("bacheader_blur");
        e.classList.add("border_bac");

        
    } else {

        e.classList.remove("bacheader_blur");
        e.classList.remove("border_bac");
    }
}
