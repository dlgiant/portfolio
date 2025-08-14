// Script to verify dark mode implementation in Button component
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Dark Mode Implementation...\n');

// Read Button component
const buttonPath = path.join(__dirname, 'src/components/ui/Button.tsx');
const buttonContent = fs.readFileSync(buttonPath, 'utf8');

// Check for dark mode classes
const darkModeClasses = [
  'dark:bg-',
  'dark:hover:',
  'dark:text-',
  'dark:focus:',
  'dark:disabled:',
  'dark:opacity-'
];

console.log('✅ Button Component Dark Mode Classes:');
darkModeClasses.forEach(className => {
  const matches = buttonContent.match(new RegExp(className, 'g'));
  if (matches) {
    console.log(`  ✓ Found ${matches.length} instances of "${className}"*`);
  } else {
    console.log(`  ✗ Missing "${className}"* classes`);
  }
});

// Check for focus ring offset in dark mode
if (buttonContent.includes('dark:focus:ring-offset-gray-900')) {
  console.log('  ✓ Dark mode focus ring offset configured');
} else {
  console.log('  ✗ Dark mode focus ring offset missing');
}

// Check Button.stories.tsx
const storiesPath = path.join(__dirname, 'src/components/ui/Button.stories.tsx');
const storiesContent = fs.readFileSync(storiesPath, 'utf8');

console.log('\n✅ Button Stories Configuration:');
if (storiesContent.includes('DarkMode')) {
  console.log('  ✓ DarkMode story exists');
}
if (storiesContent.includes('className="dark')) {
  console.log('  ✓ Dark class applied in DarkMode story');
}
if (storiesContent.includes('bg-gray-900')) {
  console.log('  ✓ Dark background configured in story');
}

// Check preview configuration
const previewPath = path.join(__dirname, '.storybook/preview.ts');
const previewContent = fs.readFileSync(previewPath, 'utf8');

console.log('\n✅ Storybook Preview Configuration:');
if (previewContent.includes('withThemeByClassName')) {
  console.log('  ✓ Theme decorator configured');
}
if (previewContent.includes("dark: 'dark'")) {
  console.log('  ✓ Dark theme class configured');
}
if (previewContent.includes('defaultTheme')) {
  console.log('  ✓ Default theme set');
}

// Check main configuration
const mainPath = path.join(__dirname, '.storybook/main.ts');
const mainContent = fs.readFileSync(mainPath, 'utf8');

console.log('\n✅ Storybook Main Configuration:');
if (mainContent.includes('@storybook/addon-themes')) {
  console.log('  ✓ Themes addon installed');
}

// Check tailwind configuration
const tailwindPath = path.join(__dirname, 'tailwind.config.ts');
if (fs.existsSync(tailwindPath)) {
  const tailwindContent = fs.readFileSync(tailwindPath, 'utf8');
  console.log('\n✅ Tailwind Configuration:');
  if (tailwindContent.includes('darkMode')) {
    console.log('  ✓ Dark mode configured in Tailwind');
    if (tailwindContent.includes("'class'")) {
      console.log('  ✓ Using class-based dark mode strategy');
    }
  }
}

console.log('\n✨ Dark Mode Verification Complete!');
console.log('\n📝 Manual Testing Required:');
console.log('  1. Open Storybook at http://localhost:6006');
console.log('  2. Look for the theme toggle (sun/moon icon) in the toolbar');
console.log('  3. Test all button variants in both light and dark modes');
console.log('  4. Verify hover, focus, and disabled states');
console.log('  5. Check loading spinner visibility in both themes');
console.log('\n💡 Use the test-dark-mode.md checklist for comprehensive testing');
