import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchTriviaQuestions = async (category) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trivia/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
        throw error;
    }
};

export const submitTriviaScore = async (userId, score) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/${userId}/scores`, { score });
        return response.data;
    } catch (error) {
        console.error('Error submitting trivia score:', error);
        throw error;
    }
};
