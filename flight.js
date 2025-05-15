async function getFlightData() {
    try {
        const response = await fetch('https://api.aviationstack.com/v1/flights?access_key=cb71e33918ef1972dabe104581e98d40');
        const data = await response.json();

        const container = document.getElementById("flightContainer");
        container.innerHTML = ""; 

        if (!data.data || data.data.length === 0) {
            container.innerHTML = "No flight data available.";
            return;
        }

        data.data.forEach(async (flight) => {
            const flightDiv = document.createElement("div");
            flightDiv.style.border = "1px solid #e0e0e0";
            flightDiv.style.margin = "20px auto";
            flightDiv.style.padding = "20px";
            flightDiv.style.textAlign = "center";
            flightDiv.style.borderRadius = "12px";
            flightDiv.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            flightDiv.style.backgroundColor = "#f9f9f9";
            flightDiv.style.maxWidth = "400px";
            flightDiv.style.fontFamily = "Arial, sans-serif";
            flightDiv.style.color = "#333";

            // Get the airline logo (if available)
            const airlineLogo = flight.airline?.logo || "planess.jpg"; // Placeholder if logo is missing

            flightDiv.innerHTML = `
                <div class="flight-info-box">
                   
                     <div><img src="${airlineLogo}" alt="Airline Logo" style="width: 50px; height: auto; margin-top: 10px;"></div>
                   <div><strong>Flight:</strong> ${flight.flight?.iata || "N/A"}</div>
                    <div><strong>Airline:</strong> ${flight.airline?.name || "N/A"}</div>
                   
                    <div><strong>From:</strong> ${flight.departure?.airport || "N/A"} (${flight.departure?.iata || "?"})</div>
                    <div><strong>To:</strong> ${flight.arrival?.airport || "N/A"} (${flight.arrival?.iata || "?"})</div>
                    <div><strong>Status:</strong> ${flight.flight_status || "N/A"}</div>
                </div>
            `;

            container.appendChild(flightDiv);
        });
    } catch (error) {
        document.getElementById("flightContainer").innerHTML = "Error loading flight data.";
        console.error("Error fetching flight data:", error);
    }
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", getFlightData);
