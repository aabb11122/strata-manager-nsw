export default function Home() {
  return (
    <div>
      {/* Big, bold heading */}
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        Welcome to MyStrataNSW
      </h1>
      
      <p>Digital portal for managing your strata building.</p>

      <h2>About Our Building</h2>
      <img src="/buliding.jpg" alt="Our Building" width="300" />

      {/* Styled environment variable email */}
      <p>
        Contact Email:{" "}
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
