const whatsappNumber = "916382958382";

export function getWhatsAppOrderUrl(item?: string) {
  const message = [
    "Hi Bakes by Yazh,",
    item ? `I want to order: ${item}` : "I want to order:",
    "Category:",
    `Quantity: ${item ? "1" : ""}`,
    "Delivery/Pickup:",
    "Date:",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
