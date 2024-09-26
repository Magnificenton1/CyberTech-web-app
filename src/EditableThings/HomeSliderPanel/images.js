import image1 from "./mp1.jpg";
import image2 from "./mp2.jpg";
import image3 from "./mp3.jpg";
// IMPORTANT STUFF, don't place a lot of text
// I also recommend images with high resolution that have height the same as width - it does not need to be a perfect square but with it it'll be more likely for a lot of text to fit
const SlidesJSON = {
  slides: [
    {
      url: image1,
      title: "Sieci segmentacyjne",
      caption:
        "Temat, którym zajmujemy się obecnie. Sieci segmentacyjne przypisują każdemu pikselowi na obrazie jakąś klasę – na przykład lampa czy ciężarówka. Dzięki naszemu projektowi pomożemy osobom niewidomym w poruszaniu się, wykrywając m. in. bieg chodnika, przejścia dla pieszych czy przeszkody.  ",
    },
    {
      url: image2,
      title: "Detekcja obiektów",
      caption:
        "Często spotykamy dziś zagadnienie detekcji obiektów – szukamy na zdjęciu wszystkich wystąpień danej klasy. W jednym z naszych projektów mieliśmy monitorować pas transmisyjny z urobkiem w kopalni i zatrzymywać go, gdy wyląduje na nim zbyt duży kamień.",
    },
    {
      url: image3,
      title: "Kursy edukacyjne",
      caption:
        "Mamy swój własny kanał na YouTube. Jeżeli nie masz doświadczenia z machine learningiem, ale chciałbyś zacząć, to dobrze trafiłeś/aś! Omawiamy na nim podstawy, obróbkę danych, klasyfikację (dość szczegółowo), a w przyszłości sieci głębokie.",
    },
  ],
};

export default SlidesJSON;
