import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  // Calculate statistics
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, '').length;
  const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
  const paragraphCount = text.split(/\n+/).filter(para => para.trim().length > 0).length;
  
  // Average speaking rate: 130 words per minute
  // Average reading rate: 238 words per minute
  const readingTime = Math.ceil(wordCount / 238);
  const speakingTime = Math.ceil(wordCount / 130);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      
      {/* Top Stats Bar */}
      <div className="bg-blue-50/50 border-b border-gray-100 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <span className="block text-3xl font-black text-[#0a2351] mb-1">{wordCount}</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Words</span>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <span className="block text-3xl font-black text-[#0a2351] mb-1">{charCount}</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Characters</span>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <span className="block text-3xl font-black text-[#0a2351] mb-1">{sentenceCount}</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sentences</span>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <span className="block text-3xl font-black text-[#0a2351] mb-1">{readingTime}</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Min Read</span>
          </div>
        </div>
      </div>

      {/* Text Area */}
      <div className="p-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your essay, script, or notes here..."
          className="w-full h-96 p-6 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none text-gray-700 resize-none font-serif text-lg leading-relaxed"
          spellCheck="false"
        ></textarea>
      </div>

      {/* Bottom Detailed Stats Bar */}
      <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-600 justify-center">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">Paragraphs:</span> {paragraphCount}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">Characters (No Spaces):</span> {charCountNoSpaces}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">Est. Speaking Time:</span> {speakingTime} min
        </div>
      </div>

    </div>
  );
};

export default WordCounter;
