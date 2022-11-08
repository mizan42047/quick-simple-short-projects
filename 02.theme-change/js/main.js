class ThemeChoose {
	constructor() {
		const colorsWrapper = document.querySelector(".header__colors");
		colorsWrapper.addEventListener("click", (event) => {
			this.init(event);
		})

		this.beforeInit();
	}

	beforeInit() {
		const savedData = this.#getSaveDataFromLocal();
		if (savedData != undefined) {
			const colorsCircle = document.querySelectorAll(`.header__colors--circle`);
			const savedElement = document.querySelector(`.header__colors--circle[data-color="${savedData}"]`);
			colorsCircle.forEach((element) => {
				if (element.classList.contains("header__colors--active")) {
					element.classList.remove("header__colors--active");
				}
			})

			savedElement.classList.add("header__colors--active");
			this.#generateCSS(savedData);
		}
	}

	init(event) {
		let selectedColor = this.getSelectedColor(event);
		this.#setScaleinCurrentElement(event.target);
		this.#saveDatainLocalStorage(selectedColor);
		this.#generateCSS(selectedColor);
	}

	getSelectedColor(event) {
		this.currentSelectedColor = event.target.dataset.color ? event.target.dataset.color : undefined;
		return this.currentSelectedColor;
	}

	#setScaleinCurrentElement(element) {
		if (typeof this.currentSelectedColor === "string") {
			const colorsCircle = document.querySelectorAll(".header__colors--circle");
			colorsCircle.forEach((element) => {
				element.classList.remove("header__colors--active");
			})
			element.classList.add("header__colors--active");
		}
	}

	#generateCSS(selectedColor) {
		const head = document.head;
		let style = head.querySelector(".theme-color-style");
		let finalCSS;
		if (typeof selectedColor === "string" && selectedColor != undefined) {
			switch (selectedColor) {
				case "green":
					finalCSS = this.#getCSSroot(this.#setCSSVariable("#1d8100"));
					break;
				case "red":
					finalCSS = this.#getCSSroot(this.#setCSSVariable("#ad0303"));
					break;
				case "blue":
					finalCSS = this.#getCSSroot(this.#setCSSVariable("#000f94"));
					break;
				default:
					finalCSS = this.#getCSSroot(this.#setCSSVariable("#050444"));
			}
		}

		if (style && style.classList.contains("theme-color-style")) {
			style.remove();
			head.insertAdjacentHTML("beforeend", finalCSS);
		} else {
			head.insertAdjacentHTML("beforeend", finalCSS);
		}
	}

	#setCSSVariable(value) {
		return `--theme-color : ${value}`;
	}

	#getCSSroot(value) {
		return (`
			<style class="theme-color-style">
				:root{
					${value}
				}
			</style>
		`);
	}

	#saveDatainLocalStorage(data) {
		return data ? localStorage.setItem("theme", data) : "";
	}

	#getSaveDataFromLocal() {
		return localStorage.getItem("theme");
	}

}

let themeChoose = new ThemeChoose();
