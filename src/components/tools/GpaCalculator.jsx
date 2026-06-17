import { useState } from 'react';

const GpaCalculator = () => {
  const [courses, setCourses] = useState([
    { id: Date.now() + 1, name: '', grade: 'A', points: '4.0' },
    { id: Date.now() + 2, name: '', grade: 'B', points: '3.0' },
    { id: Date.now() + 3, name: '', grade: 'C', points: '2.0' },
  ]);
  const [gpa, setGpa] = useState(null);
  const [errors, setErrors] = useState({});

  // Standard 4.0 scale
  const gradeToPoints = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'F': 0.0,
  };

  const pointsToGrade = (points) => {
    const p = parseFloat(points);
    if (isNaN(p)) return '';
    if (p >= 4.0) return 'A';
    if (p >= 3.7) return 'A-';
    if (p >= 3.3) return 'B+';
    if (p >= 3.0) return 'B';
    if (p >= 2.7) return 'B-';
    if (p >= 2.3) return 'C+';
    if (p >= 2.0) return 'C';
    if (p >= 1.7) return 'C-';
    if (p >= 1.3) return 'D+';
    if (p >= 1.0) return 'D';
    return 'F';
  };

  const addCourse = () => {
    setCourses([...courses, { id: Date.now(), name: '', grade: 'A', points: '4.0' }]);
  };

  const updateCourse = (id, field, value) => {
    setCourses(courses.map(c => {
      if (c.id !== id) return c;

      let updatedCourse = { ...c, [field]: value };

      // Sync logic
      if (field === 'grade') {
        updatedCourse.points = gradeToPoints[value].toFixed(1);
      } else if (field === 'points') {
        // Validate points input: allow numbers and one decimal
        if (value !== '' && !/^\d*\.?\d*$/.test(value)) {
          return c; // block invalid input
        }
        
        // Auto-update grade if it's a valid number
        const parsed = parseFloat(value);
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 4.0) {
          updatedCourse.grade = pointsToGrade(parsed);
        }
      }

      return updatedCourse;
    }));
    
    // Clear errors when user types
    if (errors[id]) setErrors({ ...errors, [id]: null });
    if (errors.general) setErrors({ ...errors, general: null });
  };

  const removeCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let validCourses = 0;
    let newErrors = {};

    courses.forEach(course => {
      const pointsStr = String(course.points).trim();
      
      if (pointsStr !== '') {
        const p = parseFloat(pointsStr);
        if (isNaN(p) || p < 0 || p > 4.0) {
          newErrors[course.id] = 'Invalid points (0.0 - 4.0)';
        } else {
          totalPoints += p;
          validCourses++;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (validCourses === 0) {
      setErrors({ general: 'Please enter grade points for at least one course.' });
      return;
    }

    setGpa((totalPoints / validCourses).toFixed(2));
    setErrors({});
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="font-sora text-2xl font-bold text-navy mb-2">GPA Calculator (Unweighted)</h3>
        <p className="text-gray-500">Calculate your unweighted GPA. Letter grades and Grade Points are automatically synced.</p>
        
        {errors.general && (
          <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm transition-all duration-300">
            {errors.general}
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {courses.map((course, index) => (
          <div 
            key={course.id} 
            className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
            style={{ animationDuration: '400ms', animationTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', animationFillMode: 'both', animationDelay: `${index * 60}ms` }}
          >
            <span className="text-gray-400 font-medium w-6 text-center hidden sm:block">{index + 1}</span>
            <input
              type="text"
              placeholder="Course Name (optional)"
              value={course.name}
              onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
              className="flex-1 w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-blue/20 focus:border-nova-blue transition-all duration-200"
            />
            <div className="flex w-full sm:w-auto gap-3 items-start">
              <div className="relative">
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  className="w-full sm:w-28 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-blue/20 focus:border-nova-blue appearance-none transition-all duration-200 cursor-pointer font-medium"
                >
                  {Object.keys(gradeToPoints).map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="w-full sm:w-28 relative group tooltip-container">
                <input
                  type="text"
                  placeholder="Points"
                  value={course.points}
                  onChange={(e) => updateCourse(course.id, 'points', e.target.value)}
                  className={`w-full border rounded-xl px-4 py-3 bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors[course.id] 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20 text-red-900' 
                      : 'border-gray-200 focus:border-nova-blue focus:ring-nova-blue/20'
                  }`}
                />
              </div>

              <button
                onClick={() => removeCourse(course.id)}
                className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 active:scale-95 group"
                title="Remove course"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-300">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-gray-100">
        <button
          onClick={addCourse}
          className="text-nova-blue font-medium hover:text-navy transition-colors flex items-center gap-2 active:scale-97 active:opacity-80 px-4 py-2 -ml-4"
          style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '160ms' }}
        >
          <span className="text-xl leading-none">+</span> Add Course
        </button>
        
        <button
          onClick={calculateGpa}
          className="w-full sm:w-auto bg-nova-blue text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_4px_14px_0_rgba(79,124,255,0.39)] hover:shadow-[0_6px_20px_rgba(79,124,255,0.23)] hover:bg-[#3b5fd9] active:scale-[0.97]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '160ms' }}
        >
          Calculate GPA
        </button>
      </div>

      {gpa !== null && (
        <div className="mt-8 bg-mint/10 border border-mint/20 rounded-2xl p-8 text-center transition-all duration-400" style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}>
          <p className="text-gray-600 mb-2 font-medium tracking-wide uppercase text-sm">Your Unweighted GPA</p>
          <div className="font-sora text-6xl font-extrabold text-navy tracking-tight tabular-nums">
            {gpa}
          </div>
        </div>
      )}
    </div>
  );
};

export default GpaCalculator;
