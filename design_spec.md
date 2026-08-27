# Hanakawado PR Site Design Specification

This document defines the visual and structural patterns of the Hanakawado PR Website to ensure visual consistency during future updates.

## 🎨 Color Palette

| Usage | Color | Hex Code |
|-------|-------|----------|
| Primary (Accent) | Red (Madder-like) | `#8b0000` |
| Secondary | Light Beige | `#f4f4f2` |
| Background | Pure White | `#ffffff` |
| Text (Main) | Deep Grey | `#333333` |
| Text (Body) | Soft Grey | `#444444` |
| Globe Icon | Sky Blue | `#0077c2` |
| Social Icon | Instagram/X | Platform Branding |

## 🖋️ Typography

- **Serif (Headings)**: `Noto Serif JP`, serif
  - Used for: History titles, Category titles (`Eating`, `Walking`, `Zakka`).
- **Sans (Interface)**: `Montserrat`, sans-serif
  - Used for: Navigation, Buttons, English labels.
- **Base Body**: `Noto Sans JP`, sans-serif
  - Fallback for general text.

## 📏 Spacing & Grid

- **Container Width**: 1200px (standard), 900px (narrow for Map/Contact).
- **Section Padding**: `30px 0` (Top & Bottom).
- **Category Box Margin**: `40px` (Bottom gap between stacked boxes).
- **Inner Box Padding**: `30px` (Constant inner spacing for all boxes).

## 🧩 Components

### 1. Category Box (`.category-box`)
- **Border**: `1px dashed #999`
- **Background**: `white`
- **Animation**: On-scroll reveal (Fade up).

### 2. Store Map Interaction
- **Numbering**: Blue circles for stores, red squares for specialty. 
- **Skipped Numbers**: 6, 16, 24 (Historical gap).
- **Link Icons**: Standard Globe SVG (Blue) for website, Branded SVG for SNS.

## 📱 Responsive Logic

- **Breakpoints**: 992px, 768px.
- **Mobile Mode**: Stacked layout for category grid, 100% width map, mobile-friendly contact form.
- **Vertical Tightening**: Spacing remains consistent at 30px to maintain "Premium" compact look.

---
*Created: 2026-03-24*
