// Smart Tank Monitor Simulation

let rain = true;

function setLevel(level) {

    // Reset all buttons
    document.getElementById("btn10").className = "btn btn-outline-primary m-2";
    document.getElementById("btn30").className = "btn btn-outline-primary m-2";
    document.getElementById("btn60").className = "btn btn-outline-primary m-2";
    document.getElementById("btn90").className = "btn btn-outline-primary m-2";
    if(level == 10){
    document.getElementById("btn10").className = "btn btn-danger m-2";
}

else if(level == 30){
    document.getElementById("btn30").className = "btn btn-warning m-2";
}

else if(level == 60){
    document.getElementById("btn60").className = "btn btn-primary m-2";
}

else if(level == 90){
    document.getElementById("btn90").className = "btn btn-success m-2";
}
    // Update Water Level Text
    document.getElementById("waterLevel").innerHTML = level + "%";

    // Update Progress Bar
    const bar = document.getElementById("waterBar");
    bar.style.width = level + "%";
    bar.innerHTML = level + "%";

    // Update Available Water (Tank Capacity = 1000 L)
    document.getElementById("availableWater").innerHTML = (level * 10) + " Litres";

    // Pump & Tank Status
    if (level < 20) {

        document.getElementById("pumpStatus").innerHTML = "ON";
        document.getElementById("pumpStatus").className = "text-success fw-bold";

        document.getElementById("tankStatus").innerHTML = "Low Water";
        document.getElementById("tankStatus").className = "badge bg-danger";
        

        bar.className = "progress-bar bg-danger";

    }
    else if (level >= 90) {

        document.getElementById("pumpStatus").innerHTML = "OFF";
        document.getElementById("pumpStatus").className = "text-danger fw-bold";

        document.getElementById("tankStatus").innerHTML = "Tank Full";
        document.getElementById("tankStatus").className = "badge bg-success";

        bar.className = "progress-bar bg-success";

        alert("⚠ Tank Full! Overflow Prevention Activated.");

    }
    else {

        document.getElementById("pumpStatus").innerHTML = "OFF";
        document.getElementById("pumpStatus").className = "text-danger fw-bold";

        document.getElementById("tankStatus").innerHTML = "Tank Healthy";
        document.getElementById("tankStatus").className = "badge bg-primary";

        bar.className = "progress-bar bg-primary";

    }
    if (level < 20) {

        // Pump ON
        pumpStatus.innerHTML = "ON";
        pumpStatus.className = "text-success fw-bold";

        relayStatus.innerHTML = "Running";
        relayStatus.className = "badge bg-warning";

    } else {

        // Pump OFF
        pumpStatus.innerHTML = "OFF";
        pumpStatus.className = "text-danger fw-bold";

        relayStatus.innerHTML = "Standby";
        relayStatus.className = "badge bg-secondary";

        if (level >= 90) {
            tankStatus.innerHTML = "Tank Full";
            tankStatus.className = "badge bg-success";
        } else {
            tankStatus.innerHTML = "Tank Healthy";
            tankStatus.className = "badge bg-primary";
        }
}
    updateSensorTime();

    updateRecommendation(level);
}

// Toggle Rain Sensor
function toggleRain() {

    rain = !rain;

    if (rain) {

        document.getElementById("rainStatus").innerHTML = "🌧 Rain Detected";
        document.getElementById("rainStatus").className = "text-primary fw-bold";

        document.getElementById("rainDevice").innerHTML = "Active";
        document.getElementById("rainDevice").className = "badge bg-success";

        document.getElementById("rainAdvice").innerHTML = `
        <div class="alert alert-success mb-0">

            <h6>🌧 Rain Detected</h6>

            <ul class="mb-0">
                <li>Rainfall has been detected.</li>
                <li>Rainwater harvesting is active.</li>
                <li>The tank is expected to refill naturally.</li>
                <li>Pump usage can be minimized.</li>
            </ul>

        </div>`;

    } else {

        document.getElementById("rainStatus").innerHTML = "☀ No Rain";
        document.getElementById("rainStatus").className = "text-warning fw-bold";

        document.getElementById("rainDevice").innerHTML = "Inactive";
        document.getElementById("rainDevice").className = "badge bg-danger";

        document.getElementById("rainAdvice").innerHTML = `
        <div class="alert alert-warning mb-0">

            <h6>☀ No Rain Detected</h6>

            <ul class="mb-0">
                <li>No rainfall has been detected.</li>
                <li>The system is using stored water.</li>
                <li>Use water wisely to conserve available resources.</li>
                <li>Continue monitoring the tank level.</li>
            </ul>

        </div>`;
    }

    updateSensorTime();

}

function updateRecommendation(level){

    let message = "";

    if(level < 20){

        message = `
        <div class="alert alert-danger mb-0">

            <h6>⚠ Low Water Alert</h6>

            <ul class="mb-0">
                <li>Water level is critically low.</li>
                <li>Use water carefully.</li>
                <li>Pump has started automatically.</li>
                <li>Check the water source if the level does not increase.</li>
            </ul>

        </div>`;
    }

    else if(level < 60){

        message = `
        <div class="alert alert-warning mb-0">

            <h6>💧 Moderate Water Level</h6>

            <ul class="mb-0">
                <li>Water level is sufficient for daily use.</li>
                <li>Continue monitoring the tank.</li>
                <li>Avoid unnecessary water wastage.</li>
            </ul>

        </div>`;
    }

    else if(level < 90){

        message = `
        <div class="alert alert-success mb-0">

            <h6>✅ Tank Healthy</h6>

            <ul class="mb-0">
                <li>Tank is operating normally.</li>
                <li>No action is required.</li>
                <li>Water storage is adequate.</li>
            </ul>

        </div>`;
    }

    else{

        message = `
        <div class="alert alert-primary mb-0">

            <h6>🌊 Tank Nearly Full</h6>

            <ul class="mb-0">
                <li>Tank is nearly full.</li>
                <li>Water storage is excellent.</li>
                <li>No immediate action is required.</li>
                <li>System is operating efficiently.</li>
            </ul>

        </div>`;
    }

    document.getElementById("smartAdvice").innerHTML = message;

}

// =========================
// Live Clock
// =========================

function updateClock() {

    const now = new Date();

    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };

    const date = now.toLocaleDateString('en-IN', options);

    const time = now.toLocaleTimeString();

    document.getElementById("liveClock").innerHTML =
        date + "<br>" + time;

}

setInterval(updateClock, 1000);

updateClock();


// =========================
// Last Sensor Update
// =========================

function updateSensorTime() {

    const now = new Date();

    document.getElementById("lastUpdate").innerHTML =
        now.toLocaleTimeString();

}