import Api from 'hsc-fetch';

export const api = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },
});
