import OpenAI from 'openai';
import {AI_KEY} from "./constants";

const client = new OpenAI({
    apiKey: AI_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
});

export default client;