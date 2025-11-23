# Fall 2025 Course Calendar - Enhanced Edition

A next-generation, feature-rich course calendar application for Sichuan University's International Business Management program. Features a beautiful Proton Calendar-inspired interface with comprehensive schedule management capabilities, dark mode, search & filter, live countdown, progress tracking, and much more!

## 🎨 Enhanced Features (NEW!)

### 🌓 Dark Mode
- Smooth theme toggle with localStorage persistence
- Beautiful dark color scheme optimized for low-light environments
- All UI elements adapt seamlessly

### 🔍 Smart Search & Filter
- Real-time search across courses, instructors, and rooms
- Filter by course type (All/Compulsory/Elective)
- Instant results with visual highlighting

### ⏱️ Live Countdown Widget
- Real-time countdown to your next class
- Shows upcoming class details and time remaining
- Updates every minute automatically

### 📊 Progress Tracking
- Visual progress bars showing sessions completed
- Real-time statistics dashboard
- Per-course progress visualization

### 📅 Calendar Views
- **Month View**: Interactive monthly calendar with color-coded course events
- **Weekly Schedule**: Organized weekly overview showing all recurring classes
- **Course Details**: Comprehensive breakdown of all courses with session schedules
- **Statistics View**: Detailed analytics and progress insights (NEW!)
- **Mini Calendar**: Quick navigator in sidebar (NEW!)

### 🎨 Modern Design
- Proton Calendar-inspired interface
- Beautiful gradient backgrounds and glass-morphism effects
- Smooth animations and transitions with staggered loading
- Fully responsive design for desktop, tablet, and mobile
- Custom color coding for each course
- Dark mode with automatic theme persistence
- Floating action buttons with tooltips
- Glass-morphism cards with blur effects

### 🔍 Smart Features
- **Conflict Detection**: Automatically detects and highlights schedule conflicts
- **Event Details**: Click any day to view detailed class information
- **Session Tracking**: Shows session numbers and progress for each course
- **Export Functionality**: Export as JSON or iCal format (NEW!)
- **Keyboard Shortcuts**: Navigate faster with hotkeys (NEW!)
- **Mini Calendar Navigator**: Quick month overview in sidebar (NEW!)
- **Monthly Statistics**: Classes, hours, and days breakdown (NEW!)

### ⌨️ Keyboard Shortcuts (NEW!)
- `←` / `→` - Navigate between months
- `T` - Jump to today
- `/` - Focus search box
- `D` - Toggle dark mode
- `?` - Show keyboard shortcuts help
- `Esc` - Close modals

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

## 🚀 Usage

Simply open `index.html` in a modern web browser. No build process or server required!

### Navigation & Controls
- **Month Navigation**: Use arrow buttons or `←` `→` keys to browse months
- **Today Button**: Quickly return to current date with one click or press `T`
- **Day Details**: Click any day with events to see full class information
- **Tab Views**: Switch between Calendar, Weekly, Course Details, and Statistics
- **Dark Mode**: Toggle theme with the sun/moon icon or press `D`
- **Search**: Type `/` to focus search box instantly
- **Filters**: Filter by All/Compulsory/Elective courses
- **Keyboard Shortcuts**: Press `?` to see all available hotkeys

### Export Options
- **JSON Export**: Download complete schedule data as JSON
- **iCal Export**: Generate `.ics` file for Google Calendar, Apple Calendar, Outlook, etc.
- **Conflict Report**: View and analyze any schedule overlaps

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

Created with ❤️ by Rokon for Sichuan University, Fall 2025 semester.

## License

For educational use at Sichuan University.
