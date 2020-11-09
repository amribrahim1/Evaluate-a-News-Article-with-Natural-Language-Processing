function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML = `
        <br/>
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>`;
    // check what text was put into the form field
    let url = document.getElementById('url').value
    console.log(Client.checkForURL(url))
    if (!Client.checkForURL(url)) {
        document.getElementById('results').innerHTML = 
            `<div class="alert alert-danger" role="alert">
                "${url}" is not valid url. Please enter a valid url.
            </div>`;
        return ;
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/article', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: url})
    })
    .then(res =>  res.json())
    .then(data => {
        console.log(data); 
        document.getElementById('results').innerHTML = `<br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">polarity</span>
                <p class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">${data.polarity}</p>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">polarity confidence</span>
                <p class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">${data.polarity_confidence}</p>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">subjectivity</span>
                <p class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">${data.subjectivity}</p>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">subjectivity confidence</span>
                <p class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">${data.subjectivity_confidence}</p>
            </div>
            <div class="input-group row">
                <div class="col-md-3"><span class="input-group-text" id="inputGroup-sizing-default">text</span></div>
                <div class="col-md-9"><p class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">${data.text}</p></div>
            </div>`;       
    })
    .catch(error => {
        console.log(error);
        document.getElementById('results').innerHTML = 
            `<br/><div class="alert alert-danger" role="alert">
                ${error}.
            </div>`;
    })
    document.getElementById('form').reset();
}

export { handleSubmit }
