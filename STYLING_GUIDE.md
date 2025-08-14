# AlignUI Styling Guide
## The Complete Reference for AI Agents Building with AlignUI

---

> **🔗 AlignUI Component Reference**  
> For detailed component implementations, code examples, and the complete AlignUI component library, always reference:  
> **`align-ui-documentation.md`**

---

## Table of Contents

1. [Purpose & Philosophy](#purpose--philosophy)
2. [Quick Reference](#quick-reference)
3. [Foundations](#foundations)
4. [Typography System](#typography-system)
5. [Color System](#color-system)
6. [Spacing & Layout](#spacing--layout)
7. [Component Styling](#component-styling)
8. [Advanced Patterns](#advanced-patterns)
9. [Customization Guidelines](#customization-guidelines)
10. [Enforcement Rules](#enforcement-rules)
11. [Component Library Reference](#component-library-reference)

---

## Purpose & Philosophy

### 🎯 Mission
This styling guide enables AI agents to create visually consistent, accessible applications using the AlignUI design system without requiring creative vision or design decisions. Every styling choice is systematized and documented.

### 🏗️ Design Philosophy
- **Token-Driven**: All styling decisions flow from the AlignUI design system
- **Utility-First**: Tailwind CSS utilities with semantic AlignUI tokens
- **Compound Components**: Complex components built from smaller, reusable parts
- **Systematic**: Consistent patterns across all implementations
- **No Custom CSS**: Avoid bespoke styling solutions
- **AI-Friendly**: Clear rules and patterns for automated decision-making

### 📋 Core Principles
1. **Use AlignUI variants first** - Check component options before creating custom styles
2. **Semantic tokens only** - Use `text-text-sub-600` not `text-gray-600`
3. **Compound over custom** - Build complex components from AlignUI primitives
4. **System over exception** - Extend the system rather than breaking patterns
5. **Predictable patterns** - Follow established conventions for consistent results

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
| Forms | `<Input.Root>` with compound structure | Raw `<input>` elements |
| Cards | Semantic tokens + shadows | Custom card styling |
| Modals | `<Modal.Root>` compound pattern | Custom overlay solutions |

### 📁 Essential File Locations
- **AlignUI Components & Code**: `align-ui-documentation.md`
- **Tailwind Config**: `tailwind.config.ts`
- **Component Library**: `components/ui/`
- **Project Components**: `components/`

---

## Foundations

### 🎨 AlignUI vs Tailwind Usage

#### ✅ AlignUI First (UI Components)
```tsx
// Use AlignUI compound components for all UI elements
<Button.Root variant="primary" mode="filled" size="medium">
  <Button.Icon as={PlusIcon} />
  Create Item
</Button.Root>

// Use semantic design tokens for text and colors
<h1 className="text-title-h1 text-text-strong-950">Page Title</h1>
<p className="text-paragraph-md text-text-sub-600">Supporting description text</p>
```

#### ⚠️ Tailwind for Layout & Structure
```tsx
// Use Tailwind for layout, spacing, and structural utilities
<div className="flex flex-col gap-6 p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    <Input placeholder="Search..." />
    <Input.Affix>USD</Input.Affix>
  </Input.Wrapper>
</Input.Root>
```

#### Component Variants
```tsx
// ✅ Use variant props for systematic customization
<Button.Root 
  variant="primary"    // primary | neutral | error
  mode="filled"        // filled | stroke | lighter | ghost
  size="medium"        // medium | small | xsmall | xxsmall
>
```

> **💡 Implementation Details**  
> For complete component APIs, variant options, and usage examples, see:  
> **`align-ui-documentation.md`**

---

## Typography System

### 📝 Typography Scale
Based on `tailwind.config.ts` typography tokens with semantic naming:

#### Titles (Headings)
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

#### Labels (Interactive Elements)
```tsx
// ✅ Use label classes for buttons, form labels, interactive text
<label className="text-label-xl">Section Label</label>        {/* 1.5rem, 500 weight */}
<label className="text-label-lg">Form Field Label</label>     {/* 1.125rem, 500 weight */}
<span className="text-label-md">Button Text</span>            {/* 1rem, 500 weight */}
<button className="text-label-sm">Small Action</button>       {/* 0.875rem, 500 weight */}
<span className="text-label-xs">Tiny Label</span>             {/* 0.75rem, 500 weight */}
```

#### Paragraphs (Body Text)
```tsx
// ✅ Use paragraph classes for body content
<p className="text-paragraph-xl">Hero description text</p>     {/* 1.5rem, 400 weight */}
<p className="text-paragraph-lg">Featured content</p>          {/* 1.125rem, 400 weight */}
<p className="text-paragraph-md">Standard body text</p>        {/* 1rem, 400 weight */}
<p className="text-paragraph-sm">Supporting text</p>           {/* 0.875rem, 400 weight */}
<p className="text-paragraph-xs">Caption text</p>              {/* 0.75rem, 400 weight */}
```

#### Subheadings (Section Headers)
```tsx
// ✅ Use subheading classes for section divisions
<h6 className="text-subheading-md">SECTION HEADER</h6>         {/* Uppercase, spaced */}
<h6 className="text-subheading-sm">SUBSECTION</h6>             {/* Uppercase, spaced */}
<h6 className="text-subheading-xs">SMALL SECTION</h6>          {/* Uppercase, spaced */}
<h6 className="text-subheading-2xs">TINY SECTION</h6>          {/* Uppercase, spaced */}
```

### 🎯 Typography Usage Guidelines

#### ✅ Do's
- Always use semantic typography classes from the design system
- Match semantic meaning (titles for headings, labels for interactive elements)
- Use consistent hierarchy throughout the application
- Combine typography tokens with semantic color tokens

#### ❌ Don'ts
- Never use arbitrary font sizes like `text-xl`, `text-2xl`
- Don't mix typography systems within components
- Avoid inline font-weight or line-height overrides
- Don't use generic text size classes for semantic content

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
<div className="border border-stroke-white-0">    {/* White borders */}
```

#### State Colors
```tsx
// ✅ Use semantic state colors
<div className="bg-primary-base text-static-white">     {/* Primary actions */}
<div className="bg-error-base text-static-white">       {/* Error states */}
<div className="bg-success-base text-static-white">     {/* Success states */}
<div className="bg-warning-base text-static-white">     {/* Warning states */}
<div className="bg-information-base text-static-white"> {/* Info states */}
```

#### Extended Color Palette
```tsx
// ✅ Additional semantic state colors
<div className="bg-faded-base">        {/* Faded content */}
<div className="bg-away-base">         {/* Away status */}
<div className="bg-feature-base">      {/* Featured content */}
<div className="bg-verified-base">     {/* Verified status */}
<div className="bg-highlighted-base">  {/* Highlighted content */}
<div className="bg-stable-base">       {/* Stable status */}
```

#### Social Colors
```tsx
// ✅ Use social brand colors when appropriate
<div className="bg-social-apple">    {/* Apple brand */}
<div className="bg-social-twitter">  {/* Twitter brand */}
<div className="bg-social-github">   {/* GitHub brand */}
<div className="bg-social-notion">   {/* Notion brand */}
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

// ❌ Don't use arbitrary color values
<div className="bg-[#f5f5f5] text-[#1a1a1a]">
```

---

## Spacing & Layout

### 📏 Spacing Scale
Use Tailwind's spacing scale with AlignUI patterns:

#### Standard Spacing
```tsx
// ✅ Use consistent spacing tokens
<div className="p-2">          {/* 0.5rem padding */}
<div className="p-4">          {/* 1rem padding */}
<div className="gap-6">        {/* 1.5rem gap */}
<div className="mt-8">         {/* 2rem top margin */}
<div className="mb-12">        {/* 3rem bottom margin */}
<div className="px-16">        {/* 4rem horizontal padding */}
```

#### Component-Specific Spacing
```tsx
// ✅ Follow AlignUI component spacing patterns
<Button.Root size="medium">    {/* h-10 gap-3 px-3.5 */}
<Button.Root size="small">     {/* h-9 gap-3 px-3 */}
<Button.Root size="xsmall">    {/* h-8 gap-2.5 px-2.5 */}
<Button.Root size="xxsmall">   {/* h-7 gap-2 px-2 */}
```

### 📐 Layout Patterns

#### Grid Layouts
```tsx
// ✅ Standard grid patterns
<div className="grid grid-cols-1 gap-4">                    {/* Single column */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">     {/* Responsive 2-col */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">     {/* Responsive 3-col */}
<div className="grid grid-cols-12 gap-4">                   {/* 12-column system */}
```

#### Flex Layouts
```tsx
// ✅ Standard flex patterns
<div className="flex flex-col gap-4">                       {/* Vertical stack */}
<div className="flex flex-row gap-4">                       {/* Horizontal row */}
<div className="flex items-center justify-between">         {/* Space between */}
<div className="flex items-center justify-center">          {/* Centered */}
<div className="flex flex-wrap gap-2">                      {/* Wrapping items */}
```

#### Container Patterns
```tsx
// ✅ Standard container patterns
<div className="max-w-7xl mx-auto px-4">      {/* Page container */}
<div className="max-w-4xl mx-auto px-6">      {/* Content container */}
<div className="max-w-2xl mx-auto">           {/* Article container */}
<div className="w-full max-w-sm">             {/* Form container */}
<div className="max-w-xs">                    {/* Narrow container */}
```

---

## Component Styling

### 🔧 Button Patterns

> **📖 Complete Button Documentation**  
> For all button variants, compound patterns, and examples:  
> **`align-ui-documentation.md`**

#### Standard Button Usage
```tsx
// ✅ Primary actions
<Button.Root variant="primary" mode="filled" size="medium">
  <Button.Icon as={PlusIcon} />
  Create New
</Button.Root>

// ✅ Secondary actions
<Button.Root variant="neutral" mode="stroke" size="medium">
  Cancel
</Button.Root>

// ✅ Destructive actions
<Button.Root variant="error" mode="filled" size="medium">
  <Button.Icon as={TrashIcon} />
  Delete
</Button.Root>

// ✅ Subtle actions
<Button.Root variant="neutral" mode="ghost" size="medium">
  <Button.Icon as={EditIcon} />
  Edit
</Button.Root>
```

#### Button Sizing Hierarchy
```tsx
// ✅ Use consistent button sizes
<Button.Root size="medium">    {/* Default: h-10 - primary actions */}
<Button.Root size="small">     {/* Compact: h-9 - secondary actions */}
<Button.Root size="xsmall">    {/* Tight: h-8 - toolbar actions */}
<Button.Root size="xxsmall">   {/* Minimal: h-7 - inline actions */}
```

### 📝 Form Elements

> **📋 Complete Form Documentation**  
> For all input variants, form patterns, and validation states:  
> **`align-ui-documentation.md`**

#### Input Patterns
```tsx
// ✅ Standard input with icon
<Input.Root size="medium">
  <Input.Wrapper>
    <Input.Icon as={SearchIcon} />
    <Input placeholder="Search..." />
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

// ✅ Disabled state
<Input.Root size="medium" disabled={true}>
  <Input.Wrapper>
    <Input placeholder="Disabled field" />
  </Input.Wrapper>
</Input.Root>
```

#### Select Components
```tsx
// ✅ Standard select
<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder="Choose option..." />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="option1">Option 1</Select.Item>
    <Select.Item value="option2">Option 2</Select.Item>
  </Select.Content>
</Select.Root>
```

### 🃏 Card Patterns
```tsx
// ✅ Standard card pattern
<div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6 shadow-regular-xs">
  <h3 className="text-title-h5 text-text-strong-950 mb-4">Card Title</h3>
  <p className="text-paragraph-md text-text-sub-600">Card description content goes here.</p>
</div>

// ✅ Interactive card (hoverable)
<div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6 shadow-regular-xs hover:shadow-regular-sm transition-shadow cursor-pointer">
  <h3 className="text-title-h5 text-text-strong-950 mb-4">Interactive Card</h3>
  <p className="text-paragraph-md text-text-sub-600">Hover for elevation change.</p>
</div>

// ✅ Card with actions
<div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 overflow-hidden shadow-regular-xs">
  <div className="p-6">
    <h3 className="text-title-h5 text-text-strong-950 mb-4">Card with Actions</h3>
    <p className="text-paragraph-md text-text-sub-600">Content area.</p>
  </div>
  <div className="border-t border-stroke-soft-200 p-4 bg-bg-weak-50">
    <div className="flex gap-3 justify-end">
      <Button.Root variant="neutral" mode="ghost" size="small">Cancel</Button.Root>
      <Button.Root variant="primary" mode="filled" size="small">Save</Button.Root>
    </div>
  </div>
</div>
```

### 🎯 Modal Patterns
```tsx
// ✅ Standard modal structure with AlignUI
<Modal.Root>
  <Modal.Trigger asChild>
    <Button.Root variant="primary" mode="filled">
      Open Modal
    </Button.Root>
  </Modal.Trigger>
  <Modal.Content className="max-w-md">
    <Modal.Header>
      <Modal.Title className="text-title-h4">Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className="text-paragraph-md text-text-sub-600">Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button.Root variant="neutral" mode="stroke">Cancel</Button.Root>
      <Button.Root variant="primary" mode="filled">Confirm</Button.Root>
    </Modal.Footer>
  </Modal.Content>
</Modal.Root>
```

### 🏷️ Badge and Status Patterns
```tsx
// ✅ Status badges
<Badge.Root variant="primary">Active</Badge.Root>
<Badge.Root variant="success">Completed</Badge.Root>
<Badge.Root variant="warning">Pending</Badge.Root>
<Badge.Root variant="error">Failed</Badge.Root>
<Badge.Root variant="neutral">Draft</Badge.Root>

// ✅ Count badges
<div className="relative">
  <Button.Root variant="neutral" mode="ghost">
    <Button.Icon as={BellIcon} />
  </Button.Root>
  <Badge.Root className="absolute -top-2 -right-2">3</Badge.Root>
</div>
```

---

## Advanced Patterns

### 🎛️ Form Layouts
```tsx
// ✅ Standard form layout
<div className="space-y-6">
  <div className="grid grid-cols-1 gap-4">
    <div>
      <Label.Root className="text-label-md text-text-strong-950 mb-2">
        Email Address
      </Label.Root>
      <Input.Root size="medium">
        <Input.Wrapper>
          <Input type="email" placeholder="Enter your email" />
        </Input.Wrapper>
      </Input.Root>
    </div>
    
    <div>
      <Label.Root className="text-label-md text-text-strong-950 mb-2">
        Password
      </Label.Root>
      <Input.Root size="medium">
        <Input.Wrapper>
          <Input type="password" placeholder="Enter password" />
        </Input.Wrapper>
      </Input.Root>
    </div>
  </div>
  
  <div className="flex gap-3 justify-end">
    <Button.Root variant="neutral" mode="stroke">Cancel</Button.Root>
    <Button.Root variant="primary" mode="filled">Sign In</Button.Root>
  </div>
</div>
```

### 📋 List Patterns
```tsx
// ✅ Simple list
<div className="divide-y divide-stroke-soft-200">
  {items.map((item) => (
    <div key={item.id} className="py-4 first:pt-0 last:pb-0">
      <h4 className="text-label-md text-text-strong-950">{item.title}</h4>
      <p className="text-paragraph-sm text-text-sub-600 mt-1">{item.description}</p>
    </div>
  ))}
</div>

// ✅ Interactive list
<div className="divide-y divide-stroke-soft-200">
  {items.map((item) => (
    <div key={item.id} className="py-4 hover:bg-bg-weak-50 px-4 -mx-4 rounded-10 cursor-pointer transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-label-md text-text-strong-950">{item.title}</h4>
          <p className="text-paragraph-sm text-text-sub-600 mt-1">{item.description}</p>
        </div>
        <Button.Root variant="neutral" mode="ghost" size="small">
          <Button.Icon as={ChevronRightIcon} />
        </Button.Root>
      </div>
    </div>
  ))}
</div>
```

### 🔍 Empty States
```tsx
// ✅ Standard empty state
<div className="text-center py-12">
  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-bg-soft-200 flex items-center justify-center">
    <Icon className="h-6 w-6 text-text-soft-400" />
  </div>
  <h3 className="text-title-h6 text-text-strong-950 mb-2">No items found</h3>
  <p className="text-paragraph-sm text-text-sub-600 mb-6">
    Get started by creating your first item.
  </p>
  <Button.Root variant="primary" mode="filled">
    <Button.Icon as={PlusIcon} />
    Create Item
  </Button.Root>
</div>
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
      // ✅ Add project-specific variant using semantic tokens
      brand: {
        root: 'bg-primary-base text-static-white hover:bg-primary-dark'
      }
    }
  }
});
```

#### 2. Project-Specific Components
```tsx
// ✅ Create new components using AlignUI patterns and semantic tokens
export const DataCard = tv({
  slots: {
    root: 'bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6 shadow-regular-xs',
    header: 'flex items-center justify-between mb-4',
    title: 'text-title-h5 text-text-strong-950',
    value: 'text-title-h3 text-primary-base',
    change: 'text-paragraph-sm',
    footer: 'mt-4 pt-4 border-t border-stroke-soft-200'
  },
  variants: {
    trend: {
      up: { change: 'text-success-base' },
      down: { change: 'text-error-base' },
      neutral: { change: 'text-text-sub-600' }
    }
  }
});
```

### 🚨 When to Extend the System

#### Process for New Tokens
1. Check if existing semantic tokens can solve the need
2. Document the use case and frequency across the application
3. Propose semantic naming that fits the existing pattern
4. Update `tailwind.config.ts` with proper semantic naming
5. Never add arbitrary or brand-specific color values

#### Process for New Components
1. Check if AlignUI compound components can be composed to solve the need
2. Document the reusability and common patterns
3. Follow AlignUI compound component patterns
4. Use only semantic tokens from the design system
5. Add to the component library with proper documentation

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

// ❌ Inline styles (unless explicitly required for dynamic values)
<div style={{margin: '16px', padding: '8px'}}>

// ❌ Custom CSS classes in CSS files
.custom-button { background: blue; }
.my-special-input { border: 1px solid red; }

// ❌ Arbitrary Tailwind values for semantic properties
<p className="text-[18px] font-[500]">
<div className="bg-[hsl(210,40%,98%)]">

// ❌ Non-semantic color tokens
<div className="bg-blue-500 text-white">
<div className="text-gray-700">
```

#### Never Override These Systems
- AlignUI component internal styling
- Design token values directly
- Focus states and accessibility features
- Responsive breakpoint behavior
- Shadow and elevation systems

### ⚠️ Require Approval

#### These Need Explicit Approval
```tsx
// ⚠️ Any inline styles for dynamic values
<div style={{transform: `translateX(${dynamicValue}px)`}}>

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

Before implementing any UI components:

- [ ] Uses AlignUI components where available
- [ ] Uses semantic design tokens only
- [ ] No raw color values or arbitrary sizing
- [ ] No third-party UI component imports
- [ ] Follows established spacing patterns
- [ ] Maintains accessibility standards
- [ ] No custom CSS classes added
- [ ] Proper compound component structure
- [ ] Consistent with existing patterns
- [ ] Semantic naming for any extensions

---

## Component Library Reference

### 📦 Available AlignUI Components

#### Form Components
- `Button` - Primary interaction element with variants
- `Input` - Text input with compound structure
- `Select` - Dropdown selection component
- `Checkbox` - Boolean input element
- `Radio` - Single selection from group
- `Switch` - Toggle boolean state
- `Textarea` - Multi-line text input
- `Label` - Form field labels

#### Layout Components
- `Modal` - Overlay dialogs and popups
- `Drawer` - Side panel component
- `Accordion` - Collapsible content sections
- `Tabs` - Horizontal and vertical tab navigation
- `Divider` - Content separator lines
- `Breadcrumb` - Navigation hierarchy

#### Data Display
- `Table` - Data tables with sorting/filtering
- `Badge` - Status and count indicators
- `Avatar` - User profile images
- `Progress` - Progress bars and circles
- `Tag` - Removable labels
- `Tooltip` - Contextual information

#### Navigation
- `Pagination` - Page navigation controls
- `Dropdown` - Context menus and options
- `Command` - Command palette interface

#### Feedback
- `Alert` - Important messages and notifications
- `Notification` - Toast-style messages
- `Hint` - Helpful tips and guidance

#### Input Controls
- `Slider` - Range selection input
- `Color Picker` - Color selection interface
- `Date Picker` - Date selection calendar
- `File Upload` - File selection and upload

#### Specialized
- `Stepper` - Multi-step process indicators
- `Status Badge` - Dynamic status displays
- `Social Button` - Social media login buttons

### 🎨 Semantic Token Categories

#### Typography Tokens
- `text-title-*` - Heading hierarchy (h1-h6)
- `text-label-*` - Interactive element labels
- `text-paragraph-*` - Body text content
- `text-subheading-*` - Section headers

#### Color Tokens
- `bg-bg-*` - Background colors
- `text-text-*` - Text colors
- `border-stroke-*` - Border colors
- `bg-primary-*` - Primary brand colors
- `bg-error-*` - Error state colors
- `bg-success-*` - Success state colors
- `bg-warning-*` - Warning state colors

#### Shadow Tokens
- `shadow-regular-*` - Standard elevation shadows
- `shadow-button-*` - Button-specific shadows
- `shadow-fancy-*` - Enhanced button shadows

#### Border Radius
- `rounded-10` - Standard border radius
- `rounded-20` - Large border radius

---

## Summary

This styling guide provides AI agents with a complete framework for building consistent, accessible applications using the AlignUI design system. By following these systematic patterns and token-driven approaches, any AI agent can create professional-quality interfaces without requiring design expertise or creative decision-making.

### Key Takeaways
- **Always use AlignUI components first** - Check available variants before custom solutions
- **Semantic tokens only** - Never use arbitrary values or raw colors
- **Compound patterns** - Build complex components from simple, reusable parts
- **Systematic consistency** - Follow established patterns for predictable results
- **Token-driven design** - All styling decisions flow from the design system

> **🎯 Remember**: When in doubt, reference `align-ui-documentation.md` for component examples and always use semantic design tokens over arbitrary values. This systematic approach ensures consistency, accessibility, and maintainability across all projects.

**Maintained By**: AI Agents using AlignUI Design System  
**Version**: 2.0 - Project Agnostic