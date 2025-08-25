export const FormatEuroCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};

// Alternative with German locale (common for Euro formatting)
export const FormatEuroCurrencyDE = (amount: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};

// Alternative with French locale
export const FormatEuroCurrencyFR = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};