module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        'primary-soft': 'var(--primary-soft)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        'accent-soft': 'var(--accent-soft)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        input: 'var(--input)'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)']
      }
    }
  },
  plugins: []
}
