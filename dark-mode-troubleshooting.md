# Dark Mode Troubleshooting Guide

## Issue: Theme toggle appears but doesn't change component styles

### Quick Diagnosis
Open Developer Tools in your browser while viewing Storybook:
1. Right-click on the Storybook page → Inspect
2. Look at the `<html>` or `<body>` element
3. Toggle the theme and see if `class="dark"` is being added/removed

### Solutions

## Solution 1: Verify Dark Class Application
Run this in the browser console while on Storybook:
```javascript
// Check if dark class is applied
document.documentElement.classList.contains('dark')
document.body.classList.contains('dark')

// Manually test dark mode
document.documentElement.classList.add('dark')
```

If the styles change when you manually add the class, the issue is with the theme addon.

## Solution 2: Clear Cache and Rebuild
```bash
# Stop Storybook (Ctrl+C)
# Clear cache
rm -rf node_modules/.cache
rm -rf .next

# Reinstall dependencies
npm install

# Restart Storybook
npm run storybook
```

## Solution 3: Check Browser Console for Errors
Look for any JavaScript errors in the console that might prevent the theme toggle from working.

## Solution 4: Verify Tailwind Configuration
Ensure the tailwind.config.js has:
```javascript
module.exports = {
  darkMode: 'class', // This is critical!
  // ... rest of config
}
```

## Solution 5: Test Individual Components
Create a simple test story to isolate the issue:
```typescript
export const TestDarkMode: Story = {
  render: () => (
    <div>
      <div className="bg-white dark:bg-black p-4">
        <p className="text-black dark:text-white">
          This text should be black in light mode and white in dark mode
        </p>
      </div>
    </div>
  ),
};
```

## Solution 6: Manual Theme Toggle Test
Add this temporary code to any story to test if Tailwind dark mode is working:
```typescript
export const ManualToggle: Story = {
  render: () => {
    const [isDark, setIsDark] = React.useState(false);
    
    React.useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDark]);
    
    return (
      <div>
        <button onClick={() => setIsDark(!isDark)}>
          Toggle Dark Mode Manually
        </button>
        <div className="mt-4 p-4 bg-white dark:bg-gray-800">
          <p className="text-black dark:text-white">
            Dark mode is: {isDark ? 'ON' : 'OFF'}
          </p>
        </div>
      </div>
    );
  },
};
```

## What's Working
✅ Dark mode classes are in the Button component
✅ Tailwind configuration has darkMode: 'class'
✅ Storybook addon-themes is installed
✅ Theme decorator is configured in preview.ts
✅ Global CSS has dark mode styles

## Next Steps
1. Open http://localhost:6006 in your browser
2. Open Developer Tools (F12)
3. Navigate to any Button story
4. Click the theme toggle in the toolbar
5. Check the Elements tab to see if `class="dark"` is being added to the HTML element
6. If the class is being added but styles aren't changing, the issue is with CSS
7. If the class isn't being added, the issue is with the theme addon

## Manual Testing Commands
Run these in the browser console while on Storybook:

```javascript
// Force dark mode
document.documentElement.classList.add('dark');

// Check all dark mode elements
document.querySelectorAll('[class*="dark:"]').length;

// See computed styles of a button
const button = document.querySelector('button');
window.getComputedStyle(button).backgroundColor;
```

## Report Back
Please let me know:
1. Is the `dark` class being added to the HTML element when you toggle?
2. Do you see the sun/moon icon in the toolbar?
3. Any errors in the browser console?
4. What happens when you manually add the dark class via console?
