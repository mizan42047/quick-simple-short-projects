import { headerMenuButton, menuOverlay, drawer } from "./helper";
const closeMenu = () => {
	headerMenuButton.classList.toggle("active");
	menuOverlay.classList.toggle("overlay-active");
	drawer.classList.toggle("drawer-active");
}

export default closeMenu;