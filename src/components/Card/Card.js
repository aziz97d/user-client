import React from "react";

const Card = (props) => {
    const {title, price, category, description, image} = props.props;
    console.log(props)
  return (
    <div class="card" style={{ width: "18rem"}}>
      <img
        //src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        src={image}
        class="card-img-top"
        alt="..."
        style={{height:"250px",objectFit:"contain"}}
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text" style={{textOverflow:"ellipsis", display:"-webkit-box", }}>
        Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <a href="#" class="btn btn-primary px-3">
            <i class="bi bi-cart pe-2"></i>
            Add Cart
          </a>
          <p style={{ fontSize: "30px", fontWeight: "800", margin: "0" }}>
            {price}<i class="bi bi-currency-dollar"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
