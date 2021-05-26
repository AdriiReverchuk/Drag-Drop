export interface ModelInterface {
   getData: () => DataInterface[];
}
export interface DataInterface {
   id: number;
   title: string;
   description: string;
   deadline: Date;
}
export class Model {
   private data: DataInterface[];
   constructor() {
      this.data = [
         {
            id: 1,
            title: "First Task",
            description: "Learn 10 english words",
            deadline: new Date(2021, 3, 12),
         },
         {
            id: 2,
            title: "Second Task",
            description: "check mail",
            deadline: new Date(2021, 9, 12),
         },
         {
            id: 3,
            title: "Third Task",
            description: "call doctor",
            deadline: new Date(2021, 5, 12),
         },
      ];
      console.log(this.data);
   }
   getData(): DataInterface[] {
      return this.data;
   }
}
