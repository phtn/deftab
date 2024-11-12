interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RGB {
  const sanitizedHex = hex.replace("#", "");
  const r = parseInt(sanitizedHex.substring(0, 2), 16);
  const g = parseInt(sanitizedHex.substring(2, 4), 16);
  const b = parseInt(sanitizedHex.substring(4, 6), 16);
  return { r, g, b };
}

function rgbToHex(rgb: RGB): string {
  const toHex = (n: number): string => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return "#" + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
}

function interpolateColor(color1: RGB, color2: RGB, factor: number): RGB {
  return {
    r: color1.r + (color2.r - color1.r) * factor,
    g: color1.g + (color2.g - color1.g) * factor,
    b: color1.b + (color2.b - color1.b) * factor,
  };
}

export function blendHex(
  lightColor: string,
  darkColor: string,
): Record<number, string> {
  // Ensure hex colors start with #
  const light = lightColor.startsWith("#") ? lightColor : `#${lightColor}`;
  const dark = darkColor.startsWith("#") ? darkColor : `#${darkColor}`;

  // Convert hex to RGB
  const lightRgb = hexToRgb(light);
  const darkRgb = hexToRgb(dark);

  // Define the scale points
  const scalePoints = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  // Create the color scale
  const colorScale: Record<number, string> = {};

  scalePoints.forEach((point, index) => {
    // Calculate the interpolation factor (0 to 1)
    const factor = index / (scalePoints.length - 1);
    const interpolated = interpolateColor(lightRgb, darkRgb, factor);
    colorScale[point] = rgbToHex(interpolated);
  });

  return colorScale;
}

// Validates if string is a valid hex color (with or without #)
export const isValidHexColor = (color: string) => {
  const hexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  return hexRegex.test(color);
};

// Example usage:
// const scale = generateColorScale('#FFFFFF', '#000000');
// console.log(scale);
