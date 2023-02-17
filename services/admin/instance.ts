import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_APP_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default service;
