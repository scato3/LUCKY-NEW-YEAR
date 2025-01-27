import Api from 'hsc-fetch';

export const api = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});
