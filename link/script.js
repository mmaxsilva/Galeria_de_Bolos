let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000);

function nextImage(){
    count++;
    if(count > 9){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function openModal(){
    const modal = document.getElementById('modal-conteiner');
    const modalImg = document.getElementById('modal-img');
    const images = document.querySelectorAll('.slide img');

    images.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
        })
    })

    modal.classList.add('open');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'close' || e.target.id == 'modal-conteiner'){
            modal.classList.remove('open')
        }
    })
}