const express = require('express');
const router = express.Router();

// TO BE IMPLEMENTED
// GET /
// GET /:id

router.get('/', (req, res) => {
  res.json({
    success: true,
    categories: [
      { id: 1, name: 'Jobs & Career', icon: 'briefcase' },
      { id: 2, name: 'Money & Finance', icon: 'wallet' },
      { id: 3, name: 'Education & Skills', icon: 'book' },
      { id: 4, name: 'Health Basics', icon: 'heart' },
      { id: 5, name: 'Legal & Government', icon: 'scale' },
      { id: 6, name: 'Documents', icon: 'file' }
    ]
  });
});

module.exports = router;
