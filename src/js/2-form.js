const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formData = {
    email: "",
    message: ""
};

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formData.email = email;
        formData.message = message;
        emailInput.value = email;
        messageInput.value = message;
    }
});

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
        formData.email = "";
        formData.message = "";
    }
});
