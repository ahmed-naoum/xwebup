window.onload = function () {
    Particles.init({
      selector: 'Canvas'
    });
  };
  var particles = Particles.init({
    selector: 'Canvas',
    color: ['#FFFFFF', '#000000', '#808dad', '#EB4A4A'],
    connectParticles: false,
    responsive: [
      {
        breakpoint: 1,
        options: {
          color: '#f535aa',
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });
  const cursor1 = document.querySelector(".cursor1");
  const cursor = document.querySelector(".cursor2");
  document.addEventListener("mousemove", customizeCursor);
  function customizeCursor(e) {
    cursor.style.top = e.pageY + "px"; 
    cursor.style.left = e.pageX + "px";
    cursor1.style.top = e.pageY + "px"; 
    cursor1.style.left = e.pageX + "px";
  }
  let links = Array.from(document.querySelectorAll(".toch"));
  links.forEach((link) => {
    link.addEventListener("mouseover", ()=> {
      cursor1.classList.add("hv");
    });
    link.addEventListener("mouseleave", ()=> {
      cursor1.classList.remove("hv");
    });
  })
  let test = document.querySelector(".go_down");
  // This handler will be executed only once when the cursor
  // moves over the unordered list
  test.addEventListener("mouseenter", function(test) {
      document.querySelector(".st1").style.stroke = "black";
      document.querySelector(".st0").style.fill = "black";
      document.querySelector(".st00").style.fill = "white";
  },);
  function scroll_down(){
      document.querySelector(".st1").style.stroke = "white";
      document.querySelector(".st0").style.fill = "none";
      document.querySelector(".st00").style.fill = "none";
  false;
  }