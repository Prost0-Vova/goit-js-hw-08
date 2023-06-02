import throttle from 'lodash.throttle';

const keyToStorage = 'feedback-form-password';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};


let formText = {
    email: "",
    message: "",
};

populateTextArea();

refs.form.addEventListener('input', throttle(onTextArea, 500));
refs.form.addEventListener('submit', handleSubmit);



function onTextArea(e) {
    formText[e.target.name] = e.target.value;
    const stringifyData = JSON.stringify(formText)
    localStorage.setItem(keyToStorage, stringifyData)
};

function handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(keyToStorage);
    e.currentTarget.reset();
    console.log(formText);
}

function populateTextArea() {
    const savedData = JSON.parse(localStorage.getItem(keyToStorage));
    if (!savedData) {
        return;
    }

    const { email, message } = savedData;
    refs.textarea.value = message || '';
    refs.input.value = email || '';
    formText = { email: email || '', message: message || ''};
}





