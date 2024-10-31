'use client';

import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';
import { PrefectureGraphData } from '@/components/organisms/PopulationGraphFrame/PopulationGraphFrame.types';
import { getColor } from '@/utils/getColor';
import onFormatGraphData from '@/utils/onFormatGraphData';
import styles from './PopulationGraph.module.scss';
import { commonFontSize, legendStyle, tooltipStyle } from './PopulationGraph.styles';
import { PopulationGraphProps } from './PopulationGraph.types';

const PopulationGraph: React.FC<PopulationGraphProps> = ({ populationData, tabValue }) => {
  const [graphData, setGraphData] = useState<PrefectureGraphData[]>([]);

  useEffect(() => {
    setGraphData(onFormatGraphData(populationData, tabValue));
  }, [populationData, tabValue]);

  const graphDataWithoutYear =
    graphData.length !== 0 ? Object.keys(graphData[0])?.filter((key) => key !== 'year') : [];

  return (
    <div className={styles.graph} data-testid='population-graph'>
      <ResponsiveContainer>
        <LineChart data={graphData} margin={{ top: 60, right: 60, left: 20, bottom: 40 }}>
          {graphDataWithoutYear.map((key, index) => (
            <Line
              key={key}
              type='monotone'
              dataKey={key}
              stroke={getColor(index)}
              strokeWidth={2}
              dot={{ strokeWidth: 0.5 }}
            />
          ))}
          <CartesianGrid stroke='#ccc' />
          <XAxis
            dataKey='year'
            dx={-10}
            angle={-20}
            dy={10}
            label={{ value: '(年)', position: 'right', offset: 20, style: commonFontSize }}
            tick={commonFontSize}
          />
          <YAxis
            tickFormatter={(value) => `${value / 1000}`}
            label={{ value: '(千人)', position: 'top', offset: 20, style: commonFontSize }}
            tick={commonFontSize}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend iconType='plainline' wrapperStyle={legendStyle} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationGraph;
