import React, { useState, useEffect } from 'react';
import CareerInput from './components/CareerInput';
import PlanDisplay from './components/PlanDisplay';
import { generateCareerPlan } from './services/geminiService';

const App = () => {
  const [careerGoal, setCareerGoal] = useState('');
  const [careerPlan, setCareerPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // State for PDF instruction message
  const [pdfMessage, setPdfMessage] = useState(null);

  // Clear PDF message after a short delay
  useEffect(() => {
    if (pdfMessage) {
      const timer = setTimeout(() => setPdfMessage(null), 8000);
      return () => clearTimeout(timer);
    }
  }, [pdfMessage]);

  const handleGeneratePlan = async (e) => {
    e.preventDefault();
    if (!careerGoal.trim()) {
      setError('Please enter a career goal.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setCareerPlan(null);
    setPdfMessage(null); // Clear any old messages

    try {
      const plan = await generateCareerPlan(careerGoal);
      setCareerPlan(plan);
    } catch (err) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Career Lens AI</h1>
        <p>Enter your desired role to get a personalized roadmap for 2025.</p>
      </header>

      <CareerInput
        value={careerGoal}
        onChange={(e) => setCareerGoal(e.target.value)}
        onSubmit={handleGeneratePlan}
        isLoading={isLoading}
      />

      {error && <div className="card" style={{ backgroundColor: '#7f1d1d', color: '#fee2e2' }}>{error}</div>}
      
      {/* Display PDF Instruction Message */}
      {pdfMessage && (
        <div className="pdf-message card" role="alert">
          ⚠️ **{pdfMessage}**
        </div>
      )}
      
      {isLoading && !careerPlan && (
        <div className="loading-block">
          <div className="spinner-circle"></div>
          <span className="spinner-text">One moment — Greatness takes a little time 🕒</span>
        </div>
      )}
      
      {careerPlan && <PlanDisplay plan={careerPlan} setPdfMessage={setPdfMessage} />}
    </div>
  );
};

export default App;