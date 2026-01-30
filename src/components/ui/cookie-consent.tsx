"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";

interface CookieConsentProps {
  privacyPolicyUrl?: string;
}

type ConsentState = {
  essential: boolean;
  marketing: boolean;
  analytics: boolean;
  functional: boolean;
};

const CookieConsent = ({ privacyPolicyUrl = "/privacy-policy" }: CookieConsentProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [consent, setConsent] = React.useState<ConsentState>({
    essential: true,
    marketing: false,
    analytics: false,
    functional: false,
  });

  React.useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookie-consent");
    if (!savedConsent) {
      setIsOpen(true);
    } else {
      setConsent(JSON.parse(savedConsent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      marketing: true,
      analytics: true,
      functional: true,
    };
    setConsent(allAccepted);
    saveConsent(allAccepted);
    setIsOpen(false);
    setShowSettings(false);
  };

  const handleDeny = () => {
    const denied = {
      essential: true,
      marketing: false,
      analytics: false,
      functional: false,
    };
    setConsent(denied);
    saveConsent(denied);
    setIsOpen(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    saveConsent(consent);
    setIsOpen(false);
    setShowSettings(false);
  };

  const saveConsent = (settings: ConsentState) => {
    localStorage.setItem("cookie-consent", JSON.stringify(settings));
    // Here you would typically trigger your analytics/scripts based on the consent
    console.log("Consent saved:", settings);
  };

  const toggleConsent = (key: keyof ConsentState) => {
    if (key === "essential") return;
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isOpen && !showSettings) return null;

  return (
    <AnimatePresence>
      {isOpen && !showSettings && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 z-[5000] mx-auto max-w-sm w-full sm:left-auto sm:right-4 sm:mx-0 md:bottom-8 md:right-8"
        >
          <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl text-white">
            <h3 className="font-bold text-lg mb-2">Cookie Preferences</h3>
            <p className="text-sm text-gray-300 mb-6">
              This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDeny}
                  className="flex-1 border-white/20 hover:bg-white/10 hover:text-white rounded-lg h-10"
                >
                  Deny
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="flex-1 border-white/20 hover:bg-white/10 hover:text-white rounded-lg h-10"
                >
                  Accept all
                </Button>
              </div>
              <Button
                size="sm"
                onClick={() => setShowSettings(true)}
                className="w-full bg-white text-black hover:bg-gray-200 rounded-lg h-10"
              >
                Consent Settings
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {showSettings && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[5001] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-black border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Your Privacy</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <p className="text-sm text-gray-300 mb-6">
                This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
              </p>

              <div className="space-y-4">
                <ConsentOption
                  title="Essential"
                  description="Strictly necessary cookies for the website to function."
                  checked={consent.essential}
                  disabled={true}
                  onChange={() => {}}
                />
                <ConsentOption
                  title="Marketing"
                  description="Cookies used to deliver advertising that is more relevant to you and your interests."
                  checked={consent.marketing}
                  onChange={() => toggleConsent("marketing")}
                />
                <ConsentOption
                  title="Analytics"
                  description="Cookies used to understand how visitors interact with the website."
                  checked={consent.analytics}
                  onChange={() => toggleConsent("analytics")}
                />
                <ConsentOption
                  title="Functional"
                  description="Cookies that allow the website to remember choices you make."
                  checked={consent.functional}
                  onChange={() => toggleConsent("functional")}
                />
              </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-black/50 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
               <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    onClick={handleDeny}
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-lg h-10 px-6 w-full sm:w-auto"
                  >
                    Deny
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleAcceptAll}
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-lg h-10 px-6 w-full sm:w-auto"
                  >
                    Accept all
                  </Button>
               </div>
              <Button
                onClick={handleSaveSettings}
                className="bg-white text-black hover:bg-gray-200 rounded-lg h-10 px-8 w-full sm:w-auto"
              >
                Save
              </Button>
            </div>
            
            <div className="px-6 py-4 bg-black/80 border-t border-white/5 text-xs text-gray-500">
              Read how we handle your data in our{" "}
              <a href={privacyPolicyUrl} className="text-white hover:underline">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ConsentOptionProps {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

const ConsentOption = ({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: ConsentOptionProps) => {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-white">{title}</h4>
        <Switch checked={checked} disabled={disabled} onCheckedChange={onChange} />
      </div>
      {/* <p className="text-xs text-gray-400">{description}</p> */}
    </div>
  );
};

interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  onCheckedChange: () => void;
}

const Switch = ({ checked, disabled, onCheckedChange }: SwitchProps) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onCheckedChange}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        checked ? "bg-white" : "bg-white/20",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-black transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
};

export default CookieConsent;
