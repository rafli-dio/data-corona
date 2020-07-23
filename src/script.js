const requestApi1 = async () => {
    try{
            const req = await fetch ("https://covid19.mathdro.id/api/")
            const res = await req.json();
            const target = document.getElementById("positif")

            res.Search.forEach(covid => {
                target.innerHTML = `
                <div class="card-group text-center">
                <div class="card bg-danger">
                  
                  <div class="card-body text-center text-white">
                    <h5 class="card-title">Positiv</h5>
                    <p class="card-text">${covid.confirmed}</p>
                    <img src="img/sad.svg" style="width: 100px;" class="card-img-top " alt="...">
                  </div>
                </div>
                `
            })
    }
    catch(error){
        console.log(error)
    }
}

requestApi1()