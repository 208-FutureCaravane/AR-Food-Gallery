import React from "react";

// Simple AR-only gallery component
const ARGallery = () => {
  const dishes = [
    {
      id: 1,
      name: "Gourmet Burger",
      modelPath: "/models/burger/source/Buger.glb",
      imagePath: "/models/burger_merged.webp",
    },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h2
        style={{ marginBottom: "2rem", color: "#1f2937", textAlign: "center" }}
      >
        AR Food Gallery
      </h2>
      <p
        style={{ textAlign: "center", color: "#6b7280", marginBottom: "3rem" }}
      >
        View these delicious food items in augmented reality using your device's
        camera
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {dishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Image Thumbnail */}
            <div
              style={{
                height: "250px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={dish.imagePath}
                alt={dish.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{
                  display: "none",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#f3f4f6",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9ca3af",
                  fontSize: "3rem",
                }}
              >
                🍽️
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "1.5rem" }}>
              <h3
                style={{
                  margin: "0 0 1rem 0",
                  color: "#1f2937",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                {dish.name}
              </h3>

              <button
                onClick={async (e) => {
                  e.stopPropagation();

                  // Check if GLB version exists
                  const objUrl = dish.modelPath;
                  let arSrc = objUrl.replace(".obj", ".glb");

                  // Add cache-busting parameter to force reload
                  arSrc += "?v=" + Date.now();

                  try {
                    // Check if GLB file exists
                    const response = await fetch(arSrc, { method: "HEAD" });
                    if (!response.ok) {
                      alert(
                        "🔄 AR Setup Needed!\n\nTo use AR, please convert your OBJ model to GLB format:\n\n1. Go to: https://products.aspose.app/3d/conversion/obj-to-glb\n2. Upload your OBJ file\n3. Download as GLB\n4. Place it in /public/models/\n\nSee AR_FIX_GUIDE.md for detailed instructions!"
                      );
                      return;
                    }
                  } catch {
                    alert(
                      "🔄 AR Setup Needed!\n\nTo use AR, please convert your OBJ model to GLB format:\n\n1. Go to: https://products.aspose.app/3d/conversion/obj-to-glb\n2. Upload your OBJ file\n3. Download as GLB\n4. Place it in /public/models/\n\nSee AR_FIX_GUIDE.md for detailed instructions!"
                    );
                    return;
                  }

                  // Create AR viewer with GLB
                  const arViewer = document.createElement("model-viewer");
                  arViewer.src = arSrc;
                  arViewer.ar = true;
                  arViewer.setAttribute(
                    "ar-modes",
                    "webxr scene-viewer quick-look"
                  );
                  arViewer.setAttribute("camera-controls", "");
                  arViewer.setAttribute("auto-rotate", "");
                  arViewer.setAttribute("ar-scale", "fixed");
                  arViewer.setAttribute("ar-placement", "floor");
                  arViewer.setAttribute("scale", "0.001 0.001 0.001");
                  arViewer.setAttribute("max-camera-orbit", "auto 90deg auto");
                  arViewer.setAttribute("min-camera-orbit", "auto 0deg auto");
                  arViewer.style.width = "100%";
                  arViewer.style.height = "300px";

                  // Create quick AR modal
                  const arModal = document.createElement("div");
                  arModal.style.cssText = `
                    position: fixed;
                    inset: 0;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100;
                    padding: 1rem;
                  `;

                  const arContainer = document.createElement("div");
                  arContainer.style.cssText = `
                    background: white;
                    border-radius: 12px;
                    width: 100%;
                    max-width: 400px;
                    padding: 1.5rem;
                    text-align: center;
                  `;

                  const title = document.createElement("h3");
                  title.textContent = `${dish.name} in AR`;
                  title.style.cssText = "margin: 0 0 0.5rem 0; color: #1f2937;";

                  const instructions = document.createElement("p");
                  instructions.textContent =
                    "Tap the AR button below to view in your space!";
                  instructions.style.cssText =
                    "margin: 0 0 1rem 0; color: #6b7280; font-size: 0.875rem;";

                  const closeBtn = document.createElement("button");
                  closeBtn.textContent = "Close";
                  closeBtn.style.cssText = `
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: #f3f4f6;
                    border: none;
                    border-radius: 4px;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    font-size: 0.875rem;
                  `;
                  closeBtn.onclick = () => document.body.removeChild(arModal);

                  // Load model-viewer script if not already loaded
                  if (!window.customElements.get("model-viewer")) {
                    const script = document.createElement("script");
                    script.type = "module";
                    script.src =
                      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
                    document.head.appendChild(script);
                  }

                  // Create AR activation button
                  const arButton = document.createElement("button");
                  arButton.textContent = "📱 Activate AR";
                  arButton.style.cssText = `
                    background: #10b981;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.75rem 1.5rem;
                    margin-top: 1rem;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    width: 100%;
                  `;
                  arButton.onclick = () => {
                    // Trigger AR mode on the model-viewer
                    arViewer.activateAR();
                  };

                  arContainer.appendChild(title);
                  arContainer.appendChild(instructions);
                  arContainer.appendChild(arViewer);
                  arContainer.appendChild(arButton);
                  arContainer.appendChild(closeBtn);
                  arModal.appendChild(arContainer);
                  document.body.appendChild(arModal);
                }}
                style={{
                  backgroundColor: "#10b981",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  width: "100%",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                📱 View in AR
              </button>

              <p
                style={{
                  margin: "0.75rem 0 0 0",
                  color: "#6b7280",
                  fontSize: "0.8rem",
                  textAlign: "center",
                }}
              >
                Best experienced on mobile devices
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main AR app
const ARApp = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <header
        style={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, color: "#1f2937", fontSize: "2rem" }}>
          🍽️ AR Food Gallery
        </h1>
        <p style={{ margin: "0.5rem 0 0 0", color: "#6b7280" }}>
          Experience food in augmented reality
        </p>
      </header>

      <ARGallery />
    </div>
  );
};

export default ARApp;
