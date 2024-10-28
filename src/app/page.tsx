'use client';

import { useState } from 'react';
import PrefSelectionFrame from '@/components/organisms/PrefSelectionFrame/PrefSelectionFrame';
import { Prefecture } from '@/types';

export default function Home() {
  const [checkedPrefectures, setCheckedPrefectures] = useState<Prefecture[]>([]);
  return (
    <PrefSelectionFrame
      checkedPrefectures={checkedPrefectures}
      setCheckedPrefectures={setCheckedPrefectures}
    />
  );
}
