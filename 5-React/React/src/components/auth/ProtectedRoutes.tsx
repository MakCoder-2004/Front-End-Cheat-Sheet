// ProtectedRoutes.tsx
export default function ProtectedRoutes({
  isAllowed,
  children,
}: {
  isAllowed: boolean;
  redirectPath: string;
  children: React.ReactNode;
}) {
  if (!isAllowed) {
    throw new Response("Unauthorized", { status: 403 });
  }

  return <>{children}</>;
}