export const commonFontSize = { fontSize: '0.8rem' };

export const tooltipStyle: React.CSSProperties = {
  ...commonFontSize,
  padding: '0.5rem',
  borderRadius: '0.25rem',
  lineHeight: '0.75rem',
};

export const legendStyle: React.CSSProperties = {
  ...commonFontSize,
  position: 'absolute',
  bottom: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  backgroundColor: 'white',
};
