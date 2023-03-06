const devBaseURL = "http://codedeep.cn:5502";
const proBaseURL = "http://1.117.247.44:5502";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;