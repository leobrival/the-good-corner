import Link from "next/link";

type AdCardProps = {
  link: string;
  imgUrl: string;
  title: string;
  price: number;
  onAddPrice: (price: number) => void;
};
export default function AdCard({link, imgUrl, title, price, onAddPrice}: AdCardProps) {
  return (
    <div className="ad-card-container">
      <Link className="ad-card-link" href={link}>
        <img className="ad-card-image" src={imgUrl} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price} €</div>
        </div>
      </Link>
      <button className="button" onClick={() => onAddPrice(price)}>
        Add price to total
      </button>
    </div>
  )
}
