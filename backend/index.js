const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Database Initialization
const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        badge TEXT,
        info TEXT,
        text TEXT,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS gallery_items (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Seed data if empty
    const postsRes = await pool.query('SELECT COUNT(*) FROM posts');
    if (parseInt(postsRes.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO posts (title, badge, info, text, image_url) VALUES
        ('Learn to hold your camera properly', 'Photography', 'Published: 1 Day Ago | 25 Comments', 'This may sound obvious, but many new photographers don’t hold their camera correctly, which causes camera shake and blurry images.', '/images/blog3.jpg'),
        ('Start shooting in RAW', 'Photography', 'Published: 1 Week Ago | 100 Comments', 'RAW is a file format like jpeg, but unlike jpeg, it captures all the image data recorded by your camera’s sensor rather than compressing it.', '/images/blog4.jpeg'),
        ('Understand the exposure triangle', 'Photography', 'Published: 3 Week Ago | 200 Comments', 'Although it can seem a bit daunting at first, the exposure triangle simply refers to the three most important elements of exposure', '/images/blog5.jpeg')
      `);
    }

    const galleryRes = await pool.query('SELECT COUNT(*) FROM gallery_items');
    if (parseInt(galleryRes.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO gallery_items (title, image_url) VALUES
        ('Amazing Work', '/images/gallery6.jpg'),
        ('Memories Work', '/images/gallery2.jpg'),
        ('Enjoyable Work', '/images/gallery3.jpg'),
        ('Modern Work', '/images/gallery4.jpg'),
        ('Exciting Work', '/images/gallery6.jpg'),
        ('Styles Work', '/images/gallery5.jpg')
      `);
    }

    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Error initializing database', err);
  }
};

initDb();

// API Endpoints
app.get('/blog', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/gallery', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM gallery_items ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, subject, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
