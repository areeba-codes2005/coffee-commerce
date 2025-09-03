import newfavdefimg from "../../assets/new-fav-defimg.jpg";
import newProcoff4 from "../../assets/newProcoff4.jpg";
import newProcoff3 from "../../assets/newProcoff3.jpg";
import newProcoff2 from "../../assets/newProcoff2.jpg";
import newArrcoff1 from "../../assets/newArrcoff1.jpg";
import newProcoff1 from "../../assets/newProcoff1.jpg";
import newArrcoff3 from "../../assets/newArrcoff3.jpg";

export const defaultImage = newfavdefimg;

export const coffeeData = [
  {
    id: 1,
    title: "01/ Mochacino",
    rating: 5,
    description:
      "A smooth blend of espresso, chocolate, and steamed milk — rich, creamy, and indulgent.",
    price: 20,
    available: true,
    images: [newProcoff4, newProcoff3],
  },
  {
    id: 2,
    title: "02/ Espresso",
    rating: 4,
    description: "Strong and bold flavor, a true coffee lover’s choice.",
    price: 15,
    available: true,
    images: [newProcoff2, newArrcoff1],
  },
  {
    id: 3,
    title: "03/ Black Coffee",
    rating: 5,
    description: "Pure, rich, and aromatic — simple yet satisfying.",
    price: 10,
    available: false,
    images: [newProcoff1, newArrcoff3],
  },
];
