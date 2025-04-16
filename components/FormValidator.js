import { validationConfig as settings } from "../utils/constants.js";

class FormValidator {
    constructor(settings, formEl) {
      this._formEl = formEl;
      this._inputSelector = settings._inputSelector;
      this._formSelector = settings._formSelector;
      this._submitButtonSelector = settings._submitButtonSelector;
      this._errorClass = settings._errorClass;
      this._inputErrorClass = settings._inputErrorClass;
      this._inactiveButtonClass = settings._inactiveButtonClass;
      this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector)); 
    };

    _showInputError(_formEl, _inputErrorClass, _errorClass) {
      if (this._inputErrorClass) {
        this._formEl.classList.add(this._inputErrorClass);
        this._formEl.classList.add(this._errorClass);
      };
    };

    _hideInputError(_inputErrorClass, _errorClass) {
      this._formEl.classList.remove(this._inputErrorClass);
      this._formEl.classList.remove(this._errorClass);
    };

    _checkInputValidity(_formEl) {
      if (!this._formEl.validity.valid) {
        _showInputError(_formEl, _inputErrorClass, _errorClass);
      } else {
        _hideInputError(_inputErrorClass, _errorClass);
      }
    };

    _hasInvalidInput(_inputList) {
      return this._inputList.some((input) => {
        !input.validity.valid;
      });
    };

    _toggleButtonState(_submitButtonSelector, _inputList, _inactiveButtonClass, _errorClass) {
      const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
      if (this._hasInvalidInput(this._inputList)) {

        input.buttonElement.classList.remove(this._inactiveButtonClass);
        input.classList.remove(this._errorClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(this._inactiveButtonClass);
      };
    };

    _setEventListeners(_submitButtonSelector, _inputList) {
      const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
      
      this._toggleButtonState(_submitButtonSelector, _inputList, _inactiveButtonClass, _errorClass);
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(_formEl); 
          this._toggleButtonState(_submitButtonSelector, _inputList, _inactiveButtonClass, _errorClass);
        });
      });
    };

    resetValidation(_inputList, _formEl, _submitButtonSelector, _inactiveButtonClass, _errorClass) {
      this._inputList.forEach((input) => {
        const buttonElement = this._formEl.querySelector(this._submitButtonSelector);

        input.value = "";
        input.buttonElement.classList.remove(this._inactiveButtonClass);
        input.classList.remove(this._errorClass);
        buttonElement.disabled = true;
      });
    };

    enableValidation(_inputList) {
      this._inputList.forEach(() => {
        _setEventListeners(_submitButtonSelector, _inputList);
        this._formEl.addEventListener("submit", (evt) => {
          evt.preventDefault();
        });
      });
    };
};

export default FormValidator;