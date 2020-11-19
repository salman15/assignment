/**
 * Config object to hold base configuration settings for the app
 */
const envIsDev = process.env.NODE_ENV === "production";
export const config = {
  baseUrl: envIsDev ? "https://postman-echo.com/" : "http://localhost:3004/",
};
