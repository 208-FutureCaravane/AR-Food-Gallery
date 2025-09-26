# 🍽️ AR Food Gallery

An interactive **Augmented Reality (AR) food gallery** built with React, Vite,
and WebXR technologies. View delicious food items in your real environment using
your mobile device's camera!

## ✨ Features

- **🥘 Interactive Food Gallery**: Browse through a collection of 3D food models
- **📱 AR Visualization**: View food items in augmented reality using your
  phone's camera
- **🎯 WebXR Support**: Compatible with ARCore (Android) and ARKit (iOS)
- **📐 3D Model Support**: Supports GLB and OBJ format 3D models
- **🎨 Responsive Design**: Works seamlessly across desktop and mobile devices
- **🖼️ Fallback Images**: Graceful fallback to static images when models fail to
  load
- **🔄 Auto-rotate**: Models automatically rotate for better viewing experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Modern web browser with WebXR support
- Mobile device for best AR experience

### Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd ar-food-app
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser** Navigate to `http://localhost:5173`

### 🐳 Docker Deployment

#### Build and run with Docker

1. **Build the Docker image**

   ```bash
   docker build -t ar-food-app .
   ```

2. **Run the container**

   ```bash
   docker run -d -p 8080:80 --name ar-food-app ar-food-app
   ```

3. **Access the application** Open `http://localhost:8080` in your browser

#### Docker Compose (Optional)

```yaml
version: "3.8"
services:
  ar-food-app:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

Run with: `docker-compose up -d`

## 📁 Project Structure

```
ar-food-app/
├── public/
│   ├── models/              # 3D model files (GLB, OBJ)
│   │   ├── burger/
│   │   │   └── source/
│   │   │       └── Buger.glb
│   │   ├── burger_merged.glb
│   │   ├── Croissant.glb
│   │   └── ...
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── ARApp.jsx       # Main AR gallery component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── Dockerfile             # Docker configuration
├── nginx.conf            # Nginx web server config
└── package.json          # Dependencies and scripts
```

## 🎮 How to Use

1. **Browse Gallery**: View the collection of food items on the main page
2. **Enter AR Mode**:
   - Tap "📱 View in AR" button on any food item
   - Allow camera permissions when prompted
   - Point your camera at a flat surface
   - Tap to place the 3D food model in your space
3. **Interact**:
   - Move around to view the model from different angles
   - Pinch to zoom in/out
   - Tap and drag to rotate the model

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 7
- **AR Technology**: Google Model Viewer, WebXR
- **3D Graphics**: Three.js, React Three Fiber
- **Styling**: Tailwind CSS, PostCSS
- **Build Tool**: Vite
- **Containerization**: Docker + Nginx
- **Linting**: ESLint

## 🔧 Configuration

### Adding New Food Models

1. **Prepare your 3D model** in GLB format (recommended for AR)
2. **Place the model** in `public/models/` directory
3. **Add to the dishes array** in `src/components/ARApp.jsx`:

```jsx
{
  id: 3,
  name: "Your Food Item",
  modelPath: "/models/your-model.glb",
  imagePath: "/models/your-image.webp"
}
```

### Model Format Conversion

For best AR performance, convert OBJ files to GLB:

1. Visit
   [Aspose 3D Converter](https://products.aspose.app/3d/conversion/obj-to-glb)
2. Upload your OBJ file
3. Download the converted GLB file
4. Place in the `public/models/` directory

## 📱 Device Compatibility

### AR Support

- **Android**: ARCore-enabled devices (Android 7.0+)
- **iOS**: ARKit-enabled devices (iOS 11.0+)
- **Web Browsers**: Chrome, Safari, Edge (with WebXR support)

### Fallback Support

- Desktop browsers display 3D models without AR functionality
- Devices without AR support show static images

## 🚀 Deployment Options

### 1. Static Hosting (Vercel, Netlify)

```bash
npm run build
# Deploy the 'dist' folder
```

### 2. Docker Container

```bash
docker build -t ar-food-app .
docker run -p 8080:80 ar-food-app
```

### 3. Cloud Platforms

- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build production bundle
npm run build

# Preview production build
npm run preview
```

## 📊 Performance Optimization

- **Model Optimization**: Keep GLB files under 5MB for mobile performance
- **Image Compression**: Use WebP format for preview images
- **Lazy Loading**: Models load only when AR is activated
- **Caching**: Static assets cached for 1 year
- **Gzip Compression**: Enabled for all text-based assets

## 🐛 Troubleshooting

### AR not working?

- Ensure you're on a mobile device with ARCore/ARKit support
- Check camera permissions are granted
- Try in well-lit environment with textured surfaces
- Use HTTPS (required for camera access)

### Models not loading?

- Verify GLB file format and path
- Check browser console for error messages
- Ensure model files are accessible in `/public/models/`

### Docker build fails?

- Run with `--legacy-peer-deps` flag for dependency conflicts
- Check Docker daemon is running
- Verify sufficient disk space

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Google Model Viewer](https://modelviewer.dev/) for WebXR AR capabilities
- [Three.js](https://threejs.org/) for 3D graphics rendering
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for React
  integration
- [Vite](https://vitejs.dev/) for lightning-fast development

---

**🚀 Ready to experience food in AR? Start the development server and point your
mobile device at `localhost:5173`!**

1. Place your OBJ files in `public/models/`
2. Update the model configuration in `src/utils/modelUtils.js`:
   ```javascript
   export const DISH_MODELS = [
     {
       id: "your-dish",
       name: "Your Dish Name",
       file: "your-model.obj",
       description: "Description of your dish",
       category: "Category",
     },
     // ... existing models
   ];
   ```

## 📱 AR Support

### Browser Compatibility

| Platform | Browser     | AR Method            | Status       |
| -------- | ----------- | -------------------- | ------------ |
| iOS      | Safari      | Quick Look           | ✅ Supported |
| Android  | Chrome      | WebXR/Scene Viewer   | ✅ Supported |
| Desktop  | Chrome/Edge | WebXR (with headset) | ✅ Supported |

### Testing AR Features

**Desktop Testing:**

- AR button will show as "AR Not Available"
- All 3D interactions work normally

**Mobile Testing:**

1. **iOS Safari**:

   - Connect your phone to the same network
   - Visit the network URL from terminal output
   - Tap "View in AR" → Quick Look launches

2. **Android Chrome**:
   - Enable WebXR in chrome://flags
   - Visit the network URL
   - Tap "View in AR" → Scene Viewer or WebXR launches

## 🏗️ Project Structure

```
ar-food-app/
├── public/
│   ├── models/           # 3D model files (OBJ)
│   └── manifest.json     # PWA manifest
├── src/
│   ├── components/
│   │   ├── DishGallery.jsx      # Main gallery component
│   │   ├── DishDetailViewer.jsx # 3D detail viewer
│   │   └── ARViewer.jsx         # AR viewer with model-viewer
│   ├── hooks/
│   │   └── useAR.js            # AR capability detection
│   ├── utils/
│   │   └── modelUtils.js       # Model management utilities
│   ├── App.jsx                 # Main app component
│   └── index.css              # Global styles with Tailwind
└── README.md
```

## 🛠️ Key Technologies

- **React 18** - UI framework
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@google/model-viewer** - Web component for AR
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 🎮 User Interface

### Gallery View

- **Grid Layout**: Responsive card grid showing dish thumbnails
- **3D Previews**: Auto-rotating 3D models in cards
- **Touch Friendly**: Large touch targets and smooth interactions
- **Lazy Loading**: Models load only when visible

### Detail View

- **Interactive 3D**: Full-screen 3D viewer with controls
- **Touch Controls**: Drag to rotate, pinch to zoom, pan support
- **AR Button**: Context-aware AR availability
- **Model Info**: Dish details and instructions

### AR View

- **Format Detection**: Automatic OBJ format handling
- **Cross-Platform**: WebXR, Scene Viewer, and Quick Look support
- **Capability Detection**: Smart AR availability detection
- **Fallback Handling**: Graceful degradation when AR unavailable

## ⚡ Performance Features

### Loading Optimization

- **Code Splitting**: Separate chunks for React, Three.js, and components
- **Lazy Loading**: Models load on intersection
- **Asset Preloading**: Strategic resource preloading
- **Bundle Optimization**: Tree shaking and minification

### Mobile Optimization

- **Touch Gestures**: Native touch support for 3D interactions
- **Viewport Meta**: Safe area insets and proper scaling
- **PWA Ready**: Manifest and service worker ready
- **Network Aware**: Optimized for various connection speeds

## 🐛 Troubleshooting

### Common Issues

**Models not loading:**

- Check file paths in `public/models/`
- Verify model configuration in `modelUtils.js`
- Check browser console for loading errors

**AR not working:**

- iOS: Ensure using Safari browser
- Android: Enable WebXR in Chrome flags
- Check HTTPS requirement for production AR

**Performance issues:**

- Try reducing model complexity
- Check device WebGL capabilities
- Monitor browser developer tools for bottlenecks

### Browser Console Commands

Debug AR capabilities:

```javascript
// Check AR support
console.log("WebXR:", "xr" in navigator);
console.log("Device:", navigator.userAgent);
```

## 🔧 Development

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Adding New Features

1. **Components**: Add to `src/components/`
2. **Utilities**: Add to `src/utils/`
3. **Hooks**: Add to `src/hooks/`
4. **Styling**: Use Tailwind classes in `src/index.css`

## 📄 File Format Support

Currently supported:

- **OBJ files**: Basic geometry support
- **Future roadmap**: GLB/GLTF for enhanced AR features

For best AR experience, consider converting OBJ files to GLB format using tools
like Blender or online converters.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Test on multiple devices/browsers
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the future of food visualization+ Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript
with type-aware lint rules enabled. Check out the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
for information on how to integrate TypeScript and
[`typescript-eslint`](https://typescript-eslint.io) in your project.
