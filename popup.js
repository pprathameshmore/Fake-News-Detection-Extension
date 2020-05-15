function clickHandler() {
    // Initialization work goes here.
    const newsResult = document.createElement('p');
    const newsText = document.getElementById('news').value;

    const body = {
        'news': newsText
    }

    console.log(body);

    fetch('http://localhost:3000/news', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        return response.json();
    }).then(result => {
        newsResult.innerHTML = result.message;
        document.getElementsByTagName('body')[0].appendChild(newsResult);
    }).catch(error => {
        console.log(error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', clickHandler);
});