import React from 'react';
import * as textProcessing from '../utils/textProcessing';

const ControlPanel = ({ onApplyTransformation, text }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        <h5 className="mb-0">🛠️ Text Tools</h5>
      </div>
      <div className="card-body">
        <div className="btn-group-vertical w-100" role="group">
          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => onApplyTransformation(textProcessing.convertToUpperCase)}
            disabled={!text.trim()}
          >
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => onApplyTransformation(textProcessing.convertToLowerCase)}
            disabled={!text.trim()}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => onApplyTransformation(textProcessing.convertToTitleCase)}
            disabled={!text.trim()}
          >
            Convert to Title Case
          </button>
          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => onApplyTransformation(textProcessing.cleanWhitespace)}
            disabled={!text.trim()}
          >
            Clean Extra Whitespace
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => onApplyTransformation(textProcessing.reverseText)}
            disabled={!text.trim()}
          >
            Reverse Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;