import React from "react";
import Image from "next/image";
import Styles from "../../Styles/Cart.module.css";

const Cart = () => {
  return (
    <>
      <div className={Styles.middleContainer}>
        <div className={Styles.container}>
          <div className={Styles.bag}>
            <h2>Bag</h2>
            <div className={Styles.item}>
              <Image
                src="/orchair.jpg"
                alt="Library Stool Chair"
                width={120}
                height={120}
                className={Styles.itemImage}
              />
              <div className={Styles.itemDetails}>
                <h3>Library Stool Chair</h3>
                <p>Ashen Slate/Cobalt Bliss</p>
                <p>Size: L   Quantity: 1</p>
              </div>
              <div className={Styles.itemActions}>
                <i className="far fa-heart"></i>
                <i className="far fa-trash-alt"></i>
              </div>
              <div className={Styles.itemPrice}>MRP: $99</div>
            </div>
            <div className={Styles.item}>
              <Image
                src="/Frame.jpg"
                alt="Library Stool Chair"
                width={120}
                height={120}
                className={Styles.itemImage}
              />
              <div className={Styles.itemDetails}>
                <h3>Library Stool Chair</h3>
                <p>Ashen Slate/Cobalt Bliss</p>
                <p>Size: L   Quantity: 1</p>
              </div>
              <div className={Styles.itemActions}>
                <i className="far fa-heart"></i>
                <i className="far fa-trash-alt"></i>
              </div>
              <div className={Styles.itemPrice}>MRP: $99</div>
            </div>
          </div>
          <div className={Styles.summary}>
            <h2>Summary</h2>
            <p>
              Subtotal
              <span>$198.00</span>
            </p>
            <p>
              Estimated Delivery &amp; Handling
              <span>Free</span>
            </p>
            <hr />
            <p className={Styles.total}>
              Total
              <span>$198.00</span>
            </p>
            <button>Member Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
