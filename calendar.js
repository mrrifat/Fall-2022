// Course Calendar Application - Fall 2025
// Sichuan University - International Business Management

document.addEventListener('DOMContentLoaded', () => {
  // ========================================
  // DATA STRUCTURE & PROCESSING
  // ========================================

  const YEAR = 2025;
  const pad = n => String(n).padStart(2, '0');

  // Course definitions with complete metadata
  const courseDefinitions = {
    hsk4: {
      id: 'hsk4',
      title: 'HSK4 Course',
      shortTitle: 'HSK4',
      type: 'Elective',
      hours: 64,
      instructor: '黄燕',
      color: 'cyan',
      dates: [
        { date: '10/31', time: '13:00-15:00', room: '312' },
        // From second session onwards - optimized times
        { date: '11/5', time: '13:00-15:00', room: '106' },
        { date: '11/7', time: '13:00-15:00', room: '312' },
        { date: '11/12', time: '13:00-15:00', room: '106' },
        { date: '11/14', time: '13:00-15:00', room: '312' },
        { date: '11/19', time: '13:00-15:00', room: '106' },
        { date: '11/21', time: '13:00-15:00', room: '103' }, // Special room
        { date: '11/26', time: '13:00-15:00', room: '106' },
        { date: '11/28', time: '13:00-15:00', room: '312' },
        { date: '12/3', time: '13:00-15:00', room: '106' },
        { date: '12/5', time: '13:00-15:00', room: '312' },
        { date: '12/10', time: '13:00-15:00', room: '106' },
        { date: '12/12', time: '13:00-15:00', room: '312' },
        { date: '12/17', time: '13:00-15:00', room: '106' },
        { date: '12/19', time: '13:00-15:00', room: '312' },
        { date: '12/24', time: '13:00-15:00', room: '106' },
        { date: '12/26', time: '13:00-15:00', room: '312' },
        { date: '1/7', time: '13:00-15:00', room: '106' },
        { date: '1/9', time: '13:00-15:00', room: '312' },
        { date: '1/14', time: '13:00-15:00', room: '106' },
        { date: '1/16', time: '13:00-15:00', room: '312' }
      ]
    },
    crm: {
      id: 'crm',
      title: 'Customer Relationship Management',
      shortTitle: 'CRM',
      type: 'Compulsory',
      hours: 48,
      instructor: '廖成成',
      color: 'blue',
      dates: [
        { date: '9/11', time: '18:30-21:30', room: '402' },
        // From second session onwards
        { date: '9/18', time: '18:30-21:30', room: '402' },
        { date: '9/25', time: '18:30-21:30', room: '402' },
        { date: '10/16', time: '18:30-21:30', room: '402' },
        { date: '10/23', time: '18:30-21:30', room: '402' },
        { date: '10/30', time: '18:30-21:30', room: '402' },
        { date: '11/6', time: '18:30-21:30', room: '402' },
        { date: '11/13', time: '18:30-21:30', room: '402' },
        { date: '11/20', time: '18:30-21:30', room: '402' },
        // Special updated sessions
        { date: '11/26', time: '18:00-22:00', room: '103' },
        { date: '11/27', time: '18:00-22:00', room: '103' }
      ]
    },
    macro: {
      id: 'macro',
      title: 'Macroeconomics',
      shortTitle: 'Macro',
      type: 'Compulsory',
      hours: 48,
      instructor: '王奇',
      color: 'green',
      dates: [
        { date: '9/11', time: '14:00-17:00', room: '510' },
        // From second session onwards
        { date: '9/18', time: '14:00-17:00', room: '510' },
        { date: '9/25', time: '14:00-17:00', room: '510' },
        { date: '10/16', time: '14:00-17:00', room: '510' },
        { date: '10/23', time: '14:00-17:00', room: '510' },
        { date: '10/30', time: '14:00-17:00', room: '510' },
        { date: '11/6', time: '14:00-17:00', room: '510' },
        { date: '11/13', time: '14:00-17:00', room: '510' },
        { date: '11/20', time: '14:00-17:00', room: '510' },
        { date: '11/27', time: '14:00-17:00', room: '510' },
        { date: '12/4', time: '14:00-17:00', room: '510' },
        { date: '12/11', time: '14:00-17:00', room: '510' }
      ]
    },
    market: {
      id: 'market',
      title: 'Market Survey',
      shortTitle: 'Market Survey',
      type: 'Elective',
      hours: 48,
      instructor: '斯菲',
      color: 'amber',
      dates: [
        { date: '9/17', time: '19:00-22:00', room: '106' },
        // From second session onwards
        { date: '9/24', time: '19:00-22:00', room: '106' },
        { date: '10/15', time: '19:00-22:00', room: '106' },
        { date: '10/22', time: '19:00-22:00', room: '106' },
        { date: '10/29', time: '19:00-22:00', room: '106' },
        { date: '11/5', time: '19:00-22:00', room: '106' },
        { date: '11/12', time: '19:00-22:00', room: '106' },
        { date: '11/19', time: '19:00-22:00', room: '106' },
        { date: '11/26', time: '19:00-22:00', room: '106' },
        // December - changed to morning
        { date: '12/3', time: '09:00-12:00', room: '106' },
        { date: '12/10', time: '09:00-12:00', room: '106' }
      ]
    },
    literature: {
      id: 'literature',
      title: 'Literature Reviewing & Thesis Writing',
      shortTitle: 'Literature',
      type: 'Elective',
      hours: 16,
      instructor: '刘锐',
      color: 'purple',
      dates: [
        { date: '9/22', time: '19:00-22:00', room: '406' },
        // From second session onwards
        { date: '9/29', time: '19:00-22:00', room: '406' },
        { date: '10/13', time: '19:00-22:00', room: '406' },
        { date: '10/20', time: '19:00-22:00', room: '406' }
      ]
    },
    business: {
      id: 'business',
      title: 'Business Model & Enterprise Innovation',
      shortTitle: 'Business Model',
      type: 'Elective',
      hours: 32,
      instructor: '孙合林',
      color: 'red',
      dates: [
        { date: '10/13', time: '13:00-17:00', room: '302' },
        // From second session onwards
        { date: '10/15', time: '13:00-17:00', room: '302' },
        { date: '10/17', time: '13:00-17:00', room: '302' },
        { date: '10/20', time: '13:00-17:00', room: '302' },
        { date: '10/21', time: '13:00-17:00', room: '302' },
        { date: '10/24', time: '13:00-17:00', room: '302' }
      ]
    }
  };

  // Color palette for courses
  const colorMap = {
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-900', border: 'border-cyan-400', dot: 'bg-cyan-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-400', dot: 'bg-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-900', border: 'border-green-400', dot: 'bg-green-600' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-400', dot: 'bg-amber-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-900', border: 'border-purple-400', dot: 'bg-purple-600' },
    red: { bg: 'bg-red-100', text: 'text-red-900', border: 'border-red-400', dot: 'bg-red-600' }
  };

  // Build event list from course definitions
  function buildEvents() {
    const events = [];

    Object.values(courseDefinitions).forEach(course => {
      course.dates.forEach((session, index) => {
        const [month, day] = session.date.split('/').map(Number);
        const actualMonth = month;
        const actualYear = month >= 9 ? YEAR : YEAR + 1;

        const dateISO = `${actualYear}-${pad(actualMonth)}-${pad(day)}`;
        const dateObj = new Date(dateISO + 'T00:00:00');

        events.push({
          courseId: course.id,
          title: course.title,
          shortTitle: course.shortTitle,
          type: course.type,
          instructor: course.instructor,
          color: course.color,
          time: session.time,
          room: session.room,
          dateISO: dateISO,
          dateObj: dateObj,
          sessionNumber: index + 1,
          totalSessions: course.dates.length
        });
      });
    });

    return events;
  }

  const events = buildEvents();

  // Group events by date
  const eventsByDate = events.reduce((acc, e) => {
    const key = e.dateObj.toDateString();
    if (!acc[key]) acc[key] = [];
    acc[key].push(e);
    return acc;
  }, {});

  // Sort events by time within each day
  Object.values(eventsByDate).forEach(arr => {
    arr.sort((a, b) => a.time.localeCompare(b.time));
  });

  // ========================================
  // CONFLICT DETECTION
  // ========================================

  function parseTime(timeStr) {
    const [start, end] = timeStr.split('-');
    const parseHM = (s) => {
      const [h, m] = s.split(':').map(Number);
      return h * 60 + m;
    };
    return { start: parseHM(start), end: parseHM(end) };
  }

  function detectConflicts() {
    const conflicts = [];

    Object.entries(eventsByDate).forEach(([date, eventsOnDay]) => {
      if (eventsOnDay.length < 2) return;

      for (let i = 0; i < eventsOnDay.length; i++) {
        for (let j = i + 1; j < eventsOnDay.length; j++) {
          const e1 = eventsOnDay[i];
          const e2 = eventsOnDay[j];

          const t1 = parseTime(e1.time);
          const t2 = parseTime(e2.time);

          // Check if times overlap
          if ((t1.start < t2.end) && (t2.start < t1.end)) {
            conflicts.push({
              date: date,
              dateISO: e1.dateISO,
              event1: e1,
              event2: e2
            });
          }
        }
      }
    });

    return conflicts;
  }

  const conflicts = detectConflicts();

  // ========================================
  // DOM REFERENCES
  // ========================================

  const monthYearEl = document.getElementById('month-year');
  const rangeSummaryEl = document.getElementById('range-summary');
  const calendarGrid = document.getElementById('calendar-grid');
  const prevBtn = document.getElementById('prev-month');
  const nextBtn = document.getElementById('next-month');
  const todayBtn = document.getElementById('today-btn');

  // Modal references
  const eventModal = document.getElementById('event-modal');
  const modalContent = document.getElementById('modal-content');
  const closeModalBtn = document.getElementById('close-modal');
  const modalDate = document.getElementById('modal-date');
  const modalSub = document.getElementById('modal-sub');
  const modalEvents = document.getElementById('modal-events');

  // Conflict modal
  const conflictModal = document.getElementById('conflict-modal');
  const closeConflictModalBtn = document.getElementById('close-conflict-modal');
  const conflictList = document.getElementById('conflict-list');
  const conflictCountEl = document.getElementById('conflict-count');
  const btnConflicts = document.getElementById('btn-conflicts');

  // Tab elements
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Export button
  const btnExport = document.getElementById('btn-export');

  // ========================================
  // CALENDAR RENDERING
  // ========================================

  let currentDate = new Date();

  function renderCalendar() {
    calendarGrid.innerHTML = '';

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearEl.textContent = currentDate.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric'
    });

    // Count events in current month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let eventCount = 0;

    for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
      const key = d.toDateString();
      if (eventsByDate[key]) eventCount += eventsByDate[key].length;
    }

    rangeSummaryEl.textContent = `${eventCount} event${eventCount !== 1 ? 's' : ''} this month`;

    // Calculate grid
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    // Previous month days
    for (let i = firstDayOfWeek; i > 0; i--) {
      const day = prevMonthLastDay - i + 1;
      const date = new Date(year, month - 1, day);
      calendarGrid.appendChild(createDayCell(day, date, false));
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      calendarGrid.appendChild(createDayCell(day, date, true));
    }

    // Next month days
    const totalCells = firstDayOfWeek + daysInMonth;
    const remainingCells = (7 - (totalCells % 7)) % 7;

    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day);
      calendarGrid.appendChild(createDayCell(day, date, false));
    }
  }

  function createDayCell(dayNumber, date, isCurrentMonth) {
    const cell = document.createElement('div');
    cell.className = 'day-cell p-2 flex flex-col';

    if (!isCurrentMonth) {
      cell.classList.add('opacity-40', 'bg-gray-50');
    }

    // Day number
    const dayNumEl = document.createElement('div');
    dayNumEl.className = 'text-sm font-semibold mb-2';

    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      dayNumEl.className += ' inline-block px-2 py-1 rounded-full bg-indigo-600 text-white text-xs';
    } else {
      dayNumEl.className += ' text-gray-700';
    }
    dayNumEl.textContent = dayNumber;
    cell.appendChild(dayNumEl);

    // Events for this day
    const key = date.toDateString();
    const dayEvents = eventsByDate[key] || [];

    if (dayEvents.length > 0) {
      cell.classList.add('cursor-pointer', 'hover:bg-gray-50', 'transition');

      const eventList = document.createElement('div');
      eventList.className = 'flex-1 flex flex-col gap-1';

      // Show up to 3 events
      dayEvents.slice(0, 3).forEach(event => {
        const colors = colorMap[event.color];
        const eventBadge = document.createElement('div');
        eventBadge.className = `event-badge text-xs p-1.5 rounded ${colors.bg} ${colors.text} border-l-2 ${colors.border} flex items-center gap-1.5`;
        eventBadge.title = `${event.title}\n${event.time}\nRoom ${event.room}`;

        const dot = document.createElement('span');
        dot.className = `w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`;

        const text = document.createElement('span');
        text.className = 'truncate text-[11px] font-medium';
        text.textContent = event.shortTitle;

        eventBadge.appendChild(dot);
        eventBadge.appendChild(text);
        eventList.appendChild(eventBadge);
      });

      if (dayEvents.length > 3) {
        const more = document.createElement('div');
        more.className = 'text-[10px] text-gray-500 text-center mt-1';
        more.textContent = `+${dayEvents.length - 3} more`;
        eventList.appendChild(more);
      }

      cell.appendChild(eventList);

      // Check for conflicts
      const hasConflict = conflicts.some(c => c.dateISO === date.toISOString().split('T')[0]);
      if (hasConflict) {
        const warningIcon = document.createElement('div');
        warningIcon.className = 'absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center conflict-warning';
        warningIcon.innerHTML = '<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>';
        cell.style.position = 'relative';
        cell.appendChild(warningIcon);
      }

      cell.addEventListener('click', () => openEventModal(date, dayEvents));
    }

    return cell;
  }

  // ========================================
  // MODAL HANDLING
  // ========================================

  function openEventModal(date, events) {
    modalDate.textContent = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    modalSub.textContent = `${events.length} event${events.length !== 1 ? 's' : ''}`;

    modalEvents.innerHTML = '';

    events.forEach(event => {
      const colors = colorMap[event.color];
      const card = document.createElement('div');
      card.className = `mb-4 p-4 rounded-lg ${colors.bg} border-l-4 ${colors.border}`;

      card.innerHTML = `
        <div class="flex items-start justify-between mb-2">
          <div class="flex-1">
            <h3 class="font-semibold ${colors.text} text-base">${event.title}</h3>
            <span class="text-xs ${colors.text} opacity-75 mt-1 inline-block">${event.type} • ${event.instructor}</span>
          </div>
          <span class="text-xs ${colors.text} bg-white px-2 py-1 rounded font-medium">Session ${event.sessionNumber}/${event.totalSessions}</span>
        </div>
        <div class="grid grid-cols-2 gap-2 text-sm ${colors.text}">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>${event.time}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>Room ${event.room}</span>
          </div>
        </div>
      `;

      modalEvents.appendChild(card);
    });

    eventModal.classList.remove('hidden');
    eventModal.classList.add('flex');
    setTimeout(() => {
      modalContent.classList.remove('opacity-0', 'scale-95');
      modalContent.classList.add('opacity-100', 'scale-100');
    }, 10);
  }

  function closeEventModal() {
    modalContent.classList.remove('opacity-100', 'scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
      eventModal.classList.add('hidden');
      eventModal.classList.remove('flex');
    }, 200);
  }

  // ========================================
  // CONFLICT MODAL
  // ========================================

  function openConflictModal() {
    conflictList.innerHTML = '';

    if (conflicts.length === 0) {
      conflictList.innerHTML = `
        <div class="text-center py-8 text-green-600">
          <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p class="text-lg font-semibold">No conflicts detected!</p>
          <p class="text-sm text-gray-600 mt-2">Your schedule is perfectly organized.</p>
        </div>
      `;
    } else {
      conflicts.forEach((conflict, index) => {
        const date = new Date(conflict.dateISO);
        const dateStr = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

        const conflictCard = document.createElement('div');
        conflictCard.className = 'mb-4 p-4 bg-red-50 border border-red-200 rounded-lg';

        conflictCard.innerHTML = `
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              ${index + 1}
            </div>
            <div class="flex-1">
              <div class="font-semibold text-red-900 mb-2">${dateStr}</div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 bg-white rounded border-l-4 ${colorMap[conflict.event1.color].border}">
                  <div class="font-medium text-gray-900">${conflict.event1.title}</div>
                  <div class="text-sm text-gray-600 mt-1">${conflict.event1.time}</div>
                  <div class="text-xs text-gray-500 mt-1">Room ${conflict.event1.room}</div>
                </div>
                <div class="p-3 bg-white rounded border-l-4 ${colorMap[conflict.event2.color].border}">
                  <div class="font-medium text-gray-900">${conflict.event2.title}</div>
                  <div class="text-sm text-gray-600 mt-1">${conflict.event2.time}</div>
                  <div class="text-xs text-gray-500 mt-1">Room ${conflict.event2.room}</div>
                </div>
              </div>
            </div>
          </div>
        `;

        conflictList.appendChild(conflictCard);
      });
    }

    conflictModal.classList.remove('hidden');
    conflictModal.classList.add('flex');
  }

  function closeConflictModal() {
    conflictModal.classList.add('hidden');
    conflictModal.classList.remove('flex');
  }

  // ========================================
  // WEEKLY SCHEDULE VIEW
  // ========================================

  function renderWeeklySchedule() {
    const container = document.getElementById('weekly-schedule');

    // Group events by day of week
    const dayMap = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' };
    const eventsByDayOfWeek = {};

    events.forEach(event => {
      const dayOfWeek = event.dateObj.getDay();
      if (!eventsByDayOfWeek[dayOfWeek]) {
        eventsByDayOfWeek[dayOfWeek] = [];
      }
      eventsByDayOfWeek[dayOfWeek].push(event);
    });

    // Create weekly schedule grid
    let html = '<div class="grid grid-cols-1 md:grid-cols-7 gap-4">';

    for (let day = 0; day < 7; day++) {
      const dayName = dayMap[day];
      const dayEvents = eventsByDayOfWeek[day] || [];

      // Get unique course sessions for this day
      const uniqueCourses = new Map();
      dayEvents.forEach(e => {
        const key = `${e.courseId}-${e.time}`;
        if (!uniqueCourses.has(key)) {
          uniqueCourses.set(key, e);
        }
      });

      html += `
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4">
            <div class="font-semibold text-sm">${dayName}</div>
            <div class="text-xs opacity-90">${uniqueCourses.size} class${uniqueCourses.size !== 1 ? 'es' : ''}</div>
          </div>
          <div class="p-3 space-y-2 min-h-[200px]">
      `;

      if (uniqueCourses.size === 0) {
        html += '<div class="text-center text-gray-400 text-sm py-8">No classes</div>';
      } else {
        const sortedEvents = Array.from(uniqueCourses.values()).sort((a, b) => a.time.localeCompare(b.time));

        sortedEvents.forEach(event => {
          const colors = colorMap[event.color];
          html += `
            <div class="p-2 rounded ${colors.bg} ${colors.text} border-l-3 ${colors.border}">
              <div class="font-medium text-xs mb-1">${event.shortTitle}</div>
              <div class="text-[10px] opacity-75 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                ${event.time}
              </div>
              <div class="text-[10px] opacity-75 flex items-center gap-1 mt-0.5">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                Room ${event.room}
              </div>
            </div>
          `;
        });
      }

      html += '</div></div>';
    }

    html += '</div>';
    container.innerHTML = html;
  }

  // ========================================
  // COURSE DETAILS VIEW
  // ========================================

  function renderCourseDetails() {
    const container = document.getElementById('course-details');
    let html = '';

    Object.values(courseDefinitions).forEach(course => {
      const colors = colorMap[course.color];
      const totalHours = course.hours;
      const sessionCount = course.dates.length;

      html += `
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="px-6 py-4 bg-gradient-to-r from-${course.color}-500 to-${course.color}-600 ${colors.bg} border-l-4 ${colors.border}">
            <div class="flex items-start justify-between flex-wrap gap-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold ${colors.text}">${course.title}</h3>
                <p class="text-sm ${colors.text} opacity-75 mt-1">${course.type} • Instructor: ${course.instructor}</p>
              </div>
              <div class="flex gap-4">
                <div class="text-center">
                  <div class="text-2xl font-bold ${colors.text}">${totalHours}</div>
                  <div class="text-xs ${colors.text} opacity-75">Hours</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold ${colors.text}">${sessionCount}</div>
                  <div class="text-xs ${colors.text} opacity-75">Sessions</div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h4 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              Session Schedule
            </h4>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b-2 border-gray-200">
                    <th class="text-left py-2 px-3 font-semibold text-gray-700">Session</th>
                    <th class="text-left py-2 px-3 font-semibold text-gray-700">Date</th>
                    <th class="text-left py-2 px-3 font-semibold text-gray-700">Day</th>
                    <th class="text-left py-2 px-3 font-semibold text-gray-700">Time</th>
                    <th class="text-left py-2 px-3 font-semibold text-gray-700">Room</th>
                  </tr>
                </thead>
                <tbody>
      `;

      course.dates.forEach((session, index) => {
        const [month, day] = session.date.split('/').map(Number);
        const actualYear = month >= 9 ? YEAR : YEAR + 1;
        const date = new Date(actualYear, month - 1, day);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const dayStr = date.toLocaleDateString('en-US', { weekday: 'long' });

        html += `
          <tr class="border-b border-gray-100 hover:bg-gray-50">
            <td class="py-2 px-3 font-medium text-gray-900">#${index + 1}</td>
            <td class="py-2 px-3 text-gray-700">${dateStr}</td>
            <td class="py-2 px-3 text-gray-600">${dayStr}</td>
            <td class="py-2 px-3">
              <span class="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">${session.time}</span>
            </td>
            <td class="py-2 px-3">
              <span class="inline-block px-2 py-1 ${colors.bg} ${colors.text} rounded text-xs font-medium">Room ${session.room}</span>
            </td>
          </tr>
        `;
      });

      html += `
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // ========================================
  // TAB NAVIGATION
  // ========================================

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;

      // Update active tab button
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Show target content
      tabContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });

      // Render content if needed
      if (targetTab === 'weekly') {
        renderWeeklySchedule();
      } else if (targetTab === 'courses') {
        renderCourseDetails();
      }
    });
  });

  // ========================================
  // EXPORT FUNCTIONALITY
  // ========================================

  btnExport.addEventListener('click', () => {
    const data = {
      semester: 'Fall 2022',
      university: 'Sichuan University',
      program: 'International Business Management',
      courses: courseDefinitions,
      events: events.map(e => ({
        course: e.title,
        date: e.dateISO,
        time: e.time,
        room: e.room,
        instructor: e.instructor,
        type: e.type
      })),
      conflicts: conflicts.map(c => ({
        date: c.dateISO,
        course1: c.event1.title,
        time1: c.event1.time,
        course2: c.event2.title,
        time2: c.event2.time
      })),
      statistics: {
        totalCourses: Object.keys(courseDefinitions).length,
        totalSessions: events.length,
        totalConflicts: conflicts.length,
        compulsoryCourses: Object.values(courseDefinitions).filter(c => c.type === 'Compulsory').length,
        electiveCourses: Object.values(courseDefinitions).filter(c => c.type === 'Elective').length
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fall-2025-schedule.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  // ========================================
  // EVENT LISTENERS
  // ========================================

  prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  todayBtn.addEventListener('click', () => {
    currentDate = new Date();
    renderCalendar();
  });

  closeModalBtn.addEventListener('click', closeEventModal);
  eventModal.addEventListener('click', (e) => {
    if (e.target === eventModal) closeEventModal();
  });

  btnConflicts.addEventListener('click', openConflictModal);
  closeConflictModalBtn.addEventListener('click', closeConflictModal);
  conflictModal.addEventListener('click', (e) => {
    if (e.target === conflictModal) closeConflictModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!eventModal.classList.contains('hidden')) closeEventModal();
      if (!conflictModal.classList.contains('hidden')) closeConflictModal();
    }
  });

  // ========================================
  // INITIALIZATION
  // ========================================

  // Update conflict count
  conflictCountEl.textContent = conflicts.length;
  if (conflicts.length > 0) {
    btnConflicts.classList.add('conflict-warning');
  }

  // Initial render - start with current month
  renderCalendar();
});
