"use client";

import { useState, useCallback } from "react";

export function useFormProtection() {
  const [honeypot, setHoneypot] = useState("");

  const getProtectionPayload = useCallback(
    async (_action = "submit") => {
      return { honeypot };
    },
    [honeypot]
  );

  return {
    honeypot,
    setHoneypot,
    getProtectionPayload,
  };
}
