export function formatDate(dateString) {
  const aux = new Date(dateString).toUTCString();
  const date = new Date(aux).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return date;
}
