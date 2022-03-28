const imagesAll = document.querySelectorAll('.gallery-tabs img');
console.log(imagesAll);

imagesAll.forEach(image=>{
image.addEventListener('click', function(){
    image.classList.remove('normal')
    image.classList.add('show')
})
image.addEventListener('mouseleave', function(){
    image.classList.remove('show')
    image.classList.add('normal')
})
})