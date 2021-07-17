import { Link } from "react-router-dom";

export function Cart(props) {
  return (
    <div id="cart">
      <ul id="cartlist">
        {props.cart.length === 0 ? (
          <h2 style={{ marginRight: "30px" }}>Cart is Empty</h2>
        ) : (
          ""
        )}
        {props.cart.map((v, i) => {
          return (
            <>
              <li key={v.name}>
                <span>{i + 1}</span>
                <span style={{ color: "white" }}>{v.name}</span>
                <span>{"x " + v.sale}</span>

                <span>{" $" + v.sale * v.price}</span>
                <button
                  id="remove-btn"
                  onClick={() => {
                    props.setcart(props.cart.filter((val, i) => val !== v));
                    props.setdis(0);
                  }}
                >
                  remove
                </button>
              </li>
            </>
          );
        })}
      </ul>
      <br></br>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <button id="check-out-btn">Check out</button>
      </Link>
    </div>
  );
}
