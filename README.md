# glTF Viewer

Preview glTF 2.0 models in WebGL using three.js and a drag-and-drop interface.

Viewer: [gltf-viewer.donmccurdy.com](https://gltf-viewer.donmccurdy.com/)

![screenshot](https://user-images.githubusercontent.com/1848368/31580352-b7354096-b101-11e7-86d7-f07677835812.png)

## Features

- **Drag-and-drop interface** for easy model loading
- **360° Recording** - Record one complete rotation of your model and download as WebM video
- **Environment mapping** with multiple HDRI environments
- **Animation playback** with speed control
- **Camera controls** with multiple viewing angles
- **Material inspection** with wireframe and skeleton views
- **Morph targets** support
- **Lighting controls** with exposure and tone mapping
- **Validation** using the official glTF Validator

## Quickstart

```
npm install
npm run dev
```

## 360° Recording Feature

The viewer includes a built-in recording feature that captures one complete 360-degree rotation of your model:

1. Load a glTF model using drag-and-drop
2. Open the **Recording** panel in the GUI
3. Click **Record 360°** to start recording
4. The camera will automatically rotate 360 degrees while recording
5. The video will automatically download when the rotation is complete

**Requirements:**
- Modern browser with MediaRecorder API support
- WebM video format support (VP9/VP8 codecs)

## glTF 2.0 Resources

-   [THREE.GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
-   [glTF 2.0 Specification](https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md)
-   [glTF 2.0 Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/)

## Known Issues

-   [ ] Limited drag-and-drop support in Safari.
