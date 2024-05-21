const path = require('path');

module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
};
