const forms = document.querySelectorAll('form')

let formId;
let formBody = {};

const sendForm = (formId) => {
    const form = document.getElementById(formId)
    const formInputs = form.querySelectorAll('input')
    const formSelects = form.querySelectorAll('select')


    const formData = new FormData(form) 

    formData.forEach((value, key) => {
      formBody[key] = value   
    }) 
    
    console.log(formBody);


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify([formBody]),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


forms.forEach((form, index) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        formId = `form${index+1}`
        sendForm(formId)
    })
})