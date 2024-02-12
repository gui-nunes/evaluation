export function LoginWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white shadow-md rounded-md px-8 py-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {children}
      </div>
    </div>
  );
}
