function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [key, val] = cookie.split('=');
      if (decodeURIComponent(key) === name) {
        return decodeURIComponent(val);
      }
    }
    return null;
  }

  function deleteCookie(name) {
    setCookie(name, '', -1);
  }

  // SessionStorage Functions
  function setSessionItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function getSessionItem(key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  function removeSessionItem(key) {
    sessionStorage.removeItem(key);
  }

  // Handlers for UI
  function setCookieHandler() {
    setCookie(cookieKey.value, cookieValue.value);
    cookieResult.textContent = `Cookie "${cookieKey.value}" set.`;
  }

  function getCookieHandler() {
    const val = getCookie(cookieKey.value);
    cookieResult.textContent = val !== null ? `Cookie value: ${val}` : "Cookie not found.";
  }

  function deleteCookieHandler() {
    deleteCookie(cookieKey.value);
    cookieResult.textContent = `Cookie "${cookieKey.value}" deleted.`;
  }

  function setSessionHandler() {
    setSessionItem(sessionKey.value, sessionValue.value);
    sessionResult.textContent = `Session key "${sessionKey.value}" set.`;
  }

  function getSessionHandler() {
    const val = getSessionItem(sessionKey.value);
    sessionResult.textContent = val !== null ? `Session value: ${val}` : "Session key not found.";
  }

  function removeSessionHandler() {
    removeSessionItem(sessionKey.value);
    sessionResult.textContent = `Session key "${sessionKey.value}" removed.`;
  }