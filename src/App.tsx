import './App.css';
import etsy from './etsy.json';
import Listing from './components/Listing';

type Item = {
  listing_id: number,
  url?: string,
  title?: string,
  price?: string,
  quantity?: number,
  MainImage?: MainImage,
  currency_code?: string,

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
    if (item.url && item.title && item.price && item.quantity && item.currency_code && item.MainImage) {
      return (
        <Listing 
          key={item.listing_id}
          url={item.url}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          currency_code={item.currency_code}
          mainImage={item.MainImage.url_570xN}
        />
      )
    } else {
      return <></>
    };    
  });
  return (
    <div className="item-list">
      {listItem}
    </div>
  );
}

export default App;
