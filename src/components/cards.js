export function Cards(props) {
  return (
    <div id="card-content">
      {props.item.map((v) => {
        return (
          <div className="caird" key={v.name}>
            <div>
              <img id="productpic" src={v.url} alt=""></img>
            </div>
            <div id="details">
              <h2 style={{ margin: "0" }}>{v.name}</h2>

              <h4>${v.price}</h4>
              <input
                type="number"
                onChange={(e) => (v.sale = e.target.value)}
                defaultValue={v.sale}
                style={{
                  width: "40%",
                  height: "25px",
                  backgroundColor: "#40685c",
                  fontSize: "1.2rem",
                  color: "white"
                }}
              />
            </div>

            <br></br>

            <button
              onClick={() => {
                props.setcart([...props.cart, v]);
              }}
              disabled={props.cart.includes(v) ? 1 : 0}
            >
              addtocart
            </button>
          </div>
        );
      })}
    </div>
  );
}
