import axios from "axios";

// Function to fetch CSRF token from cookies
const getCSRFToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="))
    ?.split("=")[1];
};

// Create a new Axios instance
const instance = axios.create({
  baseURL: "https://e.asm-system.com/api", // Set your API base URL
  withCredentials: true, // Ensure credentials are sent with requests
});

// Request interceptor to add CSRF token to headers
instance.interceptors.request.use(
  async (config) => {
    // Get CSRF cookie before sending requests
    await axios.get("https://e.asm-system.com/sanctum/csrf-cookie", {
      withCredentials: true,
    });

    // Retrieve the CSRF token
    const xsrfToken = getCSRFToken();
    if (xsrfToken) {
      config.headers["X-XSRF-TOKEN"] = decodeURIComponent(xsrfToken);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Export the modified Axios instance as default
export default instance;
