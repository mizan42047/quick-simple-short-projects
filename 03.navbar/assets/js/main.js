import closeMenu from "./close-menu";
import openMenu from "./open-menu";
import { drawerCloseButton, menuOverlay, headerMenuButton } from "./helper";

drawerCloseButton.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);
headerMenuButton.addEventListener("click", openMenu)




