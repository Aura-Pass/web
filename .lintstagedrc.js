const path = require('path');

module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' ')}`,
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
};
