export class View {
	form: HTMLElement;
	containerPlaned: HTMLElement;
	containerInprogres: HTMLElement;
	containerData: HTMLElement;
	constructor() {
		this.form = this.createElement("form");
		this.containerPlaned = this.createElement("div", "container");
		this.containerInprogres = this.createElement("div", "container");
		this.containerData = this.createElement("div", "container");
		this.form.append(
			this.containerPlaned,
			this.containerInprogres,
			this.containerData,
		);
		document.body.append(this.form);
	}
	createElement = (tag: string, cl?: string, text?: string) => {
		const element: HTMLElement = document.createElement(tag);
		if (cl) element.className = cl;
		if (text) element.textContent = text;
		return element;
	};
	getElement = (selector: string) => {
		const element = document.querySelector(selector);
		return element;
	};
}
