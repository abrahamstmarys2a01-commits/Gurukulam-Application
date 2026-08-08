const Application = require('../models/Application');

// @desc    Submit a new application
// @route   POST /api/applications
// @access  Public
const submitApplication = async (req, res) => {
  try {
    const { body, file } = req;
    
    // Parse any nested objects if frontend sends stringified data (just in case)
    let parsedBody = body;
    if (typeof body.data === 'string') {
      parsedBody = JSON.parse(body.data);
    }
    
    const photoPath = file ? `/uploads/${file.filename}` : '';

    const newApplication = new Application({
      ...parsedBody,
      photo: photoPath,
    });

    const savedApplication = await newApplication.save();

    res.status(201).json({
      success: true,
      data: savedApplication,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to submit application',
      error: error.message,
    });
  }
};

module.exports = {
  submitApplication,
};
