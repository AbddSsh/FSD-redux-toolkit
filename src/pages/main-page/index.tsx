import styles from "./styles.module.css";
import { AdvBlock } from "widgets/adv-block";
import { Header } from "widgets/header";
import { Basket } from "widgets/basket";
import { CategoriesBlock } from "widgets/categories-block";
import { Catalog } from "widgets/catalog";
import { SearchBar } from "widgets/search-bar";
import { WebApp } from "widgets/telegram-webapp";

const MainPage = () => {
  return (
    <div className={styles.main__wrapper}>
      <Header image="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-1024.png" />
      <WebApp />
      <AdvBlock />
      <SearchBar />
      <CategoriesBlock />
      <Catalog />
      <Basket />
    </div>
  );
};

export default MainPage;
