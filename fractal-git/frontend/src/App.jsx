/*Copyright 2025 Swayam

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/


import { useState, useRef, useEffect } from 'react';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Slider, InputLabel } from '@mui/material';
import { SketchPicker } from 'react-color';
import FractalCanvas from './assets/FractalCanvas.jsx';
import Gallery from './Gallery.jsx';

function Sidebar({ selected, setSelected }) {
  return (
    <Drawer variant="permanent" sx={{ width: 200, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box', bgcolor: '#000', color: '#f0f0f0' } }}>
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'mandelbrot'}
            onClick={() => setSelected('mandelbrot')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'mandelbrot' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Mandelbrot Set</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'julia'}
            onClick={() => setSelected('julia')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'julia' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Julia Set</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'sierpinski'}
            onClick={() => setSelected('sierpinski')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'sierpinski' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Sierpinski Triangle</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'dragon'}
            onClick={() => setSelected('dragon')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'dragon' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Dragon Curve</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'tree'}
            onClick={() => setSelected('tree')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'tree' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Fractal Tree</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'pythagoras'}
            onClick={() => setSelected('pythagoras')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'pythagoras' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Pythagoras Tree</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'barnsley'}
            onClick={() => setSelected('barnsley')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'barnsley' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Barnsley Fern</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'koch'}
            onClick={() => setSelected('koch')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'koch' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Koch Snowflake</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'hilbert'}
            onClick={() => setSelected('hilbert')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'hilbert' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Hilbert Curve</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'vicsek'}
            onClick={() => setSelected('vicsek')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'vicsek' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Vicsek Fractal</span>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'gallery'}
            onClick={() => setSelected('gallery')}
            sx={{ '&:hover span': { textShadow: '0 0 16px #00e1ff, 0 0 32px #00e1ff' }, ...(selected === 'gallery' && { backgroundColor: 'rgba(0,225,255,0.08)' }) }}
          >
            <ListItemText primary={<span className="retro-sidebar-text">Gallery</span>} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

function SierpinskiTriangleCanvas({ width = 700, height = 700, depth = 6, zoom = 1, offsetX = 0, offsetY = 0, color1 = '#fff', color2 = '#ff00ff' }) {
  const canvasRef = useRef();
  function lerpColor(a, b, t) {
    const ah = a.replace('#', '');
    const bh = b.replace('#', '');
    const ar = parseInt(ah.substring(0, 2), 16), ag = parseInt(ah.substring(2, 4), 16), ab = parseInt(ah.substring(4, 6), 16);
    const br = parseInt(bh.substring(0, 2), 16), bg = parseInt(bh.substring(2, 4), 16), bb = parseInt(bh.substring(4, 6), 16);
    const r = Math.round(ar + (br - ar) * t);
    const g = Math.round(ag + (bg - ag) * t);
    const blue = Math.round(ab + (bb - ab) * t);
    return `rgb(${r},${g},${blue})`;
  }
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    // Fill background with color1
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    function drawTriangle(x, y, size, depth, maxDepth) {
      if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size / 2, y + size * Math.sin(Math.PI / 3));
        ctx.lineTo(x - size / 2, y + size * Math.sin(Math.PI / 3));
        ctx.closePath();
        const t = (maxDepth - depth) / maxDepth;
        ctx.fillStyle = lerpColor(color1, color2, t);
        ctx.fill();
      } else {
        drawTriangle(x, y, size / 2, depth - 1, maxDepth);
        drawTriangle(x - size / 4, y + (size / 2) * Math.sin(Math.PI / 3), size / 2, depth - 1, maxDepth);
        drawTriangle(x + size / 4, y + (size / 2) * Math.sin(Math.PI / 3), size / 2, depth - 1, maxDepth);
      }
    }
    // Center and zoom
    const s = (width - 80) * zoom;
    const cx = width / 2 + offsetX * width / 2;
    const cy = 40 + offsetY * height / 2;
    drawTriangle(cx, cy, s, depth, depth);
  }, [width, height, depth, zoom, offsetX, offsetY, color1, color2]);
  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: '#181818', display: 'block' }} />;
}

function DragonCurveCanvas({ width = 700, height = 700, iterations = 10, zoom = 1, offsetX = 0, offsetY = 0, color1 = '#fff', color2 = '#ff00ff' }) {
  const canvasRef = useRef();

  // Generate dragon curve pattern using r/l turns
  function generateDragonPattern(iterations) {
    let old = 'r';  // start with a right turn
    let newPattern = old;
    
    let cycle = 1;
    while (cycle < iterations) {
      // Add a right to the end of old pattern
      newPattern = old + 'r';
      
      // Flip old pattern and change r to l and l to r
      let flipped = '';
      for (let i = old.length - 1; i >= 0; i--) {
        flipped += old[i] === 'r' ? 'l' : 'r';
      }
      
      // Combine patterns
      newPattern = newPattern + flipped;
      
      // Save for next iteration
      old = newPattern;
      cycle++;
    }
    
    return newPattern;
  }

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    
    // Fill background
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    
    // Setup initial state
    ctx.save();
    ctx.translate(width / 2 + offsetX * width / 2, height / 2 + offsetY * height / 2);
    ctx.scale(zoom, zoom);
    
    // Get turn sequence
    const pattern = generateDragonPattern(iterations);
    
    // Set drawing style
    ctx.strokeStyle = color2;
    ctx.lineWidth = 2;
    
    // Initial position and angle
    let x = -50, y = 0;
    let angle = 0;
    const step = 3;  // size of each segment
    
    // Draw the curve
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    // First line segment
    x += step;
    ctx.lineTo(x, y);
    
    // Draw remaining segments based on turns
    for (const turn of pattern) {
      // Update angle based on turn direction
      angle += turn === 'r' ? 90 : -90;
      
      // Calculate new position
      x += step * Math.cos(angle * Math.PI / 180);
      y += step * Math.sin(angle * Math.PI / 180);
      
      ctx.lineTo(x, y);
    }
    
    // Apply glow effect
    ctx.shadowBlur = 2;
    ctx.shadowColor = color2;
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    ctx.restore();
  }, [width, height, iterations, zoom, offsetX, offsetY, color1, color2]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: '#181818', display: 'block' }} />;
}

function FractalTreeCanvas({ width = 700, height = 700, iterations = 8, zoom = 1, offsetX = 0, offsetY = 0, color1 = '#fff', color2 = '#ff00ff', leftAngle = 30, rightAngle = 30, scale = 0.7 }) {
  const canvasRef = useRef();
  function lerpColor(a, b, t) {
    const ah = a.replace('#', '');
    const bh = b.replace('#', '');
    const ar = parseInt(ah.substring(0, 2), 16), ag = parseInt(ah.substring(2, 4), 16), ab = parseInt(ah.substring(4, 6), 16);
    const br = parseInt(bh.substring(0, 2), 16), bg = parseInt(bh.substring(2, 4), 16), bb = parseInt(bh.substring(4, 6), 16);
    const r = Math.round(ar + (br - ar) * t);
    const g = Math.round(ag + (bg - ag) * t);
    const blue = Math.round(ab + (bb - ab) * t);
    return `rgb(${r},${g},${blue})`;
  }
  function drawTree(ctx, x, y, angle, depth, maxDepth, length) {
    if (depth === 0) return;
    const t = (maxDepth - depth) / maxDepth;
    ctx.save();
    ctx.rotate(angle);
    // Draw rectangle (tapered branch)
    const branchWidth = Math.max(1, 8 * (depth / maxDepth));
    const branchHeight = length;
    ctx.fillStyle = lerpColor(color1, color2, t);
    ctx.beginPath();
    ctx.moveTo(-branchWidth / 2, 0);
    ctx.lineTo(branchWidth / 2, 0);
    ctx.lineTo(branchWidth / 2 * 0.85, -branchHeight);
    ctx.lineTo(-branchWidth / 2 * 0.85, -branchHeight);
    ctx.closePath();
    ctx.fill();
    if (depth > 1) {
      // Left branch
      ctx.save();
      ctx.translate(-branchWidth / 2 * 0.85, -branchHeight);
      ctx.rotate((-leftAngle * Math.PI) / 180);
      drawTree(ctx, 0, 0, 0, depth - 1, maxDepth, length * scale);
      ctx.restore();
      // Right branch
      ctx.save();
      ctx.translate(branchWidth / 2 * 0.85, -branchHeight);
      ctx.rotate((rightAngle * Math.PI) / 180);
      drawTree(ctx, 0, 0, 0, depth - 1, maxDepth, length * scale);
      ctx.restore();
    }
    ctx.restore();
  }
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2 + offsetX * width / 2, height - 40 + offsetY * height / 2);
    ctx.scale(zoom, zoom);
    drawTree(ctx, 0, 0, -Math.PI / 2, iterations, iterations, 120);
    ctx.restore();
  }, [width, height, iterations, zoom, offsetX, offsetY, color1, color2, leftAngle, rightAngle, scale]);
  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: '#181818', display: 'block' }} />;
}

function PythagorasTreeCanvas({ width = 700, height = 700, iterations = 8, leftAngle = 45, rightAngle = 45, scale = 0.7, color1 = '#fff', color2 = '#00ff99', zoom = 1, offsetX = 0, offsetY = 0 }) {
  const canvasRef = useRef();
  function lerpColor(a, b, t) {
    const ah = a.replace('#', '');
    const bh = b.replace('#', '');
    const ar = parseInt(ah.substring(0, 2), 16), ag = parseInt(ah.substring(2, 4), 16), ab = parseInt(ah.substring(4, 6), 16);
    const br = parseInt(bh.substring(0, 2), 16), bg = parseInt(bh.substring(2, 4), 16), bb = parseInt(bh.substring(4, 6), 16);
    const r = Math.round(ar + (br - ar) * t);
    const g = Math.round(ag + (bg - ag) * t);
    const blue = Math.round(ab + (bb - ab) * t);
    return `rgb(${r},${g},${blue})`;
  }
  function drawTree(ctx, x, y, size, angle, depth, maxDepth) {
    if (depth === 0) return;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    // Draw rectangle (tapered branch)
    const branchWidth = size * (0.7 + 0.3 * (depth / maxDepth));
    const branchHeight = size;
    ctx.fillStyle = lerpColor(color1, color2, (maxDepth - depth) / maxDepth);
    ctx.beginPath();
    ctx.moveTo(-branchWidth / 2, -branchHeight);
    ctx.lineTo(branchWidth / 2, -branchHeight);
    ctx.lineTo(branchWidth / 2 * 0.85, 0);
    ctx.lineTo(-branchWidth / 2 * 0.85, 0);
    ctx.closePath();
    ctx.fill();
    if (depth > 1) {
      // Left branch
      ctx.save();
      ctx.translate(-branchWidth / 2 * 0.85, -branchHeight);
      ctx.rotate((-leftAngle * Math.PI) / 180);
      drawTree(ctx, 0, 0, size * scale, 0, depth - 1, maxDepth);
      ctx.restore();
      // Right branch
      ctx.save();
      ctx.translate(branchWidth / 2 * 0.85, -branchHeight);
      ctx.rotate((rightAngle * Math.PI) / 180);
      drawTree(ctx, 0, 0, size * scale, 0, depth - 1, maxDepth);
      ctx.restore();
    }
    ctx.restore();
  }
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2 + offsetX * width / 2, height - 40 + offsetY * height / 2);
    ctx.scale(zoom, zoom);
    drawTree(ctx, 0, 0, 80, 0, iterations, iterations);
    ctx.restore();
  }, [width, height, iterations, leftAngle, rightAngle, scale, color1, color2, zoom, offsetX, offsetY]);
  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: '#181818', display: 'block' }} />;
}

function BarnsleyFernCanvas({ width = 700, height = 700, points = 20000, color1 = '#181818', color2 = '#00ff99', zoom = 1, offsetX = 0, offsetY = 0, move = 1.6 }) {
  const canvasRef = useRef();
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    let x = 0, y = 0;
    const pts = [];
    for (let i = 0; i < points; i++) {
      let a, b, c, d, f;
      const r = Math.random();
      if (r < 0.02) {
        a = 0; b = 0; c = 0; d = 0.16; f = 0;
      } else if (r < 0.89) {
        a = 0.85; b = 0.04; c = -0.04; d = 0.85; f = move;
      } else if (r < 0.96) {
        a = 0.2; b = -0.26; c = 0.23; d = 0.22; f = 1.6;
      } else {
        a = -0.15; b = 0.28; c = 0.26; d = 0.24; f = 0.44;
      }
      const xs = x;
      x = a * x + b * y;
      y = c * xs + d * y + f;
      pts.push([x, y]);
    }
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const [px, py] of pts) {
      if (px < minX) minX = px;
      if (px > maxX) maxX = px;
      if (py < minY) minY = py;
      if (py > maxY) maxY = py;
    }
    ctx.fillStyle = color2;
    for (const [px, py] of pts) {
      // Normalize to canvas, apply zoom and offsets
      const nx = ((px - minX) / (maxX - minX) - 0.5 + offsetX) * zoom * width * 0.9 + width / 2;
      const ny = height - (((py - minY) / (maxY - minY) - 0.5 + offsetY) * zoom * height * 0.9 + height / 2);
      ctx.fillRect(nx, ny, 1, 1);
    }
    ctx.restore();
  }, [width, height, points, color1, color2, zoom, offsetX, offsetY, move]);
  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: color1, display: 'block' }} />;
}

function KochSnowflakeCanvas({ width = 700, height = 700, iterations = 4, zoom = 1, offsetX = 0, offsetY = 0, color1 = '#181818', color2 = '#00ccff' }) {
  const canvasRef = useRef();
  // Classic Koch curve construction
  function kochCurve(p1, p2, iter) {
    if (iter === 0) return [p1, p2];
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const dx = (x2 - x1) / 3;
    const dy = (y2 - y1) / 3;
    const pA = [x1, y1];
    const pB = [x1 + dx, y1 + dy];
    const pD = [x1 + 2 * dx, y1 + 2 * dy];
    const pE = [x2, y2];
    // Calculate peak of the equilateral triangle
    const angle = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 3;
    const length = Math.sqrt(dx * dx + dy * dy);
    const pC = [
      pB[0] + Math.cos(angle) * length,
      pB[1] + Math.sin(angle) * length
    ];
    return [
      ...kochCurve(pA, pB, iter - 1).slice(0, -1),
      ...kochCurve(pB, pC, iter - 1).slice(0, -1),
      ...kochCurve(pC, pD, iter - 1).slice(0, -1),
      ...kochCurve(pD, pE, iter - 1)
    ];
  }
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    // Center and scale
    ctx.translate(width / 2 + offsetX * width / 2, height / 2 + offsetY * height / 2);
    ctx.scale(zoom, zoom);
    // Calculate triangle vertices
    const size = width * 0.45;
    const h = size * Math.sqrt(3) / 2;
    const p1 = [-size / 2, h / 3];
    const p2 = [size / 2, h / 3];
    const p3 = [0, -2 * h / 3];
    // Generate points for each side
    const pts1 = kochCurve(p1, p2, iterations);
    const pts2 = kochCurve(p2, p3, iterations);
    const pts3 = kochCurve(p3, p1, iterations);
    // Draw snowflake
    ctx.strokeStyle = color2;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(...pts1[0]);
    for (const pt of pts1.slice(1)) ctx.lineTo(...pt);
    for (const pt of pts2.slice(1)) ctx.lineTo(...pt);
    for (const pt of pts3.slice(1)) ctx.lineTo(...pt);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }, [width, height, iterations, zoom, offsetX, offsetY, color1, color2]);
  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: color1, display: 'block' }} />;
}

function HilbertCurveCanvas({ width = 700, height = 700, iterations = 5, zoom = 1, offsetX = 0, offsetY = 0, color1 = '#181818', color2 = '#00ff99' }) {
  const canvasRef = useRef();
  // Recursive Hilbert curve generator
  function hilbert(x, y, xi, xj, yi, yj, n, points) {
    if (n <= 0) {
      points.push([
        x + (xi + yi) / 2,
        y + (xj + yj) / 2
      ]);
    } else {
      hilbert(x, y, yi / 2, yj / 2, xi / 2, xj / 2, n - 1, points);
      hilbert(x + xi / 2, y + xj / 2, xi / 2, xj / 2, yi / 2, yj / 2, n - 1, points);
      hilbert(x + xi / 2 + yi / 2, y + xj / 2 + yj / 2, xi / 2, xj / 2, yi / 2, yj / 2, n - 1, points);
      hilbert(x + xi / 2 + yi, y + xj / 2 + yj, -yi / 2, -yj / 2, -xi / 2, -xj / 2, n - 1, points);
    }
  }
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2 + offsetX * width / 2, height / 2 + offsetY * height / 2);
    ctx.scale(zoom, zoom);
    // Generate Hilbert curve points
    const size = width * 0.8;
    const points = [];
    hilbert(-size / 2, -size / 2, size, 0, 0, size, iterations, points);
    // Draw curve
    ctx.strokeStyle = color2;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (const pt of points.slice(1)) ctx.lineTo(pt[0], pt[1]);
    ctx.stroke();
    ctx.restore();
  }, [width, height, iterations, zoom, offsetX, offsetY, color1, color2]);
  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: color1, display: 'block' }} />;
}

function VicsekFractalCanvas({ width = 700, height = 700, iterations = 4, zoom = 1, offsetX = 0, offsetY = 0, color1 = '#181818', color2 = '#00ff99', angle = 0 }) {
  const canvasRef = useRef();
  function drawVicsek(ctx, x, y, size, iter, maxIter, angleDeg) {
    if (iter === 0) {
      ctx.fillRect(x - size / 2, y - size / 2, size, size);
      return;
    }
    // Center
    drawVicsek(ctx, x, y, size / 3, iter - 1, maxIter, angleDeg);
    // Spokes (cross arms, rotated by angle)
    const rad = (angleDeg * Math.PI) / 180;
    // Up (rotate -angle)
    drawVicsek(ctx,
      x + Math.sin(-rad) * size / 3,
      y - Math.cos(-rad) * size / 3,
      size / 3, iter - 1, maxIter, angleDeg);
    // Down (rotate +angle)
    drawVicsek(ctx,
      x + Math.sin(rad) * size / 3,
      y + Math.cos(rad) * size / 3,
      size / 3, iter - 1, maxIter, angleDeg);
    // Left (rotate -angle)
    drawVicsek(ctx,
      x - Math.cos(-rad) * size / 3,
      y + Math.sin(-rad) * size / 3,
      size / 3, iter - 1, maxIter, angleDeg);
    // Right (rotate +angle)
    drawVicsek(ctx,
      x + Math.cos(rad) * size / 3,
      y + Math.sin(rad) * size / 3,
      size / 3, iter - 1, maxIter, angleDeg);
  }
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2 + offsetX * width / 2, height / 2 + offsetY * height / 2);
    ctx.scale(zoom, zoom);
    ctx.fillStyle = color2;
    drawVicsek(ctx, 0, 0, width * 0.6, iterations, iterations, angle);
    ctx.restore();
  }, [width, height, iterations, zoom, offsetX, offsetY, color1, color2, angle]);
  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #333', background: color1, display: 'block' }} />;
}

function FractalPlayground() {
  const [selected, setSelected] = useState('mandelbrot');
  // Mandelbrot
  const [mColor1, setMColor1] = useState('#000000');
  const [mColor2, setMColor2] = useState('#ff00ff');
  // Julia
  const [jColor1, setJColor1] = useState('#000000');
  const [jColor2, setJColor2] = useState('#ff00ff');
  // Dragon Curve
  const [dColor1, setDColor1] = useState('#000000');
  const [dColor2, setDColor2] = useState('#ff00ff');
  const [dIterations, setDIterations] = useState(10);
  const [dZoom, setDZoom] = useState(0.5);
  const [dOffsetX, setDOffsetX] = useState(0);
  const [dOffsetY, setDOffsetY] = useState(0);
  // Fractal Tree
  const [tColor1, setTColor1] = useState('#000000');
  const [tColor2, setTColor2] = useState('#ff00ff');
  const [tIterations, setTIterations] = useState(8);
  const [tZoom, setTZoom] = useState(1);
  const [tOffsetX, setTOffsetX] = useState(0);
  const [tOffsetY, setTOffsetY] = useState(0);
  const [tLeftAngle, setTLeftAngle] = useState(30);
  const [tRightAngle, setTRightAngle] = useState(30);
  const [tScale, setTScale] = useState(0.7);
  // Shared
  const [zoom, setZoom] = useState(1);
  const [iterations, setIterations] = useState(100);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [cRe, setCRe] = useState(-0.7);
  const [cIm, setCIm] = useState(0.27015);
  // Sierpinski
  const [depth, setDepth] = useState(5);
  const [sZoom, setSZoom] = useState(1);
  const [sOffsetX, setSOffsetX] = useState(0);
  const [sOffsetY, setSOffsetY] = useState(0);
  const [sColor1, setSColor1] = useState('#000000');
  const [sColor2, setSColor2] = useState('#ff00ff');
  // Pythagoras Tree
  const [pColor1, setPColor1] = useState('#000000');
  const [pColor2, setPColor2] = useState('#00ff99');
  const [pIterations, setPIterations] = useState(8);
  const [pLeftAngle, setPLeftAngle] = useState(45);
  const [pRightAngle, setPRightAngle] = useState(45);
  const [pScale, setPScale] = useState(0.7);
  const [pZoom, setPZoom] = useState(1);
  const [pOffsetX, setPOffsetX] = useState(0);
  const [pOffsetY, setPOffsetY] = useState(0);
  // Barnsley Fern
  const [bColor1, setBColor1] = useState('#000000');
  const [bColor2, setBColor2] = useState('#00ff99');
  const [bPoints, setBPoints] = useState(20000);
  const [bZoom, setBZoom] = useState(1);
  const [bOffsetX, setBOffsetX] = useState(0);
  const [bOffsetY, setBOffsetY] = useState(0);
  const [bMove, setBMove] = useState(1.6);
  // Koch Snowflake
  const [kColor1, setKColor1] = useState('#000000');
  const [kColor2, setKColor2] = useState('#00ccff');
  const [kIterations, setKIterations] = useState(4);
  const [kZoom, setKZoom] = useState(1);
  const [kOffsetX, setKOffsetX] = useState(0);
  const [kOffsetY, setKOffsetY] = useState(0);
  // Hilbert Curve
  const [hColor1, setHColor1] = useState('#000000');
  const [hColor2, setHColor2] = useState('#00ff99');
  const [hIterations, setHIterations] = useState(5);
  const [hZoom, setHZoom] = useState(1);
  const [hOffsetX, setHOffsetX] = useState(0);
  const [hOffsetY, setHOffsetY] = useState(0);
  // Vicsek Fractal
  const [vColor1, setVColor1] = useState('#000000');
  const [vColor2, setVColor2] = useState('#00ff99');
  const [vIterations, setVIterations] = useState(4);
  const [vZoom, setVZoom] = useState(1);
  const [vOffsetX, setVOffsetX] = useState(0);
  const [vOffsetY, setVOffsetY] = useState(0);
  const [vAngle, setVAngle] = useState(0);

  // Helper to get the current canvas ref
  const getCurrentCanvas = () => {
    const canvas = document.querySelector('canvas');
    return canvas;
  };

  // Download current canvas as PNG
  const handleDownload = () => {
    const canvas = getCurrentCanvas();
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `${selected}-fractal.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // Save current canvas to gallery
  const handleSaveToGallery = async () => {
    const canvas = getCurrentCanvas();
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const blob = await (await fetch(dataUrl)).blob();
    const formData = new FormData();
    const title = prompt('Enter a title for this fractal:', `${selected} - ${new Date().toLocaleString()}`);
    if (!title) return;
    formData.append('title', title);
    formData.append('image', blob, `${title}.png`);
    await fetch('http://localhost:5050/api/gallery/upload', {
      method: 'POST',
      body: formData
    });
    alert('Saved to gallery!');
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: '#000', minHeight: '100vh', color: '#f0f0f0' }}>
      <Sidebar selected={selected} setSelected={setSelected} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {selected === 'gallery' ? (
          <Gallery />
        ) : (
          <>
            <Typography variant="h4" gutterBottom sx={{ color: '#fff200', fontFamily: '"VT323", monospace', textShadow: '0 0 8px #fff200, 0 0 16px #fff200' }}>
              {selected === 'mandelbrot' ? 'Mandelbrot Set' : selected === 'julia' ? 'Julia Set' : selected === 'sierpinski' ? 'Sierpinski Triangle' : selected === 'dragon' ? 'Dragon Curve' : selected === 'tree' ? 'Fractal Tree' : selected === 'pythagoras' ? 'Pythagoras Tree' : selected === 'barnsley' ? 'Barnsley Fern' : selected === 'koch' ? 'Koch Snowflake' : selected === 'hilbert' ? 'Hilbert Curve' : 'Vicsek Fractal'} Simulation
            </Typography>
            <Box display="flex" gap={4}>
              <Box>
                {selected === 'mandelbrot' && (
                  <FractalCanvas
                    type='mandelbrot'
                    width={700}
                    height={700}
                    zoom={zoom}
                    iterations={iterations}
                    colors={[mColor1, mColor2]}
                    offsetX={offsetX}
                    offsetY={offsetY}
                    cRe={cRe}
                    cIm={cIm}
                  />
                )}
                {selected === 'julia' && (
                  <FractalCanvas
                    type='julia'
                    width={700}
                    height={700}
                    zoom={zoom}
                    iterations={iterations}
                    colors={[jColor1, jColor2]}
                    offsetX={offsetX}
                    offsetY={offsetY}
                    cRe={cRe}
                    cIm={cIm}
                  />
                )}
                {selected === 'sierpinski' && (
                  <SierpinskiTriangleCanvas width={700} height={700} depth={depth} zoom={sZoom} offsetX={sOffsetX} offsetY={sOffsetY} color1={sColor1} color2={sColor2} />
                )}
                {selected === 'dragon' && (
                  <DragonCurveCanvas width={700} height={700} iterations={dIterations} zoom={dZoom} offsetX={dOffsetX} offsetY={dOffsetY} color1={dColor1} color2={dColor2} />
                )}
                {selected === 'tree' && (
                  <FractalTreeCanvas width={700} height={700} iterations={tIterations} zoom={tZoom} offsetX={tOffsetX} offsetY={tOffsetY} color1={tColor1} color2={tColor2} leftAngle={tLeftAngle} rightAngle={tRightAngle} scale={tScale} />
                )}
                {selected === 'pythagoras' && (
                  <PythagorasTreeCanvas width={700} height={700} iterations={pIterations} leftAngle={pLeftAngle} rightAngle={pRightAngle} scale={pScale} color1={pColor1} color2={pColor2} zoom={pZoom} offsetX={pOffsetX} offsetY={pOffsetY} />
                )}
                {selected === 'barnsley' && (
                  <BarnsleyFernCanvas width={700} height={700} points={bPoints} color1={bColor1} color2={bColor2} zoom={bZoom} offsetX={bOffsetX} offsetY={bOffsetY} move={bMove} />
                )}
                {selected === 'koch' && (
                  <KochSnowflakeCanvas width={700} height={700} iterations={kIterations} zoom={kZoom} offsetX={kOffsetX} offsetY={kOffsetY} color1={kColor1} color2={kColor2} />
                )}
                {selected === 'hilbert' && (
                  <HilbertCurveCanvas width={700} height={700} iterations={hIterations} zoom={hZoom} offsetX={hOffsetX} offsetY={hOffsetY} color1={hColor1} color2={hColor2} />
                )}
                {selected === 'vicsek' && (
                  <VicsekFractalCanvas width={700} height={700} iterations={vIterations} zoom={vZoom} offsetX={vOffsetX} offsetY={vOffsetY} color1={vColor1} color2={vColor2} angle={vAngle} />
                )}
              </Box>
              <Box minWidth={300}>
                <Typography variant="h6" sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 6px #fff, 0 0 12px #fff', fontSize: 32 }}>Parameters</Typography>
                <Box mt={2}>
                  {selected === 'mandelbrot' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={10} step={0.01} value={zoom} onChange={(_, v) => setZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={10} max={500} step={1} value={iterations} onChange={(_, v) => setIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={offsetX} onChange={(_, v) => setOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={offsetY} onChange={(_, v) => setOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Color 1</InputLabel>
                      <SketchPicker color={mColor1} onChange={c => setMColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Color 2</InputLabel>
                      <SketchPicker color={mColor2} onChange={c => setMColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'julia' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={10} step={0.01} value={zoom} onChange={(_, v) => setZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={10} max={500} step={1} value={iterations} onChange={(_, v) => setIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={offsetX} onChange={(_, v) => setOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={offsetY} onChange={(_, v) => setOffsetY(v)} />
                      <Box display="flex" alignItems="center" gap={2} mt={2}>
                        <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Julia c (real)</InputLabel>
                        <Typography sx={{ color: '#fff', minWidth: 60 }}>{cRe.toFixed(3)}</Typography>
                      </Box>
                      <Slider
                        min={-1.5}
                        max={1.5}
                        step={0.001}
                        value={cRe}
                        onChange={(_, v) => setCRe(v)}
                      />
                      <Box display="flex" alignItems="center" gap={2}>
                        <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Julia c (imaginary)</InputLabel>
                        <Typography sx={{ color: '#fff', minWidth: 60 }}>{cIm.toFixed(3)}</Typography>
                      </Box>
                      <Slider
                        min={-0.4}
                        max={0.4}
                        step={0.0001}
                        value={cIm}
                        onChange={(_, v) => setCIm(v)}
                      />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Color 1</InputLabel>
                      <SketchPicker color={jColor1} onChange={c => setJColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Color 2</InputLabel>
                      <SketchPicker color={jColor2} onChange={c => setJColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'sierpinski' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Recursion Depth</InputLabel>
                      <Slider min={1} max={7} step={1} value={depth} onChange={(_, v) => setDepth(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={2} step={0.01} value={sZoom} onChange={(_, v) => setSZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={sOffsetX} onChange={(_, v) => setSOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={sOffsetY} onChange={(_, v) => setSOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Color 1</InputLabel>
                      <SketchPicker color={sColor1} onChange={c => setSColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Color 2</InputLabel>
                      <SketchPicker color={sColor2} onChange={c => setSColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'dragon' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={1} max={18} step={1} value={dIterations} onChange={(_, v) => setDIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.2} max={4} step={0.01} value={dZoom} onChange={(_, v) => setDZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={dOffsetX} onChange={(_, v) => setDOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={dOffsetY} onChange={(_, v) => setDOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Color 1</InputLabel>
                      <SketchPicker color={dColor1} onChange={c => setDColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Color 2</InputLabel>
                      <SketchPicker color={dColor2} onChange={c => setDColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'tree' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={4} max={11} step={1} value={tIterations} onChange={(_, v) => setTIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={2} step={0.01} value={tZoom} onChange={(_, v) => setTZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={tOffsetX} onChange={(_, v) => setTOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={tOffsetY} onChange={(_, v) => setTOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Left Angle</InputLabel>
                      <Slider min={5} max={85} step={1} value={tLeftAngle} onChange={(_, v) => setTLeftAngle(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Right Angle</InputLabel>
                      <Slider min={5} max={85} step={1} value={tRightAngle} onChange={(_, v) => setTRightAngle(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Scale</InputLabel>
                      <Slider min={0.5} max={0.9} step={0.01} value={tScale} onChange={(_, v) => setTScale(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Color 1</InputLabel>
                      <SketchPicker color={tColor1} onChange={c => setTColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Color 2</InputLabel>
                      <SketchPicker color={tColor2} onChange={c => setTColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'pythagoras' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={3} max={12} step={1} value={pIterations} onChange={(_, v) => setPIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Left Angle</InputLabel>
                      <Slider min={5} max={85} step={1} value={pLeftAngle} onChange={(_, v) => setPLeftAngle(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Right Angle</InputLabel>
                      <Slider min={5} max={85} step={1} value={pRightAngle} onChange={(_, v) => setPRightAngle(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Scale</InputLabel>
                      <Slider min={0.5} max={0.9} step={0.01} value={pScale} onChange={(_, v) => setPScale(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={2} step={0.01} value={pZoom} onChange={(_, v) => setPZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={pOffsetX} onChange={(_, v) => setPOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={pOffsetY} onChange={(_, v) => setPOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Background Color</InputLabel>
                      <SketchPicker color={pColor1} onChange={c => setPColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Tree Color</InputLabel>
                      <SketchPicker color={pColor2} onChange={c => setPColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'barnsley' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Points</InputLabel>
                      <Slider min={1000} max={100000} step={1000} value={bPoints} onChange={(_, v) => setBPoints(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={2} step={0.01} value={bZoom} onChange={(_, v) => setBZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={bOffsetX} onChange={(_, v) => setBOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={bOffsetY} onChange={(_, v) => setBOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Move (f parameter)</InputLabel>
                      <Slider min={0.5} max={2.5} step={0.01} value={bMove} onChange={(_, v) => setBMove(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Background Color</InputLabel>
                      <SketchPicker color={bColor1} onChange={c => setBColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Fern Color</InputLabel>
                      <SketchPicker color={bColor2} onChange={c => setBColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'koch' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={1} max={7} step={1} value={kIterations} onChange={(_, v) => setKIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={2} step={0.01} value={kZoom} onChange={(_, v) => setKZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={kOffsetX} onChange={(_, v) => setKOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={kOffsetY} onChange={(_, v) => setKOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Background Color</InputLabel>
                      <SketchPicker color={kColor1} onChange={c => setKColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Snowflake Color</InputLabel>
                      <SketchPicker color={kColor2} onChange={c => setKColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'hilbert' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={1} max={8} step={1} value={hIterations} onChange={(_, v) => setHIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={2} step={0.01} value={hZoom} onChange={(_, v) => setHZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={hOffsetX} onChange={(_, v) => setHOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={hOffsetY} onChange={(_, v) => setHOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Background Color</InputLabel>
                      <SketchPicker color={hColor1} onChange={c => setHColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Curve Color</InputLabel>
                      <SketchPicker color={hColor2} onChange={c => setHColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                  {selected === 'vicsek' && (
                    <>
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Iterations</InputLabel>
                      <Slider min={1} max={7} step={1} value={vIterations} onChange={(_, v) => setVIterations(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Zoom</InputLabel>
                      <Slider min={0.5} max={2} step={0.01} value={vZoom} onChange={(_, v) => setVZoom(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset X</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={vOffsetX} onChange={(_, v) => setVOffsetX(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Offset Y</InputLabel>
                      <Slider min={-1} max={1} step={0.01} value={vOffsetY} onChange={(_, v) => setVOffsetY(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Angle</InputLabel>
                      <Slider min={0} max={90} step={1} value={vAngle} onChange={(_, v) => setVAngle(v)} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22 }}>Background Color</InputLabel>
                      <SketchPicker color={vColor1} onChange={c => setVColor1(c.hex)} disableAlpha={true} presetColors={[]} />
                      <InputLabel sx={{ color: '#fff', fontFamily: '"VT323", monospace', textShadow: '0 0 4px #fff, 0 0 8px #fff', fontSize: 22, mt: 2 }}>Fractal Color</InputLabel>
                      <SketchPicker color={vColor2} onChange={c => setVColor2(c.hex)} disableAlpha={true} presetColors={[]} />
                    </>
                  )}
                </Box>
              </Box>
            </Box>
            <Box display="flex" gap={4}>
              <Box>
                {/* Save/Download buttons */}
                {selected !== 'gallery' && (
                  <Box mb={2} display="flex" gap={2}
                    sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <button
                      style={{ background: '#00ff99', color: '#000', border: 'none', borderRadius: 4, padding: '8px 20px', fontFamily: 'VT323, monospace', fontSize: 20, cursor: 'pointer', fontWeight: 700 }}
                      onClick={handleSaveToGallery}
                    >Save to Gallery</button>
                    <button
                      style={{ background: '#fff200', color: '#000', border: 'none', borderRadius: 4, padding: '8px 20px', fontFamily: 'VT323, monospace', fontSize: 20, cursor: 'pointer', fontWeight: 700 }}
                      onClick={handleDownload}
                    >Download</button>
                  </Box>
                )}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default FractalPlayground;
