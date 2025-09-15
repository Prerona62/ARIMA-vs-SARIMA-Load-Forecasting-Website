function loadAndPlot(actualFile, forecastFile, canvasId, modelName, forecastColor) {
  Promise.all([
    fetch(actualFile).then(res => res.json()),
    fetch(forecastFile).then(res => res.json())
  ])
  .then(([actualData, forecastData]) => {
    const labels = [...new Set([...actualData.map(d => d.timestamp), ...forecastData.map(d => d.timestamp)])];

    const getData = (data, labels) =>
      labels.map(label => {
        const point = data.find(p => p.timestamp === label);
        return point ? point.forecast : null;
      });

    const actualValues = getData(actualData, labels);
    const forecastValues = getData(forecastData, labels);

    // ✅ Highlight last forecast point with special marker
    const highlightPoint = forecastData[forecastData.length - 1];
    const highlightValues = labels.map(label =>
      label === highlightPoint.timestamp ? highlightPoint.forecast : null
    );

    const ctx = document.getElementById(canvasId).getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Actual Load",
            data: actualValues,
            borderColor: "#3D365C",
            borderWidth: 2,
            pointRadius: 3,
            tension: 0.4
          },
          {
            label: modelName + " Forecast",
            data: forecastValues,
            borderColor: forecastColor,
            borderDash: [5, 5],
            borderWidth: 2,
            pointRadius: 3,
            tension: 0.4
          },
          {
            label: "📍 Based on live values from sensors",
            data: highlightValues,
            pointBackgroundColor: "#00D084", // 💚 Bright green
            pointBorderColor: "#00D084",
            pointRadius: 8,
            pointHoverRadius: 10,
            borderWidth: 0,
            showLine: false,
            fill: false,
            type: 'line' // Ensures the dot shows
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                if (context.dataset.label.includes("Based on live")) {
                  return "📍 Predicted using current sensor readings";
                } else {
                  return `${context.dataset.label}: ${context.raw} kW`;
                }
              }
            }
          }
        },
        scales: {
          y: {
            min: 1.7,
            max: 2.3,
            title: {
              display: true,
              text: "Load (kW)"
            }
          },
          x: {
            title: {
              display: true,
              text: "Time"
            }
          }
        }
      }
    });
  })
  .catch(error => {
    console.error("Error loading chart data:", error);
  });
}

// ARIMA Chart
loadAndPlot("actual_data.json", "arima_data.json", "arimaChart", "ARIMA", "#7C4585");

// SARIMA Chart
loadAndPlot("actual_data.json", "sarima_data.json", "sarimaChart", "SARIMA", "#F8B55F");





