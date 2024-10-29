import { render, screen } from '@testing-library/react';
import { PopulationTabDefs } from '@/consts/PopulationTabDefs';
import { PopulationTabId } from '@/types/resas';
import PopulationTabGroup from './PopulationTabGroup';
import '@testing-library/jest-dom';

describe('PopulationTabGroup Component', () => {
  const mockOnClick = jest.fn();

  // PopulationTabGroupをレンダリングするヘルパー関数
  const renderComponent = (selected: PopulationTabId) => {
    return render(
      <PopulationTabGroup tabs={PopulationTabDefs} selected={selected} onClick={mockOnClick} />
    );
  };

  // タブが正しく表示されることを確認
  it('renders the correct tabs', () => {
    renderComponent(PopulationTabId.TotalPopulation);
    PopulationTabDefs.forEach((tab) => {
      const tabElement = screen.getByRole('button', { name: tab.label });
      expect(tabElement).toBeVisible();
    });
  });

  // 選択されているタブが正しくスタイルされていることを確認
  it('applies selected style to the active tab', () => {
    renderComponent(PopulationTabId.TotalPopulation);
    const selectedTabElement = screen.getByRole('button', { name: '総人口' });
    expect(selectedTabElement).toHaveClass('selected');
  });

  // タブがクリックされたときにonClickが呼ばれることを確認
  it('calls onClick when a tab is clicked', () => {
    renderComponent(PopulationTabId.TotalPopulation);
    const tabElement = screen.getByRole('button', { name: '年少人口' });
    tabElement.click();
    expect(mockOnClick).toHaveBeenCalledWith(PopulationTabId.YouthPopulation);
  });
});
