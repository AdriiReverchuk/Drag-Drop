export interface ModelInterface {
	getData: () => DataInterface[];
}
export interface DataInterface {
	id: number;
	title: string;
	description: string;
	deadline: string;
}
export class Model {
	private data: DataInterface[];
	constructor() {
		this.data = [
			{
				id: 1,
				title: "firstTask",
				description: "dsfsdf",
				deadline: "20.04.2020",
			},
			{
				id: 1,
				title: "secondTask",
				description: "dsfsdf",
				deadline: "25.05.2020",
			},
		];
		console.log(this.data);
	}
	getData(): DataInterface[] {
		return this.data;
	}
}
