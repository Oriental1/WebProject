document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        const now = new Date();
        document.getElementById("currentDateTime").innerText = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    function generateCalendar() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const calendarBody = document.getElementById("calendarBody");
        calendarBody.innerHTML = "";

        let date = 1;
        for (let i = 0; i < 6; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                let cell = document.createElement("td");
                if (i === 0 && j < firstDay) {
                    cell.innerText = "";
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.innerText = date;
                    if (date === today.getDate()) {
                        cell.style.backgroundColor = "rgba(255, 255, 0, 0.7)";
                        cell.style.color = "black";
                    }
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }
    generateCalendar();
});
