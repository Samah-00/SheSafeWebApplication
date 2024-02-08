import  OpenAI  from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const sendChat = async (req, res) => {
    try {
        const { messageContent } = req.body;

        if (!messageContent) {
            return res.status(400).json({ error: 'Message content is required' });
        }

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: messageContent }],
            model: "gpt-3.5-turbo",
        });

        // Return the response from OpenAI to the client
        const aiResponse = chatCompletion.choices[0].message.content;
        res.json({ aiResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};