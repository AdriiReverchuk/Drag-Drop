import { DataInterface } from "./model";
import { ModelInterface } from "./model";

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
	renderTastks(fun: ModelInterface) {
		fun.getData().forEach((data) => {
			this.createTaskContainer(data);
		});
	}
	createTaskContainer(data: DataInterface): void {
		const container = this.createElement("div", "task-container");
		const title = this.createElement("h3", "task-title", data.title);
		const description = this.createElement(
			"p",
			"description",
			data.description,
		);
		const date = this.createElement("p", "date", data.deadline);
		container.append(title, description, date);
		this.getElement(".container")?.append(container);
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
