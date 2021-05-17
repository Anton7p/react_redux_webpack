import axios from "axios";


const instance = axios.create({
    baseURL: "https://www.dictionaryapi.com/api/v3/references/sd2/json/",
});
const key = "0a4b0237-bf41-42f3-8c8a-3ef7205e079b";

export const dictionaryApi = {
    getWords(word,query) {
        return instance.get(`${word}${query}?key=${key}`)
            .then(res => {
                return res.data;
            }).catch(result => console.warn(result));

    }

};
