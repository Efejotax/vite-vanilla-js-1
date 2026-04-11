// No necesitas tailwind.config.js a menos que quieras personalizar cosas avanzadas.

// tailwind.config.js
export default {
  // Activa el modo "content" automático de Tailwind 4
  // Tailwind escanea todos los archivos por defecto, así que no necesitas configurarlo.
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#64748b',
      },
    },
  },

  // Plugins opcionales
  plugins: [],
};
