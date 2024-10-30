export const fetchOptions = {
  method: 'GET',
  headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY || '' },
};
