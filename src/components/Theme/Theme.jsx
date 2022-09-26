export const theme = {
  colors: {
    background: '#E7ECF2',
    textMain: '#223042',
    textSecondary: '#a9aaac',
    secondary: '#F3F6F9',
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(n => n + 'px'),
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64].map(n => n + 'px'),
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
};
