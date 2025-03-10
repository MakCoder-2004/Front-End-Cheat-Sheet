# Styling Guide for Tailwind Elements

This guide outlines a step-by-step process for effectively styling elements using Tailwind CSS.

---
 
## Setup using yarn


---

## Steps for Styling Each Element

1. **Add the HTML** – Structure your element with semantic HTML.
2. **Layout** – Define the positioning using Flexbox, Grid, or other layout utilities.
3. **Spacing** – Apply margins (`m-*`) and paddings (`p-*`) for proper spacing.
4. **Box Properties** – Style borders, backgrounds, and shadows for visual enhancements.
5. **Typography** – Adjust text size, weight, alignment, and spacing.
6. **Fun Elements** – Add transitions, animations, and interactive styles.
7. **Responsive Design** – Use responsive utilities to ensure adaptability across devices.

---

## Colors in Tailwind

- Below are the common Tailwind classes used for styling colors:

| Property         | Class Name                     |
|------------------|--------------------------------|
| **Text Color**   | `text-{color}-{shade}`         |
| **Background**   | `bg-{color}-{shade}`           |
| **Border**       | `border-{color}-{shade}`       |

- Creating my own colors

In the css file
```css
    @import "tailwindcss";

    @theme {
        --color-ColorName: #HexCode;
    }
```

In the TS file
```tsx
    const App = () => {
    return (
        <>
        <h1 className='bg-ColorName'>Hello World !</h1>
        </>
    )
    }

    export default App
```
---

## Directives

- Directives are custom Tailwind-specific at-rules you can use in your CSS that offer special functionality for Tailwind CSS projects.

| Directive        | Description |
|-----------------|-------------|
| `@import`       | Use to inline import CSS files. |
| `@theme`        | Defines project's custom design tokens like fonts, colors, and breakpoints. |
| `@source`       | Explicitly specifies source files that aren't detected automatically by Tailwind. |
| `@utility`      | Adds custom utilities that work with variants like `hover`, `focus`, and `lg`. |
| `@variant`      | Applies a Tailwind variant to styles in CSS. |
| `@custom-variant` | Adds a custom variant to the project. |
| `@apply`        | Inlines existing utility classes into custom CSS. |
| `@reference`    | Allows the use of `@apply` or `@variant` within `<style>` blocks or CSS modules by importing theme variables, custom utilities, and variants. |

For more details, check the [Tailwind CSS documentation](https://tailwindcss.com/docs/functions-and-directives#directives).

---
## Typography

### Default Fonts
- `font-sans`
- `font-serif`
- `font-mono`

### How to Use the Fonts?
```html
<p class="font-sans">The quick brown fox ...</p>
<p class="font-serif">The quick brown fox ...</p>
<p class="font-mono">The quick brown fox ...</p>
```

### Custom Font
```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "tailwindcss";
@theme {
    --font-roboto: "Roboto", sans-serif; 
}
```
```html
<p class="font-roboto">This will use Roboto font family.</p>
```

---

### Font Size
- Ordered from smaller to larger:
  - `text-xs`
  - `text-sm`
  - `text-base`
  - `text-lg`
  - `text-xl`
  - `text-2xl`
  - ...
  - `text-9xl`

#### Custom Text Size
```html
<p class="text-[14px]">Custom text size example</p>
```

---

### Line Height
- `leading-none`
- `text-sm/6`
- `text-sm/7`
- `text-sm/8`

#### Customizing Line Height
```css
@theme {
    --text-tiny: 0.625rem; 
}
```
```html
<div class="text-tiny">Custom line height example</div>
```

---

### Font Style
- `italic`
- `underline`

### Font Weight
- Ordered from thinner to bolder:
  - `font-thin`
  - `font-extralight`
  - `font-light`
  - `font-normal`
  - `font-medium`
  - `font-semibold`
  - `font-bold`
  - `font-extrabold`
  - `font-black`

#### Customizing Font Weight
```css
@theme {
    --font-weight-extrablack: 1000; 
}
```
```html
<div class="font-extrablack">Custom font weight</div>
```

---

### Numeric Fonts
- `normal-nums`
- `ordinal`
- `slashed-zero`
- `lining-nums`
- `oldstyle-nums`
- `proportional-nums`
- `tabular-nums`
- `diagonal-fractions`
- `stacked-fractions`

---

### Letter Spacing
- Ordered from tighter to wider:
  - `tracking-tighter`
  - `tracking-tight`
  - `tracking-normal`
  - `tracking-wide`
  - `tracking-wider`
  - `tracking-widest`

---

### Line Clamping
- `line-clamp-{number}`
- `line-clamp-none`

#### Example
```html
<p class="line-clamp-3">Truncated text with line clamping.</p>
```

---

### List Style Image
```html
<ul class="list-image-[url(/img/checkmark.png)]">
  <li>5 cups chopped Porcini mushrooms</li>
</ul>
```

### List Style Position
![List Inside vs List Outside](./images/list-inside%20vs%20list-outside.png)

### List Style Type
![List Style](./images/list-style.png)

---

### Text Alignment
- `text-left`
- `text-center`
- `text-right`
- `text-justify`
- `text-start`
- `text-end`

### Text Color
- `text-{color}-{degree}`
- `text-{color}-{degree}/opacityPercent`

---

### Text Decoration
#### Line
- `underline`
- `overline`
- `line-through`
- `no-underline`

#### Color
- `decoration-{color}-{degree}`

#### Style
![Text Decoration Line Style](./images/text%20decoration%20line%20style.png)

#### Thickness
![Decoration Line Thickness](./images/decoration%20line%20thickness.png)

#### Underline Offset
![Text Underline Offset](./images/text%20underline%20offset.png)

---

### Text Transform
- `uppercase`
- `lowercase`
- `capitalize`
- `normal-case`

### Text Overflow
| Utility        | Description |
|---------------|------------|
| `truncate`    | Prevents text from wrapping and truncates overflowing text with an ellipsis (…) if needed. |
| `text-ellipsis` | Truncates overflowing text with an ellipsis (…) if needed. |
| `text-clip`   | Truncates the text at the limit of the content area. |

### Text Wrap
- `text-wrap`
- `text-nowrap`
- `text-balance`
- `text-pretty`

### Text Indent
- `indent-{number}`  
![Text Indent](./images/text-indent.png)

### Vertical Align
- `align-baseline`
- `align-middle`
- `align-bottom`
- `align-text-top`
- `align-text-bottom`
- `align-sub`
- `align-super`

### White Space
- `whitespace-normal`
- `whitespace-nowrap`
- `whitespace-pre`
- `whitespace-pre-line`
- `whitespace-pre-wrap`
- `whitespace-break-spaces`

### Content
- `content-[Element]`
- `before:content-[Element]`
- `after:content-[Element]`

## Layout
---

## Flexbox & Grid
---

## Spacing
---

## Sizing
---

## Backgrounds
---

## Borders
---

## Effects
---

## Filters
---

## Tables
---

## Transitions & Animation
---

## Transforms
---

## Interactivity
---

## SVG
---

## Accessibility
---