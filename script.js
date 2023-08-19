// Form Validation 
// Get form, get input-text, input-submit 
// Check if input text is empty or not
document.addEventListener('DOMContentLoaded', function () {
    var form = document.forms.namedItem('myForm');
    var urlInput = form.elements.namedItem('urlInput');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!urlInput.value) {
            urlInput.classList.add('error-border');
            urlInput.classList.add('error-placeholder');
        }
        else {
            urlInput.classList.remove('error-border');
            urlInput.classList.remove('error-placeholder');
            // You can proceed with form submission or other actions here
        }
    });
});
