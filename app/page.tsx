export default function Home() {
  return (
    <div>
      {/* Heading styled as bold and larger */}
      <h1><strong>Welcome to MyStrataNSW</strong></h1>
      <p>Digital portal for managing your strata building.</p>

      <h2>About Our Building</h2>
      <img src="/building.jpg" alt="Our Building" width="300" />

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
