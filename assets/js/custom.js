(function($) {
	'use strict';
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 150) {
			$('.navbar-area').addClass("sticky-nav");
		} else {
			$('.navbar-area').removeClass("sticky-nav");
		}
	});
	$('.banner-into-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		rtl: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
	$('.service-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		rtl: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<i class='bx bxs-chevron-left'></i>", "<i class='bx bxs-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
	$('#tabs-item li a').on('click', function(e) {
		$('#tabs-item li, #prices-content .active').removeClass('active').removeClass('fadeInUp');
		$(this).parent().addClass('active');
		var activeTab = $(this).attr('href');
		$(activeTab).addClass('active fadeInUp');
		e.preventDefault();
	});
	$('.testimonial-slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 30,
		rtl: true,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<i class='bx bxs-chevron-left'></i>", "<i class='bx bxs-chevron-right'></i>"],
	})
	$('.home-slider').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		rtl: true,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<i class='bx bxs-chevron-left'></i>", "<i class='bx bxs-chevron-right'></i>"],
	})
	$('.product-images-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		rtl: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt' ></i>"],
		responsive: {
			0: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	})
	$('.testimonial-slider-two').owlCarousel({
		loop: true,
		items: 1,
		margin: 30,
		nav: true,
		rtl: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<i class='bx bxs-chevron-left'></i>", "<i class='bx bxs-chevron-right'></i>"],
	})
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li a').on('click', function(g) {
		var tab = $(this).closest('.tab'),
			index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});
	$('.service-dtls-slider').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		nav: true,
		rtl: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<i class='bx bxs-chevron-left'></i>", "<i class='bx bxs-chevron-right'></i>"],
	})
	$('.accordion').find('.accordion-title').on('click', function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-content').not($(this).next()).slideUp('fast');
		$('.accordion-title').not($(this)).removeClass('active');
	});

	function makeTimer() {
		var endTime = new Date("july  30, 2021 17:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		$("#days").html(days + "<span>روز</span>");
		$("#hours").html(hours + "<span>ساعت</span>");
		$("#minutes").html(minutes + "<span>دقیقه</span>");
		$("#seconds").html(seconds + "<span>ثانیه</span>");
	}
	setInterval(function() {
		makeTimer();
	}, 300);
	$('select').niceSelect();
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
			input = spinner.find('input[type="text"]'),
			btnUp = spinner.find('.plus-btn'),
			btnDown = spinner.find('.minus-btn'),
			min = input.attr('min'),
			max = input.attr('max');
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});
	$(".newsletter-form").validator().on("submit", function(event) {
		if (event.isDefaultPrevented()) {
			formErrorSub();
			submitMSGSub(false, "لطفا ایمیل را به درستی وارد کنید");
		} else {
			event.preventDefault();
		}
	});

	function callbackFunction(resp) {
		if (resp.result === "success") {
			formSuccessSub();
		} else {
			formErrorSub();
		}
	}

	function formSuccessSub() {
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "از اشتراک شما متشکریم!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}

	function formErrorSub() {
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}

	function submitMSGSub(valid, msg) {
		if (valid) {
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	$(".newsletter-form").ajaxChimp({
		url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
		callback: callbackFunction
	});
	$('body').append('<div id="toTop" class="top-btn"><i class="bx bx-chevrons-up"></i></div>');
	$(window).on('scroll', function() {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').on('click', function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	jQuery(window).on('load', function() {
		jQuery(".preloader").fadeOut(500);
	});
})(jQuery);

/* assets/js/cmp-tabs.js */
(() => {
  function activate(root, id) {
    const tabs = root.querySelectorAll('.cmp-tab');
    const panels = root.querySelectorAll('.prices-content-area');

    panels.forEach(p => {
      const on = '#'+p.id === id;
      p.toggleAttribute('hidden', !on);
      p.classList.toggle('active', on);
    });

    tabs.forEach(a => {
      const on = a.getAttribute('href') === id;
      a.classList.toggle('is-active', on);
      a.parentElement.classList.toggle('active', on);
      a.setAttribute('aria-selected', on ? 'true' : 'false');
      a.setAttribute('tabindex', on ? '0' : '-1');
    });
  }

  function init() {
    const root = document.querySelector('.cmp-modern') || document;
    if (!root) return;
    const tabs = root.querySelectorAll('.cmp-tab');
    const current = root.querySelector('.cmp-tab.is-active') || tabs[0];
    if (!current) return;

    activate(root, current.getAttribute('href'));

    tabs.forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        activate(root, a.getAttribute('href'));
      });
      a.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(root, a.getAttribute('href'));
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(() => {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
})();
