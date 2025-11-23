# Fall 2022 Course Calendar

A modern, interactive course calendar application for Sichuan University's International Business Management program. Features a beautiful Proton Calendar-inspired interface with comprehensive schedule management capabilities.

## Features

### 📅 Calendar Views
- **Month View**: Interactive monthly calendar with color-coded course events
- **Weekly Schedule**: Organized weekly overview showing all recurring classes
- **Course Details**: Comprehensive breakdown of all courses with session schedules

### 🎨 Modern Design
- Proton Calendar-inspired interface
- Beautiful gradient backgrounds and glass-morphism effects
- Smooth animations and transitions
- Responsive design for all screen sizes
- Custom color coding for each course

### 🔍 Smart Features
- **Conflict Detection**: Automatically detects and highlights schedule conflicts
- **Event Details**: Click any day to view detailed class information
- **Session Tracking**: Shows session numbers and progress for each course
- **Export Functionality**: Export your entire schedule as JSON

### 📚 Course Information

#### Compulsory Courses
1. **Customer Relationship Management (CRM)**
   - Instructor: 廖成成
   - 48 hours total
   - Wednesdays, 18:30-21:30
   - Room 402 (Special sessions in Room 103)

2. **Macroeconomics**
   - Instructor: 王奇
   - 48 hours total
   - Wednesdays, 14:00-17:00
   - Room 510

#### Elective Courses
3. **HSK4 Course**
   - Instructor: 黄燕
   - 64 hours total
   - Wednesdays & Fridays, 13:00-15:00
   - Rooms: 106 (Wed) / 312 (Fri)

4. **Market Survey**
   - Instructor: 斯菲
   - 48 hours total
   - Saturdays, 19:00-22:00 (Sep-Nov) / 09:00-12:00 (Dec)
   - Room 106

5. **Literature Reviewing & Thesis Writing**
   - Instructor: 刘锐
   - 16 hours total
   - Thursdays, 19:00-22:00
   - Room 406

6. **Business Model & Enterprise Innovation**
   - Instructor: 孙合林
   - 32 hours total
   - Various days in October, 13:00-17:00
   - Room 302

## Usage

Simply open `index.html` in a modern web browser. No build process or server required!

### Navigation
- Use arrow buttons to navigate between months
- Click "Today" to return to current date
- Click any day with events to view details
- Switch between Calendar, Weekly, and Course Detail views using tabs
- Click "Conflicts" button to see any schedule overlaps
- Click "Export Data" to download schedule as JSON

## Technical Details

### Technologies
- HTML5
- CSS3 (with Tailwind CSS via CDN)
- Vanilla JavaScript (no frameworks)
- Modern ES6+ features

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with ES6 support

### File Structure
```
Fall-2022/
├── index.html       # Main HTML structure
├── calendar.js      # Application logic and data
└── README.md        # Documentation
```

## Schedule Notes

- **Time Adjustments**: Starting from the second session of each course, times have been optimized for better student flow
- **Special Sessions**: Some courses have special room assignments or extended hours (clearly marked)
- **Conflict Detection**: The system automatically identifies any scheduling conflicts

## Data Export

The export function provides a comprehensive JSON file including:
- All course definitions and metadata
- Complete event schedule
- Detected conflicts
- Statistical summary

## Credits

Created with ❤️ by Rokon for Sichuan University, Fall 2022 semester.

## License

For educational use at Sichuan University.
