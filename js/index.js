window.addEventListener('scroll', function(e) {
	// showHideNav()
})

// // navbar script 
// let prevScrollpos = window.pageYOffset;
// // show and hide navbar
// function showHideNav() {
// 	let currentScrollPos = window.pageYOffset;
// 	if (prevScrollpos > currentScrollPos) {
// 		document.getElementById("navbar").style.top = "0";
// 	} else {
// 		document.getElementById("navbar").style.top = "-65px";
// 	}
// 	prevScrollpos = currentScrollPos;
// }
window.addEventListener('load', function(){
	function snows(){
		const animasi = document.querySelector('#animasi')
		const snow = document.createElement('i')
		snow.classList.add('fas')
		snow.classList.add('fa-snowflake')
		snow.style.left = Math.random() * window.innerWidth + 'px'
		snow.style.animationDuration = Math.random() * 3 + 2 + 's'
		snow.style.opacity = Math.random()
		snow.style.fontSize = Math.random() * 10 + 10 + 'px'
	
		animasi.appendChild(snow)
	
		setTimeout(() => {
			snow.remove()
		}, 5000)
	
	}
	setInterval(() => {
		snows()
	}, 100);
})
