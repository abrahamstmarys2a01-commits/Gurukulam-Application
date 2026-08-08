const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  // Section A: Personal Information
  photo: { type: String, required: false }, // File path to the uploaded photo
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  governmentId: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },

  // Section B: Emergency & Family
  emergencyContactName: { type: String, required: true },
  emergencyContactRelationship: { type: String, required: true },
  emergencyContactPhone: { type: String, required: true },
  parentSpouseContact: { type: String, required: true },
  hasDependents: { type: String, required: true }, // 'Yes' or 'No'
  dependentsDetails: { type: String, required: false },
  familyAware: { type: String, required: true }, // 'Yes', 'No', or 'Not Applicable'

  // Section C: Health & Safety
  medicalCondition: { type: String, required: true },
  medicalConditionDetails: { type: String, required: false },
  takingMedicines: { type: String, required: true },
  takingMedicinesDetails: { type: String, required: false },
  specialFood: { type: String, required: true },
  specialFoodDetails: { type: String, required: false },
  mentalHealth: { type: String, required: true },
  mentalHealthDetails: { type: String, required: false },
  physicalFitness: { type: String, required: true },

  // Section D: Spiritual Calling
  dailyPractice: { type: String, required: true },
  previousAshram: { type: String, required: true },
  previousAshramDetails: { type: String, required: false },
  whyJoin: { type: String, required: true },
  longTermCommitment: { type: String, required: true },
  anyOtherInfo: { type: String, required: false },

  // Section E: Declaration
  declarationSigned: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', ApplicationSchema);
