const TOKEN_KEY = "token";
const USER_KEY = "user";

// getter that returns the stored token
// localStorage.getItem(key)
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

// setter that takes a token string and saves it
// localStorage.setItem(key, value)
export const setToken = (token) => {
    if (!token) {
        return
    }

    localStorage.setItem(TOKEN_KEY, token);
};

// clearer that removes it
// localStorage.removeItem(key)
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const clearSession = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
}

// setter to set the user
export const setUser = (user) => {
  if (!user) {
    return;
  }
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

// get the user
export const getUser = () => {
    try {
        const stored = localStorage.getItem(USER_KEY);
        if (!stored) {
            return null;
        };
        return JSON.parse(stored);
    } catch (error) {
        localStorage.removeItem(USER_KEY);
        return null;
    };
};