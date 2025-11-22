// src/components/Avatar.tsx
import React from "react";
import type { User } from "../utils/auth";

export type AvatarProps = {
  user?: Pick<User, "avatar" | "name" | "email"> | null;
  size?: number; // px
  className?: string;
};

export default function Avatar({ user, size = 40, className = "" }: AvatarProps) {
  const initial = user?.avatar?.initial || (user?.name || user?.email || "U").charAt(0).toUpperCase();
  const bg = user?.avatar?.bg || "hsl(220 80% 60%)";
  const style: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "9999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: bg,
    color: "#fff",
    fontWeight: 600,
    fontSize: Math.max(12, Math.floor(size / 2.2)),
    userSelect: "none",
  };

  return (
    <div className={`avatar-component ${className}`} title={user?.name || user?.email} style={style}>
      <span>{initial}</span>
    </div>
  );
}
