const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false;

window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > container.offsetTop - container.offsetHeight - 200 && !activated) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;
            const target = parseInt(counter.dataset.count);
     // Increase increment speed for Professional Lecturers
     const incrementSpeed = (counter.classList.contains('professional-lecturers')) ? 10 : 1; // Set to 20 for faster counting
            function updateCount() {
                if (count < target) {
                  
                    count += incrementSpeed;
                    
                    if (counter.id === "k") {
                        counter.innerText = count+"k"+"+"; // Format for graduated students
                    } else {
                        counter.innerText = count +"+";
                    }
                    requestAnimationFrame(updateCount);
                } else {
                    if (counter.id === "k") {
                        counter.innerText = target + "k"+"+"; // Final format for graduated students
                    } else {
                        counter.innerText = target +"+";
                    }
                }
            }
            updateCount();
            activated = true;
        });
    } else if ((scrollPosition < container.offsetTop - container.offsetHeight - 500 || scrollPosition === 0) && activated) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});
//slider
let currentIndex = 0;

function nextSlide() 
{
    const slider = document.getElementById('slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 30; // Including margin
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    currentIndex++;
    if (currentIndex * cardWidth > maxScroll) 
    {
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function prevSlide() 
{
    const slider = document.getElementById('slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 30; // Including margin

    currentIndex--;
    if (currentIndex < 0) 
    {
        currentIndex = Math.floor(slider.scrollWidth / cardWidth) - 1;
    }

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

//slider2
const slider2 = document.getElementById('slider2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');

function nextSlide2() {
    const sliderWidth2 = slider2.scrollWidth / slider2.childElementCount;
    slider2.scrollBy({ left: sliderWidth2, behavior: 'smooth' });
}

function prevSlide2() {
    const sliderWidth2 = slider2.scrollWidth / slider2.childElementCount;
    slider2.scrollBy({ left: -sliderWidth2, behavior: 'smooth' });
}

nextBtn2.addEventListener('click', nextSlide2);
prevBtn2.addEventListener('click', prevSlide2);

//news
function openTab(evt, tabName) {
    // Hide all tabcontent elements
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the active class from all tablinks
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the selected tabcontent and add the active class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Initialize the first tab to be shown on page load
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("tablinks")[0].click();
  });