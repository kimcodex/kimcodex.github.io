var preload = document.getElementById('preloader');
		
window.addEventListener('load', function () {
	setInterval(function(){
		preload.style.display = 'none';
	}, 1500);
		
})