// For rendering charts on all canvas elements with the class "charts"
const charts = document.querySelectorAll(".charts");

charts.forEach(function(chartElement) {
    var ctx = chartElement.getContext("2d"); // Get the context of each canvas element

    var myChart = new Chart(ctx, { // Use the Chart.js constructor to create the chart
        type: "bar", // The type of chart (bar chart)
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"], // Data labels
            datasets: [{
                label: "# of Votes", // The label for the dataset
                data: [12, 19, 3, 5, 2, 3], // The data for the bars
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)", // Red
                    "rgba(54, 162, 235, 0.2)", // Blue
                    "rgba(255, 206, 86, 0.2)", // Yellow
                    "rgba(75, 192, 192, 0.2)", // Green
                    "rgba(153, 102, 255, 0.2)", // Orange
                    "rgba(255, 159, 64, 0.2)" // Purple
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)", // Red
                    "rgba(54, 162, 235, 1)", // Blue
                    "rgba(255, 206, 86, 1)", // Yellow
                    "rgba(75, 192, 192, 1)", // Green
                    "rgba(153, 102, 255, 1)", // Orange
                    "rgba(255, 159, 64, 1)"  // Purple
                ],
                borderWidth: 1 // Border width for each bar
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            scales: {
                x: {
                    beginAtZero: true // Ensure that the x-axis starts at zero
                },
                y: {
                    beginAtZero: true // Ensure that the y-axis starts at zero
                }
            }
        }
    });
});

// Initialize DataTables for each table with class "data-table"
$(document).ready(function() {
    $(".data-table").each(function(_, table) {
        $(table).DataTable(); // Apply DataTable functionality to each table
    });
});
