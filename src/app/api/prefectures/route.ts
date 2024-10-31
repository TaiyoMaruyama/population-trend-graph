import { NextResponse } from 'next/server';
import { ApiError } from '@/types/resas';
import { BASE_URL, fetcher } from '../fetcher';

export async function GET() {
  try {
    const data = await fetcher(`${BASE_URL}/prefectures`);
    return NextResponse.json(data);
  } catch (error: unknown) {
    const apiError: ApiError = {
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
    return NextResponse.json(apiError, { status: 500 });
  }
}
