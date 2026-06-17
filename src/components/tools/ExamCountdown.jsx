import { useState, useEffect } from 'react';

const ExamCountdown = () => {
  const [exams, setExams] = useState([
    { id: '1', name: 'Final Exam', date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16) }
  ]);
  const [newExamName, setNewExamName] = useState('');
  const [newExamDate, setNewExamDate] = useState('');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addExam = (e) => {
    e.preventDefault();
    if (!newExamName.trim() || !newExamDate) return;
    
    setExams([...exams, {
      id: Date.now().toString(),
      name: newExamName.trim(),
      date: newExamDate
    }].sort((a, b) => new Date(a.date) - new Date(b.date)));
    
    setNewExamName('');
    setNewExamDate('');
  };

  const removeExam = (id) => {
    setExams(exams.filter(exam => exam.id !== id));
  };

  const calculateTimeLeft = (targetDate) => {
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      past: false
    };
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full max-w-3xl mx-auto">
      <div className="mb-8 text-center sm:text-left">
        <h3 className="font-sora text-2xl font-bold text-navy mb-2">Exam Countdown</h3>
        <p className="text-gray-500">Add your upcoming exams and stay motivated by tracking the time left.</p>
      </div>

      <form onSubmit={addExam} className="flex flex-col sm:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Exam Name (e.g. Calculus 101)"
          value={newExamName}
          onChange={(e) => setNewExamName(e.target.value)}
          className="flex-1 w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-blue/20 focus:border-nova-blue transition-all duration-200"
          required
        />
        <input
          type="datetime-local"
          value={newExamDate}
          onChange={(e) => setNewExamDate(e.target.value)}
          className="w-full sm:w-auto border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-blue/20 focus:border-nova-blue transition-all duration-200"
          required
        />
        <button
          type="submit"
          className="bg-nova-blue text-white px-6 py-3 rounded-xl font-bold transition-all shadow-[0_4px_14px_0_rgba(79,124,255,0.39)] hover:shadow-[0_6px_20px_rgba(79,124,255,0.23)] hover:bg-[#3b5fd9] active:scale-[0.97]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '160ms' }}
        >
          Add
        </button>
      </form>

      <div className="space-y-4">
        {exams.length === 0 ? (
          <div className="text-center py-10 text-gray-400 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
            No upcoming exams. You're all clear!
          </div>
        ) : (
          exams.map((exam, index) => {
            const timeLeft = calculateTimeLeft(exam.date);
            return (
              <div 
                key={exam.id} 
                className="group relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-violet/30 hover:shadow-md transition-all duration-300"
                style={{ animationDuration: '400ms', animationTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', animationFillMode: 'both', animationDelay: `${index * 60}ms` }}
              >
                <div className="flex-1 w-full text-center md:text-left mb-4 md:mb-0">
                  <h4 className="font-sora font-bold text-xl text-navy">{exam.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(exam.date).toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}
                  </p>
                </div>
                
                <div className="flex gap-3 md:gap-4 text-center">
                  <div className="flex flex-col items-center justify-center bg-violet/10 w-16 h-16 md:w-20 md:h-20 rounded-xl">
                    <span className="font-sora font-bold text-xl md:text-2xl text-violet">{timeLeft.days}</span>
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-violet/70">Days</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-50 w-16 h-16 md:w-20 md:h-20 rounded-xl">
                    <span className="font-sora font-bold text-xl md:text-2xl text-gray-700">{timeLeft.hours}</span>
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-500">Hours</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-50 w-16 h-16 md:w-20 md:h-20 rounded-xl">
                    <span className="font-sora font-bold text-xl md:text-2xl text-gray-700">{timeLeft.minutes}</span>
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-500">Mins</span>
                  </div>
                </div>

                <button
                  onClick={() => removeExam(exam.id)}
                  className="absolute top-4 right-4 md:relative md:top-auto md:right-auto md:ml-6 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 active:scale-95 opacity-0 group-hover:opacity-100"
                  title="Remove exam"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ExamCountdown;
