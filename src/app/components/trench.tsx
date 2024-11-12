export const Trench = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative flex w-4 flex-col justify-center overflow-x-hidden pt-4">
        <div className="absolute top-1 size-[16px] rotate-45 rounded-md bg-zinc-200/50"></div>
        <div className="h-[75px] w-4 bg-zinc-500/50"></div>
        <div className="h-[4px] w-4 bg-zinc-200/50"></div>
        <div className="h-[136px] w-4 bg-gradient-to-r from-zinc-500/20 via-zinc-200/60 to-zinc-400/25"></div>
        <div className="h-[4px] w-4 bg-zinc-400/50"></div>
      </div>
    </div>
  );
};
