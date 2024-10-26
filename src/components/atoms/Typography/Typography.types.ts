type HeadingVariant = keyof JSX.IntrinsicElements & ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p');

export interface TypographyProps {
  text: string;
  bold?: boolean;
  variant?: HeadingVariant;
}
