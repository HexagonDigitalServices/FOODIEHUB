import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaStar,
  FaShareAlt,
} from "react-icons/fa";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import pizza1 from "../assets/pizza1.png";
import pizza2 from "../assets/pizza2.png";
import cupcake1 from "../assets/cupcake1.png";
import cupcake2 from "../assets/cupcake2.png";
import icecream1 from "../assets/icecream1.png";
import icecream2 from "../assets/icecream2.png";

const menuItems = [
  { name: "Burger", price: 25.0, icon: "🍔", image1: burger1, image2: burger2 },
  { name: "Pizza", price: 110.0, icon: "🍕", image1: pizza1, image2: pizza2 },
  {
    name: "Cupcake",
    price: 50.0,
    icon: "🧁",
    image1: cupcake1,
    image2: cupcake2,
  },
  {
    name: "Ice Cream",
    price: 20.0,
    icon: "🍦",
    image1: icecream1,
    image2: icecream2,
  },
];
