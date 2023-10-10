export const WebApp = () => {
  // инициализация webapp
  const tg = window.Telegram.WebApp; // инициализация webapp
  tg.enableClosingConfirmation(); // запрет на свайп закрытие
  tg.expand(); // вэбапп на всю высоту экрана
  tg.ready(); // инфа о том что сайт готов к показу (вызвать как можно раньше)

  return <div></div>;
};
