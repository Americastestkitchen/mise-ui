const fs = require('fs');

const args = process.argv.slice(2);

function makeDirs(fileName) {
  fs.mkdirSync(`./src/components/${fileName}`, { recursive: true });
}

function generate(fileName) {
  makeDirs(fileName);
  fs.writeFileSync(
    `./src/components/${fileName}/${fileName}.tsx`,
    `import classNames from 'classnames/bind';

import styles from "./${fileName}.module.scss";

const cx = classNames.bind(styles);

export interface ${fileName}Props {
  className?: string 
}

export const ${fileName} = ({ className }: ${fileName}Props) => {
  const classNames = cx({
    'component': true,
    $className: !!className,
  });
  return <div className={\`\${classNames}\`}>${fileName}</div>
};

export default ${fileName};`
  );
  fs.writeFileSync(
    `./src/components/${fileName}/${fileName}.stories.mdx`,
    `import { Canvas, Meta, Story } from "@storybook/addon-docs";
import { withDesign } from "storybook-addon-designs";
import { ${fileName}, ${fileName}Props } from "./${fileName}";

<Meta
  title="New Components/${fileName}"
/>

# ${fileName}

This is a new component.

<Canvas>
  <Story name="${fileName}">
    <${fileName} />
  </Story>
</Canvas>`
  );
  fs.writeFileSync(
    `./src/components/${fileName}/${fileName}.module.scss`,
    `@use "./src/styles/mise.scss";`
  );
}

generate(args[0]);
