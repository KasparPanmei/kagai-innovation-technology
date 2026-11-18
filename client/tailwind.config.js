/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: { extend: { colors: { kagai: { navy:'#081848', crimson:'#A81028', soft:'#F3F4F6', charcoal:'#202938', steel:'#737D8C' } }, fontFamily: { sans:['Inter','sans-serif'], display:['Manrope','sans-serif'], mono:['Space Mono','monospace'] }, maxWidth:{'site':'1280px'} } },
  plugins: []
};
