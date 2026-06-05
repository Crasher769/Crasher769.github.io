const methodSelect = document.getElementById("method");
const contactLabel = document.getElementById("contactLabel");
const contactInput = document.getElementById("contactInfo");

function updateContactField() {
    switch (methodSelect.value) {
        case "email":
            contactLabel.textContent = "Email:";
            contactInput.type = "email";
            contactInput.placeholder = "your@email.com";
            break;

        case "discord":
            contactLabel.textContent = "Discord Username:";
            contactInput.type = "text";
            contactInput.placeholder = "username";
            break;

        case "phone":
            contactLabel.textContent = "Phone Number:";
            contactInput.type = "tel";
            contactInput.placeholder = "(555) 123-4567";
            break;

        case "other":
            contactLabel.textContent = "Contact Information:";
            contactInput.type = "text";
            contactInput.placeholder = "Enter preferred contact method";
            break;
    }
}

methodSelect.addEventListener("change", updateContactField);

// Set correct field on page load
updateContactField();