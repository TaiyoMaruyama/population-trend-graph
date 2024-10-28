import { render, screen, fireEvent } from '@testing-library/react';
import useFetchPrefecture from '@/hooks/useFetchPrefecture';
import { Prefecture } from '@/types';
import PrefCheckboxGroup from './PrefCheckboxGroup';
import '@testing-library/jest-dom';

// useFetchPrefectureをモック
jest.mock('../../../hooks/useFetchPrefecture');

describe('PrefCheckboxGroup', () => {
  const mockHandleCheck = jest.fn();
  const mockPrefectures: Prefecture[] = [
    { prefCode: 1, prefName: '東京' },
    { prefCode: 2, prefName: '大阪' },
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
    expect(screen.getByLabelText(/東京/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/大阪/i)).toBeInTheDocument();

    // チェックボックスのクリックをシミュレート
    fireEvent.click(screen.getByLabelText(/東京/i));
    expect(mockHandleCheck).toHaveBeenCalledWith(mockPrefectures[0]);
  });

  test('checks the correct boxes based on checkedList', () => {
    const checkedList = [{ prefCode: 1, prefName: '東京' }];
    render(<PrefCheckboxGroup checkedList={checkedList} handleCheck={mockHandleCheck} />);

    expect(screen.getByLabelText(/東京/i)).toBeChecked();
    expect(screen.getByLabelText(/大阪/i)).not.toBeChecked();
  });
});
