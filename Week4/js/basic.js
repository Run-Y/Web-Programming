const searchButton = document.getElementById("submit-data")
const showUrl = " https://api.tvmaze.com/search/shows?q="

searchButton.addEventListener("click", () => {
    searchShow()
})

async function searchShow() {
    const showName = document.getElementById("input-show").value
    const showPromise = await fetch(showUrl + showName)
    const showJSON = await showPromise.json()
    console.log(showJSON)
    
    const divContainer = document.querySelector(".show-container")
    divContainer.innerHTML = ""

    showJSON.forEach(item => {
        const show = item.show
        let divData = document.createElement("div")
        divData.setAttribute("class", "show-data")
        let img = document.createElement("img")
        let divInfo = document.createElement("div")
        divInfo.setAttribute("class", "show-info")
        
        const imgSrc = show.image.medium
        img.setAttribute("src", imgSrc)
        const showTitle = show.name
        const showSummary = show.summary
        
        divInfo.innerHTML = `
            <h1>${showTitle}</h1> 
            <p>${showSummary}</p>
        `
        divData.appendChild(img)
        divData.appendChild(divInfo)
    
        divContainer.appendChild(divData)
    });
}