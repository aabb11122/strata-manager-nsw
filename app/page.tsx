export default function Home() {
  return (
    <div>
      <h1>Welcome to MyStrataNSW</h1>
      <p>Digital portal for managing your strata building.</p>

      <h2>About Our Building</h2>
      <img src="/buliding.jpg" alt="Our Building" width="300" />

      {/* Display the environment variable */}
      <p>Contact Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
    </div>
  );
}
