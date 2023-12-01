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


$('document').ready(function(){
	$('.slider_portfolio').slick({
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });

  $('.slider_testimonial').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider_counter_testimonial, .slider_images_authors_testimonials",
  });

  $('.slider_counter_testimonial').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    wariableWidth: true,
    asNavFor: ".slider_testimonial, .slider_images_authors_testimonials",
    
  });

  $('.slider_images_authors_testimonials').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    wariableWidth: true,
    asNavFor: ".slider_testimonial, .slider_counter_testimonial",
  });


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




/*const filterBox = document.querySelectorAll('.slider_portfolio');
console.log(filterBox);

document.querySelector('.list_category_portfolio').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['f'];

	filterBox.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass)) {
			elem.classList.add('hide');
		}
	});
});*/

const filterBox = document.querySelectorAll('.slider_portfolio');
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