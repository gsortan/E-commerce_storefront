export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Unauthorized</h1>
        <p>You must be signed in to access this page.</p>
      </div>
    </div>
  );
}
