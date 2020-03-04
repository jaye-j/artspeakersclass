
let form = document.querySelector('.feedback-form');

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    let name = document.querySelector('#feedback-form-name');
    let title = document.querySelector('#feedback-form-title');
    let message = document.querySelector('#feedback-form-message');

    fetch('/api', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: {
            "name": name.nodeValue,
            "title": title.nodeValue,
            "message": message.value
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((feedbackData)=>{
        console.log(feedbackData);
    })
})