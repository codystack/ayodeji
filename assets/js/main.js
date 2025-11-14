(function ($) {
	"use strict";

	$(document).ready(function () {
		//>> Mobile Menu Js Start <<//
		$("#mobile-menu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "1199",
			meanExpand: ['<i class="far fa-plus"></i>'],
		});
		 $('#mobile-menus').meanmenu({
            meanMenuContainer: '.mobile-menus',
            meanScreenWidth: "1920",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

		//>> Sidebar Toggle Js Start <<//
		$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
			$(".offcanvas__info").removeClass("info-open");
			$(".offcanvas__overlay").removeClass("overlay-open");
		});
		$(".sidebar__toggle").on("click", function () {
			$(".offcanvas__info").addClass("info-open");
			$(".offcanvas__overlay").addClass("overlay-open");
		});

		//>> Body Overlay Js Start <<//
		$(".body-overlay").on("click", function () {
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".df-search-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
		});

		//>> Sticky Header Js Start <<//

		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$("#header-sticky").addClass("sticky");
			} else {
				$("#header-sticky").removeClass("sticky");
			}
		});

		//>> Scrolldown Start <<//
        $("#scrollDown").on("click", function () {
            setTimeout(function () {
                $("html, body").animate({ scrollTop: "+=1000px" }, "slow");
            }, 1000);
        });

		//>> Video Popup Start <<//
		$(".img-popup").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});

		$(".video-popup").magnificPopup({
			type: "iframe",
			callbacks: {},
		});

		//>> Counterup Start <<//
		$(".count").counterUp({
			delay: 15,
			time: 4000,
		});

		//>> Brand Slider Start <<//
		if ($(".nano-testimonial-slider").length > 0) {
			const NanoTestimonialSlider = new Swiper(".nano-testimonial-slider", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				breakpoints: {
					1399: {
						slidesPerView: 1,
					},
					1199: {
						slidesPerView: 1,
					},
					991: {
						slidesPerView: 1,
					},
					767: {
						slidesPerView: 1,
					},
					575: {
						slidesPerView: 1,
					},
					400: {
						slidesPerView: 1,
					},
				},
			});
		}



		//>> Brand Slider Start <<//
		if ($(".project-4").length > 0) {
			const Project4 = new Swiper(".project-4", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				breakpoints: {
					1399: {
						slidesPerView: 4,
					},
					1199: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1.5,
					},
					0: {
						slidesPerView: 1.3,
					},
				},
			});
		}

		const testimonialSlider1 = new Swiper(".testimonial-slider1", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1399: {
					slidesPerView: 1,
				},
				1199: {
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 1,
				},
				400: {
					slidesPerView: 1,
				},
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
		//>> Sponsor Start <<//
		const sponsorWrapper = new Swiper(".sponsor-wrapper", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1199: {
					slidesPerView: 5,
				},
				767: {
					slidesPerView: 5,
				},
				575: {
					slidesPerView: 4,
				},
				0: {
					slidesPerView: 2,
				},
			},
		});

		//>> insight Start <<//
		const insightWrapperSlide = new Swiper(".insight-Wrapper", {
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1199: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				500: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		const brandSlider4 = new Swiper(".brand-slider-4", {
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1199: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 4,
				},
				500: {
					slidesPerView: 3,
				},
				0: {
					slidesPerView: 1.3,
				},
			},
		});

		//>> step Start <<//
		const stepWrapperSlide = new Swiper(".step-wrapper-slide", {
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1199: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 14,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 12,
				},
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});

		//>> testimonial Start <<//
		const testimonialSlide3 = new Swiper(".testimonial-Wrapper3", {
			speed: 1500,
			loop: true,
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		const lawProjectSlider = new Swiper(".law-project-slider", {
			speed: 1500,
			loop: true,
			breakpoints: {
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2.5,
				},
				600: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1.2,
				},
			},
		});

		const lawTeamSlider = new Swiper(".law-team-slider", {
			speed: 1500,
			loop: true,
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				1399: {
					slidesPerView: 5,
				},
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3.5,
				},
				767: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1.2,
				},
			},
		});

		const lawServiceImageSlider = new Swiper(".law-service-image-slider", {
			speed: 1500,
			loop: true,

			pagination: {
				el: ".banner-pagination",
				clickable: true,
			},
		});

		//>> Wow Animation Start <<//
		new WOW().init();

		//>> Nice Select Start <<//
		if ($(".single-select").length) {
			$(".single-select").niceSelect();
		}

		//>> Team Hover Image Show Slider Start <<//
       

		//>> Search Popup Start <<//
		const $searchWrap = $(".search-wrap");
		const $navSearch = $(".nav-search");
		const $searchClose = $("#search-close");

		$(".search-trigger").on("click", function (e) {
			e.preventDefault();
			$searchWrap.animate({ opacity: "toggle" }, 500);
			$navSearch.add($searchClose).addClass("open");
		});

		$(".search-close").on("click", function (e) {
			e.preventDefault();
			$searchWrap.animate({ opacity: "toggle" }, 500);
			$navSearch.add($searchClose).removeClass("open");
		});

		function closeSearch() {
			$searchWrap.fadeOut(200);
			$navSearch.add($searchClose).removeClass("open");
		}

		$(document.body).on("click", function (e) {
			closeSearch();
		});

		$(".search-trigger, .main-search-input").on("click", function (e) {
			e.stopPropagation();
		});
	}); // End Document Ready Function

	 document.addEventListener("DOMContentLoaded", function () {
		const legalList = document.querySelectorAll(".legal-list");

		legalList.forEach(item => {
			const targetImage = item.querySelector('.hover-image');

			if (!targetImage) return;

			item.addEventListener("mousemove", (event) => {
				const contentBox = item.getBoundingClientRect();
				const dx = event.clientX - contentBox.left;
				const dy = event.clientY - contentBox.top;

				// Apply transform with rotation
				targetImage.style.transform = `translate(${dx}px, ${dy}px) rotate(15deg)`;
			});

			item.addEventListener("mouseleave", () => {
				// Restore original position with smooth transition
				targetImage.style.transform = `translateY(-50%) rotate(15deg)`;
			});
		});
		});
})(jQuery); // End jQuery