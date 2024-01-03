const calendarBody = document.querySelector('#calendar tbody');
const currentMonthYearElement = document.getElementById('currentMonthYear');
let currentDate = new Date();

function generateCalendar(year, month) {
  if(calendarBody){

    calendarBody.innerHTML = '';
  }

  const today = new Date(); // Get the current date

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDay = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < startingDay) {
        // Empty cells before the first day
        cell.textContent = '';
      } else if (dayCounter > daysInMonth) {
        // Empty cells after the last day
        cell.textContent = '';
      } else {
        cell.textContent = dayCounter;
        cell.addEventListener('click', function() {
          // Handle date selection
          handleDateSelection(year, month, dayCounter);
        });

        // Add a class to highlight the current date
        if (
          today.getFullYear() === year &&
          today.getMonth() === month &&
          dayCounter === today.getDate()
        ) {
          cell.classList.add('current-date');
        }

        dayCounter++;
      }
if(row){

  row.appendChild(cell);
}
    }
    if(calendarBody){

      calendarBody.appendChild(row);
    }

  }

  // Update the displayed month and year
  currentMonthYearElement &&( currentMonthYearElement.textContent = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(year, month)));
}

function handleDateSelection(year, month, day) {
  const selectedDate = new Date(year, month, day);
}

function previousMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  if (currentDate.getMonth() === 11) {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
  }
  updateCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  if (currentDate.getMonth() === 0) {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
  }
  updateCalendar();
}

function previousYear() {
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  updateCalendar();
}

function nextYear() {
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  updateCalendar();
}

function updateCalendar() {
  generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

// Initial calendar display
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());



// for selected menu
$(function () {
  const pathname = location.pathname;

  $('.navbar  a').each(function () {
    const linkHref = $(this).attr('href');
    if ('/'+linkHref === pathname) {
      $(this).addClass('red');
    } else {
      $(this).removeClass('red');
    }
  });
});


