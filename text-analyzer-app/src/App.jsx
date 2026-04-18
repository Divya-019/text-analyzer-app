import React from 'react';
import TextInput from './components/TextInput';
import ResultsDisplay from './components/ResultsDisplay';
import ControlPanel from './components/ControlPanel';
import { useTextAnalysis } from './hooks/useTextAnalysis';
import './styles/App.css';

function App() {
  const { text, updateText, analysis, applyTransformation, clearText } = useTextAnalysis();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="text-center mb-5">✨ Text Analyzer</h1>
          
          <TextInput text={text} onChange={updateText} onClear={clearText} />
          
          <div className="row">
            <div className="col-lg-6">
              <ControlPanel onApplyTransformation={applyTransformation} text={text} />
            </div>
            <div className="col-lg-6">
              <ResultsDisplay analysis={analysis} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;