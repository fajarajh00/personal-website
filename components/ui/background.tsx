export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,.14),transparent_28%),linear-gradient(135deg,#09090B,#101018_48%,#09090B)] light:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.16),transparent_30%),linear-gradient(135deg,#f8fafc,#eef2ff_48%,#f8fafc)]" />
      <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-primary/20 blur-[20px]" />
      <div className="absolute right-[-5rem] top-1/3 h-64 w-64 rounded-full bg-secondary/16 blur-[20px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-35 light:opacity-50" />
    </div>
  );
}
