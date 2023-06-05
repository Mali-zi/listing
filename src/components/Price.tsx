type CurrencyPrice = {
  price: string;
  currency_code: string,
};

export default function Price({ price, currency_code}: CurrencyPrice) {
    let currencyPrice: string = " ";
    if (currency_code === "USD") {
      currencyPrice = "$" + price;
    };
    if (currency_code === "EUR") {
      currencyPrice = "€" + price;
    };
    if (currency_code === "GBP") {
      currencyPrice = price + " GBP";
    };
  return (
    <p className="item-price">
      {currencyPrice}
    </p>
  )
};