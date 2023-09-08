const products = [
  {
    id: "product1",
    url: "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)",
    },
    price: {
      mrp: 1195,
      cost: 625,
      discount: "47%",
    },
    description:
      "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product2",
    url: "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Sandwich Makers",
      longTitle: "Flipkart SmartBuy Sandwich 01 Grill  (Black)",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    description:
      "This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",
    discount: "From 99+5% Off",
    tagline: "Pestige, Nova & more",
  },
  {
    id: "product3",
    url: "https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    title: {
      shortTitle: "Fitness Gear",
      longTitle:
        "AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)",
    },
    price: {
      mrp: 499,
      cost: 166,
      discount: "66%",
    },
    description:
      "This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",
    discount: "Upto 70% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product4",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 6999,
      cost: 4049,
      discount: "42%",
    },
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product5",
    url: "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    title: {
      shortTitle: "Trimmers, Dryers & more",
      longTitle: "Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)",
    },
    price: {
      mrp: 1899,
      cost: 1124,
      discount: "40%",
    },
    description:
      "Introducing Nova Professional Dryer with 1800 watts of powerful drying , so that you can get salon-like hair styling even at your home . This hair dryer features Advanced Ehd + Technology which ensures that only the right amount of heat is distributed on your hair and preventing any damage to your hair. The Shine and condition Techonlogy ensures that you hair is always silky and smooth. The Thermo protect temperature setting in this dryer also provides shine and conditions your hair, so that you have a Gorgeous looking hair style.",
    discount: "From ₹499",
    tagline: "Kubra, Nova & more",
  },
  {
    id: "product6",
    url: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/oneplus-nord-3-5g-misty-green-128gb-8gb-ram-angled.png",
    detailUrl:
      "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/oneplus-nord-3-5g-misty-green-128gb-8gb-ram-angled.png",
    title: {
      shortTitle: "OnePlus Nord 3 5G",
      longTitle: "OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)",
    },
    price: {
      mrp: 33999,
      cost: 31999,
      discount: "5%",
    },
    description:
      "Get blazing Fast and Smooth performance with a bunch of RAM and our RAM-Vita algorithm. A big, beautiful display with gorgeous colors and a lightning-fast refresh rate.",
    discount: "Discount : ₹1699.95",
    tagline: "A truly larger than life experience",
  },
  {
    id: "product7",
    url: "https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/01a6f53a-292a-47ce-bc3e-d1fef00feeb5/vu-tv.png",
    detailUrl:
      "https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/01a6f53a-292a-47ce-bc3e-d1fef00feeb5/vu-tv.png",
    title: {
      shortTitle: "VU GLOLED SMART TV",
      longTitle:
        "Vu 139 cm (55 inches) The Masterpiece Glo Series 4K Ultra HD Smart Android QLED TV 55QMP (Armani Gold) (2022 Model) | Built in 4.1 Speaker",
    },
    price: {
      mrp: 60000,
      cost: 58800,
      discount: "2%",
    },
    description:
      "Vu Televisions (also Vu Technologies) is a television brand and an LED TV and display manufacturer founded by Indian businessperson Devita Saraf, in United States in 2006. It is amongst top 10 largest-selling TV brand across e-commerce platforms in India.",
    discount: "Discount : ₹1200",
    tagline: "Okay Google, Let's Vu",
  },
];

module.exports = products;
