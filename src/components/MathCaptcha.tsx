"use client";

interface MathCaptchaProps {
  question: string | null;
  answer: string;
  onChange: (value: string) => void;
  error?: string;
  variant?: "light" | "dark";
}

export default function MathCaptcha({
  question,
  answer,
  onChange,
  error,
  variant = "light",
}: MathCaptchaProps) {
  if (!question) return null;

  const isLight = variant === "light";

  return (
    <div>
      <label
        className={`block text-sm font-semibold mb-1.5 ${
          isLight ? "text-gray-700" : "text-blue-200"
        }`}
      >
        What is {question}?{" "}
        <span className={isLight ? "text-red-500" : "text-red-300"}>*</span>
      </label>
      <input
        type="text"
        inputMode="numeric"
        required
        value={answer}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Your answer"
        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
          isLight
            ? "border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-transparent"
            : "border-white/20 bg-white/10 text-white placeholder-blue-300/50 focus:ring-orange-500 focus:border-transparent"
        } ${
          error
            ? isLight
              ? "border-red-300 ring-1 ring-red-300"
              : "border-red-400 ring-1 ring-red-400"
            : ""
        }`}
      />
      {error && (
        <p
          className={`text-xs mt-1 ${
            isLight ? "text-red-500" : "text-red-300"
          }`}
        >
          {error}
        </p>
      )}
      <p
        className={`text-[11px] mt-2 leading-relaxed ${
          isLight ? "text-gray-400" : "text-blue-300/60"
        }`}
      >
        Protected by reCAPTCHA.{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Privacy
        </a>{" "}
        &amp;{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Terms
        </a>
        .
      </p>
    </div>
  );
}
