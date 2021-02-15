function harney () {
    let url = "https://places-dsn.algolia.net/1/places/query";
    const inputWord = document.getElementById('keyword');
    const match = document.getElementById('match-list');
    inputWord.addEventListener('keyup', () => {
        match.innerHTML = "";
        if (inputWord.value) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ query: inputWord.value })
            })
            .then(reponse => reponse.json())
            .then((data) => {
                console.log(data)
                for (let i = 0; i < 5; i++) {
                    match.insertAdjacentHTML('beforeend',`<li class="showcarte" data-lat="${data.hits[i]._geoloc.lat}" data-lng="${data.hits[i]._geoloc.lng}">  
                    ${data.hits[i].locale_names.default[0]}</li>` 
                    )
                }
            })
        }
    })
  
    let button = document.getElementById('buttons').addEventListener('click', () => {
        let li = document.querySelectorAll('li.showcarte')
        console.log('li= ' + li)
        for (let i = 0; i < li.length; i++){
            li[i].innerHTML= ""
        }
    })
}
harney();