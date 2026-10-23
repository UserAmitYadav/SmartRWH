let annualResult = 0;
let monthlyResult = 0;
let dailyResult = 0;
let tankResult = 0;

function nextStep(step){

    document.querySelectorAll(".step").forEach(function(item){
        item.classList.add("d-none");
    });

    document.getElementById("step"+step).classList.remove("d-none");

    document.getElementById("progressBar").style.width=(step*25)+"%";

    if(step===4){
        calculateRainwater();
    }

}

function prevStep(step){
    nextStep(step);
}

const efficiency=document.getElementById("efficiency");

if(efficiency){

    efficiency.addEventListener("input",function(){

        document.getElementById("efficiencyValue").innerHTML=this.value+"%";

    });

}

function calculateRainwater(){

    let roofArea=parseFloat(document.getElementById("roofArea").value);

    let unit=document.getElementById("unit").value;

    let rainfall=parseFloat(document.getElementById("rainfall").value);

    let runoff=parseFloat(document.getElementById("roofType").value);

    let efficiency=parseFloat(document.getElementById("efficiency").value)/100;

    // Convert square feet to square metres
    if(unit==="sqft"){
        roofArea=roofArea*0.092903;
    }

    let annual=roofArea*rainfall*runoff*efficiency;

    let monthly=annual/12;

    let daily=annual/365;

    let tank=Math.min(Math.round(monthly),10000);

    annualResult = annual;
    monthlyResult = monthly;
    dailyResult = daily;
    tankResult = tank;

    document.getElementById("annualWater").innerHTML=Math.round(annual).toLocaleString();

    document.getElementById("monthlyWater").innerHTML=Math.round(monthly).toLocaleString();

    document.getElementById("dailyWater").innerHTML=Math.round(daily).toLocaleString();

    document.getElementById("tankSize").innerHTML=tank.toLocaleString();

    document.getElementById("recommendation").innerHTML=
    "<strong>Recommendation:</strong><br>" +
    "✔ Annual Harvesting Potential: <b>"+Math.round(annual).toLocaleString()+" Litres</b><br>" +
    "✔ Suggested Tank Capacity: <b>"+tank.toLocaleString()+" Litres</b><br>" +
    "✔ This system can significantly reduce dependence on municipal water and support sustainable water management.";

    
}
const saveBtn = document.getElementById("saveCalculationBtn");

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        let formData = new FormData();

        formData.append("project_name", document.getElementById("projectName").value);
        formData.append("city", document.getElementById("city").value);
        formData.append("state", document.getElementById("state").value);

        formData.append("roof_area", document.getElementById("roofArea").value);
        formData.append("unit", document.getElementById("unit").value);

        formData.append(
            "roof_type",
            document.getElementById("roofType").options[
                document.getElementById("roofType").selectedIndex
            ].text
        );

        formData.append("runoff", document.getElementById("roofType").value);
        formData.append("rainfall", document.getElementById("rainfall").value);
        formData.append("efficiency", document.getElementById("efficiency").value);

        formData.append("annual", annualResult);
        formData.append("monthly", monthlyResult);
        formData.append("daily", dailyResult);
        formData.append("tank", tankResult);

        fetch("../process/save_calculation.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {

            if (data.trim() === "success") {

                Swal.fire({
                    icon: "success",
                    title: "Saved Successfully!",
                    text: "Calculation has been saved to the database.",
                    confirmButtonColor: "#198754"
                }).then(() => {
                    window.location.href = "history.php";
                });

            } else {

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: data
                });

            }

        })
        .catch(error => {

            Swal.fire({
                icon: "error",
                title: "Network Error",
                text: error
            });

        });

    });
    document.addEventListener("DOMContentLoaded", function () {

    const stateSelect = document.getElementById("rainfallState");
    const useButton = document.getElementById("useRainfall");
    const rainfallInput = document.getElementById("rainfall");
    const referenceText = document.getElementById("rainfallReference");

    if (!stateSelect || !useButton || !rainfallInput) {
        console.error("Rainfall reference elements not found.");
        return;
    }

    stateSelect.addEventListener("change", function () {

        if (this.value === "") {

            if (referenceText) {
                referenceText.innerHTML = "";
            }

            return;
        }

        if (referenceText) {

            referenceText.innerHTML =
                "Approximate annual rainfall: " +
                Number(this.value).toLocaleString("en-IN") +
                " mm";

        }

    });

    useButton.addEventListener("click", function () {

        const selectedValue = stateSelect.value;

        if (selectedValue === "") {

            alert("Please select a State or Union Territory first.");
            return;

        }

        rainfallInput.value = selectedValue;

        if (referenceText) {

            referenceText.innerHTML =
                "✓ " +
                Number(selectedValue).toLocaleString("en-IN") +
                " mm added to the calculator.";

        }

        // Trigger input/change events
        rainfallInput.dispatchEvent(new Event("input", {
            bubbles: true
        }));

        rainfallInput.dispatchEvent(new Event("change", {
            bubbles: true
        }));

    });

});
}