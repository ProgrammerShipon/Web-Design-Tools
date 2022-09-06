// const [current, imgs] = [document.querySelector('.img_view'), document.querySelectorAll('.imgs img')];

// imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)))

var current = document.querySelector('.img_view')
var imgs = document.querySelectorAll('.imgs img')

//default opacity
const opacity = 0.4
//set first Image   opacity
imgs[0].style.opacity = opacity;

imgs.forEach(function(img){

   img.addEventListener('click', function(e){
      //reset opacity 
       imgs.forEach(img => (img.style.opacity = 1));
       //current image src change
      current.src = e.target.src;
      //change current opacity
      e.target.style.opacity = opacity;

      // add fade in class
      current.classList.add('fade-in');
      //remove fadein after 2 seconds
      setTimeout(function(){
         current.classList.remove('fade-in')
      }, 2000)
   })
})
