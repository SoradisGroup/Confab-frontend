//Euro
export const FormatEuroCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};


// india
export const FormatINRCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2, // optional, ensures ₹1,000.00 format
  }).format(amount);
};