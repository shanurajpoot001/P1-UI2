// importing packages
import express from 'express';
const express = require('express');
const authRoutes = require('./routes/auth');
import { createServer } from 'http';
import { config } from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';
//importing db config
import connectDB from './config/db.js'
//importing routes
import authRoutes from './routes/auth.js';

import documentRoutes from './routes/documents';

config();
connectDB();

const app = express();
const server = createServer(app);

// Configure CORS for HTTP requests
//CORS - cross origin resource sharing
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

// Middleware and routes
app.use(json());
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
