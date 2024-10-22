export interface ButtonProps {
  disabled?: boolean;
  // NOTE:アイコンボタン付きのボタン等に対応するためlabe:stringのようにしない
  children: React.ReactNode;
  onClick: () => void;
}
