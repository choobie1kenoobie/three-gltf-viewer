# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **360° Recording Feature**: Added a record button in the GUI that captures one complete 360-degree rotation of the GLTF model
  - Records to WebM video format with VP9/VP8 codec support
  - Automatically stops after one complete rotation
  - Downloads the recorded video file with timestamp
  - Disables manual camera controls during recording
  - Shows recording status in the GUI
  - High quality recording at 30 FPS with 2.5 Mbps bitrate

### Technical Details
- Added MediaRecorder API integration for canvas stream capture
- Implemented automatic rotation detection using OrbitControls azimuthal angle
- Added recording state management and GUI controls
- Enhanced viewer.js with recording methods: `startRecording()`, `stopRecording()`, `saveRecording()`, `checkRotationComplete()`

### Browser Compatibility
- Requires MediaRecorder API support (modern browsers)
- Falls back from VP9 to VP8 codec if not supported
- Canvas.captureStream() API required for video recording 