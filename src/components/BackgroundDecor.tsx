export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid opacity-45 bg-grid-fade" />
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(800px_circle_at_30%_10%,rgba(255,255,255,0.10),transparent_60%),radial-gradient(900px_circle_at_85%_35%,rgba(124,58,237,0.16),transparent_55%)]" />
      <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl animate-floaty" />
      <div className="absolute bottom-[-220px] right-[-160px] h-[620px] w-[620px] rounded-full bg-white/8 blur-3xl animate-drift" />
      <div className="absolute bottom-[-280px] left-[-160px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-3xl animate-drift" />
    </div>
  );
}
