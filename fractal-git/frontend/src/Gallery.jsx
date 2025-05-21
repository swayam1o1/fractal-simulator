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


import { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5050/api/gallery')
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      });
  }, []);

  const handleSelect = (id) => {
    setSelected(sel => sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]);
  };

  const handleDelete = async () => {
    if (selected.length === 0) return;
    await fetch('http://localhost:5050/api/gallery', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: selected })
    });
    setImages(imgs => imgs.filter(img => !selected.includes(img._id)));
    setSelected([]);
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: 32 }}>
      <h1 style={{ fontFamily: 'VT323, monospace', fontSize: 48, color: '#00ff99', textShadow: '0 0 8px #00ff99' }}>Gallery</h1>
      {selected.length > 0 && (
        <button
          style={{ marginBottom: 24, background: '#ff0055', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 24px', fontFamily: 'VT323, monospace', fontSize: 22, cursor: 'pointer', fontWeight: 700 }}
          onClick={handleDelete}
        >Delete Selected ({selected.length})</button>
      )}
      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          {images.map(img => (
            <div key={img._id} style={{ background: '#111', borderRadius: 8, padding: 16, boxShadow: '0 0 8px #00ff99', position: 'relative' }}>
              <input
                type="checkbox"
                checked={selected.includes(img._id)}
                onChange={() => handleSelect(img._id)}
                style={{ position: 'absolute', top: 12, left: 12, width: 22, height: 22, accentColor: '#00ff99' }}
              />
              <img
                src={`data:${img.contentType};base64,${img.data}`}
                alt={img.title}
                style={{ width: 256, height: 256, objectFit: 'contain', background: '#222', borderRadius: 4 }}
              />
              <div style={{ marginTop: 8, fontFamily: 'VT323, monospace', fontSize: 22 }}>{img.title}</div>
              <button
                style={{ marginTop: 8, background: '#00ff99', color: '#000', border: 'none', borderRadius: 4, padding: '6px 16px', fontFamily: 'VT323, monospace', fontSize: 18, cursor: 'pointer' }}
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = `data:${img.contentType};base64,${img.data}`;
                  a.download = img.title + '.png';
                  a.click();
                }}
              >Download</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
