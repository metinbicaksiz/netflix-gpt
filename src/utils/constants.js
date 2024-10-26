export const BROWSE_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/TR-en-20240923-TRIFECTA-perspective_b0a755bd-461b-4005-b8d9-e86ae684e893_large.jpg";
export const USER_AVATAR = "https://occ-0-7292-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229";
export const API_OPTIONS =  {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};
export const IMAGE_URL = "https://image.tmdb.org/t/p/w780";
export const SUPPORTED_LANGUAGES= [
    {
        identifier: "en",
        name: "English"
    },
    {
        identifier: "tr",
        name: "Turkish"
    },
    {
        identifier: "spanish",
        name: "Spanish"
    }
    ];
export const supportedAI = [
    {
        identifier: "gemini",
        name: "Gemini",
    },
    {
        identifier: "open",
        name: "OpenAI",
    }
]
export const GEMINI_KEY = process.env.REACT_APP_geminiApiKey;
export const AI_KEY = process.env.REACT_APP_AI_KEY;
