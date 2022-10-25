// Helper token utilities

// Default Storybook Token Params
export const tokenParams = {
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    },
  },
  options: {
    showToolbar: false
  },
  previewTabs: { 
    canvas: { hidden: true },
    
  },
  viewMode: 'docs',
};

// Creates a deep object from an array of keys and nested value
export const setDeepObject = (obj: {[key: string]: {}}, keys: string[], val: number | string) => { 
  const lastKey = keys.pop();
  const lastObj = keys.reduce((obj, key) => 
      obj[key] = obj[key] || {}, 
      obj); 
  lastObj[lastKey as keyof typeof obj] = val;
};

// Creates a token object from SASS exports
export const getTokenObject = (prefix: string, tokens: {[key: string]: number | string;}) => {
  const objectRoot = `${prefix}-`
  const object = {};

  Object.keys(tokens).forEach((key, i) => {
    if (key.includes(objectRoot)) {
      const splitKeys = key.split("-");
      splitKeys.shift();
      setDeepObject(object, splitKeys, tokens[key]);
    }
  });

  return object;
};

// Converts a token camelCase key to Title Case, e.g. tokenName -> Token Name
export const getTokenTitle= (token: string) => {
  let title = token;
  // Capitalize words
  title = title[0].toUpperCase() + title.slice(1).replace(/([A-Z])/g, ' $1');
  // Add Spaces between letters and numbers
  title = title.replace(/[^0-9](?=[0-9])/g, '$& ');
  return title
};