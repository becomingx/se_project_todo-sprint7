  class Todo {
    constructor(data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    getView () {
        this._todoElement = this._templateElement.content
        .querySelector(".todo")
        .cloneNode(true);
        const todoNameEl = this._todoElement.querySelector(".todo__name");
        const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        const todoLabel = this._todoElement.querySelector(".todo__label");
        const todoDate = this._todoElement.querySelector(".todo__date");
        const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
        
        todoNameEl.textcontent = this._data.name;
        
        //TODO: assign completed status
        // Apply id and for attributes.
        // The id will initially be undefined for new todos.
        todoCheckboxEl.id = `todo-${this._data.id}`;
        todoLabel.setAttribute("for", `todo-${this._data.id}`);


        // If a due date has been set, parsing this it with `new Date` will return a
        // number. If so, we display a string version of the due date in the todo.
        const dueDate = new Date(this._data.date);
        if (!isNaN(dueDate)) {
            todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            })}`;
        };

        todoDeleteBtn.addEventListener("click", () => {
            todoElement.remove();
        });

        return this._todoElement;
    }
  }

export default Todo;
