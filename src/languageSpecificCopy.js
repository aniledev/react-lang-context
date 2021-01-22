// the file containing an object of the text we can display for each language

const languageSpecificCopy = {
  es: {
    title: "¡Bienvenidos!",
    body:
      "Esta aplicación del lado del cliente está hecha usando React. Haga clic en uno de los botones de arriba para ver cómo el sitio cambia de idioma. Culpe a todas las traducciones defectuosas en Google Translate. Hecho con amor por @aniledev.",
  },
  "en-US": {
    title: "Welcome!",
    body:
      "This client-side application is made using React. Click one of the buttons above to watch the site change languages. Blame all faulty translations on Google Translate. Made with love by @aniledev.",
  },
  ko: {
    title: "어서 오십시오!",
    body:
      "이 클라이언트 측 애플리케이션은 React를 사용하여 만들어졌습니다. 사이트 언어 변경을 보려면 위의 버튼 중 하나를 클릭하십시오. Google 번역의 모든 잘못된 번역을 비난하십시오. @aniledev의 사랑으로 만들어졌습니다..",
  },
};

export default languageSpecificCopy;
