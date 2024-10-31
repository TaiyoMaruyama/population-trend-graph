import { fetchOptions } from './fetchOption';

export const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1';

export const fetcher = async (url: string) => {
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Error: ${error.message || 'Unknown error'}`);
  }
  return response.json();
};
