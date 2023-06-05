import Price from "./Price";
import Quantity from "./Quantity";
import Title from "./Title";

type Data = {
  url: string;
  title: string;
  price: string;
  quantity: number;
  currency_code: string,
  mainImage: string;
};

function Listing({ url, title, price, quantity, currency_code, mainImage }: Data): JSX.Element {
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img alt={title} src={mainImage}></img>
        </a>
      </div>
      <div className="item-details">
        <Title title={title} />
        <Price
          price={price} 
          currency_code={currency_code}
        />
        <Quantity quantity={quantity} />
      </div>
    </div>
  )
};

export default Listing;