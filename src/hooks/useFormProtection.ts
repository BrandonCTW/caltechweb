"use client";

import { useState, useCallback } from "react";

const RECAPTCHA_SITE_KEY = "6LcE5l0mAAAAADc3vZerPMYboBxlnmlG7u1zeQtg";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

function generateChallenge() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
}

export function useFormProtection() {
  const [honeypot, setHoneypot] = useState("");
  const [mathChallenge, setMathChallenge] = useState(generateChallenge);
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathError, setMathError] = useState("");

  const getRecaptchaToken = useCallback(
    async (action: string): Promise<string> => {
      try {
        if (typeof window !== "undefined" && window.grecaptcha) {
          return await new Promise<string>((resolve) => {
            window.grecaptcha!.ready(() => {
              window.grecaptcha!
                .execute(RECAPTCHA_SITE_KEY, { action })
                .then(resolve)
                .catch(() => resolve(""));
            });
          });
        }
      } catch {
        // reCAPTCHA is optional — don't block submission
      }
      return "";
    },
    []
  );

  const getProtectionPayload = useCallback(
    async (action = "submit") => {
      const recaptchaToken = await getRecaptchaToken(action);
      return { recaptchaToken, honeypot };
    },
    [getRecaptchaToken, honeypot]
  );

  const validateMath = useCallback((): boolean => {
    if (honeypot) return false;
    const parsed = parseInt(mathAnswer.trim(), 10);
    if (isNaN(parsed) || parsed !== mathChallenge.answer) {
      setMathError("Incorrect answer. Please try again.");
      return false;
    }
    setMathError("");
    return true;
  }, [honeypot, mathAnswer, mathChallenge.answer]);

  const refreshChallenge = useCallback(() => {
    setMathChallenge(generateChallenge());
    setMathAnswer("");
    setMathError("");
  }, []);

  return {
    honeypot,
    setHoneypot,
    mathChallenge,
    mathAnswer,
    setMathAnswer,
    mathError,
    setMathError,
    getProtectionPayload,
    validateMath,
    refreshChallenge,
  };
}
