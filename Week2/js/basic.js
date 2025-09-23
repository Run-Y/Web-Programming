const table = document.getElementById("table")

const submitButton = document.getElementById("submit-data")
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitForm()
})


function submitForm() {
    const username = document.getElementById("input-username").value
    const email = document.getElementById("input-email").value
    const admin = document.getElementById("input-admin").checked
    const file = document.getElementById("input-image").files[0]

    let showAdmin = "-"
    if (admin) showAdmin = "X"

    let img = null
    if (file) {
    
        const imageSrc = URL.createObjectURL(file)
        img = document.createElement("img")
        img.src = imageSrc
        img.width = 64
        img.height = 64

    } 



    let i = 1
    for (i; i < table.rows.length; i++) {
        
        if (table.rows[i].cells[0].textContent == username) {
            table.rows[i].cells[1].textContent = email
            table.rows[i].cells[2].textContent = showAdmin
            table.rows[i].cells[3].innerHTML = ""
            if (img) table.rows[i].cells[3].appendChild(img)
            return
        }

    }

    let newRow = document.createElement("tr");

    const tdUsername = document.createElement("td");
    tdUsername.textContent = username;

    const tdEmail = document.createElement("td");
    tdEmail.textContent = email;

    const tdAdmin = document.createElement("td");
    tdAdmin.textContent = showAdmin;

    const tdImage = document.createElement("td");
    if (img) tdImage.appendChild(img);

    newRow.appendChild(tdUsername);
    newRow.appendChild(tdEmail);
    newRow.appendChild(tdAdmin);
    newRow.appendChild(tdImage);

    table.appendChild(newRow);


}

const emptyButton = document.getElementById("empty-table")
emptyButton.addEventListener("click", () => emptyTable())

function emptyTable() {

    
    while (table.rows.length > 1) {
        table.deleteRow(1)
    }
    
}
