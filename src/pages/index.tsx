type Params = { organizationId: string };

export default function Home({ organizationId }: Params) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to {organizationId ? organizationId : 'Default'} School!</h1>
      <p>Organization ID: {organizationId || 'No Subdomain Detected'}</p>
    </div>
  );
}

// @ts-expect-error context has any
export async function getServerSideProps(context) {
  const { 'organization-id': organizationId } = context.query;

  return {
    props: {
      organizationId: organizationId || null,
    },
  };
}
