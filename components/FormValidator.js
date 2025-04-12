import { validationConfig as settings } from "../utils/constants.js";

class FormValidator {
    constructor(settings, formEl) {
      this._inputSelector = settings._inputSelector;
      this._formselector = settings._formSelector;
      this._submitButtonSelector = settings._submitButtonSelector;
      this._errorClass = settings._errorClass;
      this._inputErrorClass = settings._inputErrorClass;
      this._inactiveButtonClass = settings._inactiveButtonClass;
      this._formEl = formEl;
      this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
    };
  
    _checkInputValidity(inputElement) {};

    _setEventListeners() {
      const buttonElement = this._formEl.querySelector(settings.submitButtonSelector);
    
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(formElement, inputElement, settings);
        });
      });
    };
  
    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {evt.preventDefault();
        });

        this._setEventListeners();
    };
  };
  
  export default FormValidator;