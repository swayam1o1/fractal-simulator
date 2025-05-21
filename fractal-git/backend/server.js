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
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const galleryRoutes = require('./routes/gallery');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Gallery routes
app.use('/api/gallery', galleryRoutes);

const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fractalgallery';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
