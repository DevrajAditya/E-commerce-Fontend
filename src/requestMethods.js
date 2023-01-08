import axios from "axios";

const BASE_URL ="http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTViMzJkYTJlNmE1N2JjNzg0YzQ2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzE4NTg0OCwiZXhwIjoxNjczNDQ1MDQ4fQ.avf_Qj126gMeAia_OQskic3fVOp4m_ZtaM1jXow4BHE";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})