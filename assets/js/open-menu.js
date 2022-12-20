import { drawer, menuOverlay, headerMenu, mobileMenuContainer } from "./helper";
export default function openMenu(){
	this.classList.toggle("active");
	drawer.classList.toggle("drawer-active");
	menuOverlay.classList.toggle("overlay-active");
	let cloneMenu = headerMenu.cloneNode(true);
	const mobileMenu = document.querySelector(".mobile-menu-container .header-menu");
	if(!mobileMenu){
		mobileMenuContainer.appendChild(cloneMenu);
	}
}