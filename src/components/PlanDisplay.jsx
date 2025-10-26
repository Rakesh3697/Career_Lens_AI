import React from 'react';

// --- Embedded Icon Definitions ---
export const TargetIcon = ({ className }) => (
  <span role="img" aria-label="target">🎯</span>
);
export const ToolsIcon = ({ className }) => (
  <span role="img" aria-label="tools">🛠️</span>
);
export const GithubIcon = ({ className }) => (
  <span role="img" aria-label="github">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 16 16" 
    width="16" 
    height="16" 
    fill="currentColor"
    style={{ transform: 'translateY(-1px)' }}
    className={className}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
</span>
);
export const YoutubeIcon = ({ className }) => (
  <span role="img" aria-label="youtube">📺</span>
);
export const ArticleIcon = ({ className }) => (
  <span role="img" aria-label="article">📄</span>
);
export const RoadmapIcon = ({ className }) => (
  <span role="img" aria-label="roadmap">🛣️</span>
);
export const ClockIcon = ({ className }) => (
  <span role="img" aria-label="clock">⏰</span>
);
export const PrerequisitesIcon = ({ className }) => (
  <span role="img" aria-label="prerequisites">✅</span>
);
// ------------------------------------


// Component for export buttons
const ExportButtons = ({ plan, setPdfMessage }) => {
  const handleExport = () => {
    if (!plan) return;
    
    // PDF Implementation: Instruct user and trigger print dialog
    setPdfMessage("ACTION REQUIRED: In the Print dialog, please change the Destination to 'Save as PDF' to download your file.");
    
    // Triggers the browser's print dialog after the message has time to render
    setTimeout(() => {
      window.print();
    }, 100); 
  };

  return (
    <div className="export-container">
      <span style={{ color: 'white', fontWeight: '600', marginRight: '1rem' }}>Download Plan:</span>
      <button onClick={handleExport} className="export-btn pdf-btn">Save as PDF</button>
    </div>
  );
};

const InfoCard = ({ icon, title, children }) => (
  <div className="card">
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.8rem',
      color: '#ffffff', // Set title/icon color to white
      fontWeight: '600'
    }}>
      <span style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}>{icon}</span>
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
    {children}
  </div>
);

// Component for the role description summary
const RoleSummary = ({ plan }) => {
    
    // --- Intelligent Fallback Logic for detailed summary ---
    const primarySkill = plan.skillLevels.basic[0] || 'core concepts';
    const secondarySkill = plan.skillLevels.medium[0] || 'intermediate architecture';
    const mainTool = plan.tools[0] || 'industry tools';
    const steps = plan.roadmap.steps.length;

    let summaryText = plan.summary;

    // Fallback: if AI didn't provide a summary, generate one from existing data
    if (!summaryText) {
        summaryText = `The **${plan.title}** role requires candidates to master fundamental areas, starting with proficiency in **${primarySkill}**. Your primary responsibilities will include using **${mainTool}** to execute key tasks and solve complex problems. The career path focuses on continuous skill development, culminating in complex project ownership in **${secondarySkill}** and the completion of **${steps} core roadmap steps**.`;
    }
    // --------------------------------------------------------

    return (
        <div className="card role-summary" style={{ textAlign: 'center', border: '1px solid #4f46e5' }}>
            <h3 style={{ 
                color: '#a855f7', 
                marginBottom: '0.5rem',
                fontSize: '1.4rem'
            }}>
                Understanding the {plan.title} Role
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.6' }}>
                {/* Display role summary with bold formatting for emphasis */}
                <span dangerouslySetInnerHTML={{ __html: summaryText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </p>
        </div>
    );
};


// Added setPdfMessage prop
const PlanDisplay = ({ plan, setPdfMessage }) => {
  const { basic = [], medium = [], advanced = [] } = plan.skillLevels || {};

  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #6366f1, #a855f7)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Career Lens: {plan.title}
      </h2>

      {/* Role Summary Block: Takes the entire plan object for synthesis */}
      <RoleSummary plan={plan} />

      {/* Export Button Block - Passed setPdfMessage */}
      <ExportButtons plan={plan} setPdfMessage={setPdfMessage} />

      {/* Skills to Learn */}
      <InfoCard icon={<TargetIcon />} title="Top Skills to Learn">
        <div style={{ marginLeft: '1rem' }}>
          {basic.length > 0 && (
            <>
              <h4 style={{ color: '#22c55e' }}>Basic</h4>
              <ul>
                {basic.map((skill, index) => (
                  <li key={index} style={{ marginBottom: '0.4rem' }}>✅ {skill}</li>
                ))}
              </ul>
            </>
          )}
          {medium.length > 0 && (
            <>
              <h4 style={{ color: '#facc15' }}>Medium</h4>
              <ul>
                {medium.map((skill, index) => (
                  <li key={index} style={{ marginBottom: '0.4rem' }}>✅ {skill}</li>
                ))}
              </ul>
            </>
          )}
          {advanced.length > 0 && (
            <>
              <h4 style={{ color: '#f97316' }}>Advanced</h4>
              <ul>
                {advanced.map((skill, index) => (
                  <li key={index} style={{ marginBottom: '0.4rem' }}>✅ {skill}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </InfoCard>

      {/* Trending Tools */}
      <InfoCard icon={<ToolsIcon />} title="3 Trending Tools">
        <ul>
          {plan.tools.map((tool, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>⚙️ {tool}</li>
          ))}
        </ul>
      </InfoCard>

      {/* GitHub Repos */}
      <InfoCard icon={<GithubIcon />} title="GitHub Repos to Explore">
        <ul>
          {plan.githubRepos.map((repo, index) => (
            <li key={index} style={{ marginBottom: '0.6rem' }}>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#a855f7', textDecoration: 'none' }}
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* YouTube Channels */}
      <InfoCard icon={<YoutubeIcon />} title="Recommended YouTube Channels">
        <ul>
          {plan.youtubeResources.map((res, index) => (
            <li key={index} style={{ marginBottom: '0.6rem' }}>
              <a
                href={res.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#a855f7', textDecoration: 'none' }}
              >
                {res.name}
              </a>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Helpful Articles */}
      <InfoCard icon={<ArticleIcon />} title="Helpful Articles">
        <ul>
          {plan.articles.map((art, index) => (
            <li key={index} style={{ marginBottom: '0.6rem' }}>
              <a
                href={art.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#a855f7', textDecoration: 'none' }}
              >
                {art.name}
              </a>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* 🛣️ Roadmap */}
      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{
          display: 'flex',
          alignItems: 'center',
          color: '#a855f7',
        }}>
          <span style={{ marginRight: '0.5rem' }}><RoadmapIcon /></span>
          {plan.roadmap.title}
        </h3>
        {plan.roadmap.steps.map((step, index) => (
          <div key={index} className="timeline-step">
            <h4>{step.title}</h4>
            <ClockIcon /> <span>{step.timeframe}</span>
            <p>{step.description}</p>
            {step.prerequisites && (
              <div>
                <PrerequisitesIcon /> Prerequisites:
                <ul>
                  {step.prerequisites.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* --- Key Role Aspects and Copyright --- */}
      <div style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem', 
            borderTop: '2px solid #334155', 
            textAlign: 'center' 
        }}>
       
        
        <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
            &copy; {new Date().getFullYear()} Career Lens AI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PlanDisplay;