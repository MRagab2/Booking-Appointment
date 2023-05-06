const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentDate = new Date();

function renderCalendar() {
  calendarBody.innerHTML = '';

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  monthYear.innerHTML = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

  let dateCounter = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDayOfMonth.getDay()) {
        const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        const prevMonthLastDate = prevMonthLastDay.getDate() - firstDayOfMonth.getDay() + j + 1;
        cell.innerHTML = prevMonthLastDate;
        cell.classList.add('prev-month');
      } else if (dateCounter > daysInMonth) {
        const nextMonthFirstDate = dateCounter - daysInMonth;
        cell.innerHTML = nextMonthFirstDate;
        cell.classList.add('next-month');
        dateCounter++;
      } else {
        cell.innerHTML = dateCounter;
        dateCounter++;
      }

      if (currentDate.getDate() === dateCounter - 1 && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
        cell.classList.add('today');
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

renderCalendar();

prevButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});