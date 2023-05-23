import badges from "../data/badges.json" assert { type: "json" };
//import cards from "../data/cards.json" assert { type: "json" };
import interests from "../data/interests.json" assert { type: "json" };
//import langs from "../data/langs.json" assert { type: "json" };
//import music from "../data/music.json" assert { type: "json" };
import socials from "../data/socials.json" assert { type: "json" };
//import stats from "../data/stats.json" assert { type: "json" };

window.onload = () => {
	// badges
	const badgesboxes = document.getElementsByClassName("badges");
	for (const element of badgesboxes) {
		element.innerHTML = "<br>\n";
		for (const item of badges) {
			element.innerHTML += `<a href="${item['link']}">
				<img src="${item['image']}">
			</a><!--${item['name']}-->\n`;
		}
	}

	/*
	/ cards
	const projects = document.getElementById("projects");
	projects.innerHTML = "<br>\n";
	for (const item of cards) {
		let showowner
		if (item[0] == item[1]) {
			let showowner = "false";
		} else {
			let showowner = "true";
		}
		projects.innerHTML += `<a href="https://github.com/${item[0]}/${item[1]}" target="_blank" rel="noopener noreferrer"><img alt="${item[0]}/${item[1]}" src="https://github-readme-stats.vercel.app/api/pin/?username=${item[0]}&repo=${item[1]}&theme=tokyonight&show_owner=${showowner}" class="cards"></a>\n`
	} */
	// interests
	const interestsbox = document.getElementById("interests-box");
	interestsbox.innerHTML = "\n";
	let classes = "";
	let counter = 0;
	for (const item of interests) {
		if (counter == 0) {
			classes = "col-lg-3 col-md-4";
		} else if (counter == 1) {
			classes = "col-lg-3 col-md-4 mt-4 mt-md-0";
		} else if (counter == 2) {
			classes = "col-lg-3 col-md-4 mt-4 mt-md-0";
		} else if (counter == 3) {
			classes = "col-lg-3 col-md-4 mt-4 mt-lg-0";
		} else {
			classes = "col-lg-3 col-md-4 mt-4";
		}
		interestsbox.innerHTML += `<div class="${classes}">
			<div class="icon-box">
				<h3>${item}</h3>
			</div>
		</div>\n`;
		counter++;
	}

	// langs
	// socials
	const socialboxes = document.getElementsByClassName("social-links");
	for (const element of socialboxes) {
		element.innerHTML = "<br>\n";
		for (const item of socials) {
			if (item.length == 2) {
				element.innerHTML += `<a href="${item[1]}" class="${item[0].toLowerCase()}">
					<em class="icofont-${item[0].toLowerCase()}"></em>
				</a><!--${item[0]}-->\n`;
			}
		}
	}

	// stats
};

document.getElementById("age").innerHTML = Math.abs(
	new Date(Date.now() - new Date(2006, 20, 12).getTime()).getUTCFullYear() -
		1969
);

!(($) => {
	"use strict";

	// Nav Menu
	$(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
		if (location.pathname.replace(/^\//, "") ==
			this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname) {
			let hash = this.hash;
			let target = $(hash);
			if (target.length) {
				e.preventDefault();

				if ($(this).parents(".nav-menu, .mobile-nav").length) {
					$(".nav-menu .active, .mobile-nav .active").removeClass("active");
					$(this).closest("li").addClass("active");
				}

				if (hash == "#header") {
					$("#header").removeClass("header-top");
					$("section").removeClass("section-show");
					if ($("body").hasClass("mobile-nav-active")) {
						$("body").removeClass("mobile-nav-active");
						$(".mobile-nav-toggle i").toggleClass(
							"icofont-navigation-menu icofont-close"
						);
						$(".mobile-nav-overly").fadeOut();
					}
					return;
				}

				if (!$("#header").hasClass("header-top")) {
					$("#header").addClass("header-top");
					setTimeout(function () {
						$("section").removeClass("section-show");
						$(hash).addClass("section-show");
					}, 350);
				} else {
					$("section").removeClass("section-show");
					$(hash).addClass("section-show");
				}

				$("html, body").animate(
					{
						scrollTop: 0,
					},
					350
				);

				if ($("body").hasClass("mobile-nav-active")) {
					$("body").removeClass("mobile-nav-active");
					$(".mobile-nav-toggle i").toggleClass(
						"icofont-navigation-menu icofont-close"
					);
					$(".mobile-nav-overly").fadeOut();
				}

				return false;
			}
		}
	});

	// Activate/show sections on load with hash links
	if (window.location.hash) {
		let initial_nav = window.location.hash;
		if ($(initial_nav).length) {
			$("#header").addClass("header-top");
			$(".nav-menu .active, .mobile-nav .active").removeClass("active");
			$(".nav-menu, .mobile-nav")
				.find('a[href="' + initial_nav + '"]')
				.parent("li")
				.addClass("active");
			setTimeout(function () {
				$("section").removeClass("section-show");
				$(initial_nav).addClass("section-show");
			}, 350);
		}
	}

	// Mobile Navigation
	if ($(".nav-menu").length) {
		let $mobile_nav = $(".nav-menu").clone().prop({
			class: "mobile-nav d-lg-none",
		});
		$("body").append($mobile_nav);
		$("body").prepend(
			'<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
		);
		$("body").append('<div class="mobile-nav-overly"></div>');

		$(document).on("click", ".mobile-nav-toggle", function (e) {
			$("body").toggleClass("mobile-nav-active");
			$(".mobile-nav-toggle i").toggleClass(
				"icofont-navigation-menu icofont-close"
			);
			$(".mobile-nav-overly").toggle();
		});

		$(document).click(function (e) {
			let container = $(".mobile-nav, .mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($("body").hasClass("mobile-nav-active")) {
					$("body").removeClass("mobile-nav-active");
					$(".mobile-nav-toggle i").toggleClass(
						"icofont-navigation-menu icofont-close"
					);
					$(".mobile-nav-overly").fadeOut();
				}
			}
		});
	} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
		$(".mobile-nav, .mobile-nav-toggle").hide();
	}

	// jQuery counterUp
	$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
		time: 1000,
	});

	// Skills section
	$(".skills-content").waypoint(
		function () {
			$(".progress .progress-bar").each(function () {
				$(this).css("width", $(this).attr("aria-valuenow") + "%");
			});
		},
		{
			offset: "80%",
		}
	);

	// Testimonials carousel (uses the Owl Carousel library)
	$(".testimonials-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			900: {
				items: 3,
			},
		},
	});

	// Porfolio isotope and filter
	$(window).on("load", function () {
		let portfolioIsotope = $(".portfolio-container").isotope({
			itemSelector: ".portfolio-item",
			layoutMode: "fitRows",
		});

		$("#portfolio-flters li").on("click", function () {
			$("#portfolio-flters li").removeClass("filter-active");
			$(this).addClass("filter-active");

			portfolioIsotope.isotope({
				filter: $(this).data("filter"),
			});
		});
	});

	// Initiate venobox (lightbox feature used in portofilo)
	$(document).ready(function () {
		$(".venobox").venobox({
			share: false,
		});
	});

	// Portfolio details carousel
	$(".portfolio-details-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
	});
})(jQuery);
