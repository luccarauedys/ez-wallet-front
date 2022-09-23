export function formatDate(dateString) {
  const aux = new Date(dateString).toUTCString();
  const date = new Date(aux).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return date;
}

export function formatPrice(price) {
  const BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return BRL.format(price);
}
