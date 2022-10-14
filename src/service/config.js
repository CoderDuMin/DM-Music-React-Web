const devBaseURL = "http://1.117.247.44:5502";
const proBaseURL = "https://production.org";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;