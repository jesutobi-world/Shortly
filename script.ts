// Form Validation 
// Get form, get input-text, input-submit 
// Check if input text is empty or not

document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms.namedItem('myForm') as HTMLFormElement;
    const urlInput = form.elements.namedItem('urlInput') as HTMLInputElement;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      if (!urlInput.value) {
        urlInput.classList.add('error-border');
        urlInput.classList.add('error-placeholder');
      } else {
        urlInput.classList.remove('error-border');
        urlInput.classList.remove('error-placeholder');
  
        // You can proceed with form submission or other actions here
      }
    });
  });
  
