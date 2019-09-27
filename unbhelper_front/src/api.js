import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3010" });


export const create_post = (name, content, subject_id) => {
  return api.post("/posts", { name, content, subject_id });
};
