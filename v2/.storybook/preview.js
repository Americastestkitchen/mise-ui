export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// TODO(Brand Theme): remove after brand consolidation
export const globalTypes = {
  theme: {
    name: 'Brand Theme',
    description: 'Applies brand theme class to stories for components that need it.',
    defaultValue: 'atk-theme',
    toolbar: {
      icon: 'heart',
      items: ['atk-theme', 'cco-theme', 'cio-theme'],
      dynamicTitle: true,
    },
  },
};

// TODO(Brand Theme): remove after brand consolidation
const useBrandTheme = (Story, { globals }) => (
  <div className={globals.theme}>
    <Story />
  </div>
);

export const decorators = [useBrandTheme];
