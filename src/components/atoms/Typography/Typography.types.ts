type HeadingVariant = keyof JSX.IntrinsicElements & ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

export interface TypographyStyleProps {
  bold?: true;
  variant?: HeadingVariant;
}

export interface TypographyProps extends TypographyStyleProps {
  children: React.ReactNode;
}
