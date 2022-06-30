import fs from 'fs';
import path from 'path';
import svgo from 'svgo';

fs.mkdirSync('./output/');

const optimize = async () => {
  const config = await svgo.loadConfig();
  const files = fs.readdirSync('./src/');
  files.forEach((file) => {
    if (path.extname(file) == '.svg') {
      const svg = fs.readFileSync(`./src/${file}`, 'utf-8');
      const optimized = svgo.optimize(svg, config);
      fs.writeFileSync(`./output/${file}`, optimized.data);
    }
  });
};

optimize();
