import { useState } from 'react';
import * as textProcessing from '../utils/textProcessing';

export const useTextAnalysis = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const updateText = (newText) => {
    setText(newText);
    setAnalysis(textProcessing.analyzeText(newText));
  };

  const applyTransformation = (transformFn) => {
    const transformed = transformFn(text);
    updateText(transformed);
  };

  const clearText = () => {
    setText('');
    setAnalysis(null);
  };

  return {
    text,
    updateText,
    analysis,
    applyTransformation,
    clearText
  };
};