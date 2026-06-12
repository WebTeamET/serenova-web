export default function Loading() {
  return (
    <div className="min-h-screen w-full animate-pulse" aria-busy="true" aria-label="Loading page">
      <div className="w-full h-[60vh] min-768:h-[80vh] bg-grey-400 opacity-20" />

      <div className="container-1330 py-60 min-1400:py-[110px] space-y-40">
        <div className="mx-auto w-[120px] h-[14px] rounded bg-grey-400 opacity-20" />
        <div className="mx-auto w-[380px] max-w-full h-[36px] rounded bg-grey-400 opacity-20" />
        <div className="flex flex-col min-768:flex-row gap-30">
          <div className="flex-1 h-[280px] rounded bg-grey-400 opacity-20" />
          <div className="flex-1 h-[280px] rounded bg-grey-400 opacity-20" />
        </div>
        <div className="flex flex-col min-768:flex-row gap-30">
          <div className="flex-1 h-[200px] rounded bg-grey-400 opacity-20" />
          <div className="flex-1 h-[200px] rounded bg-grey-400 opacity-20" />
          <div className="flex-1 h-[200px] rounded bg-grey-400 opacity-20" />
        </div>
      </div>
    </div>
  )
}
