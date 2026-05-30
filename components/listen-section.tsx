"use client";

import { useState, useRef } from "react";
import { Pause, Play } from "lucide-react";

const DIALECTS = ["egyptian", "saudi", "gulf", "levantine"] as const;
type DialectId = (typeof DIALECTS)[number];

// Pre-shaped waveform pattern (values 0–1)
const WAVEFORM = [
  0.3, 0.55, 0.75, 0.95, 0.6, 0.4, 0.85, 0.5, 0.7, 0.35, 0.65, 0.9, 0.75, 0.5,
  0.35, 0.6, 0.85, 0.45, 0.75, 0.55, 0.9, 0.6, 0.4, 0.8, 0.5, 0.3, 0.7, 0.95,
  0.6, 0.4, 0.8, 0.5, 0.7, 0.3, 0.65, 0.9, 0.7, 0.5, 0.45, 0.6,
];

export interface ListenSectionTranslations {
  playButton: string;
  pauseButton: string;
  nowPlaying: string;
  chooseDialect: string;
  dialects: Record<DialectId, string>;
}

export function ListenToZazuBotPlayer({
  translations: t,
}: {
  translations: ListenSectionTranslations;
}) {
  const [activeId, setActiveId] = useState<DialectId>("egyptian");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selectDialect = (id: DialectId) => {
    audioRef.current?.pause();
    setIsPlaying(false);
    setActiveId(id);
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = `/audio/dialects/${activeId}.wav`;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

      {/* Dialect selector */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {DIALECTS.map((id) => (
          <button
            key={id}
            onClick={() => selectDialect(id)}
            className={[
              "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
              activeId === id
                ? "bg-[#7fe5a6] text-slate-950 shadow-[0_0_18px_rgba(127,229,166,0.4)]"
                : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {t.dialects[id]}
          </button>
        ))}
      </div>

      {/* Player card */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm lg:p-12">
        {/* Glow backdrop */}
        {isPlaying && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(127,229,166,0.06),_transparent_60%)]" />
        )}

        {/* Waveform + play button row */}
        <div className="flex items-center justify-center gap-5">
          {/* Left waveform half */}
          <div
            className="flex items-end gap-[3px]"
            style={{ height: "72px" }}
            aria-hidden
          >
            {WAVEFORM.slice(0, 20).map((h, i) => (
              <div
                key={i}
                className="w-[4px] rounded-full"
                style={{
                  height: `${h * 100}%`,
                  transformOrigin: "bottom",
                  background: isPlaying
                    ? `rgba(127, 229, 166, ${0.45 + h * 0.55})`
                    : `rgba(255, 255, 255, ${0.08 + h * 0.12})`,
                  animation: isPlaying
                    ? `sound-bar ${0.55 + (i % 6) * 0.09}s ease-in-out infinite alternate`
                    : "none",
                  animationDelay: `${i * 35}ms`,
                  transition: "background 0.4s",
                }}
              />
            ))}
          </div>

          {/* Play / pause button */}
          <div className="relative mx-2 flex-shrink-0">
            {isPlaying && (
              <>
                <span className="absolute inset-0 rounded-full bg-[#7fe5a6]/25 motion-safe:animate-ping" />
                <span className="absolute -inset-3 rounded-full bg-[#7fe5a6]/12 motion-safe:animate-ping [animation-delay:220ms]" />
              </>
            )}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? t.pauseButton : t.playButton}
              className={[
                "relative flex h-[72px] w-[72px] items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7fe5a6]",
                isPlaying
                  ? "bg-[#7fe5a6] text-slate-950 shadow-[0_0_36px_rgba(127,229,166,0.55)]"
                  : "border border-white/20 bg-white/10 text-white hover:bg-white/20",
              ].join(" ")}
            >
              {isPlaying ? (
                <Pause className="h-7 w-7" />
              ) : (
                <Play className="ml-1 h-7 w-7" />
              )}
            </button>
          </div>

          {/* Right waveform half */}
          <div
            className="flex items-end gap-[3px]"
            style={{ height: "72px" }}
            aria-hidden
          >
            {[...WAVEFORM.slice(20)].map((h, i) => (
              <div
                key={i}
                className="w-[4px] rounded-full"
                style={{
                  height: `${h * 100}%`,
                  transformOrigin: "bottom",
                  background: isPlaying
                    ? `rgba(127, 229, 166, ${0.45 + h * 0.55})`
                    : `rgba(255, 255, 255, ${0.08 + h * 0.12})`,
                  animation: isPlaying
                    ? `sound-bar ${0.55 + ((i + 20) % 6) * 0.09}s ease-in-out infinite alternate`
                    : "none",
                  animationDelay: `${(i + 20) * 35}ms`,
                  transition: "background 0.4s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Status */}
        <p className="mt-8 text-center text-sm text-slate-400">
          {isPlaying
            ? `${t.nowPlaying} · ${t.dialects[activeId]}`
            : t.chooseDialect}
        </p>
      </div>
    </div>
  );
}
