import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ADMIN_API}`,
});

export default service;
