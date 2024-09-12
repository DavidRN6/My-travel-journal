function Card(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img" />
      <div className="card-stats">
        <div className="card-location">
          <img src="Fill 219.png" className="card-fill" />
          <h4 className="card-place">{props.location}</h4>
          <a href={props.googleMapsUrl} className="gray">
            View on Google Maps
          </a>
        </div>
        <h1 className="card-name">{props.title}</h1>
        <h3 className="card-date">{props.date}</h3>
        <p className="card-desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;

// function Card(props) {
//   let badgeText;
//   if (props.openSpots === 0) {
//     badgeText = "SOLD OUT";
//   } else if (props.location === "Online") {
//     badgeText = "ONLINE";
//   }

//   return (
//     <div className="card">
//       {badgeText && <div className="card-badge">{badgeText}</div>}
//       <img src={props.image} className="card-img" />
//       <div className="card-stats">
//         <img src="Star 1.png" className="card-star" />
//         <span>{props.stats.rating}</span>
//         <span className="gray">({props.stats.reviewCount}) .</span>
//         <span className="gray">{props.country}</span>
//       </div>
//       <p className="card-title">{props.title}</p>
//       <p>
//         <span className="bold">From ${props.price}</span> / person
//       </p>
//     </div>
//   );
// }

// export default Card;
