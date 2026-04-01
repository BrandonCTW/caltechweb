"use client";

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function HoneypotField({ value, onChange }: HoneypotFieldProps) {
  return (
    <div
      className="absolute opacity-0 -z-10 pointer-events-none"
      aria-hidden="true"
      tabIndex={-1}
    >
      <input
        type="text"
        name="honeypot"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
