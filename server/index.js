import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');

// Helper to ensure data directory and files exist
const ensureStorage = (fileName, initialData = []) => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  const filePath = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
  }
  return filePath;
};

const readData = (fileName) => {
  const filePath = ensureStorage(fileName);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${fileName}:`, err);
    return [];
  }
};

const writeData = (fileName, data) => {
  const filePath = ensureStorage(fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Registration API
app.post('/api/register', (req, res) => {
  try {
    const { fullName, college, department, year, email, phone, event, teamName, teamMembers } = req.body;

    if (!fullName || !college || !email || !phone || !event) {
      return res.status(400).json({ error: 'Please fill out all required fields.' });
    }

    const registrations = readData('registrations.json');

    // Generate ENG26-XXXX ID
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const regId = `ENG26-${randomCode}`;

    const newRegistration = {
      regId,
      fullName,
      college,
      department: department || 'General Engineering',
      year: year || 'Final Year',
      email,
      phone,
      event,
      teamName: teamName || '',
      teamMembers: teamMembers || '',
      registeredAt: new Date().toISOString()
    };

    registrations.push(newRegistration);
    writeData('registrations.json', registrations);

    console.log(`[API] New Registration: ${regId} for ${fullName} (${event})`);
    res.status(201).json({ success: true, registration: newRegistration });
  } catch (err) {
    console.error('[API] Registration error:', err);
    res.status(500).json({ error: 'Server error while processing registration.' });
  }
});

// Fetch all registrations (Admin / Stats)
app.get('/api/registrations', (req, res) => {
  const registrations = readData('registrations.json');
  res.json({ count: registrations.length, data: registrations });
});

// Project Submission API
app.post('/api/projects', (req, res) => {
  try {
    const { projectName, teamName, leaderName, department, email, description, techUsed, demoLink } = req.body;

    if (!projectName || !leaderName || !email || !description) {
      return res.status(400).json({ error: 'Missing required project details.' });
    }

    const projects = readData('projects.json');
    const newProject = {
      id: `PROJ-${Date.now()}`,
      projectName,
      teamName: teamName || leaderName,
      leaderName,
      department: department || 'Engineering',
      email,
      description,
      techUsed: techUsed || 'General Tech',
      demoLink: demoLink || '',
      submittedAt: new Date().toISOString()
    };

    projects.push(newProject);
    writeData('projects.json', projects);

    res.status(201).json({ success: true, message: 'Project submitted successfully for screening!', project: newProject });
  } catch (err) {
    console.error('[API] Project error:', err);
    res.status(500).json({ error: 'Server error while submitting project.' });
  }
});

// Sponsor Application API
app.post('/api/sponsors', (req, res) => {
  try {
    const { companyName, contactPerson, email, phone, tier, message } = req.body;

    if (!companyName || !contactPerson || !email) {
      return res.status(400).json({ error: 'Missing required sponsor contact details.' });
    }

    const sponsors = readData('sponsors.json');
    const newSponsorInquiry = {
      id: `SPN-${Date.now()}`,
      companyName,
      contactPerson,
      email,
      phone,
      tier: tier || 'Gold',
      message,
      submittedAt: new Date().toISOString()
    };

    sponsors.push(newSponsorInquiry);
    writeData('sponsors.json', sponsors);

    res.status(201).json({ success: true, message: 'Sponsorship inquiry received. Our team will contact you shortly!' });
  } catch (err) {
    console.error('[API] Sponsor error:', err);
    res.status(500).json({ error: 'Server error while submitting sponsor inquiry.' });
  }
});

// Contact Form API
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const messages = readData('contact.json');
    const newMessage = {
      id: `MSG-${Date.now()}`,
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      submittedAt: new Date().toISOString()
    };

    messages.push(newMessage);
    writeData('contact.json', messages);

    res.status(201).json({ success: true, message: 'Thank you for reaching out! We will reply via email.' });
  } catch (err) {
    console.error('[API] Contact error:', err);
    res.status(500).json({ error: 'Server error submitting contact message.' });
  }
});

const startServer = (portToTry) => {
  const server = app.listen(portToTry, () => {
    console.log(`=================================================`);
    console.log(`🚀 Engineering Day 2026 API Server running on port ${portToTry}`);
    console.log(`=================================================`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${portToTry} in use, trying port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(PORT);

