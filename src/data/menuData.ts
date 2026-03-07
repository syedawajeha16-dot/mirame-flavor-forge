export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    category: "Veg Starters",
    items: [
      { name: "Hara Bhara Kebab", description: "Deep fried potato, green peas & spinach patties with Indian spices", price: 328 },
      { name: "Paneer Tikka Shashlik", description: "Roasted cottage cheese stuffed and marinated with Indian spices cooked in clay oven", price: 358 },
      { name: "Papdi Paneer Tikka", description: "Paneer marinated in spicy green chillies, ajwain, coriander coated in crumbs and grilled", price: 378 },
      { name: "Mushroom Galouti Kebab", description: "Fine paste of mushroom seasoned in Indian spices, pan fried in desi ghee", price: 378 },
      { name: "Bahaar-E-Brocolli", description: "Broccoli florets marinated in basil & cream cheese, roasted in clay oven", price: 398 },
      { name: "Dahi Ke Sholay", description: "Crispy hung yogurt kebabs rolled in bread, served with cheese dip sauce", price: 368 },
    ],
  },
  {
    category: "Non-Veg Starters",
    items: [
      { name: "Chicken Tikka", description: "Boneless chicken marinated with spices and roasted", price: 358 },
      { name: "Murgh Malai Kebab", description: "Boneless chicken marinated in a juicy mixture of cream, cashew nuts and spices", price: 368 },
      { name: "Chicken Lehsuni Kebab", description: "Boneless chicken marinated with garlic, seasonings and cooked in tandoor", price: 368 },
      { name: "Tandoori Prawns", description: "Prawns marinated and cooked in tandoor", price: 388 },
      { name: "Philadelphia Chicken Tikka", description: "Chicken marinated in aromatic creamy cheesy sauce cooked in clay oven", price: 398 },
      { name: "Murgh Banjara Kebab", description: "Chicken marinated in fresh coriander, green chillies, black pepper and cashews", price: 378 },
    ],
  },
  {
    category: "Fresh Dough Pizzas",
    items: [
      { name: "Classic Margherita", description: "Fresh tomato paste with Italian herbs topped with mozzarella cheese", price: 298 },
      { name: "Garden Veg Pizza", description: "Mozzarella, tomatoes, onions, capsicum, bellpeppers, olives, Italian herbs", price: 348 },
      { name: "Paneer Tikka Pizza", description: "Paneer tikka with marinara, onions, capsicum and cottage cheese", price: 378 },
      { name: "Quattro Formagi", description: "Our special mozzarella cheddar cream cheese, parmesan & marinara", price: 398 },
      { name: "Mirame Special Pizza", price: 498 },
      { name: "Barbeque Chicken Pizza", description: "Chicken in barbeque sauce, onions, mushrooms and marinara cheese", price: 418 },
    ],
  },
  {
    category: "Mocktails",
    items: [
      { name: "Virgin Mojito", description: "Mint, lemonade, soda", price: 188 },
      { name: "Red Knight", description: "Pomegranate, lemonade, soda", price: 198 },
      { name: "Watermelon Cooler", description: "Watermelon, masala lemonade, soda", price: 198 },
      { name: "Kiwi Blast", description: "Kiwi, lime, green apple, water", price: 198 },
      { name: "Sparkling Cranberry", description: "Cranberry juice, sprite, rosemary", price: 198 },
      { name: "Mirame Special", description: "Chef's special blend", price: 208 },
    ],
  },
  {
    category: "Rice & Biryani",
    items: [
      { name: "Veg Dum Biryani", price: 318 },
      { name: "Chicken Dum Biryani", price: 358 },
      { name: "Egg Biryani", price: 338 },
      { name: "Prawns Biryani", price: 358 },
      { name: "Chicken Zafrani Pulao", price: 378 },
      { name: "Gongura Chicken Pulao", price: 328 },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Awful Classic Ice Cream", price: 178 },
      { name: "Apricot Delight", price: 198 },
      { name: "Death By Chocolate", price: 228 },
      { name: "Sizzling Brownie", price: 248 },
      { name: "Mirame Special Ice Cream", price: 298 },
    ],
  },
];
