export default function Custom404() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 640, textAlign: "center" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12, fontWeight: 800 }}>Page not found</h1>
        <p style={{ opacity: 0.85, fontSize: 16 }}>The page you’re looking for doesn’t exist.</p>
      </div>
    </main>
  );
}

