# Scroll Animation Hook

A smooth, scroll-progress-based animation system for React text elements.

## Installation

```bash
# Hook is included with the project
npm install  # if needed for dependencies
```

## Usage

### Basic Example

```jsx
import useScrollAnimation from './hooks/useScrollAnimation';

function MyComponent() {
  const animation = useScrollAnimation({ threshold: 400, delay: 0 });
  
  return (
    <h2 {...animation}>Animated Text</h2>
  );
}
```

### With Staggered Animations

```jsx
function HeroSection() {
  const label = useScrollAnimation({ delay: 0 });
  const heading = useScrollAnimation({ delay: 80 });
  const subtext = useScrollAnimation({ delay: 160 });
  const cta = useScrollAnimation({ delay: 240 });
  
  return (
    <div>
      <div className="label" {...label}>LABEL</div>
      <h1 {...heading}>Heading</h1>
      <div className="subtext" {...subtext}>Description</div>
      <button className="cta-button" {...cta}>CTA</button>
    </div>
  );
}
```

## API Reference

### useScrollAnimation(options)

#### Parameters

- `threshold` (number, default: 400): The scroll distance from the viewport center at which animation starts/ends
- `delay` (number, default: 0): Delay in milliseconds before animation starts

#### Returns

```jsx
{
  ref: (node) => void,        // Callback ref for attaching to element
  style: {                      // React style object
    opacity: number,            // 0 to 1
    filter: string,            // blur CSS filter
    transform: string,         // translateY CSS transform
    transition: string,        // CSS transition string
    transitionDelay: string    // CSS transition-delay string
  }
}
```

## Animation Details

### Animation States

- **Far outside viewport**: opacity: 0, blur: 6px, translateY: 30px
- **Approaching viewport**: gradual increase in opacity, blur reduction, and upward movement
- **Center of viewport**: opacity: 1, blur: 0, translateY: 0
- **Leaving viewport**: smooth reverse of the transition

### Easing

Uses cubic-bezier easing curve for smooth, premium feel:
```css
cubic-bezier(.25,.1,.25,1)
```

### Performance

- Uses `requestAnimationFrame` for scroll-based updates
- Respects `prefers-reduced-motion` media query
- Optimized with passive scroll listeners
- Lightweight and smooth at 60fps

## Integration

The hook is automatically applied to:

- Hero section (label, heading, subtext, CTA)
- Convergence section (heading)
- Distortion section (heading)
- Crossing section (heading)
- Flow section (heading)
- Final section (heading, CTA)

## Customization

### Custom Easing

```jsx
const customAnimation = {
  // Custom cubic-bezier curve
  transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)`
};
```

### Threshold Adjustment

```jsx
// Larger threshold for slower fade-in
useScrollAnimation({ threshold: 600 });

// Smaller threshold for quicker fade-in
useScrollAnimation({ threshold: 200 });
```

### Multiple Elements with Custom Delays

```jsx
const animation1 = useScrollAnimation({ delay: 0 });
const animation2 = useScrollAnimation({ delay: 100 });
const animation3 = useScrollAnimation({ delay: 200 });
```

## Accessibility

The animation respects the `prefers-reduced-motion` media query and provides a non-animated fallback when enabled.