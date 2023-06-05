interface IProps {
  quantity: number,
};

export default function Quantity({ quantity }: IProps): JSX.Element {
  if (quantity <= 20 && quantity > 10) {
    return <p className="item-quantity level-medium">{quantity} left</p>
  } else {
    if (quantity > 20) {
      return <p className="item-quantity level-high">{quantity} left</p>
    } else {
      return <p className="item-quantity level-low">{quantity} left</p>
    }
  };
};