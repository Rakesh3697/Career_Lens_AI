import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

const resourceSchema = {
  type: Type.OBJECT,
  properties: { name: { type: Type.STRING }, url: { type: Type.STRING } },
  required: ['name', 'url'],
};

// ✅ Updated schema with skillLevels instead of plain skills
const schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    skillLevels: {
      type: Type.OBJECT,
      properties: {
        basic: { type: Type.ARRAY, items: { type: Type.STRING } },
        medium: { type: Type.ARRAY, items: { type: Type.STRING } },
        advanced: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
      required: ['basic', 'medium', 'advanced'],
    },
    tools: { type: Type.ARRAY, items: { type: Type.STRING } },
    githubRepos: { type: Type.ARRAY, items: resourceSchema },
    youtubeResources: { type: Type.ARRAY, items: resourceSchema },
    articles: { type: Type.ARRAY, items: resourceSchema },
    roadmap: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        steps: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              timeframe: { type: Type.STRING },
              prerequisites: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['title', 'description', 'timeframe'],
          },
        },
      },
      required: ['title', 'steps'],
    },
  },
  required: [
    'title',
    'skillLevels',
    'tools',
    'githubRepos',
    'youtubeResources',
    'articles',
    'roadmap',
  ],
};

// ✅ Updated prompt for structured output
export const generateCareerPlan = async (goal) => {
  try {
    const prompt = `
      You are a career AI assistant creating a 2025 roadmap for the goal: "${goal}".
      Respond strictly in JSON format only.

      The JSON must include:
      - title: short name of the career
      - skillLevels: divide skills into "basic", "medium", and "advanced"
      - tools: 3 trending tools for 2025
      - githubRepos: array of { name, url } of relevant GitHub projects
      - youtubeResources: array of { name, url } of useful YouTube channels
      - articles: array of { name, url } for helpful blogs or guides
      - roadmap: with title and steps, each step having title, description, timeframe, and prerequisites if needed

      Ensure clean and real-world learning roadmap data.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: schema,
      },
    });

    return JSON.parse(response.text.trim());
  } catch (err) {
    console.error(err);
    throw new Error('Failed to generate career plan.');
  }
};
