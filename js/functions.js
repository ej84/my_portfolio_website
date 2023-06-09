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


/* Auto Typing Animation in Repeat */

var txt_type = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

txt_type.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var full_txt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = full_txt.substring(0, this.txt.length - 1);
  } else {
  this.txt = full_txt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === full_txt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new txt_type(elements[i], JSON.parse(toRotate), period);
      }
  }
};


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

/* This triggers the count number animation when skill-tab is clicked. */

const tabToClick = document.querySelector(".skill-tab");

tabToClick.addEventListener("click", function() {

  var numbers = document.querySelectorAll(".count2");

  for(var i=0; i < numbers.length; i++) {

    count_number(numbers[i], 0, numbers[i].innerText, 1200);
  
  }

});


/* Shows Progress Bars moving in skills. */

function show_progress() {
  
  var progress_bars = document.querySelectorAll('.skills .progress-bars .progress-bar .progress-con .progress .progress-display');

  for (var i = 0; i < progress_bars.length; i++) {
    
    progress_bars[i].classList.add("active");

  }
}

/* Circle Cursor Following */

jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 27;
    mouseY = e.pageY - 29; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, -1);

});

/* Navbar Scroll */

$(window).scroll(function() {
  if ($(document).scrollTop() > 800) {
    $('.navbar').addClass('color-change');
  } else {
    $('.navbar').removeClass('color-change');
  }
}); 

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