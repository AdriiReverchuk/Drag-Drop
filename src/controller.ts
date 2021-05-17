import { Model } from "./model";
import { View } from "./view";
export class Controller {
	model: Model;
	view: View;
	constructor(view: View, model: Model) {
		this.view = view;
		this.model = model;
		this.view.renderTastks(this.model.getData());
	}
}
