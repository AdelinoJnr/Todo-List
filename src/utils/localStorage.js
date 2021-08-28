export const updateLocalStorage = (key, value) => {
  const keyStorage = localStorage.getItem(key);
  const storage = keyStorage ? JSON.parse(keyStorage) : [];
  if (storage.length > 0) {
    localStorage.setItem(key, JSON.stringify([...storage, value]));
  } else {
    localStorage.setItem(key, JSON.stringify([value]));
  }
};

export const removeLocalStorage = (key, listTask) => {
  localStorage.setItem(key, JSON.stringify(listTask));
};

export const getLocalStorage = (key) => {
  const keyStorage = localStorage.getItem(key);
  const storage = keyStorage ? JSON.parse(keyStorage) : [];
  return storage;
};
