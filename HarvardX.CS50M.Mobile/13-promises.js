const url = ''

fetch(url)
    .then(function(res) {
        return res.json()
    })
    .then(function(json) {
        return ({
            importandData: json.importandData,
        })
    })
    .then(function(data) {
        console.log(data)cp 
    })
    .catch(function(err) {
        // handle error        
    })
