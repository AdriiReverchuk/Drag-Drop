import { DataInterface } from "./model";
import * as shortid from "shortid";

export class View {
   form: HTMLElement;
   containerPlaned: HTMLElement;
   containerInprogres: HTMLElement;
   containerData: HTMLElement;
   dropZones;
   constructor() {
      this.form = this.createElement("form");
      this.containerPlaned = this.createElement("div", "container");
      this.containerInprogres = this.createElement("div", "container");
      this.containerData = this.createElement("div", "container");
      this.form.append(
         this.containerPlaned,
         this.containerInprogres,
         this.containerData
      );
      document.body.append(this.form);
      this.dropZones = document.getElementsByClassName("container");
      console.log(this.dropZones);
   }
   dragAndDrop() {
      this.form.addEventListener("click", (evt: Event) => {
         const elem = <HTMLElement>evt.target;
         if ((<HTMLElement>elem.parentNode).className === "task-container") {
            const idEl = (<HTMLElement>elem.parentNode).id;
            const draggableElement = this.getElement(`#${idEl}`);
            draggableElement?.addEventListener("dragstart", this.onDragStart);
         }
      });
      if (this.dropZones) {
         for (let i = 0; i < this.dropZones.length; i++) {
            this.dropZones[i].addEventListener("dragover", this.dragOver);
            this.dropZones[i].addEventListener("drop", this.onDrop);
         }
      } else {
         throw new Error("Drop zone not found");
      }
   }
   onDragStart = (event: DragEvent): any => {
      event.dataTransfer?.setData("text/plain", (event.target as Element).id);
      console.log("dragStart");
   };
   dragOver = (event: Event) => {
      event.preventDefault();
   };
   onDrop = (event: DragEvent): any => {
      const id = event.dataTransfer?.getData("text/plain");
      if (id) {
         const draggableElem = document.getElementById(id);
         if (draggableElem) {
            const dropZone = event.target as HTMLElement;
            dropZone.append(draggableElem);
            event.dataTransfer?.clearData();
         }
      }
   };
   renderTastks(arr: any) {
      arr.forEach((data: DataInterface) => {
         this.createTaskContainer(data);
      });
   }
   createTaskContainer(data: DataInterface): void {
      const container = this.createElement("div", "task-container");
      const Uid = shortid.generate();
      container.id = Uid;
      const title = this.createElement("h3", "task-title", data.title);
      const description = this.createElement(
         "p",
         "description",
         data.description
      );
      container.setAttribute("draggable", "true");
      const date = this.createElement(
         "p",
         "date",
         data.deadline.toDateString()
      );
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
