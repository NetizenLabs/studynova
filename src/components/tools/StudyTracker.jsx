import { useState, useEffect } from 'react';

const StudyTracker = () => {
  const [sessions, setSessions] = useState([]);
  const [hours, setHours] = useState('');
  const [subject, setSubject] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('studynova_tracker');
    if (saved) {
      try {
        setSessions(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse sessions", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('studynova_tracker', JSON.stringify(sessions));
    }
  }, [sessions, isLoaded]);

  const addSession = (e) => {
    e.preventDefault();
    const parsedHours = parseFloat(hours);
    if (!subject.trim() || isNaN(parsedHours) || parsedHours <= 0) return;

    const newSession = {
      id: Date.now().toString(),
      subject: subject.trim(),
      hours: parsedHours,
      date: new Date().toISOString()
    };

    setSessions([newSession, ...sessions]);
    setHours('');
    setSubject('');
  };

  const removeSession = (id) => {
    setSessions(sessions.filter(s => s.id !== id));
  };

  const totalHours = sessions.reduce((acc, curr) => acc + curr.hours, 0).toFixed(1);

  if (!isLoaded) return <div className="p-8 text-center text-gray-500">Loading tracker...</div>;

  return (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full max-w-3xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-sora text-2xl font-bold text-navy mb-2">Study Hours Tracker</h3>
          <p className="text-gray-500">Log your sessions. Data is saved locally in your browser.</p>
        </div>
        <div className="bg-mint/10 border border-mint/20 px-6 py-4 rounded-2xl flex flex-col items-center min-w-[140px]">
          <span className="text-xs font-bold uppercase tracking-wider text-mint mb-1">Total Hours</span>
          <span className="font-sora text-4xl font-extrabold text-navy tabular-nums">{totalHours}</span>
        </div>
      </div>

      <form onSubmit={addSession} className="flex flex-col sm:flex-row gap-4 mb-10 bg-gray-50/50 p-2 border border-gray-100 rounded-2xl">
        <input
          type="text"
          placeholder="Subject (e.g. Physics)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="flex-1 w-full border border-gray-200 rounded-xl px-4 py-3 bg-white hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-all duration-200"
          required
        />
        <input
          type="number"
          min="0.1"
          step="any"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full sm:w-32 border border-gray-200 rounded-xl px-4 py-3 bg-white hover:bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mint/30 focus:border-mint transition-all duration-200"
          required
        />
        <button
          type="submit"
          className="bg-navy text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_4px_14px_0_rgba(27,37,89,0.39)] hover:shadow-[0_6px_20px_rgba(27,37,89,0.23)] hover:bg-[#11183b] active:scale-[0.97]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '160ms' }}
        >
          Log
        </button>
      </form>

      <div>
        <h4 className="font-sora font-bold text-gray-400 uppercase text-xs tracking-wider mb-4 px-2">Recent Sessions</h4>
        <div className="space-y-3">
          {sessions.length === 0 ? (
            <div className="text-center py-8 text-gray-400 bg-gray-50/50 rounded-xl">
              No sessions logged yet.
            </div>
          ) : (
            sessions.map((session, index) => (
              <div 
                key={session.id} 
                className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-mint/30 transition-all duration-200"
                style={{ animationDuration: '300ms', animationTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', animationFillMode: 'both', animationDelay: `${index * 40}ms` }}
              >
                <div>
                  <div className="font-bold text-charcoal">{session.subject}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {new Date(session.date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-sora font-bold text-navy bg-gray-50 px-3 py-1.5 rounded-lg">
                    {session.hours} <span className="text-xs font-normal text-gray-400">hrs</span>
                  </div>
                  <button
                    onClick={() => removeSession(session.id)}
                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 active:scale-95 opacity-0 group-hover:opacity-100"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyTracker;
