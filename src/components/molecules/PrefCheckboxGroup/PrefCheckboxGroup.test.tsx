import { render, screen, fireEvent } from '@testing-library/react';
import useFetchPrefecture from '@/hooks/useFetchPrefecture';
import { Prefecture } from '@/types/resas';
import PrefCheckboxGroup from './PrefCheckboxGroup';
import '@testing-library/jest-dom';

// useFetchPrefectureをモック
jest.mock('../../../hooks/useFetchPrefecture');

describe('PrefCheckboxGroup', () => {
  const mockHandleCheck = jest.fn();
  const mockPrefectures: Prefecture[] = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  beforeEach(() => {
    (useFetchPrefecture as jest.Mock).mockReturnValue({
      prefectures: mockPrefectures,
      isError: false,
      isLoading: false,
    });
  });

  test('renders loading state', () => {
    (useFetchPrefecture as jest.Mock).mockReturnValue({
      prefectures: [],
      isError: false,
      isLoading: true,
    });

    render(<PrefCheckboxGroup checkedList={[]} handleCheck={mockHandleCheck} />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test('renders error state', () => {
    (useFetchPrefecture as jest.Mock).mockReturnValue({
      prefectures: [],
      isError: true,
      isLoading: false,
    });

    render(<PrefCheckboxGroup checkedList={[]} handleCheck={mockHandleCheck} />);
    expect(screen.getByText(/Error loading prefectures/i)).toBeInTheDocument();
  });

  test('renders prefectures and handles checkbox click', () => {
    render(<PrefCheckboxGroup checkedList={[]} handleCheck={mockHandleCheck} />);

    // 都道府県が正しくレンダリングされているかを確認
    expect(screen.getByLabelText(/北海道/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/青森県/i)).toBeInTheDocument();

    // チェックボックスのクリックをシミュレート
    fireEvent.click(screen.getByLabelText(/北海道/i));
    expect(mockHandleCheck).toHaveBeenCalledWith(mockPrefectures[0]);
  });

  test('checks the correct boxes based on checkedList', () => {
    const checkedList = [{ prefCode: 1, prefName: '北海道' }];
    render(<PrefCheckboxGroup checkedList={checkedList} handleCheck={mockHandleCheck} />);

    expect(screen.getByLabelText(/北海道/i)).toBeChecked();
    expect(screen.getByLabelText(/青森県/i)).not.toBeChecked();
  });
});
