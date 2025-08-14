# ListLoops Styling Guide
## The Authoritative Reference for Design System Implementation

---

> **🔗 AlignUI Component Reference**  
> For detailed component implementations, code examples, and the complete AlignUI component library, always reference:  
> **`/Users/austin/Projects/listloops/align-ui-documentation.md`**

---

## Table of Contents

1. [Purpose & Philosophy](#purpose--philosophy)
2. [Quick Reference](#quick-reference)
3. [Foundations](#foundations)
4. [Typography System](#typography-system)
5. [Color System](#color-system)
6. [Spacing & Layout](#spacing--layout)
7. [Component Styling](#component-styling)
8. [Customization Guidelines](#customization-guidelines)
9. [Enforcement Rules](#enforcement-rules)
10. [Reference Paths](#reference-paths)

---

## Purpose & Philosophy

### 🎯 Mission
This styling guide prevents contributors from adding custom CSS, utility bloat, or third-party UI packages while reinforcing the systematic use of AlignUI tokens, Tailwind variants, and compound components.

### 🏗️ Design Philosophy
- **Token-Driven**: All styling decisions flow from the AlignUI design system
- **Utility-First**: Tailwind CSS utilities with semantic AlignUI tokens
- **Compound Components**: Complex components built from smaller, reusable parts
- **Systematic**: Consistent patterns across all implementations
- **No Custom CSS**: Avoid bespoke styling solutions

### 📋 Core Principles
1. **Use AlignUI variants first** - Check component options before creating custom styles
2. **Semantic tokens only** - Use `text-text-sub-600` not `text-gray-600`
3. **Compound over custom** - Build complex components from AlignUI primitives
4. **System over exception** - Extend the system rather than breaking patterns

---

## Quick Reference

### 🔍 When to Use What

| Need | Use | Don't Use |
|------|-----|-----------|
| Button styling | `<Button.Root variant="primary" mode="filled">` | Custom button CSS |
| Text sizing | `text-title-h2`, `text-paragraph-md` | `text-2xl`, `text-base` |
| Colors | `bg-bg-weak-50`, `text-text-strong-950` | `bg-gray-50`, `text-gray-900` |
| Spacing | `gap-6`, `mt-8`, `px-4` | Custom margin/padding values |
| Components | AlignUI compound components | Third-party libraries |

### 📁 Essential File Locations
- **AlignUI Components & Code**: `/Users/austin/Projects/listloops/align-ui-documentation.md`
- **Tailwind Config**: `/Users/austin/Projects/listloops/tailwind.config.ts`
- **Component Library**: `/Users/austin/Projects/listloops/components/ui/`
- **Project Components**: `/Users/austin/Projects/listloops/components/`

---

## Foundations

### 🎨 AlignUI vs Tailwind Usage

#### ✅ AlignUI First
```tsx
// Use AlignUI compound components
<Button.Root variant="primary" mode="filled" size="medium">
  <Button.Icon as={PlusIcon} />
  Add Listing
</Button.Root>

// Use semantic design tokens
<h1 className="text-title-h1 text-text-strong-950">Property Details</h1>
<p className="text-paragraph-md text-text-sub-600">Located in downtown...</p>
```

#### ⚠️ Tailwind for Layout & Utilities
```tsx
// Use Tailwind for layout, spacing, and non-semantic utilities
<div className="flex flex-col gap-6 p-4">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {/* AlignUI components for UI elements */}
  </div>
</div>
```

### 🏛️ Architecture Patterns

#### Compound Component Structure
```tsx
// ✅ Correct: Use AlignUI compound patterns
<Input.Root size="medium" hasError={false}>
  <Input.Wrapper>
    <Input.Icon as={SearchIcon} />
    <Input />
    <Input.Affix>USD</Input.Affix>
  </Input.Wrapper>
</Input.Root>
```

#### Component Variants
```tsx
// ✅ Use variant props for customization
<Button.Root 
  variant="primary"    // primary | neutral | error
  mode="filled"        // filled | stroke | lighter | ghost
  size="medium"        // medium | small | xsmall | xxsmall
>
```

> **💡 Implementation Details**  
> For complete component APIs, variant options, and usage examples, see:  
> **`/Users/austin/Projects/listloops/align-ui-documentation.md`**

---

## Typography System

### 📝 Typography Scale
Based on `tailwind.config.ts` typography tokens:

#### Titles
```tsx
// ✅ Use semantic title classes
<h1 className="text-title-h1">    {/* 3.5rem, 500 weight */}
<h2 className="text-title-h2">    {/* 3rem, 500 weight */}
<h3 className="text-title-h3">    {/* 2.5rem, 500 weight */}
<h4 className="text-title-h4">    {/* 2rem, 500 weight */}
<h5 className="text-title-h5">    {/* 1.5rem, 500 weight */}
<h6 className="text-title-h6">    {/* 1.25rem, 500 weight */}

// ❌ Don't use arbitrary sizes
<h1 className="text-6xl font-medium">
```

#### Labels
```tsx
// ✅ Use label classes for interactive elements
<label className="text-label-lg">Property Type</label>     {/* 1.125rem, 500 weight */}
<span className="text-label-md">Price Range</span>         {/* 1rem, 500 weight */}
<button className="text-label-sm">Save Changes</button>    {/* 0.875rem, 500 weight */}
```

#### Paragraphs
```tsx
// ✅ Use paragraph classes for body text
<p className="text-paragraph-xl">Featured description</p>   {/* 1.5rem, 400 weight */}
<p className="text-paragraph-lg">Standard description</p>  {/* 1.125rem, 400 weight */}
<p className="text-paragraph-md">Body text</p>             {/* 1rem, 400 weight */}
<p className="text-paragraph-sm">Helper text</p>          {/* 0.875rem, 400 weight */}
```

#### Subheadings
```tsx
// ✅ Use subheading classes for section labels
<h6 className="text-subheading-md">PROPERTY FEATURES</h6>  {/* Uppercase, spaced */}
<h6 className="text-subheading-sm">CONTACT INFO</h6>       {/* Uppercase, spaced */}
```

### 🎯 Typography Usage Guidelines

#### ✅ Do's
- Always use semantic typography classes from the config
- Match semantic meaning (titles for headings, labels for interactive elements)
- Use consistent hierarchy throughout the application

#### ❌ Don'ts
- Never use arbitrary font sizes like `text-xl`, `text-2xl`
- Don't mix typography systems within components
- Avoid inline font-weight or line-height overrides

---

## Color System

### 🎨 Semantic Color Tokens
All colors use CSS custom properties for automatic light/dark mode support.

#### Background Colors
```tsx
// ✅ Use semantic background tokens
<div className="bg-bg-white-0">      {/* Primary background */}
<div className="bg-bg-weak-50">      {/* Subtle background */}
<div className="bg-bg-soft-200">     {/* Soft contrast */}
<div className="bg-bg-sub-300">      {/* Medium contrast */}
<div className="bg-bg-surface-800">  {/* Dark surface */}
<div className="bg-bg-strong-950">   {/* Strongest contrast */}
```

#### Text Colors
```tsx
// ✅ Use semantic text tokens
<p className="text-text-strong-950">    {/* Primary text */}
<p className="text-text-sub-600">       {/* Secondary text */}
<p className="text-text-soft-400">      {/* Muted text */}
<p className="text-text-disabled-300">  {/* Disabled state */}
<p className="text-text-white-0">       {/* White text */}
```

#### Border Colors
```tsx
// ✅ Use semantic stroke tokens
<div className="border border-stroke-soft-200">   {/* Subtle borders */}
<div className="border border-stroke-sub-300">    {/* Standard borders */}
<div className="border border-stroke-strong-950"> {/* Emphasized borders */}
```

#### State Colors
```tsx
// ✅ Use semantic state colors
<div className="bg-primary-base text-static-white">     {/* Primary actions */}
<div className="bg-error-base text-static-white">       {/* Error states */}
<div className="bg-success-base text-static-white">     {/* Success states */}
<div className="bg-warning-base text-static-white">     {/* Warning states */}
```

### 🌓 Light/Dark Mode Handling

Colors automatically adapt via CSS custom properties:

```tsx
// ✅ This automatically works in both themes
<div className="bg-bg-white-0 text-text-strong-950 border border-stroke-soft-200">
  Content adapts to theme automatically
</div>
```

### 🚫 Color Don'ts

```tsx
// ❌ Never use direct color values
<div className="bg-white text-gray-900">
<div className="bg-#ffffff text-#111111">

// ❌ Don't use raw Tailwind color tokens
<div className="bg-gray-50 text-gray-800">
<div className="bg-blue-500 text-white">
```

---

## Spacing & Layout

### 📏 Spacing Scale
Use Tailwind's spacing scale with AlignUI patterns:

#### Standard Spacing
```tsx
// ✅ Use consistent spacing tokens
<div className="p-4">          {/* 1rem padding */}
<div className="gap-6">        {/* 1.5rem gap */}
<div className="mt-8">         {/* 2rem top margin */}
<div className="mb-12">        {/* 3rem bottom margin */}
```

#### Component-Specific Spacing
```tsx
// ✅ Follow AlignUI component spacing patterns
<Button.Root size="medium">    {/* h-10 gap-3 px-3.5 */}
<Button.Root size="small">     {/* h-9 gap-3 px-3 */}
<Button.Root size="xsmall">    {/* h-8 gap-2.5 px-2.5 */}
```

### 📐 Layout Patterns

#### Grid Layouts
```tsx
// ✅ Standard grid patterns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="grid grid-cols-12 gap-4">
```

#### Flex Layouts
```tsx
// ✅ Standard flex patterns
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex flex-wrap gap-2">
```

#### Container Patterns
```tsx
// ✅ Standard container patterns
<div className="max-w-7xl mx-auto px-4">      {/* Page container */}
<div className="max-w-2xl mx-auto">           {/* Content container */}
<div className="w-full max-w-sm">             {/* Form container */}
```

---

## Component Styling

### 🔧 Button Patterns

> **📖 Complete Button Documentation**  
> For all button variants, compound patterns, and examples:  
> **`/Users/austin/Projects/listloops/align-ui-documentation.md`**

#### Standard Button Usage
```tsx
// ✅ Primary actions
<Button.Root variant="primary" mode="filled" size="medium">
  <Button.Icon as={PlusIcon} />
  Add Property
</Button.Root>

// ✅ Secondary actions
<Button.Root variant="neutral" mode="stroke" size="medium">
  Cancel
</Button.Root>

// ✅ Destructive actions
<Button.Root variant="error" mode="filled" size="medium">
  <Button.Icon as={TrashIcon} />
  Delete Listing
</Button.Root>
```

#### Button Sizing
```tsx
// ✅ Use consistent button sizes
<Button.Root size="medium">    {/* Default: h-10 */}
<Button.Root size="small">     {/* Compact: h-9 */}
<Button.Root size="xsmall">    {/* Tight spaces: h-8 */}
<Button.Root size="xxsmall">   {/* Very tight: h-7 */}
```

### 📝 Form Elements

> **📋 Complete Form Documentation**  
> For all input variants, form patterns, and validation states:  
> **`/Users/austin/Projects/listloops/align-ui-documentation.md`**

#### Input Patterns
```tsx
// ✅ Standard input with icon
<Input.Root size="medium">
  <Input.Wrapper>
    <Input.Icon as={SearchIcon} />
    <Input placeholder="Search properties..." />
  </Input.Wrapper>
</Input.Root>

// ✅ Input with prefix/suffix
<Input.Root size="medium">
  <Input.Wrapper>
    <Input.Affix>$</Input.Affix>
    <Input placeholder="0.00" />
    <Input.InlineAffix>USD</Input.InlineAffix>
  </Input.Wrapper>
</Input.Root>

// ✅ Error state
<Input.Root size="medium" hasError={true}>
  <Input.Wrapper>
    <Input placeholder="Required field" />
  </Input.Wrapper>
</Input.Root>
```

### 🃏 Card Patterns
```tsx
// ✅ Standard card pattern
<div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6 shadow-regular-xs">
  <h3 className="text-title-h5 text-text-strong-950 mb-4">Property Details</h3>
  <p className="text-paragraph-md text-text-sub-600">Description content...</p>
</div>
```

### 🎯 Modal Patterns
```tsx
// ✅ Standard modal structure with AlignUI
<Modal.Root>
  <Modal.Trigger asChild>
    <Button.Root variant="primary" mode="filled">
      Open Settings
    </Button.Root>
  </Modal.Trigger>
  <Modal.Content className="max-w-md">
    <Modal.Header>
      <Modal.Title className="text-title-h4">Settings</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Modal content */}
    </Modal.Body>
    <Modal.Footer>
      <Button.Root variant="neutral" mode="stroke">Cancel</Button.Root>
      <Button.Root variant="primary" mode="filled">Save</Button.Root>
    </Modal.Footer>
  </Modal.Content>
</Modal.Root>
```

---

## Customization Guidelines

### ✅ When Customization is Allowed

#### 1. Extending Existing Variants
```tsx
// ✅ Add new variants to existing components
const buttonVariants = tv({
  // ... existing variants
  variants: {
    variant: {
      primary: {},
      neutral: {},
      error: {},
      // ✅ Add project-specific variant
      brand: {
        root: 'bg-blue-600 text-white hover:bg-blue-700'
      }
    }
  }
});
```

#### 2. Project-Specific Components
```tsx
// ✅ Create new components using AlignUI patterns
export const PropertyCard = tv({
  slots: {
    root: 'bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6',
    header: 'flex items-center justify-between mb-4',
    title: 'text-title-h5 text-text-strong-950',
    price: 'text-label-lg text-primary-base'
  }
});
```

### 🚨 When to Propose System Changes

#### Process for New Tokens
1. Check if existing tokens can solve the need
2. Document the use case and frequency
3. Propose the addition to the design system
4. Update `tailwind.config.ts` with proper semantic naming

#### Process for New Components
1. Check if AlignUI compound components can be composed
2. Document the reusability across the project
3. Follow AlignUI patterns for implementation
4. Add to the component library

---

## Enforcement Rules

### 🚫 Absolute Don'ts

#### Never Use These
```tsx
// ❌ Raw hex codes or RGB values
<div style={{backgroundColor: '#ffffff'}}>
<div className="bg-[#ff0000]">

// ❌ Third-party component libraries
import { Button } from '@mui/material';
import { Input } from '@chakra-ui/react';
import { Card } from '@shadcn/ui';

// ❌ Inline styles (unless explicitly approved)
<div style={{margin: '16px', padding: '8px'}}>

// ❌ Custom CSS classes in CSS files
.custom-button { background: blue; }
.my-special-input { border: 1px solid red; }

// ❌ Arbitrary Tailwind values for semantic properties
<p className="text-[18px] font-[500]">
<div className="bg-[hsl(210,40%,98%)]">
```

#### Never Override These Systems
- AlignUI component internal styling
- Design token values directly
- Focus states and accessibility features
- Responsive breakpoint behavior

### ⚠️ Require Approval

#### These Need Explicit Approval
```tsx
// ⚠️ Any inline styles
<div style={{transform: 'translateX(10px)'}}>

// ⚠️ New design tokens
--custom-color-brand: #ff6b35;

// ⚠️ CSS-in-JS solutions
const StyledComponent = styled.div`
  background: red;
`;

// ⚠️ New third-party dependencies for UI
npm install react-select
npm install @headlessui/react
```

### 🔍 Code Review Checklist

Before merging any styling changes:

- [ ] Uses AlignUI components where available
- [ ] Uses semantic design tokens only
- [ ] No raw color values or arbitrary sizing
- [ ] No third-party UI component imports
- [ ] Follows established spacing patterns
- [ ] Maintains accessibility standards
- [ ] No custom CSS classes added

---

## Reference Paths

### 📁 Essential Files

#### Component Implementation & Examples
```
/Users/austin/Projects/listloops/align-ui-documentation.md
├── Complete AlignUI component library
├── Code examples and patterns
├── Variant and compound usage
└── Implementation details
```

#### Configuration Files
```
/Users/austin/Projects/listloops/tailwind.config.ts
├── Typography scale (texts export)
├── Color system tokens
├── Shadow definitions
└── Border radius values
```

#### Component Libraries
```
/Users/austin/Projects/listloops/components/ui/
├── button.tsx          # Button compound component
├── input.tsx           # Input compound component
├── modal.tsx           # Modal compound component
├── select.tsx          # Select compound component
└── ...                 # All AlignUI components
```

#### Project Components
```
/Users/austin/Projects/listloops/components/
├── carousel/           # Carousel-specific components
├── header.tsx         # App header
└── theme-switch.tsx   # Theme switching
```

### 🔗 Quick Links During Development

| Need | File Path |
|------|-----------|
| **Component examples** | `/Users/austin/Projects/listloops/align-ui-documentation.md` |
| **Typography tokens** | `/Users/austin/Projects/listloops/tailwind.config.ts` (texts export) |
| **Color tokens** | `/Users/austin/Projects/listloops/tailwind.config.ts` (colors.theme) |
| **Button variants** | `/Users/austin/Projects/listloops/components/ui/button.tsx` |
| **Input patterns** | `/Users/austin/Projects/listloops/components/ui/input.tsx` |
| **Shadow system** | `/Users/austin/Projects/listloops/tailwind.config.ts` (shadows export) |

### 📚 When to Reference What

#### Use This Styling Guide For:
- Design philosophy and principles
- Typography and color token reference
- Layout and spacing guidelines
- Component usage patterns
- Enforcement rules and governance

#### Use AlignUI Documentation For:
- Specific component implementation code
- Complete variant and prop options
- Compound component patterns
- Detailed usage examples
- Component API reference

---

## Summary

This styling guide enforces a systematic, token-driven approach to styling in ListLoops. By following these guidelines and regularly referencing the AlignUI documentation, we maintain:

- **Consistency**: Unified visual language across all components
- **Maintainability**: Centralized design decisions and easy updates
- **Accessibility**: Built-in accessibility through AlignUI components
- **Performance**: Optimized CSS through systematic utility usage
- **Developer Experience**: Clear patterns and predictable behaviors

> **🎯 Remember**: When in doubt, check `/Users/austin/Projects/listloops/align-ui-documentation.md` for component examples and always use semantic design tokens over arbitrary values.

**Last Updated**: Generated with Claude Code  
**Maintainers**: Development Team  
**Version**: 1.0