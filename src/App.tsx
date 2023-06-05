import './App.css';
import etsy from './etsy.json';
import Listing from './components/Listing';

type Item = {
  url: string,
  title: string,
  price: string,
  quantity: number,
  MainImage?: MainImage
};

type MainImage = {
  listing_image_id: number,
  hex_code: any,
  red: any,
  green: any,
  blue: any,
  hue: any,
  saturation: any,
  brightness: any,
  is_black_and_white: any,
  creation_tsz: any,
  listing_id: number,
  rank: any,
  url_75x75: string,
  url_170x135: string,
  url_570xN: string,
  url_fullxfull: string,
  full_height: any,
  full_width: any,
};

function App() {
  let items = JSON.parse(JSON.stringify(etsy));
  const listItem = items.map((item: Item) => {
    return (
      <Listing 
        url={item.url}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        mainImage={item.MainImage ? item.MainImage.url_570xN : "https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"}
      />
    )
  });
  return (
    <div>
      {listItem}
    </div>
  );
}

export default App;
