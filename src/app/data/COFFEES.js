import kabingaraImg from "../assets/Kabingara.webp";
import virgiliaImg from "../assets/Virgilia.webp";

export const COFFEES = [
   {
      id: 0,
      name: "Kabingara",
      image: kabingaraImg,
      price: 15,
      flavorDescriptions: [
         "Apple",
         "Honey",
         "Cocao"
      ],
      rating: 5,
      roast: "light",
      roastLevel: "3",
      featured: true,
      description: "Tropical notes of pineapple are the first impression of this bright lot from Kenya. Balanced with citrus and herbal notes of lime leaf, Kabingara is exactly what we look for in a Kenyan coffee. Finishing with sweet notes of raw sugar, this coffee is guaranteed to linger long after you finish sipping. ",
      url: "https://www.vervecoffee.com/products/kabingara?variant=40377542443091",
   },
   {
      id: 1,
      name: "Virgilia Funtes Gutierrez",
      image: virgiliaImg,
      price: 15,
      flavorDescriptions: [
         "Blueberry Pie",
         "Cocao",
         "Candied Pecan"
      ],
      rating: 5,
      roast: "light",
      roastLevel: "4",
      featured: false,
      description: "Fruity, sweet and elegant, this coffee from El Savador is a crowd pleaser. Juicy notes of tangerine pair with floral honeysuckle, balancing out the lingering sweetness of bown sugar. ",
      url: "https://www.vervecoffee.com/products/virgilia-fuentes-gutierrez?variant=40428027183187",
   }
]