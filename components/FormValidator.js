
import { validationConfig as settings } from "../utils/constants.js";
/*
You should not call enableValidation during submission

The checklist says: there is no duplicate code. If a line of code has to be repeated, 
it must be written as a separate function https://snipboard.io/p7QTAX.jpg

A function should performs a single task

Is missing the event listener for the change in the checkbox 
*/


class FormValidator {
    constructor(settings, formEl) {
      this._formEl = formEl;
      this._inputSelector = settings.inputSelector;
      this._formSelector = settings.formSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._errorClass = settings.errorClass;
      this._inputErrorClass = settings.inputErrorClass;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector)); 
    }

    _showInputError() {
      if (this._inputErrorClass) {
        this._formEl.classList.add(this._inputErrorClass);
        this._formEl.classList.add(this._errorClass);
      }
    }

    _hideInputError() {
      this._formEl.classList.remove(this._inputErrorClass);
      this._formEl.classList.remove(this._errorClass);
    }

    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError();
      } else {
        this._hideInputError();
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
      const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
      
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
    }

    resetValidation() {
      this._formEl.reset();    
      this._toggleButtonState();
    
      this._inputList.forEach((input) => {
        input.value = "";
        this._hideInputError();
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