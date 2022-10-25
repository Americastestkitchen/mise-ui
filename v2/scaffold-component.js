const fs = require('fs');

const args = process.argv.slice(2);

function makeDirs(fileName) {
  fs.mkdirSync(`./src/components/${fileName}`, { recursive: true });
  fs.mkdirSync(`./src/components/${fileName}/styles`, { recursive: true });
}

function generate(fileName) {
  makeDirs(fileName);
  fs.writeFileSync(
    `./components/${fileName}/${fileName}.tsx`,
    `import React from "react";

import styles from "./styles/${fileName}.module.scss";

export interface ${fileName}Props {
  className?: string 
}

export const ${fileName}: React.FC<${fileName}Props> = ({ className }: ${fileName}Props) => {
  return <div className={\`\${styles["component"]} \${className}\`}>${fileName}</div>;
};

export default ${fileName};`
  );
  fs.writeFileSync(
    `./components/${fileName}/${fileName}.stories.tsx`,
    `import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { ${fileName}, ${fileName}Props } from "./${fileName}";

export default {
  title: "NEW COMPONENT/${fileName}",
  component: ${fileName},
  decorators: [withDesign],
  argTypes: {
    className: {
      control: null,
    },
  },
} as Meta;

export const Basic: Story<${fileName}Props> = ({ ...args }) => {
  return <${fileName} {...args} />;
};`
  );
  fs.writeFileSync(
    `./components/${fileName}/styles/${fileName}.module.scss`,
    `@use "./src/styles/mise.scss";`
  );
}

generate(args[0]);
