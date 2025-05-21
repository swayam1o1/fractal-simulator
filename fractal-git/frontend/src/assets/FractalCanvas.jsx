import { useRef, useEffect } from 'react';

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  const num = parseInt(hex, 16);
  return [num >> 16, (num >> 8) & 0xff, num & 0xff];
}

function lerpColor(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function drawFractal({ ctx, width, height, type, zoom, iterations, color1, color2, offsetX, offsetY, cRe, cIm }) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  // Calculate aspect ratio and view window
  const aspect = width / height;
  const scale = 1.5 / zoom;
  const xMin = -scale * aspect + offsetX;
  const xMax = scale * aspect + offsetX;
  const yMin = -scale + offsetY;
  const yMax = scale + offsetY;

  for (let px = 0; px < width; px++) {
    for (let py = 0; py < height; py++) {
      // Map pixel to complex plane
      const x0 = xMin + (px / width) * (xMax - xMin);
      const y0 = yMin + (py / height) * (yMax - yMin);
      let zx, zy, cx, cy;
      if (type === 'mandelbrot') {
        zx = 0;
        zy = 0;
        cx = x0;
        cy = y0;
      } else {
        zx = x0;
        zy = y0;
        cx = cRe;
        cy = cIm;
      }
      let i = 0;
      for (; i < iterations; i++) {
        let xtemp = zx * zx - zy * zy + cx;
        zy = 2.0 * zx * zy + cy;
        zx = xtemp;
        if (zx * zx + zy * zy > 4) break;
      }
      let color = i === iterations ? [0, 0, 0] : lerpColor(rgb1, rgb2, Math.sqrt(i / iterations));
      const idx = 4 * (py * width + px);
      data[idx] = color[0];
      data[idx + 1] = color[1];
      data[idx + 2] = color[2];
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

export default function FractalCanvas({
  type = 'mandelbrot',
  width = 700,
  height = 700,
  zoom = 1,
  iterations = 100,
  colors = ['#fff', '#f0f'],
  offsetX = 0,
  offsetY = 0,
  cRe = -0.7,
  cIm = 0.27015,
}) {
  const canvasRef = useRef();
  const color1 = colors[0] || '#fff';
  const color2 = colors[1] || '#f0f';

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    drawFractal({ ctx, width, height, type, zoom, iterations, color1, color2, offsetX, offsetY, cRe, cIm });
  }, [type, width, height, zoom, iterations, color1, color2, offsetX, offsetY, cRe, cIm]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: '#181818', display: 'block' }} />;
} 