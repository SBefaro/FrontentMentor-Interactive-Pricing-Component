// Define variables

const pageView = document.querySelector('.details__number');
const price = document.querySelector('.price');
const sliderBar = document.querySelector('.slider');
const billingToggle = document.querySelector('.billing');
const pageViews = ['10K','50K','100K','500K','1M'];
const prices = [8,12,16,24,36];
let isYearly = false;


// Event Listeners

sliderBar.addEventListener('input', function(){
    updateValues()
    pageView.innerText = pageViews[sliderBar.value]

    let colorValue = (sliderBar.value/(prices.length - 1))*100
    sliderBar.style.background = `linear-gradient(90deg,
        var(--Full-Slider-Bar) 0%,
        var(--Full-Slider-Bar) ${colorValue}%,
        var(--Empty-Slider-Bar) 0%,
        var(--Empty-Slider-Bar) 100%
        )`
})

billingToggle.addEventListener('change', toggle)

// Functions

function toggle(){
    isYearly = !(isYearly);
    updateValues();
}


function updateValues(){
    if(isYearly){
        price.innerText = prices[sliderBar.value]*0.75
    }
    else{
        price.innerText = prices[sliderBar.value]
    }
}