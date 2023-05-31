/* Reveals each content when the scroll reaches */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var window_height = window.innerHeight;
      var selector_top = reveals[i].getBoundingClientRect().top;
      var selector_visible = 90;
  
      if (selector_top < window_height - selector_visible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);


/* Counter Animation function for Number */

function count_number(obj, start, end, duration) {

  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (progress == progress) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);

}

const achievements = document.querySelector(".about");

achievements.addEventListener("DOMContentLoaded", function() {

  var numbers = document.querySelectorAll(".count1");

  for(var i=0; i < numbers.length; i++) {

    count_number(numbers[i], 0, numbers[i].innerText, 2000);
  
  }

});

/* This code triggers the count number animation when skill-tab is clicked. */

const tabToClick = document.querySelector(".skill-tab");

tabToClick.addEventListener("click", function() {

  var numbers = document.querySelectorAll(".count2");

  for(var i=0; i < numbers.length; i++) {

    count_number(numbers[i], 0, numbers[i].innerText, 2000);
  
  }

});


/* Shows Progress Bars moving in skills. */

function show_progress() {
  
  var progress_bars = document.querySelectorAll('.skills .progress-bars .progress-bar .progress-con .progress .progress-display');

  for (var i = 0; i < progress_bars.length; i++) {
    
    progress_bars[i].classList.add("active");

  }
}


/* ---- particles config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 140,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffd900"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 50,
        "duration": 2,
        "opacity": 8,
        "speed": 4
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});