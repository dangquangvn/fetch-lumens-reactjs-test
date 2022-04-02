import CardImg1 from "../assets/images/card-1.png";
import CardImg2 from "../assets/images/card-2.png";
import CardImg3 from "../assets/images/card-3.png";
import CardImg4 from "../assets/images/card-4.png";
import CardImg5 from "../assets/images/card-5.png";
import CardImg6 from "../assets/images/card-6.png";
import LIcon from "../assets/images/L-icon.svg";
export const PETROL = [
  {
    title: "15 Coins",
    desc: "50% discount for every $100 top-up on your Shell Petrol Card",
    image: CardImg1,
  },
  {
    title: "1,000 Coins",
    desc: "70% discount top-up on your Shell Petrol Card",
    image: CardImg2,
    icon: LIcon,
    titleColor: "#696974",
    link: {
      text: "Insufficient coins",
      path: "/",
    },
  },
  {
    title: "15 Coins",
    desc: "50% discount for every $100 top-up on your Shell Petrol Card",
    image: CardImg1,
  },
];

export const RENTAL_REBATE = [
  {
    title: "20 Coins",
    desc: "Get $20 Rental rebate",
    image: CardImg3,
  },
  {
    title: "15 Coins",
    desc: "Get $500 Rental rebate",
    image: CardImg4,
  },
  {
    title: "15 Coins",
    desc: "50% discount for every $100 top-up on your Shell Petrol Card",
    image: CardImg3,
  },
];

export const FOOD_BEVERAGE = [
  {
    title: "25 Coins",
    desc: "NTUC Fairprice $50 Voucher",
    image: CardImg5,
  },
  {
    title: "5 Coins",
    desc: "Free Cold Stone Sundae at any flavour!",
    image: CardImg6,
  },
  {
    title: "25 Coins",
    desc: "NTUC Fairprice $50 Voucher",
    image: CardImg5,
  },
];
