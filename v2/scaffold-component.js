const fs = require('fs');

const args = process.argv.slice(2);

function makeDirs(fileName) {
  fs.mkdirSync(`./src/components/${fileName}`, { recursive: true });
  fs.mkdirSync(`./src/components/${fileName}/styles`, { recursive: true });
}

function generate(fileName) {
  makeDirs(fileName);
  fs.writeFileSync(
    `./src/components/${fileName}/${fileName}.tsx`,
    `import styles from "./${fileName}.module.scss";

export interface ${fileName}Props {
  className?: string 
}

export const ${fileName}: React.FC<${fileName}Props> = ({ className }: ${fileName}Props) => {
  return <div className={\`\${styles["component"]} \${className}\`}>${fileName}</div>
};

export default ${fileName};`
  );
  fs.writeFileSync(
    `./src/components/${fileName}/${fileName}.stories.tsx`,
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
    `./src/components/${fileName}/styles/${fileName}.module.scss`,
    `@use "./src/styles/mise.scss";`
  );
}

generate(args[0]);
