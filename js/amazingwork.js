const itemsWork = {
    'graphic design': ['./images/graphic/graphic-design1.jpg',
        './images/graphic/graphic-design2.jpg',
        './images/graphic/graphic-design3.jpg',
        './images/graphic/graphic-design4.jpg',
        './images/graphic/graphic-design5.jpg',
        './images/graphic/graphic-design6.jpg',
        './images/graphic/graphic-design7.jpg',
        './images/graphic/graphic-design8.jpg',
        './images/graphic/graphic-design9.jpg',
        './images/graphic/graphic-design10.jpg',
        './images/graphic/graphic-design12.jpg',
        './images/graphic/graphic-design11.jpg',
    ],
    'web design': [
        './images/web/web-design1.jpg',
        './images/web/web-design2.jpg',
        './images/web/web-design3.jpg',
        './images/web/web-design4.jpg',
        './images/web/web-design5.jpg',
        './images/web/web-design6.jpg',
        './images/web/web-design7.jpg',
        './images/web/web-design1.jpg',
        './images/web/web-design2.jpg',
        './images/web/web-design3.jpg',
        './images/web/web-design4.jpg',
        './images/web/web-design5.jpg',

    ],
    'wordpress': ['./images/wordpress/wordpress1.jpg',
        './images/wordpress/wordpress2.jpg',
        './images/wordpress/wordpress3.jpg',
        './images/wordpress/wordpress4.jpg',
        './images/wordpress/wordpress5.jpg',
        './images/wordpress/wordpress6.jpg',
        './images/wordpress/wordpress7.jpg',
        './images/wordpress/wordpress8.jpg',
        './images/wordpress/wordpress9.jpg',
        './images/wordpress/wordpress10.jpg',

    ],
    'all': [
        './images/work/photo1.png',
        './images/work/photo2.png',
        './images/work/photo3.png',
        './images/work/photo4.png',
        './images/work/photo5.png',
        './images/work/photo6.png',
        './images/work/photo8.png',
        './images/work/photo7.png',
        './images/work/photo9.png',
        './images/work/photo11.png',
        './images/work/photo1.png',
        './images/work/photo11.png',

    ],
    'design': [
        './images/web/web-design6.jpg',
        './images/web/web-design1.jpg',
        './images/web/web-design4.jpg',
        './images/web/web-design3.jpg',
        './images/web/web-design5.jpg',
        './images/web/web-design6.jpg',
        './images/web/web-design7.jpg',]
}
const workItems = document.querySelectorAll('.items-work');


workItems.forEach(item => {
    item.addEventListener('click', (element) => {
        const clickItems = document.querySelector('.click-item');
        if (clickItems) {
            clickItems.classList.remove('click-item');

        }
        item.classList.add('click-item');
        photoItems(itemsWork[item.innerText.toLowerCase()]);
    })


});

function photoItems(arry) {
    const photosElement = document.querySelector('.photos-work');

    photosElement.innerHTML = '';
    arry.forEach(element => {
        photosElement.innerHTML +=
            `
             <div class="photos-items">

                    <img src="${element}" alt="" class="photos-item-work">

                    <div class="photos-hover">
                        <i class="fas fa-link gallery-image-icons-prop"></i>
                        <i class="fas fa-search hover-photos"></i>
                        <p class="photos-hover-text">creative design</p>
                        <p class="photos-hover-tex-part">Web Design</p>
                    </div>

                </div>
            `
    })
}

const showImages = document.getElementById('show-work');
const buttonShow = document.querySelector('.photos-work');

showImages.addEventListener('click', (element) => {
    function show(arry) {
        arry.forEach(element => {
            buttonShow.innerHTML += `
             <div class="photos-items">

                    <img src="${element}" alt="" class="photos-item-work">

                    <div class="photos-hover">
                        <i class="fas fa-link gallery-image-icons-prop"></i>
                        <i class="fas fa-search hover-photos"></i>
                        <p class="photos-hover-text">creative design</p>
                        <p class="photos-hover-tex-part">Web Design</p>
                    </div>

                </div>`
        })
    }

    console.log(element);
    show(itemsWork.all)

    showImages.style.display = 'none';
});


