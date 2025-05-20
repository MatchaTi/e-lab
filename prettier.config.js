//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  trailingComma: 'all',
  semi: true,
  printWidth: 120,
  useTabs: true,
  tabWidth: 4,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
