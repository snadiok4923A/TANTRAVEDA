# NEBULA - Portal Image Setup

## Hidden Image Portal Effect

The cursor interaction creates a "black hole" that reveals a hidden image inside its center.

### How to Add Your Custom Image

1. **Place your image** in the assets folder:
   ```
   src/assets/portal-image.jpg
   ```
   
2. **Supported formats**: `.jpg`, `.jpeg`, `.png`

3. **Recommended specs**:
   - Aspect ratio: **16:9** (1920x1080 recommended)
   - Resolution: **1920x1080** or higher
   - File size: Keep under 2MB for performance

### Current State

- **Without custom image**: A purple/magenta gradient placeholder is shown
- **With custom image**: Your image will automatically load and replace the placeholder

### Visual Effect Details

- The image is **completely hidden** when no cursor interaction occurs
- When you move the cursor over the wave, a "black hole" distortion appears
- **Inside the inner radius** of that black hole, the hidden image becomes visible
- The image appears at **~30% opacity** with subtle warping/distortion
- The reveal follows the cursor smoothly
- The image itself remains fixed (only the reveal window moves)

### Customization

You can adjust these values in `NebulaCanvas.jsx`:

```javascript
uInnerRadius: { value: 3.0 }  // Size of image reveal (smaller = tighter portal)
uOuterRadius: { value: 6.0 }  // Size of black hole distortion
```

The opacity can be adjusted in the shader (line with `opacity = revealStrength * 0.3`).

### Effect Behavior

- **Outer black hole area**: Fibers are pushed away (dark)
- **Inner portal area**: Hidden image becomes visible with subtle warp
- **Center**: Maximum image visibility with gravitational lens effect
- **Edges**: Smooth fadeout with radial falloff
