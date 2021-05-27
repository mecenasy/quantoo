import api from './api';

export const getRepos = async (search: string) => {
   return await api.get(`https://api.github.com/search/repositories?q=${search}`);
}