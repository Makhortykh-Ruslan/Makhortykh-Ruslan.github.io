const sliderStripe = document.querySelector('.slider-stripe');
sliderStripe.addEventListener('click', (event) =>{
    if (event.target === event.currentTarget) return;

    // const siblings = event.target.parentNode.children;
    //
    // for (let img of siblings) {
    //     img.classList.remove('active');
    // }

    [...event.target.parentNode.children].forEach(img => img.classList.remove('active'));

    event.target.classList.add('active');
    changeInfo()
})

const errowLeft = document.querySelector('.pref');

errowLeft.addEventListener('click', (event) =>{
    const imagesPref = [...document.querySelectorAll('.slider-photos')];
    const activeImgIndex = imagesPref.findIndex(img => img.classList.contains('active'));

    let nextActiveImgIndex;
    if (activeImgIndex === 0) {
        nextActiveImgIndex = imagesPref.length - 1;
    } else {
        nextActiveImgIndex = activeImgIndex - 1;
    }

    imagesPref[activeImgIndex].classList.remove('active');
    imagesPref[nextActiveImgIndex].classList.add('active');
    changeInfo()
})

const errowRight = document.querySelector('.next');

errowRight.addEventListener('click', (event) =>{
    const imagesPref = [...document.querySelectorAll('.slider-photos')];
    const activeImgIndex = imagesPref.findIndex(img => img.classList.contains('active'));

    let nextActiveImgIndex;
    if (activeImgIndex === imagesPref.length - 1) {
        nextActiveImgIndex = 0;
    } else {
        nextActiveImgIndex = activeImgIndex + 1;
    }

    imagesPref[activeImgIndex].classList.remove('active');
    imagesPref[nextActiveImgIndex].classList.add('active');
    changeInfo();
})

function changeInfo() {
    const images = [...document.querySelectorAll('.slider-photos')];

    const activeImgIndex = images.findIndex( img => img.classList.contains('active'));

    const feedBack = [...document.querySelectorAll('.feedback-content')];
    feedBack.forEach(x => x.classList.remove('feedback-content-active'));
    feedBack[activeImgIndex].classList.add('feedback-content-active');

}




