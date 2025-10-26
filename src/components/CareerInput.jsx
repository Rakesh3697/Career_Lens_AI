import React from 'react';

const CareerInput = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="input-group" /* ⭐ Added input-group class for mobile styling */
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        gap: '0.8rem',
      }}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="e.g., Frontend Developer, Data Analyst..."
        disabled={isLoading}
        style={{
          flex: 1,
          maxWidth: '600px',
          padding: '1rem 1.5rem',
          borderRadius: '999px',
          border: '2px solid #4f46e5',
          backgroundColor: '#1e293b',
          color: '#fff',
          fontSize: '1.1rem',
          outline: 'none',
          transition: 'all 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
        onBlur={(e) => (e.target.style.borderColor = '#4f46e5')}
      />

      <button
        type="submit"
        disabled={isLoading}
        style={{
          background: 'linear-gradient(to right, #6366f1, #a855f7)',
          border: 'none',
          borderRadius: '999px',
          color: '#fff',
          fontWeight: '600',
          padding: '1rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, opacity 0.2s ease',
        }}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
      >
        {isLoading ? 'Generating...' : 'Generate Plan'}
      </button>
    </form>
  );
};

export default CareerInput;