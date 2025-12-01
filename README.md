# 🚀 Career Lens AI – 2025 Roadmap Generator

An AI-powered career planning tool that generates a complete **2025-ready learning roadmap**, personalized for any career goal.

Built with **React.js**, **Gemini 2.5 Flash**, and sleek UI components.  
Type any role (e.g., “Frontend Developer”, “Cloud Engineer”, “AI Engineer”), and the app generates skills, tools, GitHub repos, YouTube channels, and a full roadmap.

---

## ⭐ Features

### 🔮 AI-Generated 2025 Career Roadmap
- Powered by **Google Gemini 2.5 Flash**
- Strict JSON schema validation
- Covers:
  - Skill levels (Basic → Medium → Advanced)
  - Trending tools
  - GitHub repos
  - YouTube channels
  - Articles
  - Detailed timeline roadmap
  - Auto-generated summary section

### 🖥️ Modern Responsive UI
- Dark-themed
- Smooth gradients
- Clean cards
- Mobile-friendly
- Professional layout

### 📄 PDF Export
- One-click PDF download
- Easy print-ready output

---

## 📸 Output Preview

<!-- Add screenshot image here -->
**Example Output Section**  
<!-- OUTPUT IMAGE HERE (insert screenshot if available) -->

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Custom JSX Components
- Plain CSS

**AI Engine:**
- Google Gemini 2.5 Flash
- Structured JSON response

---
## 📂 Project Structure


career-lens-ai/  
├── public/  
├── src/  
│ ├── components/  
│ │ ├── CareerInput.jsx  
│ │ ├── PlanDisplay.jsx  
│ │ └── Icons.jsx  
│ ├── services/  
│ │ └── geminiService.js  
│ ├── App.jsx  
│ ├── index.css  
│ └── main.jsx  
└── README.md  
## ⚙️ Setup & Installation  

### 1️⃣ Clone the Repo  
```bash
git clone https://github.com/YOUR-USERNAME/career-lens-ai.git
```
```
cd career-lens-ai
```
### 2️⃣ Install Dependencies
```
npm install
```
### 3️⃣ Configure Environment Variables
Create a .env file:
```
VITE_API_KEY=your_gemini_api_key_here
```
### 4️⃣ Run the Development Server
```
npm run dev
```

###Visit:  
👉 [http://localhost:5173/](http://localhost:5173/)

---

## 🤖 How AI Generation Works

### 🔹 Request Flow
1. User enters a career goal.
2. App sends it to Gemini with a strict JSON schema.
3. Gemini returns structured data:
    - title
    - skillLevels
    - tools
    - githubRepos
    - youtubeResources
    - articles
    - roadmap (with steps + timeframe)

### 🔹 Benefits
- Predictable output
- Clean formatting
- Zero hallucinations
- Easier UI rendering

---

## 🧠 Component Breakdown

### ✔ CareerInput.jsx
- Text input
- Submit button
- Mobile-friendly
- Smooth UI transitions

### ✔ PlanDisplay.jsx
- Displays the AI-generated roadmap
- Cards for each section
- Icons (emoji-based)
- Roadmap timeline
- PDF Export
- Auto formatted summary

### ✔ geminiService.js
- Handles Gemini API calls
- Includes responseSchema
- Ensures valid, clean JSON
- Returns final career plan object

---

## 🧾 PDF Export Feature

- Click Save as PDF
- Shows a user-friendly prompt
- Opens browser’s print dialog
- Choose Save as PDF
- Downloads clean roadmap

Perfect for:
- Students
- Job seekers
- Resume attachments
- Career counselors

---

## 🧩 Potential Future Upgrades

- Light/Dark mode toggle
- AI job description generator
- Multi-career comparison
- User login + save roadmap
- Export to DOCX
- Mobile app version

---

## 🤝 Contribution

Contributions are welcome!  
Fork → Modify → Pull Request.

---

## 📜 License

MIT License — free to use.

---

## 👤 Author

Rakesh T (Rocky)  
AI + Full-Stack Developer  
Always building futuristic things. 🚀

---

