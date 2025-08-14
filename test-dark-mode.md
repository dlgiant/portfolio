# Dark Mode Verification Checklist

## 1. Theme Toggle in Storybook Toolbar
- [ ] The theme toggle appears in the Storybook toolbar (sun/moon icon)
- [ ] Clicking the toggle switches between light and dark themes
- [ ] The selected theme persists across story navigation

## 2. Button Variants - Light Mode
### Primary Button
- [ ] Background: Blue (#3B82F6)
- [ ] Text: White
- [ ] Hover: Darker blue (#2563EB)
- [ ] Focus: Blue ring visible
- [ ] Disabled: Light blue with reduced opacity

### Secondary Button
- [ ] Background: Gray (#E5E7EB)
- [ ] Text: Dark gray (#111827)
- [ ] Hover: Darker gray (#D1D5DB)
- [ ] Focus: Gray ring visible
- [ ] Disabled: Light gray with reduced opacity

### Danger Button
- [ ] Background: Red (#DC2626)
- [ ] Text: White
- [ ] Hover: Darker red (#B91C1C)
- [ ] Focus: Red ring visible
- [ ] Disabled: Light red with reduced opacity

### Success Button
- [ ] Background: Green (#16A34A)
- [ ] Text: White
- [ ] Hover: Darker green (#15803D)
- [ ] Focus: Green ring visible
- [ ] Disabled: Light green with reduced opacity

### Ghost Button
- [ ] Background: Transparent
- [ ] Text: Dark gray (#374151)
- [ ] Hover: Light gray background (#F3F4F6)
- [ ] Focus: Gray ring visible
- [ ] Disabled: Light gray text with reduced opacity

## 3. Button Variants - Dark Mode
### Primary Button
- [ ] Background: Blue (#3B82F6)
- [ ] Text: White
- [ ] Hover: Lighter blue (#60A5FA)
- [ ] Focus: Blue ring visible with dark offset
- [ ] Disabled: Dark blue with gray text

### Secondary Button
- [ ] Background: Dark gray (#374151)
- [ ] Text: Light gray (#F3F4F6)
- [ ] Hover: Lighter gray (#4B5563)
- [ ] Focus: Gray ring visible with dark offset
- [ ] Disabled: Very dark gray with muted text

### Danger Button
- [ ] Background: Red (#EF4444)
- [ ] Text: White
- [ ] Hover: Lighter red (#F87171)
- [ ] Focus: Red ring visible with dark offset
- [ ] Disabled: Dark red with gray text

### Success Button
- [ ] Background: Green (#10B981)
- [ ] Text: White
- [ ] Hover: Lighter green (#34D399)
- [ ] Focus: Green ring visible with dark offset
- [ ] Disabled: Dark green with gray text

### Ghost Button
- [ ] Background: Transparent
- [ ] Text: Light gray (#D1D5DB)
- [ ] Hover: Dark gray background (#1F2937)
- [ ] Focus: Gray ring visible with dark offset
- [ ] Disabled: Dark gray text with reduced opacity

## 4. Interactive States Testing

### Hover States
- [ ] All buttons show smooth color transitions on hover
- [ ] Hover effects work correctly in both themes
- [ ] Ghost button shows background change on hover

### Focus States
- [ ] Tab navigation shows focus ring on all buttons
- [ ] Focus ring color matches button variant
- [ ] Dark mode: Focus ring has dark offset (ring-offset-gray-900)
- [ ] Light mode: Focus ring has white offset

### Disabled States
- [ ] Disabled buttons don't respond to clicks
- [ ] Cursor shows as "not-allowed" on disabled buttons
- [ ] Opacity is reduced (60%) for disabled buttons
- [ ] Text color is properly muted in dark mode

## 5. Loading State
### Light Mode
- [ ] Loading spinner is visible and animated
- [ ] Spinner color matches button text color
- [ ] "Loading..." text appears next to spinner
- [ ] Button is disabled during loading

### Dark Mode
- [ ] Loading spinner is visible against dark backgrounds
- [ ] Spinner opacity is adjusted for dark mode (opacity-60)
- [ ] Animation is smooth and visible
- [ ] All button variants show spinner clearly

## 6. Additional Checks
- [ ] Button sizes (sm, md, lg) render correctly in both themes
- [ ] Icons display properly in both themes
- [ ] Full-width buttons work in both themes
- [ ] All stories in "DarkMode" story showcase render correctly
- [ ] Theme changes apply immediately without refresh

## 7. Accessibility
- [ ] Focus indicators are clearly visible in both themes
- [ ] Color contrast meets WCAG standards in both themes
- [ ] Disabled state is visually distinct from enabled state
- [ ] Loading state is announced to screen readers

## Testing Instructions

1. Open Storybook at http://localhost:6006
2. Navigate to "Design System/Button" in the sidebar
3. Use the theme toggle in the toolbar (sun/moon icon) to switch themes
4. Test each story variant in both light and dark modes
5. Use keyboard navigation (Tab) to test focus states
6. Hover over buttons to test hover states
7. Check the "DarkMode" story for a comprehensive dark mode showcase
8. Verify all items in this checklist
