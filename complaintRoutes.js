// routes/complaintRoutes.js
const express = require('express');
const router = express.Router();

// Dummy in-memory complaints
let complaints = [];

// Add complaint
router.post('/add', (req, res) => {
  const { title, department, description, user } = req.body;
  if (!title || !department || !description || !user) {
    return res.status(400).json({ message: "All fields required" });
  }
  const id = complaints.length + 1;
  complaints.push({ id, title, department, description, user, status: "Pending" });
  res.json({ message: "Complaint added", complaint: complaints[complaints.length - 1] });
});

// Get all complaints
router.get('/all', (req, res) => {
  res.json(complaints);
});

// Update complaint status
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const complaint = complaints.find(c => c.id == id);
  if (!complaint) return res.status(404).json({ message: "Complaint not found" });
  complaint.status = status;
  res.json({ message: "Status updated", complaint });
});

module.exports = router;
