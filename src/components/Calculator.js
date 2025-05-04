import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // For simple calculator; avoid eval in production
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="container my-4">
      <div className="card mx-auto" style={{ maxWidth: '350px' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-3">Calculator</h5>
          <input
            type="text"
            className="form-control mb-2"
            value={input}
            readOnly
          />
          <div className="d-grid gap-2 d-md-block mb-2">
            <div className="row mb-1">
              {[1, 2, 3, '+'].map((val) => (
                <div className="col-3" key={val}>
                  <button className="btn btn-outline-primary w-100" onClick={() => handleClick(val.toString())}>{val}</button>
                </div>
              ))}
            </div>
            <div className="row mb-1">
              {[4, 5, 6, '-'].map((val) => (
                <div className="col-3" key={val}>
                  <button className="btn btn-outline-primary w-100" onClick={() => handleClick(val.toString())}>{val}</button>
                </div>
              ))}
            </div>
            <div className="row mb-1">
              {[7, 8, 9, '*'].map((val) => (
                <div className="col-3" key={val}>
                  <button className="btn btn-outline-primary w-100" onClick={() => handleClick(val.toString())}>{val}</button>
                </div>
              ))}
            </div>
            <div className="row mb-1">
              {['.', 0, '=', '/'].map((val) => (
                <div className="col-3" key={val}>
                  {val === '=' ? (
                    <button className="btn btn-success w-100" onClick={handleCalculate}>{val}</button>
                  ) : (
                    <button className="btn btn-outline-primary w-100" onClick={() => handleClick(val.toString())}>{val}</button>
                  )}
                </div>
              ))}
            </div>
            <button className="btn btn-danger w-100 mt-2" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="alert alert-secondary mt-2" role="alert">
            Result: <strong>{result}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
