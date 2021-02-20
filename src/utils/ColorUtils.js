/**
 * Convert hexadecimal string to number
 * Returns number or NaN in case of invalid input
 * @param {string} hex
 */
function h2a(hex) {
  if (typeof hex !== 'string' || !hex.length) {
    return NaN;
  }

  const chars = hex.split('');
  let result = 0;
  for (const char of chars) {
    const value = parseInt(char, 16);
    if (Number.isNaN(value)) {
      return NaN;
    }

    result = (result << 4) + value;
  }

  return result;
}

/**
 * Convert hexadecimal color string to rgb
 * Returns { r, g, b } object or null in case of invalid input
 * @param {string} hex - in #HHHHHH format where H is hexadecimal symbol
 */
export function hex2rgb(hex) {
  if (
    typeof hex !== 'string'
    || hex.length !== 7
    || !hex.startsWith('#')
  ) {
    return null;
  }

  const color = h2a(hex.substr(1));
  if (Number.isNaN(color)) {
    return null;
  }

  return {
    r: (color & 0xFF0000) >> 16,
    g: (color & 0x00FF00) >> 8,
    b: (color & 0x0000FF)
  };
}
