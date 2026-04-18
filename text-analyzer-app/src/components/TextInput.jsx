import React from 'react';

const TextInput = ({ text, onChange, onClear }) => {
  return (
    <div className="mb-4">
      <label htmlFor="textArea" className="form-label">
        <h5>📝 Enter Your Text:</h5>
      </label>
      <textarea
        id="textArea"
        className="form-control"
        rows="10"
        placeholder="Paste or type your text here..."
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      {text && (
        <button 
          className="btn btn-sm btn-outline-danger mt-2"
          onClick={onClear}
        >
          Clear Text
        </button>
      )}
    </div>
  );
};

export default TextInput;