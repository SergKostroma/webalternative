// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {

  var cardModal = new bootstrap.Modal( $('#card-detail-modal') )
  $('.js-card').on('click', function (){
    cardModal.show()
  })

})

const swiper = new Swiper('.swiper', {

	slidesPerView: 1,

	breakpoints: {
        768:{
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		}
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
});

const swiperTwo = new Swiper('.swiper-features', {
	slidesPerView: 1,

})

const firstSlide = document.querySelector('#secure')
firstSlide.addEventListener('click',gotoFirst)
function gotoFirst(){
	swiperTwo.slideTo(0)
}

const secondSlide = document.querySelector('#CRM')
secondSlide.addEventListener('click',gotoSecond)
function gotoSecond(){
	swiperTwo.slideTo(1)
}

const thirdSlide = document.querySelector('#pay')
thirdSlide.addEventListener('click',gotoThird)
function gotoThird(){
	swiperTwo.slideTo(2)
}



