import React from 'react';

const ResultsDisplay = ({ analysis }) => {
  if (!analysis) {
    return (
      <div className="card mt-4 text-center">
        <div className="card-body">
          <p className="text-muted">Start typing to see analysis results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card mt-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">📊 Text Analysis Results</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 mb-3">
            <p><strong>Characters:</strong> {analysis.characters}</p>
            <p><strong>Characters (no spaces):</strong> {analysis.charactersNoSpaces}</p>
            <p><strong>Words:</strong> {analysis.words}</p>
          </div>
          <div className="col-md-6 mb-3">
            <p><strong>Sentences:</strong> {analysis.sentences}</p>
            <p><strong>Paragraphs:</strong> {analysis.paragraphs}</p>
            <p><strong>Reading Time:</strong> ~{analysis.readingTime} min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;