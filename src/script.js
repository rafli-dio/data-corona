const kasusPositif = document.getElementById("positif")

const reqPositif = async() => {
    try{
        const req = await fetch("https://covid19.mathdro.id/api/")
        const res = await req.json();

        kasusPositif.innerHTML = `${res.confirmed.value} orang`
    } 
    catch(error){
        console.log(error)
    }
}

reqPositif()

// meninggal

const kasusMeninggal = document.getElementById("meninggal")

const reqMeninggal = async() => {
    try{
        const req = await fetch("https://covid19.mathdro.id/api/")
        const res = await req.json();

        kasusMeninggal.innerHTML = `${res.deaths.value} orang`
    } 
    catch(error){
        console.log(error)
    }
}

reqMeninggal()

// sembuh
const kasusSembuh = document.getElementById("sembuh")

const reqSembuh = async() => {
    try{
        const req = await fetch("https://covid19.mathdro.id/api/")
        const res = await req.json();

        kasusSembuh.innerHTML = `${res.recovered.value} orang`
    } 
    catch(error){
        console.log(error)
    }
}

reqSembuh()