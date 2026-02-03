type EventName = 
  | "page_view"
  | "form_submit"
  | "button_click"
  | "contact_form_start"
  | "contact_form_complete"
  | "assessment_request";

type EventProperties = Record<string, string | number | boolean>;

export function trackEvent(name: EventName, properties?: EventProperties) {
  // Google Analytics 4
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (type: string, name: string, props?: EventProperties) => void }).gtag("event", name, properties);
  }

  // Console logging for development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${name}`, properties);
  }
}

export function trackPageView(url: string) {
  trackEvent("page_view", { page_path: url });
}

export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent("form_submit", {
    form_name: formName,
    success,
  });
}

export function trackButtonClick(buttonName: string, location: string) {
  trackEvent("button_click", {
    button_name: buttonName,
    location,
  });
}
