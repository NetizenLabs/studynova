import { useState, useEffect } from 'react';

const StudyTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('pomodoro');

  const modes = {
    pomodoro: { time: 25, label: 'Pomodoro' },
    shortBreak: { time: 5, label: 'Short Break' },
    longBreak: { time: 15, label: 'Long Break' }
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            // In a real app, we'd play a sound here.
            alert(`${modes[mode].label} session complete!`);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, mode]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(modes[mode].time);
    setSeconds(0);
  };

  const switchMode = (newMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setIsActive(false);
    setMinutes(modes[newMode].time);
    setSeconds(0);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const calculateProgress = () => {
    const totalSeconds = modes[mode].time * 60;
    const currentSeconds = (minutes * 60) + seconds;
    return ((totalSeconds - currentSeconds) / totalSeconds) * 100;
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full max-w-md mx-auto text-center relative overflow-hidden">
      
      {/* Background Progress Indicator */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-mint/5 -z-10 transition-all duration-1000 ease-linear"
        style={{ height: `${calculateProgress()}%` }}
      />

      <div className="flex justify-center gap-1 mb-10 bg-gray-50/80 p-1.5 rounded-full border border-gray-100/50 backdrop-blur-sm relative z-10">
        {Object.keys(modes).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 active:scale-95 ${
              mode === m 
                ? 'text-navy' 
                : 'text-gray-500 hover:text-navy hover:bg-gray-100/50'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            {mode === m && (
              <div className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgb(0,0,0,0.08)] -z-10 transition-all duration-200" style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }} />
            )}
            {modes[m].label}
          </button>
        ))}
      </div>

      <div className="font-sora text-8xl md:text-9xl font-bold text-navy mb-12 tracking-tighter tabular-nums drop-shadow-sm transition-transform duration-300">
        {formatTime(minutes)}<span className="opacity-50 mx-1 animate-pulse">:</span>{formatTime(seconds)}
      </div>

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={toggleTimer}
          className={`w-36 py-4 rounded-full font-bold text-lg transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] active:scale-[0.97] ${
            isActive 
              ? 'bg-white border border-gray-200 text-charcoal hover:bg-gray-50 shadow-sm' 
              : 'bg-navy text-white hover:bg-[#11183b] shadow-[0_4px_14px_0_rgba(27,37,89,0.39)] hover:shadow-[0_6px_20px_rgba(27,37,89,0.23)]'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '160ms' }}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        
        <button
          onClick={resetTimer}
          className="w-16 h-16 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:text-charcoal hover:bg-white flex items-center justify-center transition-all duration-200 active:scale-90 hover:shadow-sm"
          title="Reset"
          style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isActive ? 'animate-spin-slow' : ''}>
            <path d="M4 4V9H4.58152M19.3563 6C17.7523 4.15049 15.3421 3 12.6393 3C7.8681 3 4.58152 7.02944 4.58152 9M4.58152 9H9M20 20V15H19.4185M4.64373 18C6.24771 19.8495 8.65787 21 11.3607 21C16.1319 21 19.4185 16.9706 19.4185 15M19.4185 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StudyTimer;
