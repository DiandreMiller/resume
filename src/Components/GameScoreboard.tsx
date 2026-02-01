import React from "react";
import scoreboard3 from "../Assets/scoreboard3.jpeg";

interface GameScoreboardProps {
  homeScore?: number;
  guestScore?: number;
}

const GameScoreboard: React.FC<GameScoreboardProps> = ({
  homeScore = 0,
  guestScore = 0,
}) => {
  const formatScore = (n: number) => String(Math.min(99, Math.max(0, n))).padStart(2, "0");

  return (
    <div
      className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none z-[50]"
    >
      <img
        src={scoreboard3}
        alt="Scoreboard"
        className="h-36 sm:h-40 md:h-44 lg:h-48 object-contain"
        style={{ minWidth: 360 }}
      />
      <div
        className="absolute inset-0 flex items-end justify-between pb-[18%] px-[12%] text-red-600 font-mono font-bold"
        style={{ fontSize: "clamp(0.85rem, 4vw, 1.15rem)" }}
        aria-hidden
      >
        <span
          className="text-red-500/90 drop-shadow-[0_0_2px_rgba(255,0,0,0.8)] tabular-nums"
          style={{ minWidth: "1.6em", textAlign: "center" }}
        >
          {formatScore(homeScore)}
        </span>
        <span className="text-red-500/90 drop-shadow-[0_0_2px_rgba(255,0,0,0.8)]">
          00:00
        </span>
        <span
          className="text-red-500/90 drop-shadow-[0_0_2px_rgba(255,0,0,0.8)] tabular-nums"
          style={{ minWidth: "1.6em", textAlign: "center" }}
        >
          {formatScore(guestScore)}
        </span>
      </div>
    </div>
  );
};

export default GameScoreboard;
