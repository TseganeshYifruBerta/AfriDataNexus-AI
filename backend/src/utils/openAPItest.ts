import axios, { AxiosError } from 'axios';

async function testOpenAIEndpoint() {
  const apiKey = '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'; // Replace with your OpenAI API key
  const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Replace with your actual OpenAI API endpoint URL

  try {
    const response = await axios.post(apiUrl, {
      messages: [
            { role: "system", content: "You are an helpful assistant." },
            { role: "user", content:  'Hello, OpenAI!'}
        ],
      max_tokens: 1024,
      temperature : 0.3,
      model: "gpt-3.5-turbo"
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Response from OpenAI:', response.data, response.data.choices[0].message.content);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('Axios Error:', axiosError.message);
      console.error('Response Data:', axiosError.response?.data);
    } else {
      console.error('Unexpected Error:', error);
    }
  }
}

testOpenAIEndpoint();
