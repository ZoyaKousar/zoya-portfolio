import type { NextPageContext } from "next";

type ErrorProps = {
  statusCode?: number;
};

function Error({ statusCode }: ErrorProps) {
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
        <h1 style={{ fontSize: 40, marginBottom: 12, fontWeight: 800 }}>
          {statusCode ? `Error ${statusCode}` : "Application error"}
        </h1>
        <p style={{ opacity: 0.8, fontSize: 16 }}>
          Something went wrong while loading this page.
        </p>
      </div>
    </main>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default Error;

