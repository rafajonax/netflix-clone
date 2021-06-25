// window.onload = init;

(() => {
	const numberOfPosters = 58;
	const imagesPerCarousel = 20;
	let images = "";
	// let carousels = 0;
	for (let i = 0; i < numberOfPosters; i++) {
		images += `<div class="item"><img class="movie-box" src="/img/posters/poster_${i}.jpeg"></div>`;
		if ((i !== 0 && i % imagesPerCarousel === 0) || i === numberOfPosters - 1) {
			const div = document.createElement("div");
			div.classList.add("owl-carousel", "owl-theme", "movie-carousel");
			div.innerHTML = images;
			images = "";
			document.querySelector("#posters").appendChild(div);
		}
	}

	$(".owl-carousel").owlCarousel({
		autoplay: true, 
		margin: 60, 
		autoWidth: true, 
		autoplayTimeout: 4000,
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		// responsive: {
		// 	0: {
		// 		items: 1,
		// 	},
		// 	720: {
		// 		items: 2,
		// 	},
		// 	660: {
		// 		items: 2,
		// 	},
		// 	880: {
		// 		items: 3,
		// 	},
		// 	1100: {
		// 		items: 4,
		// 	},
		// 	1320: {
		// 		items: 6,
		// 	},
		// 	1540: {
		// 		items: 7,
		// 	},
		// },
	});
})();


// to download images in inspect
// (() => {
// 	let counter = 0;
// 	const imgs = [
// 		...new Set(
// 			[...document.querySelectorAll("img.poster")].map(
// 				(img) => img.src.split("org/")[1]
// 			)
// 		),
// 	].forEach((src) => {
// 		var a = document.createElement("a");
// 		a.href = src;
// 		a.download = `poster_${counter++}`;
// 		document.body.appendChild(a);
// 		setTimeut(() => a.click(), counter * 100);
// 		document.body.removeChild(a);
// 	});
// })();
