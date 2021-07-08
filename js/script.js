function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let serviceQuality = document.getElementById("service-quality").value;
    let numPessoas = document.getElementById("pessoas").value;

    if(bill == "" | serviceQuality == 0){
        alert("Preencha os valores");
        return;
    }

    if(numPessoas == " | numPessoas <= 1"){
        numPessoas = 1;
        document.getElementById("each").style.display = "none";
    }else {
        document.getElementById("each").style.display = "block";
    }

    let total = (bill * serviceQuality) / numPessoas;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";


document.getElementById("tipsForm").addEventListener("submit", calculateTip);