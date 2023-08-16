document.getElementById("uForm").addEventListener("submit", getDetails);

function getDetails(event) {
    event.preventDefault();

    const img = document.getElementById("img").value;
    const name = document.getElementById("name").value;
    const batch = document.getElementById("batch").value;
    const dsaScore = parseInt(document.getElementById("dsaScore").value);
    const skillScore = parseInt(document.getElementById("skillScore").value);
    const codingScore = parseInt(document.getElementById("codingScore").value);

    const totalScore = dsaScore + skillScore + codingScore;
    const percentage = ((totalScore / 300) * 100).toFixed(2);
    const status = percentage > 50 ? "Regular" : "Async";

    const tableBody = document.getElementById("table-body");
    const row = tableBody.insertRow();

    const imgCol = row.insertCell(0);
    imgCol.innerHTML = `<img src="${img}" style="width: 30px; height: 30px;"/>`;

    const nameCol = row.insertCell(1);
    nameCol.textContent = name;

    const batchCol = row.insertCell(2);
    batchCol.textContent = batch;

    const dsaScoreCol = row.insertCell(3);
    dsaScoreCol.textContent = dsaScore;

    const skillScoreCol = row.insertCell(4);
    skillScoreCol.textContent = skillScore;

    const codingScoreCol = row.insertCell(5);
    codingScoreCol.textContent = codingScore;

    const percentageCol = row.insertCell(6);
    percentageCol.textContent = percentage + "%";

    const statusCol = row.insertCell(7);
    statusCol.textContent = status;

    if (status === "Regular") {
        statusCol.style.backgroundColor = "green";
        statusCol.style.color = "white";
    } else {
        statusCol.style.backgroundColor = "red";
        statusCol.style.color = "white";
    }

    const actionCol = row.insertCell(8);
    actionCol.innerHTML = `<button class="delete-btn" onclick="deleteRow(this)">Delete</button>`;

    // Clear the form fields
    document.getElementById("uForm").reset();
}

function deleteRow(button) {
    const delRow = button.parentNode.parentNode;
    delRow.remove();
}


