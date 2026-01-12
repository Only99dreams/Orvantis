export const WHATSAPP_NUMBER_E164_NO_PLUS = "2347066624508";

export const DEFAULT_WHATSAPP_MESSAGE = "Hello! I'd like to learn more about Orvantis services.";

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER_E164_NO_PLUS}?text=${encodeURIComponent(message)}`;
}
