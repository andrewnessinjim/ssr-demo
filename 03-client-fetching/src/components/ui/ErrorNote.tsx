export function ErrorNote({ message }: { message: string }) {
  return <p className="py-8 text-sm text-red-500">Failed to load: {message}</p>;
}
