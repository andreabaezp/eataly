import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>EATALY AT YOUR DOOR!</h1>
      <p className={styles.desc}>
      Pizza ipsum dolor amet hawaiian bacon chicken, bacon & tomato lasagna large parmesan stuffed crust spinach anchovies platter. Party large bbq sauce, ham meatball garlic sauce burnt mouth ranch chicken and bacon pepperoni Chicago style white garlic pesto.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
