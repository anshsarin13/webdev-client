import axios from "axios";

export const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER ?? "http://localhost:4000";

// Every Kambaz request carries the session cookie.
export const axiosWithCredentials = axios.create({ withCredentials: true });
