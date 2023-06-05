import Price from "./Price";

type Data = {
  url: string;
  title: string;
  price: string;
  quantity: number;
  currency_code: string,
  mainImage: string;
};

function Listing({ url, title, price, quantity, currency_code, mainImage}: Data): JSX.Element {
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img alt={title} src={mainImage}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <Price
          price={price} 
          currency_code={currency_code}
        />
        <p className="item-quantity level-medium">{quantity} left</p>
      </div>
    </div>
  )
};

export default Listing;