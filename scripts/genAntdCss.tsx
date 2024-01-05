// import fs from 'fs';
// import {extractStyle} from '@ant-design/static-style-extract';

// const outputPath = './public/antd.min.css';

// const css = extractStyle();

// fs.writeFileSync(outputPath, css);
// import { createHash } from 'crypto';
// import fs from 'fs';
// import path from 'path';
// import { extractStyle } from '@ant-design/cssinjs';
// import type Entity from '@ant-design/cssinjs/lib/Cache';

// export type DoExtraStyleOptions = {
//   cache: Entity;
//   dir?: string;
//   baseFileName?: string;
// };
// export function doExtraStyle({
//   cache,
//   dir = 'antd-output',
//   baseFileName = 'antd.min',
// }: DoExtraStyleOptions) {
//   const baseDir = path.resolve(__dirname, '../../static/css');

//   const outputCssPath = path.join(baseDir, dir);

//   if (!fs.existsSync(outputCssPath)) {
//     fs.mkdirSync(outputCssPath, { recursive: true });
//   }

//   const css = extractStyle(cache, true);
//   if (!css) return '';

//   const md5 = createHash('md5');
//   const hash = md5.update(css).digest('hex');
//   const fileName = `${baseFileName}.${hash.substring(0, 8)}.css`;
//   const fullpath = path.join(outputCssPath, fileName);

//   const res = `_next/static/css/${dir}/${fileName}`;

//   if (fs.existsSync(fullpath)) return res;

//   fs.writeFileSync(fullpath, css);

//   return res;
// }

import fs from 'fs';
import {extractStyle} from '@ant-design/static-style-extract';

const outputPath = './public/antd.min.css';

// 1. default theme

// const css = extractStyle();

// 2. With custom theme

const css = extractStyle();

fs.writeFileSync(outputPath, css);

console.log(`🎉 Antd CSS generated at ${outputPath}, ${css}`);
