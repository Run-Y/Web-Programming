if(document.readyState !== "loading") {
    console.log("Document is ready!");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");
        initializeCode();
    })
}

function initializeCode() {
    const myButton = document.getElementById("my-button")
    const addData = document.getElementById("add-data")

    myButton.addEventListener("click", function() {
        const headerContent = document.getElementById("headerContent")

        headerContent.innerText = "Moi maailma"

        console.log("hello world")

    })

    addData.addEventListener("click", function() {
        const underList = document.getElementById("my-list")

        let newLine = document.createElement("li")
        
        newLine.innerText = document.getElementById("message").value
        
        underList.appendChild(newLine)
    })
    
}