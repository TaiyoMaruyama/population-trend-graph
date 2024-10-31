import { PopulationTabId } from '@/types/resas';

export interface PopulationTab {
  id: PopulationTabId;
  label: string;
}

export interface PopulationTabGroupProps {
  tabs: PopulationTab[];
  selected: PopulationTabId;
  disabled: boolean;
  onClick: (id: PopulationTabId) => void;
}
