document.getElementById('search-btn').addEventListener('click', () => {
    const text = document.getElementById('search-text').value
    console.log(text)
    const url = `https://spotify23.p.rapidapi.com/search/?q=${text}&type=multi&limit=50&numberOfTopResults=50&rapidapi-key=78becb61e2msh3806740b92948f6p12b5aajsnff676fa1d1db`
    const data = null;
    
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response)
            let output = ''
            
            for(let i=0; i < response.tracks.items.length; i++) {
                output += `
                    <div class="content" style="padding:2rem;">
                    <img  src="${response.albums.items[i].data.coverArt.sources[0].url}"/>
                            <div class="content-info">
                                <h5>${response.tracks.items[i].data.name}</h5>

                                <p>by ${response.albums.items[i].data.artists.items[0].profile.name}</p>
                                <a href="https://open.spotify.com/track/${response.tracks.items[i].data.id}" target="_blank">click to listen </a>
                            </div>
                       
                    </div>   
                `
            }
            document.getElementById('my-div').innerHTML = output
                }
    })
    
    xhr.open('GET', url)
xhr.send(data);
})