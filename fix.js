import fs, { readFileSync, writeFileSync } from "fs";

// Helper function to process each .d.ts file
function processFile(file_path) {
  let ts = readFileSync(file_path, { encoding: "utf8" });

  const aloneLF = /\n(?!\r)/g;
  ts = ts.replace(aloneLF, '\r\n');

  ts = ts.replaceAll('SvelteComponentTyped', 'SvelteComponent');
  ts = ts.replaceAll('export default class', 'export class');
  ts = ts.replaceAll(`import { BackgroundColor } from './shared';`, `import type { BackgroundColor } from './shared.d.ts';`);
  ts = ts.replaceAll(`import { Breakpoints } from './shared';`, `import type { Breakpoints } from './shared.d.ts';`);
  ts = ts.replaceAll(`import { Breakpoints, ContainerType } from './shared';`, `import type { Breakpoints, ContainerType } from './shared.d.ts';`);
  ts = ts.replaceAll(`import { ButtonProps } from './Button';`, `import type { ButtonProps } from './Button.d.ts';`);
  ts = ts.replaceAll(`import { Color } from './shared';`, `import type { Color } from './shared.d.ts';`);
  ts = ts.replaceAll(`import { ColumnProps } from './Col';`, `import type { ColumnProps } from './Col.d.ts';`);
  ts = ts.replaceAll(`import { ContainerType } from './shared';`, `import type { ContainerType } from './shared.d.ts';`);
  ts = ts.replaceAll(`import { Direction } from './shared';`, `import type { Direction } from './shared.d.ts';`);
  ts = ts.replaceAll(`import { DropdownProps } from './Dropdown';`, `import type { DropdownProps } from './Dropdown.d.ts';`);
  ts = ts.replaceAll(`import { FadeProps } from './Fade';`, `import type { FadeProps } from './Fade.d.ts';`);
  ts = ts.replaceAll(`import { TextColor } from './shared';`, `import type { TextColor } from './shared.d.ts';`);

  ts = `declare module 'sveltestrap' {\r\n` + ts + `\r\n}\r\n`;

  ts = ts.replaceAll(`{ default: {} }`, 'any');
  ts = ts.replaceAll(`{},`, 'any,');
  ts = ts.replaceAll(`{}>`, 'any>');

  ts = ts.replaceAll(`}\r\n\r\nexport class`, `class?: string;\r\n}\r\n\r\nexport class`);
  writeFileSync(file_path, ts);
}

// Helper function to recursively process directories
function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const file_path = `${directory}/${file}`;
    if (fs.statSync(file_path).isDirectory()) {
      processDirectory(file_path);
    } else if (file.endsWith(".d.ts")) {
      processFile(file_path);
    }
  });
}

// Main function to fix svelte-check issue with sveltestrap
function fixSCforSS() {
  const root = "./src";
  processDirectory(root);
}

fixSCforSS();
