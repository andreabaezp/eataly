import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>011 674 098</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>HOME</li>
          </Link>
          <li className={styles.listItem}>OUR PIZZAS</li>
          <li className={styles.listItem}>DEAL OF THE DAY</li>
          
          <Image src="/img/chef.png" alt="" width="100px" height="90px" />
          <li className={styles.listItem}>EVENTS</li>
          <li className={styles.listItem}>BLOG</li>
          <li className={styles.listItem}>CONTACT</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/carts.png" alt="" width="35px" height="35px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
