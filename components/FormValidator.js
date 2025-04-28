class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
  }

  _showInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this._formEl.querySelector(errorElementId);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this._formEl.querySelector(errorElementId);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}

export default FormValidator;

/*
class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
  }

  _showInputError(inputEl) {
    const errorElementId = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorElement.textContent = inputEl.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    const errorElementId = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputEl) {
    const errorElementId = this._formEl.querySelector(`#${inputEl.id}-error`);
    const errorElement = this._formEl.querySelector()
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}

export default FormValidator;
*/

/*
class FormValidator {
    constructor(settings, formEl) {
      this._formEl = formEl;
      this._inputSelector = settings.inputSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._errorClass = settings.errorClass;
      this._inputErrorClass = settings.inputErrorClass;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector)); 
    };

    _showInputError() {
      if (_checkInputValidity()) {
        const inputErrorElement = this._formEl.querySelector(this._inputErrorClass);
        this._formEl.classlist.add(this._formEl.querySelector(inputErrorElement)); 

        const formElError = this._formEl.querySelector(this._errorClass); 
        this._formEl.classList.add(this._formEl.querySelector(formElError));
      }
    };

    _hideInputError() {
      this._formEl.classList.remove(this._inputErrorClass);
      this._formEl.classList.remove(this._errorClass);
    };

    _checkInputValidity() {
      const inputEl = this._formEl.querySelector(this._inputSelector);
      if (!this._inputEl.validity.valid) {
        this._showInputError();
      } else {
        this._hideInputError();
      }
    };

    _hasInvalidInput() {
      return this._inputList.some((input) => !input.validity.valid);
    };

    _toggleButtonState() {
      const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
      if (this._hasInvalidInput()) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.disabled = false;
      }
    };

    _setEventListeners() {
      const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
      this._checkInputValidity();
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
    };

    resetValidation() {
      this._formEl.reset();    
      this._toggleButtonState();
    
      this._inputList.forEach((input) => {
        input.value = "";
        this._hideInputError();
      });
    };

    enableValidation() {
      this._setEventListeners();
      this._formEl.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
    };
};

export default FormValidator;

*/