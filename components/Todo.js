import { v4 as uuidv4 } from "https://jspm.dev/uuid";
  
  class Todo {
    constructor(data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    getView () {
        this._todoElement = this._templateElement.content.querySelector(
          ".todo").cloneNode(true);
        
        const todoIdUuidv4 = uuidv4();
        this._todoElement.id = `$${todoIdUuidv4}`;
        const todoNameEl = this._todoElement.querySelector(".todo__name");
        const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        const todoLabel = this._todoElement.querySelector(".todo__label");
        const todoDate = this._todoElement.querySelector(".todo__date");
        const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
        
        todoNameEl.textContent = this._data.name;
        todoCheckboxEl.id = `todo-${this._todoElement.id}`;
        todoLabel.setAttribute("for", `todo-${this._todoElement.id}`);

        const dueDate = new Date(this._data.date);
        if (!isNaN(dueDate)) {
          todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}`;
        };

        todoDeleteBtn.addEventListener("click", () => {
          this._todoElement.remove();
        });

        return this._todoElement;
    }
  }


export default Todo;
