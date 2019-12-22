window.onload = function () {
    document.getElementById('active-button').addEventListener('click', showImages);

    function showImages(event) {
        console.log(event);

            const data = event.target.getAttribute('data');
            const active = document.getElementsByClassName('show');
            for (let i = 0; i < active.length; i++){
                if(data==i){
                    active[i].style.display = 'block';
                }
            }
        }



}


