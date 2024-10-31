export const fetchOptions = {
  method: 'GET',
  headers: { 'X-API-KEY': process.env.RESAS_API_KEY || '' },
};
