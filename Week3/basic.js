const populationUrl = "https://pxdata.stat.fi/PxWeb/api/v1/fi/StatFin/vaerak/statfin_vaerak_pxt_11ra.px";
const employmentUrl = "https://pxdata.stat.fi/PxWeb/api/v1/fi/StatFin/tyokay/statfin_tyokay_pxt_115b.px";

const fetchStatFinData = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return await response.json();    
}

const initializeCode = async () => {
    const populationBody = await (await fetch("./tiedot/population_query.json")).json();
    const employmentBody = await (await fetch("./tiedot/employment_query.json")).json();

    const [populationData, employmentData] = await Promise.all([
        fetchStatFinData(populationUrl, populationBody),
        fetchStatFinData(employmentUrl, employmentBody)
    ]);

    const municipalities = Object.values(populationData.dimension.Alue.category.label);
    const populationValues = populationData.value;
    const employmentValues = employmentData.value;

    const tbody = document.getElementById("table-rows");
    tbody.innerHTML = "";

    municipalities.forEach((municipality, index) => {
        const population = populationValues[index];
        const employment = employmentValues[index];
        const employmentPercent = ((employment / population) * 100).toFixed(2);

        const tr = document.createElement("tr");

        if (employmentPercent > 45) {
            tr.style.backgroundColor = "#abffbd"; 
        } else if (employmentPercent < 25) {
            tr.style.backgroundColor = "#ff9e9e";
        } else if ((index + 1) % 2 === 0) {  
            tr.style.backgroundColor = "#f2f2f2";
        } else {                             
            tr.style.backgroundColor = "#ffffff";
        }



        tr.innerHTML = `
            <td>${municipality}</td>
            <td>${population.toLocaleString()}</td>
            <td>${employment.toLocaleString()}</td>
            <td>${employmentPercent}%</td>
        `;

        tbody.appendChild(tr);
    });
}

initializeCode();

