import React from 'react'

type AdCardProps = {
  link: string;
  imgUrl: string;
  title: string;
  price: number;
};
export default function AdCard({link, imgUrl, title, price}: AdCardProps) {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={link}>
        <img className="ad-card-image" src={imgUrl} />
          <div className="ad-card-text">
            <div className="ad-card-title">{title}</div>
            <div className="ad-card-price">{price} €</div>
          </div>
      </a>
    </div>
  )
}
