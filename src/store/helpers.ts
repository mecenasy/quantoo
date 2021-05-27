export const saveInLocalStorage = (key: string, val: any) => {
   localStorage.setItem(key, JSON.stringify(val));
}

export const getFromLocalStorage = (key: string) => {
   return JSON.parse(localStorage.getItem(key) || '[]');
}

export const removeFromLocalStorage = (key: string) => {
   localStorage.removeItem(key);
}