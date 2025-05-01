//Для выподающего под-меню

"use strict"

const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android() || 
			isMobile.BlackBerry() || 
			isMobile.iOS() || 
			isMobile.Opera() || 
			isMobile.Windows());
	}
};

//if(isMobile.iOS()) {
// Любые манипуляции при определении мобильного устройства на операционной системе от Apple: iOS
//}

//if(isMobile.any()) {
// Любые манипуляции при определении айфона
// Доступны следующие условия для операционных систем
// isMobile.Android() - устройство на Андроиде
// isMobile.BlackBerry() - устройство на BlackBerry
// isMobile.iOS() - устройство на iOS
// isMobile.Opera() - устройство, использующее Opera Mini
// isMobile.Windows() - устройство на Windows
// isMobile.any() - устройство на любой мобильной платформе
//}

//Выподающее под-меню

if (isMobile.any()) {
	document.body.classList.add('_touch');

	//Первым делом собираю в переменную все наши стрелочки - их может быть не 1
	let menuArrows = document.querySelectorAll('.menu_arrow');

	//Проверяю есть ли у нас вообще эти стрелочки в массиве
	if (menuArrows.length > 0) {
		//Если такие стрелки у нас есть, то я запускаю цыкл и прохожусь по всем этим стрелочкам
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			//Далее мы на каждую стрелочку навешиваем событие клик
			menuArrow.addEventListener("click", function (e) {
				//И при клике на стрелочку мы присваиваем класс _active родителю этой стрелочки
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



let scroller = document.scrollingElement;

// Force scrollbars to display
scroller.style.setProperty('overflow', 'scroll');

// Wait for next from so scrollbars appear
requestAnimationFrame(()=>{
  
  // True width of the viewport, minus scrollbars
  scroller.style
    .setProperty(
      '--vw', 
      scroller.clientWidth / 100
    );

  // Width of the scrollbar
  scroller.style
    .setProperty(
      '--scrollbar-width', 
      `${window.innerWidth - scroller.clientWidth}px`
    );

  // Reset overflow
  scroller.style
    .setProperty(
      'overflow', 
      ''
    );
});

console.log(window.innerWidth);
console.log(scroller.clientWidth);



/*swiper slider_portfolio*/
var sliderPortfolio = new Swiper('.slider_portfolio_container', {
	navigation: {
		prevEl: '.slider_portfolio_button_prev',
    	nextEl: '.slider_portfolio_button_next',
	},
	pagination: {
		el: '.slider_portfolio_pagination',
		//Буллеты
		type: 'bullets',
		//Активация клика на булиты
		clickable: true,
		//Динамические булиты
		dynamicBullets: true,
	},
	// Колличество слайдов для показа
	slidesPerView: 3,
	// Отключение функционала,
	// если слайдов меньше чем нужно
	watchOverflow: false,
	// Обновить слайдер при изменении
	// элементов слайдера
	observer: true,
	// Обновить слайдер при изменении родительских
	// элементов слайдера
	observeParents: true,
	// Обновить Swiper при изменении дочерних
	// элементов слайдера
	observeSlideChildren: true,
	// Отступ между слайдами
	spaceBetween: 24,
	// Включить выключить бесконечный слайдер
	loop: false,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
});

var sliderImagesTestimonials = new Swiper('.slider_images_authors_testimonials_container', {
	
});

var sliderContentTestimonials = new Swiper('.slider_testimonials_container', {
	navigation: {
		prevEl: '.slider_testimonials_button_prev',
    	nextEl: '.slider_testimonials_button_next',
	},
	pagination: {
		el: '.slider_testimonials_pagination',
		//Буллеты
		type: 'bullets',
		//Активация клика на булиты
		clickable: true,
		//Динамические булиты
		dynamicBullets: true,
	},
});

//Передача управления(если слайдов в обоих слайдерах одинаковое колличество)
sliderImagesTestimonials.controller.control = sliderContentTestimonials;
sliderContentTestimonials.controller.control = sliderImagesTestimonials;

// Фракция
let mySliderAllSlides = document.querySelector('.slider_testimonial_total');
let mySliderCurrentSlide = document.querySelector('.slider_testimonial_current');

if (mySliderAllSlides && mySliderCurrentSlide) {
	mySliderAllSlides.innerHTML = sliderContentTestimonials./*slides*/snapGrid.length < 10 ? `0${sliderContentTestimonials./*slides*/snapGrid.length}` : sliderContentTestimonials./*slides*/snapGrid.length;

	sliderContentTestimonials.on('slideChange', function (swiper) {
		let currentSlide = sliderContentTestimonials.realIndex + 1 < 10 ? `0${sliderContentTestimonials.realIndex + 1}` : sliderContentTestimonials.realIndex + 1;
		mySliderCurrentSlide.innerHTML = currentSlide;
	});
}

$('document').ready(function(){
  /*spollers*/
  $('.block_title_spollers').click(function(event) {
		if($('.block_spollers').hasClass('one')) {
			$('.block_title_spollers').not($(this)).removeClass('spoller_active');
			$('.block_text_spollers').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('spoller_active').next().slideToggle(300);
	});

  $('.block_item_spoller').click(function(event) {
    if($('.block_spollers').hasClass('one')) {
			$('.block_item_spoller').not($(this)).removeClass('spoller_active');
		}
		$(this).addClass('spoller_active');
  });
});




const filterBox = document.querySelectorAll('.slider_portfolio_container');
const listItemActive = document.querySelectorAll('.list_item_portfolio');

document.querySelector('.list_category_portfolio').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['f'];

	filterBox.forEach(elem => {
    let sliderData = elem.getAttribute('data-slider');

		elem.classList.remove('hide');
		if (sliderData !== filterClass) {
			elem.classList.add('hide');
		}
	});

  listItemActive.forEach(elemlistItemActive => {
    elemlistItemActive.classList.remove('list_item_portfolio_active');
  });
  event.target.classList.add('list_item_portfolio_active');
});