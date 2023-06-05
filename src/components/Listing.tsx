type Data = {
  url: string;
  title: string;
  price: string;
  quantity: number;
  mainImage: string;
};

function Listing({ url, title, price, quantity, mainImage}: Data): JSX.Element {
  return (
    <div className="item-list">
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img alt={title} src={mainImage}></img>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
          <p className="item-quantity level-medium">{quantity} left</p>
        </div>
      </div>
    </div>
  )
};

export default Listing;