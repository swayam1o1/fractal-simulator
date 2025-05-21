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

const express = require('express');
const router = express.Router();
const multer = require('multer');
const Image = require('../models/Image');
const mongoose = require('mongoose');

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload image to gallery
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { title } = req.body;
    const image = new Image({
      title,
      data: req.file.buffer,
      contentType: req.file.mimetype
    });
    await image.save();
    res.status(201).json({ message: 'Image saved to gallery!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all gallery images
router.get('/', async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images.map(img => ({
      _id: img._id,
      title: img.title,
      contentType: img.contentType,
      createdAt: img.createdAt,
      data: img.data.toString('base64')
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete images by IDs
router.delete('/', async (req, res) => {
  try {
    let { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: 'No IDs provided' });
    }
    ids = ids.map(id => new mongoose.Types.ObjectId(id));
    await Image.deleteMany({ _id: { $in: ids } });
    res.json({ message: 'Images deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
