function pageLoad() {
	$(".hamburgerDropdown").css("top", "-500px");
	var hamburger = document.createElement("input");
	hamburger.type = "image";
	hamburger.src = "img/hamburger.png";
	hamburger.onclick = toggleHamburger;
	hamburger.className = "hamburger";
	$("#mobilenav").append(hamburger);
}

//Logic for the hamburger menu in the mobile version.
var hamburgerOpen = false;
function toggleHamburger() {
	if (!hamburgerOpen) {
		$(".hamburgerDropdown").stop(true, true);
		$(".hamburgerDropdown").animate({
			top: '57px'
		});
	}
	else {
		$(".hamburgerDropdown").stop(true, true);
		$(".hamburgerDropdown").animate({
			top: '-500px'
		});
	}
	hamburgerOpen = !hamburgerOpen;
}
