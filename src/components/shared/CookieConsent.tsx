"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ConsentSettings {
  essential: boolean;
  marketing: boolean;
  analytics: boolean;
  functional: boolean;
}

const defaultSettings: ConsentSettings = {
  essential: true,
  marketing: false,
  analytics: false,
  functional: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>(defaultSettings);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    } else {
      try {
        setSettings(JSON.parse(consent));
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const saveConsent = (newSettings: ConsentSettings) => {
    localStorage.setItem("cookie-consent", JSON.stringify(newSettings));
    setSettings(newSettings);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      marketing: true,
      analytics: true,
      functional: true,
    });
  };

  const handleDeny = () => {
    saveConsent({
      essential: true,
      marketing: false,
      analytics: false,
      functional: false,
    });
  };

  const handleSave = () => {
    saveConsent(settings);
  };

  const toggleSetting = (key: keyof ConsentSettings) => {
    if (key === "essential") return;
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop for settings modal */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Your Privacy
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
              </p>

              {/* Consent Options */}
              <div className="space-y-1 mb-6">
                {/* Essential */}
                <div className="flex items-center justify-between py-4 border-b border-gray-700">
                  <span className="text-white font-medium">Essential</span>
                  <Toggle
                    checked={settings.essential}
                    disabled
                    onChange={() => {}}
                  />
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between py-4 border-b border-gray-700">
                  <span className="text-white font-medium">Marketing</span>
                  <Toggle
                    checked={settings.marketing}
                    onChange={() => toggleSetting("marketing")}
                  />
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between py-4 border-b border-gray-700">
                  <span className="text-white font-medium">Analytics</span>
                  <Toggle
                    checked={settings.analytics}
                    onChange={() => toggleSetting("analytics")}
                  />
                </div>

                {/* Functional */}
                <div className="flex items-center justify-between py-4">
                  <span className="text-white font-medium">Functional</span>
                  <Toggle
                    checked={settings.functional}
                    onChange={() => toggleSetting("functional")}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={handleDeny}
                  className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-full transition-colors"
                >
                  Deny
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-full transition-colors"
                >
                  Accept all
                </button>
                <button
                  onClick={handleSave}
                  className="ml-auto px-5 py-2.5 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg transition-colors"
                >
                  Save
                </button>
              </div>

              {/* Privacy Policy Link */}
              <p className="text-gray-400 text-sm">
                Read how we handle your data in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-white hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-[9997] p-4">
          <div className="max-w-2xl mx-auto bg-[#1a1a1a] border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-2xl">
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDeny}
                className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-full transition-colors"
              >
                Deny
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-full transition-colors"
              >
                Accept all
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="ml-auto px-5 py-2.5 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-full transition-colors"
              >
                Consent Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

function Toggle({ checked, disabled, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={cn(
        "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900",
        checked ? "bg-gray-500" : "bg-gray-700",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
          checked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  );
}
