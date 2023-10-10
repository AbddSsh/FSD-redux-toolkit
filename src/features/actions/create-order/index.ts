export const CreateOrder = () => {
  const tg = window.Telegram.WebApp; // инициализация webapp
  tg.sendData("оформить заказ"); // оформить заказ (выход из вэбапп)
};
