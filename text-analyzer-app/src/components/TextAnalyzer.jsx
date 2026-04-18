import React, { useState } from 'react';
import TextInput from './TextInput';
import ResultsDisplay from './ResultsDisplay';
import ControlPanel from './ControlPanel';
import useTextAnalysis from '../hooks/useTextAnalysis';

const TextAnalyzer = () => {
    const [inputText, setInputText] = useState('');
    const {
        wordCount,
        charCount,
        convertToUpperCase,
        convertToLowerCase,
        cleanWhitespace,
    } = useTextAnalysis(inputText);

    const handleTextChange = (text) => {
        setInputText(text);
    };

    return (
        <div className="text-analyzer">
            <TextInput value={inputText} onChange={handleTextChange} />
            <ControlPanel 
                onUpperCase={convertToUpperCase} 
                onLowerCase={convertToLowerCase} 
                onCleanWhitespace={cleanWhitespace} 
            />
            <ResultsDisplay 
                wordCount={wordCount} 
                charCount={charCount} 
                analyzedText={inputText} 
            />
        </div>
    );
};

export default TextAnalyzer;