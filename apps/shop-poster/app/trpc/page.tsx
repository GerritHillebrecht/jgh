import ListUsers from '../listUsers';

export default function TrpcPage() {
  return (
    <>
      <div>
        <h1>Welcome to trpc!</h1>
        <p>
          This page shows how to use <code>trpc</code>.
        </p>
        <p>
          <a href="https://trpc.io">Learn more about trpc</a>
        </p>
      </div>
      <ListUsers />
    </>
  );
}
