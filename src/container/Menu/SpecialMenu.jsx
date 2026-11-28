import React, { useState } from "react";

import { SubHeading } from "../../components";
import "./SpecialMenu.css";

// Christmas Festive Menu Data (£49.99 Per Person)
const christmasMenuData = {
  welcomeDrink: [
    { name: 'ANY COCKTAIL', description: 'Your choice of handcrafted cocktail' },
    { name: 'A GLASS OF HOUSE WINE', description: 'Red, white, or rosé' },
    { name: 'ANY MOCKTAIL', description: 'Refreshing non-alcoholic cocktail' },
    { name: 'MULLED WINE AND HOT TODDY', description: 'Warm festive seasonal beverage' },
  ],
  courseOne: [
    {
      name: 'PRAWN CRACKERS WITH EDAMAME',
      description: 'Light and crispy prawn crackers served alongside seasoned edamame, with aromatic Japanese Togarashi seasoning for a delightful crunch.',
    },
  ],
  courseTwo: {
    starters: [
      {
        name: 'BANG BANG CAULIFLOWER WITH WAKAME SALAD',
        description: 'Crispy golden cauliflower tossed in a creamy, spicy Bang Bang sauce, served with a refreshing wakame seaweed salad.',
        isVegetarian: true,
      },
      {
        name: 'KING CRAB GUNKAN',
        description: 'Delicate sushi rice wrapped in nori seaweed, generously topped with premium king crab.',
      },
      {
        name: 'THE KITCHEN VEG TEMPURA',
        description: 'A selection of fresh seasonal vegetables, lightly coated in a delicate tempura batter and fried until golden and crisp, served with a Japanese dipping sauce.',
        isVegetarian: true,
      },
    ],
    sushiSelection: {
      tag: 'SUSHI SELECTION',
      name: '10 PIECES OF OMAKASE SUSHI',
      description: 'A carefully curated selection of ten premium sushi pieces, hand-prepared by our chefs using the freshest seasonal ingredients.',
    },
  },
  courseThree: [
    {
      name: 'PEKING DUCK LEG',
      description: 'A succulent duck leg, marinated with aromatic Chinese spices, slow-cooked until tender and finished with beautifully crisp skin, delivering a rich and authentic Peking-inspired flavour.',
    },
    {
      name: 'CAULIFLOWER STEAK',
      description: 'A whole roasted cauliflower steak, beautifully caramelised and served with a delicate vinaigrette and our house sauce.',
      isVegetarian: true,
      vegLabel: '(VEG)',
    },
    {
      name: 'BEEF TERIYAKI',
      description: 'Succulent beef expertly cooked and glazed in a rich, sweet and savoury Japanese teriyaki sauce.',
    },
    {
      name: 'TOFU TERIYAKI',
      description: 'Crispy tofu coated in a delicious sweet and savoury teriyaki glaze, delivering a satisfying balance of texture and flavour.',
      isVegetarian: true,
    },
  ],
  courseFour: [
    {
      name: 'SWEET CINNAMON BAO BUNS',
      description: 'Soft, fluffy steamed bao buns infused with sweet cinnamon, served warm with vanilla ice cream.',
    },
  ],
};

// Food Menu Data
const foodMenuData = {
  starters: [
    { name: 'MISO SOUP', price: '£5', description: 'Miso broth, tofu, wakame, and sliced spring onion', isVegetarian: true },
    { name: 'MISO SEAFOOD SOUP', price: '£8', description: 'Miso broth with de-shelled king prawns, seabass, sweetcorn, and sliced spring onion' },
    { name: 'MISO AUBERGINE', price: '£7', description: 'Sweet miso rubbed aubergine tossed with toasted sesame seeds', isVegetarian: true },
    { name: 'ROASTED EDAMAME', price: '£6', description: 'Roasted soybeans with sea salted or spicy seasoning', isVegetarian: true },
    { name: 'STEAMED EDAMAME', price: '£6', description: 'Steamed soybeans with sea salted or spicy seasoning', isVegetarian: true },
    { name: 'WAKAME SALAD', price: '£8', description: 'Goma wakame salad dressed with wakame sauce, seaweed flakes, and toasted sesame seeds', isVegetarian: true },
    { name: 'YASAI TEMPURA', price: '£10', description: 'Lightly battered seasonal vegetables served with sweet chilli dipping sauce', isVegetarian: true },
    { name: 'PRAWN TEMPURA', price: '£12', description: 'Lightly battered king prawns served with sweet chilli dipping sauce' },
    { name: 'DYNAMITE SHRIMP', price: '£15', description: 'Crispy golden shrimp tossed in a creamy, spicy dynamite sauce' },
    { name: 'BANG BANG CAULIFLOWER', price: '£12', description: 'Crispy golden cauliflower tossed in a creamy, spicy dynamite sauce', isVegetarian: true },
    { name: 'TAKOYAKI', price: '£9', description: 'Japanese fried dough balls filled with octopus, topped with takoyaki sauce, mayo, aonori flakes, and toasted sesame seeds' },
    { name: 'CHICKEN SPRING ROLLS', price: '£9', description: 'Crispy rolls served with sweet chilli dipping sauce' },
    { name: 'VEGETABLE SPRING ROLLS', price: '£8', description: 'Crispy rolls served with sweet chilli dipping sauce', isVegetarian: true },
    { name: 'CHILLI SQUID', price: '£12', description: 'Crispy squid marinated in spicy shichimi seasoning served with chilli mayonnaise' },
    { name: 'YAKITORI CHICKEN', price: '£10', description: 'Marinated chicken skewers with ginger, garlic, soy, and teriyaki sauce served with Asian salad' },
    { name: 'CHICKEN KARAAGE', price: '£12', description: 'Marinated chicken thigh served with spicy mayonnaise' },
    { name: "THE KITCHEN'S SIGNATURE LAMB CHOPS", price: '£23', description: 'Marinated in a fine herb teriyaki sauce' },
    { name: 'CHICKEN GYOZA — FRIED (5 pcs)', price: '£10', description: 'Crispy fried chicken dumplings served with house-made gyoza dipping sauce' },
    { name: 'CHICKEN GYOZA — STEAMED (5 pcs)', price: '£9', description: 'Steamed chicken dumplings served with house-made gyoza dipping sauce' },
    { name: 'PRAWN GYOZA — FRIED (5 pcs)', price: '£10', description: 'Crispy fried king prawn dumplings served with house-made gyoza dipping sauce' },
    { name: 'PRAWN GYOZA — STEAMED (5 pcs)', price: '£9', description: 'Steamed king prawn dumplings served with house-made gyoza dipping sauce' },
    { name: 'VEGETABLE GYOZA — FRIED (5 pcs)', price: '£9', description: 'Crispy fried mixed vegetable dumplings served with house-made gyoza dipping sauce', isVegetarian: true },
    { name: 'VEGETABLE GYOZA — STEAMED (5 pcs)', price: '£8', description: 'Steamed mixed vegetable dumplings served with house-made gyoza dipping sauce', isVegetarian: true },
  ],
  specials: [
    { name: 'SUNOMONO', price: '£8', description: 'Pickled cucumber salad with a choice of fish or vegetables' },
    { name: 'ULTIMATE MIXED PLATTER', price: '£32', description: '4 prawn tempura, 5 chicken gyoza, 5 vegetable spring rolls, 6 chicken karaage served with soy, sesame, and sliced spring onion dipping sauce' },
  ],
  baoBuns: [
    { name: 'CHAR SIU PORK BELLY', price: '£12' },
    { name: 'MISO AUBERGINE', price: '£9', isVegetarian: true },
    { name: 'SPICY CHICKEN KARAAGE', price: '£14' },
    { name: 'DYNAMITE SHRIMP', price: '£16' },
  ],
  friedRice: [
    { name: 'CHICKEN FRIED RICE', price: '£15', description: 'Chicken, red bell pepper, red onion, egg, togarashi, hondashi, sesame oil, spring onion, and toasted sesame seeds' },
    { name: 'BEEF FRIED RICE', price: '£18', description: 'Beef, egg, and mixed vegetables with sesame seasoning' },
    { name: 'SEAFOOD FRIED RICE', price: '£18', description: 'Mixed seafood, egg, and vegetables with sesame seasoning' },
    { name: 'VEGETABLE & TOFU FRIED RICE', price: '£14', description: 'Tofu and mixed vegetables with sesame seasoning', isVegetarian: true },
  ],
  signatureMains: [
    { name: 'CAULIFLOWER STEAK', price: '£16', description: 'Whole roasted cauliflower crown served with vinaigrette and house sauce', isVegetarian: true },
    { name: 'CHAR SIU PORK BELLY', price: '£24', description: 'Slow-cooked pork belly with house sauce, potato & daikon gratin, and kimchi carrot puree' },
    { name: 'CHICKEN INASAL', price: '£24', description: 'Grilled chicken marinated in calamansi, garlic, ginger and annatto, basted with aromatic oil and served with Japanese rice and salad' },
    { name: 'PORK RIB FUSION', price: '£25', description: 'Rack of baby pork ribs marinated in Char Sui spices with crispy cassava sticks and Asian barbecue sauce' },
    { name: 'CHAR SIU TOMAHAWK STEAK', price: '£72', description: 'Tomahawk steak marinated in Asian char sui spices, served with crispy cassava sticks, tender stem broccoli, potato & daikon gratin, and kimchi carrot puree' },
  ],
  gunkan: [
    { name: 'SALMON', price: '£6' },
    { name: 'SPICY TUNA', price: '£7' },
    { name: 'TOBIKO', price: '£6' },
    { name: 'GRILLED SALMON', price: '£6' },
  ],
  sashimi: [
    { name: 'SALMON (5 pcs)', price: '£11' },
    { name: 'SEABASS (5 pcs)', price: '£11' },
    { name: 'YELLOW TAIL HAMACHI (5 pcs)', price: '£15' },
    { name: 'TUNA (5 pcs)', price: '£13' },
    { name: 'COMBO SASHIMI (25 pcs)', price: '£56', description: 'Salmon, Tuna, Hamachi, Seabass' },
  ],
  tataki: [
    { name: 'SALMON (6 pcs)', price: '£16' },
    { name: 'BEEF (6 pcs)', price: '£15' },
    { name: 'TUNA (6 pcs)', price: '£19' },
  ],
  temaki: [
    { name: 'SALMON AVOCADO', price: '£6' },
    { name: 'SPICY TUNA', price: '£7' },
    { name: 'TERIYAKI EEL', price: '£7' },
    { name: 'PRAWN TEMPURA AVOCADO', price: '£7' },
    { name: 'SOFT-SHELL CRAB AVOCADO', price: '£8' },
    { name: 'VEGGIE', price: '£5', description: 'Cucumber, avocado, red pepper, vegan mayo, sesame', isVegetarian: true },
    { name: 'CRISPY CHICKEN TERIYAKI', price: '£6' },
  ],
  hosomaki: [
    { name: 'SALMON (8 pcs)', price: '£7' },
    { name: 'AVOCADO (8 pcs)', price: '£6', isVegetarian: true },
    { name: 'COMBO MAKI MIX (32 pcs)', price: '£24', description: 'Cucumber, avocado, red pepper, vegan mayo, sesame', isVegetarian: true },
    { name: 'TUNA (8 pcs)', price: '£8' },
    { name: 'CUCUMBER (8 pcs)', price: '£5', isVegetarian: true },
  ],
  specialRolls: [
    { name: 'RAINBOW ROLL (8 pcs)', price: '£19', description: 'Mango and cucumber topped with a colourful assortment of fresh salmon, tuna, yellow tail, avocado, spicy mayo, and teriyaki sauce' },
    { name: 'CHISWICK SPECIAL ROLL (8 pcs)', price: '£19', description: 'Prawn tempura, cucumber, tamago, topped with eel, tuna, tempura flakes, unagi sauce, tobiko, and chives' },
    { name: 'SPIDER ROLL (8 pcs)', price: '£19', description: 'Soft-shell crab, mixed salad leaf, avocado, tobiko, topped with spicy mayo, tempura flakes, and tobiko' },
    { name: 'GREEN DRAGON (8 pcs)', price: '£19', description: 'Prawn tempura, cucumber, and mango, topped with sliced avocado, teriyaki sauce, and crispy onions' },
    { name: 'CHEF ROLL (8 pcs)', price: '£19', description: 'Flamed salmon, cream cheese, cucumber, topped with sliced avocado, Japanese mayo, and tobiko' },
    { name: 'VEGGIE RAINBOW (8 pcs)', price: '£17', description: 'Cucumber, avocado, mango, topped with inari and red pepper', isVegetarian: true },
    { name: 'DYNAMITE ROLL (8 pcs)', price: '£19', description: 'Carrot, avocado, and goma wakame salad topped with chopped spicy salmon, spicy mayo, sriracha, spring onion, and dried onion' },
    { name: 'FUTOMAKI SPECIAL (8 pcs)', price: '£19', description: 'Tempura soft-shell crab, mango, avocado, topped with salmon, tuna, tobiko, tempura flakes, and aburi sauce' },
    { name: 'DREAM SUSHI (8 pcs)', price: '£20', description: 'Mango, avocado, prawn tempura, topped with flamed salmon, tobiko, teriyaki sauce, sweet chilli, and tempura flakes' },
    { name: 'CHEF DRAGON (8 pcs)', price: '£20', description: 'Prawns, avocado, topped with flamed beef, teriyaki sauce, and spicy mayo' },
  ],
  superCrunchyRolls: [
    { name: 'SUPER CRUNCHY VOLCANO ROLL (10 pcs)', price: '£21', description: 'Mango, avocado, prawn tempura, topped with flamed salmon, tobiko, teriyaki sauce, sweet chilli, and tempura flakes' },
    { name: 'SUPER CRUNCHY CHICKEN (10 pcs)', price: '£21', description: 'Crispy chicken wrapped in a tempura roll, delivering both crunch and flavour' },
    { name: 'SUPER CRUNCHY VEGGIE (10 pcs)', price: '£18', description: 'A delightful vegetable-filled roll, deep-fried to perfection for that irresistible crunch', isVegetarian: true },
    { name: 'SUPER CRUNCHY PRAWN (10 pcs)', price: '£22', description: 'Succulent prawns in a deep-fried tempura roll for the ultimate crispy bite' },
  ],
  teriyaki: [
    { name: 'CHICKEN TERIYAKI', price: '£21', description: 'Tender chicken glazed with a rich, sweet teriyaki sauce' },
    { name: 'BEEF TERIYAKI', price: '£24', description: 'Succulent beef cooked to perfection, coated in sweet teriyaki sauce' },
    { name: 'SALMON TERIYAKI', price: '£23', description: 'Grilled salmon with a luscious teriyaki glaze' },
    { name: 'TOFU TERIYAKI', price: '£20', description: 'Crispy tofu in a savoury teriyaki glaze', isVegetarian: true },
  ],
  noodles: [
    { name: 'WOK FRIED TOFU YAKISOBA', price: '£23', description: 'Stir-fried tofu with Japanese yakisoba noodles, fresh vegetables, and a savoury sauce', isVegetarian: true },
    { name: 'SEAFOOD SPECIAL UDON', price: '£25', description: 'Wok-fried king prawns, Japanese fishcake, and squid, served with hearty udon noodles and stir-fried vegetables' },
    { name: 'PRAWN YAKISOBA', price: '£25', description: 'Prawns stir-fried with yakisoba noodles, seasonal vegetables, and finished with crispy shallots' },
    { name: 'CHILLI CHICKEN UDON', price: '£25', description: 'Thick udon noodles stir-fried with spicy chilli chicken, mixed vegetables, and a kick of heat' },
    { name: 'CHICKEN YAKISOBA', price: '£23', description: 'Tender chicken stir-fried with yakisoba noodles, fresh vegetables, and a savoury yakisoba sauce' },
  ],
  ceviche: [
    { name: 'SALMON', price: '£25' },
    { name: 'YELLOW TAIL (HAMACHI)', price: '£29' },
    { name: 'TUNA', price: '£18' },
    { name: 'PRAWN', price: '£28' },
  ],
  pokeBowl: [
    { name: 'SALMON', price: '£20' },
    { name: 'TUNA', price: '£20' },
    { name: 'TOFU', price: '£19', isVegetarian: true },
  ],
  curry: [
    { name: 'CHICKEN KATSU CURRY', price: '£22' },
    { name: 'PRAWN KATSU CURRY', price: '£22' },
    { name: 'YASAI KATSU CURRY', price: '£20', description: 'Panko-breaded sweet potato, aubergine, and butternut squash', isVegetarian: true },
  ],
  sushiPlatters: [
    { name: 'SALMON LOVER (23 pcs)', price: '£35', description: '2 Nigiri, 8 Hosomaki, 8 Salmon Avocado Uramaki, 5 Sashimi. Perfect for salmon lovers – a variety of rolls and fresh sashimi.' },
    { name: 'TUNA LOVER (23 pcs)', price: '£40', description: '2 Nigiri, 8 Hosomaki, 8 Spicy Tuna, 5 Sashimi. For those who love the rich, bold taste of tuna – fresh, spicy, and indulgent.' },
    { name: 'COMBO SALMON & TUNA (45 pcs)', price: '£65', description: '2 Nigiri, 8 Hosomaki, 8 Uramaki, 5 Sashimi. A perfect combination of delicate salmon and rich tuna.' },
    { name: 'COMBO VEGGIE (46 pcs)', price: '£55', description: '6 Nigiri, 16 Hosomaki, 16 Uramaki, 8 Special Rolls. A vibrant and fresh assortment for vegetarians.', isVegetarian: true },
    { name: 'COUPLE SHARING (46 pcs)', price: '£79', description: '6 Nigiri (Salmon/Ebi/Yellowtail), 6 Sashimi (Salmon/Tuna), 8 Salmon & Avocado Hosomaki, 8 Salmon & Avocado Uramaki, 8 Special Rolls, 10 Super Crunchy Volcano Rolls (fried)' },
    { name: 'FAMILY SHARING (72 pcs)', price: '£109', description: '10 Nigiri, 14 Hosomaki, 14 Sashimi, 16 Uramaki, 8 Special Rolls, and 10 Super Crunchy Volcano Rolls. Perfect for family or large groups, expertly curated by our chefs.' },
  ],
  sides: [
    { name: 'JAPANESE RICE', price: '£5', description: 'Steamed Japanese rice to complement any dish' },
    { name: 'FRIES', price: '£4', description: 'Crisp fries, served with a choice of dipping sauce' },
    { name: 'SOY & SESAME TENDERSTEM BROCCOLI', price: '£6', description: 'Tenderstem broccoli stir-fried with soy sauce and sesame oil for a rich, nutty flavour' },
    { name: 'HOUSE MIXED VEG SALAD', price: '£5', description: 'Fresh mixed vegetables served with a light Asian dressing', isVegetarian: true },
    { name: 'NOODLES', price: '£5', description: 'Wok-fried noodles with seasonal vegetables' },
    { name: 'CHILLI & GARLIC WOK FRIED MIXED GREENS', price: '£5', description: 'Stir-fried mixed greens with a zesty kick of chilli and garlic', isVegetarian: true },
    { name: 'PRAWN CRACKERS', price: '£4', description: 'Crispy prawn crackers served with Togarashi Sauce for a delightful crunch' },
    { name: 'JAVA CURRY SAUCE', price: '£4' },
  ],
  desserts: [
    { name: 'MOCHI', price: '£8', description: 'Choice of flavours: Strawberry, Coconut, Mango, or Chocolate. Soft, chewy rice flour dough filled with a sweet, creamy centre.' },
    { name: 'TIRAMISU', price: '£12', description: 'A classic Italian dessert with layers of coffee-soaked sponge, mascarpone, and cocoa dusting.' },
    { name: 'CHOCOLATE BERRY DELIGHT', price: '£12', description: 'A luxurious chocolate cheesecake with a smooth golden crust, topped with a rich chocolate ganache.' },
    { name: 'MANGO CHEESECAKE', price: '£12', description: 'A creamy, tropical mango cheesecake with a smooth and indulgent finish.' },
    { name: 'CHOCOLATE PETIT GATEAU', price: '£12', description: 'A rich, molten chocolate cake with a gooey centre, served warm and indulgent.' },
  ],
};

// Wines data
const whiteWinesData = [
  { name: 'Vermentino Colombard, Les Vignerons', region: 'France, Languedoc', price175: '£7.25', price250: '£9.50', priceBottle: '£30', notes: 'A light, fresh and clean white wine with refreshing citrus and apple fruit flavours.' },
  { name: 'Pinot Grigio II Caggio', region: 'Italy, Veneto', price175: '£7.50', price250: '£11', priceBottle: '£31', notes: 'Delicately refreshing dry white flavours of fresh green apple and citrus are balanced well by aromas of stone fruit.' },
  { name: 'Chenin Blanc, Dudley Stone', region: 'South Africa, Western Cape', price175: '£8.00', price250: '£11.30', priceBottle: '£33', notes: 'Sumptuous aromas of peach and melon. These characteristics are echoed on the palate, where they are perfectly balanced with a zingy lime freshness and crisp, refreshing finish.' },
  { name: 'Picpoul de Pinet Beranger', region: 'France, Languedoc', price175: '£9.50', price250: '£13.30', priceBottle: '£39', notes: 'Burst of aromatic complexity. Notes of citrus fruit combined with white flowers and delicate minerality. Vegan Friendly.' },
  { name: 'Honu Sauvignon Blanc', region: 'New Zealand, Marlborough', price175: '£10.00', price250: '£14.30', priceBottle: '£41', notes: 'Fresh, crisp and zesty with aromas of citrus and passion fruit, combined with intense flavours of lime and gooseberry.' },
  { name: 'Riesling Off Dry Dragstone', region: 'Germany, Rheingau', price175: '-', price250: '-', priceBottle: '£44', notes: 'Beautifully balanced wine, with lovely freshness while not being too dry. It has a wonderful flavour of peaches, cream, clover honey, pineapple, and lime.' },
  { name: 'Gavi Di Gavi, Ascheri', region: 'Italy, Piedmont', price175: '-', price250: '-', priceBottle: '£47', notes: 'Light and fresh with hints of lemon and grapefruit on the palate and a long, mineral finish.' },
  { name: 'Chablis, Domaine de Vauroux', region: 'France, Burgundy', price175: '-', price250: '-', priceBottle: '£54', notes: 'With the freshness of a newly cut apple and a pure, steely minerality, this is a crisp and stylish Chablis, with peach, pear and succulent lemon meringue pie finish.' },
];

const redWinesData = [
  { name: 'Carignan Syrah, Les Vignerons', region: 'France, Languedoc', price175: '£7.25', price250: '£10.50', priceBottle: '£30', notes: 'A smooth, fruit-driven red wine with flavors of blackberry and plum, alongside subtle spice and floral aromas, all with gentle tannins and a smooth finish.' },
  { name: 'Merlot, Brisa', region: 'Chile, Central Valley', price175: '£7.50', price250: '£10.00', priceBottle: '£31', notes: 'Intense fresh aromas of red fruits and plums. Loads of soft red fruit flavours with rounded tannins accompanied by delicious acidity, together achieving a long, delightful finish.' },
  { name: 'Negroamaro Primitivo Igt Salento, Bacca Nera', region: 'Italy, Puglia', price175: '£8.00', price250: '£10.30', priceBottle: '£33', notes: 'A full and complex nose of dark fruits and blackberries. Full bodied and intense, with juicy sweet fruit and a soft finish.' },
  { name: 'Malbec, Septima', region: 'Argentina, Mendoza', price175: '£8.00', price250: '£10.30', priceBottle: '£33', notes: 'Blackberry, plum and cassis aromas. Juicy and bold on the palate; Easy flavours of dark berry fruits with ripe cranberries and herbs on the finish.' },
  { name: 'Cabernet Sauvignon, Tarapaca', region: 'Chile, Maipo Valley', price175: '£9.50', price250: '£13.30', priceBottle: '£39', notes: 'Rich dark fruit flavors, such as blackcurrant, with hints of green pepper, and often a hint of oak.' },
  { name: 'Pinot Noir Marlborough, Waitonga Falls', region: 'New Zealand, Marlborough', price175: '-', price250: '-', priceBottle: '£44', notes: 'Fruit-driven wine with spicy oak characters lingering subtly behind a foreground of red fruit. cherries, plums and chocolate raisins dance on the palate before a light, smooth finish.' },
  { name: 'Rioja Crianza, Ederra', region: 'Spain, Rioja', price175: '-', price250: '-', priceBottle: '£45', notes: 'A classic Rioja with vibrant red fruit flavors, delicate spice notes, and a smooth, velvety texture.' },
  { name: "Blason D'issan Margaux", region: 'France, Bordeaux', price175: '-', price250: '-', priceBottle: '£71', notes: 'Lots of berry, sweet-tobacco, chocolate and spice character. Light coffee, too. Medium to full body with firm, juicy fruit and round tannins.' },
];

const roseWinesData = [
  {
    name: 'Pinot Grigio Rose, Il Caggio',
    region: 'Italy, Veneto',
    grape: 'Pinot Grigio / Abv: 12%',
    feel: 'Dry Rose',
    foodPairing: 'Best with Seafood',
    price175: '£8.00',
    price250: '£12.00',
    priceBottle: '£32',
    notes: 'Dry and fruity. With soft notes of red fruits and floral hints: crisp, subtle and refreshing.'
  },
  {
    name: 'Provence Rose, Saint Louis',
    region: 'France, Coteaux Varois',
    grape: 'Cinsualt / Grenache / Abv: 12.5%',
    feel: 'Dry Rose',
    foodPairing: 'Best with Seafood',
    price175: '£10.00',
    price250: '£14.00',
    priceBottle: '£41',
    notes: 'Dry in style with aromatic rose petals on the nose, this wine follows through with notes of cranberry and strawberry fruits on the palate with a mouth watering finish.'
  },
];

const sparklingWinesData = [
  {
    name: 'Prosecco Via Vai',
    region: 'Grape: Glera/Abv: 11.5%',
    price125: '£10.00',
    priceBottle: '£31',
    notes: 'A lively and refreshing Prosecco with fine bubbles, fresh notes of pear, green apple, and white flowers, leading to a clean and vibrant finish.',
    price250Note: ''
  },
  {
    name: 'Prosecco Rose Via Vai',
    region: 'Grape: Glera & Pinot Noir /Abv: 11%',
    price125: '-',
    priceBottle: '£34',
    notes: 'A beautiful fresh and light sparkling rosé with an intensely red berries character.',
    price250Note: ''
  },
  {
    name: 'Bottega Gold',
    region: 'Region: Veneto, Italy',
    grape: 'Grape: Glera',
    price125: '£11.00',
    priceBottle: '£38',
    notes: 'A fresh and elegant Prosecco with fine bubbles and aromas of golden apple, pear, and acacia flowers, leading to a crisp, clean finish.',
    price250Note: '(250ml)'
  },
  {
    name: 'Chandon Brut',
    region: 'Region: Mendoza, Argentina',
    grape: 'Grape: Chardonnay, Pinot Noir',
    price125: '-',
    priceBottle: '£41',
    notes: 'A refined traditional-method sparkling wine with bright citrus, green apple, and brioche notes, balanced by fine bubbles and a clean elegant finish.',
    price250Note: ''
  },
];

const champagneData = [
  { name: 'Moët & Impérial Brut Champagne (bottle)', price: '£120.00' },
  { name: 'Dom Perignon Vintage Brut Champagne France (bottle)', price: '£355.00' },
  { name: 'Laurent-Perrier Cuvée Rosé Brut NV Champagne (bottle)', price: '£120.00' },
];

const mocktailsData = [
  { name: 'Hibiscus Spritz', description: 'NLL midnight sky, cold brew hibiscus tea, triple sec syrup, soda/lemonade.', price: '£7.90' },
  { name: 'Yuzuphoria', description: 'Yuzu puree, NLL first light, peach syrup.', price: '£7.90' },
];

const cocktailsData = [
  { name: 'Rhubarb Spritz', description: 'Edwards rhubarb gin, prosecco, triple sec, rhubarb syrup.', price: '£13.50' },
  { name: 'Thai Chilli Clementine Margarita', description: 'Mijenta reposado, Clementine juice, sugar, lime, Thai chilli, agave.', price: '£13.50' },
  { name: 'Lychee Daiquiri', description: 'White rum, lime, lychee juice, rose syrup, foaming bitters.', price: '£13.50' },
  { name: 'Pomelo Paloma', description: 'Mijenta Blanco grapefruit, pomelo juice, soda.', price: '£13.50' },
  { name: 'Coconut Espresso Martini', description: 'Vodka, café solo, fresh espresso, coconut cream, sugar', price: '£13.50' },
  { name: 'Naked And Famous', description: 'Illegal Mezcal, Yellow Chartreuse, aperol, lime.', price: '£13.50' },
  { name: 'French 75', description: 'Bombay Sapphire, lemon, sugar, prosecco', price: '£13.50' },
  { name: 'Classic Daiquiri', description: 'Bacardi Carta Blanca, lime, sugar', price: '£13.50' },
  { name: 'Negroni', description: 'Bombay Sapphire, campari, sweet vermouth.', price: '£13.50' },
  { name: 'Velvet Cherry', description: 'Grey Goose, cherry liqueur, lemon, sugar.', price: '£13.50' },
  { name: 'Smokey Bloom', description: 'Illegal Mezcal & Patron Silver, citrus, floral bitters', price: '£13.50' },
  { name: 'Holiday In Paradise', description: 'Bombay Sapphire, St-Germain, pineapple, lime, soda.', price: '£13.50' },
];

const shotsData = [
  { name: 'Jägerbomb', price: '£8.00' },
  { name: 'Baby Guinness', price: '£8.00' },
  { name: 'Blue Kamikaze', price: '£8.00' },
  { name: 'Bubble Gum', price: '£8.00' },
  { name: 'Brain Damage', price: '£8.00' },
];

const beerData = [
  { name: 'Peroni', price: '£6.50' },
  { name: 'Asahi', price: '£6.50' },
  { name: 'Punk IPA', price: '£6.50' },
  { name: 'Corona', price: '£6.50' },
  { name: 'Peroni 0%', price: '£5.00' },
];

const teaData = [
  { name: 'English Breakfast', price: '£3.00' },
  { name: 'Earl Grey', price: '£3.00' },
  { name: 'Camomile', price: '£3.00' },
  { name: 'Green', price: '£3.00' },
  { name: 'Fresh mint tea', price: '£3.00' },
];

const coffeeData = [
  { name: 'Americano black', price: '£5.00' },
  { name: 'Americano white', price: '£5.00' },
  { name: 'Cappuccino', price: '£5.00' },
  { name: 'Latte', price: '£5.00' },
];

const mochaData = [
  { name: 'Single Espresso', price: '£3.50' },
  { name: 'Double Espresso', price: '£5.00' },
];

const softDrinksData = [
  { name: 'Coke', price: '£4.00' },
  { name: 'Diet Coke', price: '£4.00' },
  { name: 'Coke Zero', price: '£4.00' },
  { name: 'Soda', price: '£4.00' },
  { name: 'Lemonade', price: '£4.00' },
  { name: 'Indian Tonic', price: '£4.00' },
  { name: 'Mediterranean Tonic', price: '£4.00' },
  { name: 'Slim Line Tonic', price: '£4.00' },
  { name: 'Ginger Beer', price: '£4.00' },
  { name: 'Ginger Ale', price: '£4.00' },
  { name: 'Red Bull', price: '£5.00' },
];

const juiceData = [
  { name: 'Apple', price: '£4.00' },
  { name: 'Orange', price: '£4.00' },
  { name: 'Pineapple', price: '£4.00' },
  { name: 'Cranberry', price: '£4.00' },
  { name: 'Tomato', price: '£4.00' },
  { name: 'Passion fruit', price: '£4.00' },
];

const waterData = [
  { name: 'Still (750ml)', price: '£6.00' },
  { name: 'Sparkling (750ml)', price: '£6.00' },
  { name: 'Still (330ml)', price: '£4.00' },
  { name: 'Sparkling (330ml)', price: '£4.00' },
];

const rumData = [
  { name: 'Bacardi White', price: '£8.00' },
  { name: 'Bacardi Dark', price: '£8.00' },
  { name: 'Captain Morgan', price: '£8.00' },
  { name: 'Havana 5', price: '£8.00' },
  { name: 'Havana 7', price: '£9.00' },
  { name: 'Kraken', price: '£10.00' },
  { name: 'Sailor Jerry', price: '£8.00' },
];

const ginData = [
  { name: 'Arber Rhubarb', price: '£8.00' },
  { name: 'Bombay Sapphire', price: '£8.00' },
  { name: 'Boe Violet', price: '£8.00' },
  { name: 'Hendricks', price: '£10.00' },
  { name: 'Monkey 47', price: '£12.00' },
  { name: 'Tanqueray 10', price: '£10.00' },
  { name: 'Mermaid Strawberry', price: '£10.00' },
  { name: 'Sipsmith', price: '£8.00' },
];

const cognacData = [
  { name: 'Courvoisier', price: '£11.00' },
  { name: 'Hennessy', price: '£11.00' },
  { name: 'Hennessy XO', price: '£24.00' },
  { name: 'Remy Martin', price: '£11.00' },
];

const whiskyData = [
  { name: 'Chivas Regal', price: '£11.00' },
  { name: 'Jack Daniels', price: '£8.00' },
  { name: "Jameson's", price: '£8.00' },
  { name: 'Johnnie Walker Black Label', price: '£9.00' },
  { name: 'Johnnie Walker Blue Label', price: '£28.00' },
  { name: "Maker's Mark", price: '£11.00' },
  { name: 'Macallan 12', price: '£16.00' },
  { name: 'Woodford Reserve', price: '£11.00' },
  { name: 'Hibiki', price: '£14.00' },
  { name: 'Suntory', price: '£13.00' },
  { name: 'Yamazaki', price: '£17.00' },
];

const tequilaData = [
  { name: 'Patron Silver', price: '£11.00' },
  { name: 'Cazadores Tequila', price: '£8.00' },
  { name: 'Clase Azul Resposado', price: '£28.00' },
  { name: 'Don Julio Anejo', price: '£12.00' },
  { name: 'Don Julio Resposado', price: '£14.00' },
  { name: 'Rooster', price: '£7.00' },
];

const vodkaData = [
  { name: 'Stolichnaya', price: '£8.00' },
  { name: 'Belvedere', price: '£11.00' },
  { name: 'Chase', price: '£8.00' },
  { name: 'Ciroc Citron', price: '£11.00' },
  { name: 'Ciroc Pineapple', price: '£11.00' },
  { name: 'Ciroc Raspberry', price: '£11.00' },
  { name: 'Crystal Head', price: '£11.00' },
  { name: 'Grey Goose', price: '£11.00' },
  { name: 'Zubrowka', price: '£8.00' },
];

const aperitifData = [
  { name: 'Campari', price: '£7.00' },
  { name: 'Italicus', price: '£7.00' },
  { name: 'Lillet Blanc', price: '£7.00' },
  { name: 'Martini Extra Dry', price: '£7.00' },
  { name: 'Martini Rosso', price: '£7.00' },
];

const liqueursData = [
  { name: 'Amaretto', price: '£8.00' },
  { name: 'Aperol', price: '£8.00' },
  { name: "Bailey's", price: '£8.00' },
  { name: 'Chartreuse', price: '£8.00' },
  { name: 'Cointreau', price: '£8.00' },
  { name: 'Frangelico', price: '£8.00' },
  { name: 'Jägermeister', price: '£8.00' },
  { name: 'Kahlua', price: '£8.00' },
  { name: 'Limoncello', price: '£8.00' },
  { name: 'Malibu', price: '£8.00' },
  { name: 'Midori', price: '£8.00' },
  { name: 'Passoa', price: '£8.00' },
  { name: 'Pisco', price: '£8.00' },
  { name: 'Pimms', price: '£8.00' },
  { name: 'Tequila Rose', price: '£8.00' },
  { name: 'Tequila coffee Cazcabel', price: '£8.00' },
];

const SpecialMenu = () => {
  const [mainTab, setMainTab] = useState('christmas'); // 'christmas', 'food', 'desserts', or 'drinks'
  const [foodSubTab, setFoodSubTab] = useState('starters'); // for food subtabs
  const [drinksSubTab, setDrinksSubTab] = useState('white-wines'); // for drinks subtabs

  // Render a simple menu item
  const renderMenuItem = (item, index) => (
    <div key={index} style={{ margin: '1rem 0', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 3 }}>
          <p className="p__cormorant" style={{ color: '#DCCA87', fontSize: '22px', fontWeight: '600' }}>
            {item.name}
            {item.isVegetarian && <span style={{ color: 'var(--color-grey)', fontSize: '14px', marginLeft: '8px' }}>(V)</span>}
          </p>
          {item.description && (
            <p className="p__opensans" style={{ color: 'var(--color-grey)', fontSize: '14px', marginTop: '0.5rem' }}>
              {item.description}
            </p>
          )}
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <p className="p__cormorant" style={{ color: 'var(--color-white)', fontSize: '22px' }}>{item.price}</p>
        </div>
      </div>
    </div>
  );

  // Render food menu section
  const renderFoodSection = (title, items, sectionDescription) => (
    <div style={{ marginTop: '3rem', width: '100%' }}>
      <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: sectionDescription ? '0.5rem' : '2rem' }}>{title}</p>
      {sectionDescription && (
        <p className="p__opensans" style={{ color: 'var(--color-grey)', fontSize: '14px', textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic' }}>
          ({sectionDescription})
        </p>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 60px', width: '100%' }}>
        {items.map((item, index) => (
          <div key={index}>
            {renderMenuItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );

  // Render Christmas festive menu with balanced alignment & mobile optimization
  const renderChristmasMenu = () => (
    <div className="christmas-menu-container">
      {/* Christmas Header */}
      <div className="christmas-menu-header">
        <p className="app__specialMenu-menu_heading">CHRISTMAS MENU</p>
        <div className="christmas-menu-price-wrapper">
          <div className="christmas-menu-price-badge">
            <span className="christmas-menu-price-amount">£49.99</span>
            <span className="christmas-menu-price-label">PER PERSON</span>
          </div>
        </div>
        <p className="christmas-menu-tagline">
          (A Festive Celebration of Pan-Asian Flavours — Includes Four Courses &amp; A Welcome Drink)
        </p>
        <div className="christmas-menu-divider" />
      </div>

      {/* A Festive Welcome Drink */}
      <div className="christmas-section">
        <div className="christmas-section-header">
          <p className="christmas-section-title">A Festive Welcome Drink</p>
          <p className="christmas-section-desc">(Enjoy your choice of one drink)</p>
        </div>
        <div className="christmas-grid-2col">
          {christmasMenuData.welcomeDrink.map((drink, index) => (
            <div key={index} className="christmas-drink-card">
              <p className="christmas-item-name">{drink.name}</p>
              {drink.description && <p className="christmas-item-desc">{drink.description}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Course One — To Begin */}
      <div className="christmas-section">
        <div className="christmas-section-header">
          <p className="christmas-section-title">Course One — To Begin</p>
        </div>
        <div className="christmas-grid-1col">
          {christmasMenuData.courseOne.map((item, index) => (
            <div key={index} className="christmas-item-card">
              <p className="christmas-item-name">{item.name}</p>
              <p className="christmas-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Two — Starter */}
      <div className="christmas-section">
        <div className="christmas-section-header">
          <p className="christmas-section-title">Course Two — Starter</p>
          <p className="christmas-section-desc">(Choose one)</p>
        </div>
        <div className="christmas-grid-3col">
          {christmasMenuData.courseTwo.starters.map((item, index) => (
            <div key={index} className="christmas-item-card">
              <p className="christmas-item-name">
                {item.name}
                {item.isVegetarian && <span className="christmas-item-veg">{item.vegLabel || '(V)'}</span>}
              </p>
              <p className="christmas-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
        {/* Sushi Selection Highlight Box */}
        <div className="christmas-sushi-box">
          <span className="christmas-sushi-badge">
            {christmasMenuData.courseTwo.sushiSelection.tag}
          </span>
          <div className="christmas-item-card">
            <p className="christmas-item-name">
              {christmasMenuData.courseTwo.sushiSelection.name}
            </p>
            <p className="christmas-item-desc">
              {christmasMenuData.courseTwo.sushiSelection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Course Three — Main Course */}
      <div className="christmas-section">
        <div className="christmas-section-header">
          <p className="christmas-section-title">Course Three — Main Course</p>
          <p className="christmas-section-desc">(Choose one)</p>
        </div>
        <div className="christmas-grid-2col">
          {christmasMenuData.courseThree.map((item, index) => (
            <div key={index} className="christmas-item-card">
              <p className="christmas-item-name">
                {item.name}
                {item.isVegetarian && <span className="christmas-item-veg">{item.vegLabel || '(V)'}</span>}
              </p>
              <p className="christmas-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Four — Dessert */}
      <div className="christmas-section">
        <div className="christmas-section-header">
          <p className="christmas-section-title">Course Four — Dessert</p>
          <p className="christmas-section-desc">(Choose one)</p>
        </div>
        <div className="christmas-grid-1col">
          {christmasMenuData.courseFour.map((item, index) => (
            <div key={index} className="christmas-item-card">
              <p className="christmas-item-name">{item.name}</p>
              <p className="christmas-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Quote */}
      <div className="christmas-menu-footer">
        <p className="christmas-menu-footer-badge">INCLUDING FOUR COURSES AND A WELCOME DRINK.</p>
        <p className="christmas-menu-footer-quote">&ldquo;Celebrate the season with great food &amp; company&rdquo;</p>
      </div>
    </div>
  );

  // Render wine table
  const renderWineTable = (wines, sizes) => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '1rem', marginTop: '1rem' }}>
        <div style={{ flex: 3 }}></div>
        {sizes.map((size, index) => (
          <div key={index} style={{ flex: 1, textAlign: 'center' }}>
            <p className="p__cormorant" style={{ color: 'var(--color-white)', fontSize: '14px' }}>{size}</p>
          </div>
        ))}
      </div>
      {wines.map((wine, index) => (
        <div key={index} style={{ margin: '1rem 0', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 3 }}>
              <p className="p__cormorant" style={{ color: '#DCCA87', fontSize: '24px', fontWeight: '600' }}>{wine.name}</p>
              <p className="p__opensans" style={{ color: 'var(--color-grey)', fontSize: '14px', marginTop: '0.2rem' }}>{wine.region}</p>
              {wine.grape && <p className="p__opensans" style={{ color: 'var(--color-grey)', fontSize: '13px', marginTop: '0.2rem' }}>{wine.grape}</p>}
            </div>
            {sizes.includes('175ml') && (
              <div style={{ flex: 1, textAlign: 'center' }}>
                <p className="p__cormorant" style={{ color: 'var(--color-white)' }}>{wine.price175}</p>
              </div>
            )}
            {sizes.includes('250ml') && (
              <div style={{ flex: 1, textAlign: 'center' }}>
                <p className="p__cormorant" style={{ color: 'var(--color-white)' }}>{wine.price250}</p>
              </div>
            )}
            {sizes.includes('125ml') && (
              <div style={{ flex: 1, textAlign: 'center' }}>
                <p className="p__cormorant" style={{ color: 'var(--color-white)' }}>{wine.price125}</p>
                {wine.price250Note && (
                  <p className="p__opensans" style={{ color: 'var(--color-grey)', fontSize: '11px' }}>{wine.price250Note}</p>
                )}
              </div>
            )}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <p className="p__cormorant" style={{ color: 'var(--color-white)' }}>{wine.priceBottle}</p>
            </div>
          </div>
          <p className="p__opensans" style={{ color: 'var(--color-grey)', fontSize: '13px', marginTop: '0.5rem', fontStyle: 'italic' }}>
            Notes: {wine.notes}
          </p>
        </div>
      ))}
    </>
  );

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      {/* Main Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={() => setMainTab('food')}
          style={{
            padding: '0.8rem 1.6rem',
            background: mainTab === 'food' ? '#DCCA87' : 'transparent',
            color: mainTab === 'food' ? '#3b0911' : '#DCCA87',
            border: '2px solid #DCCA87',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
        >
          FOOD MENU
        </button>
        <button
          onClick={() => setMainTab('christmas')}
          style={{
            padding: '0.8rem 1.6rem',
            background: mainTab === 'christmas' ? '#DCCA87' : 'transparent',
            color: mainTab === 'christmas' ? '#3b0911' : '#DCCA87',
            border: '2px solid #DCCA87',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
        >
          CHRISTMAS MENU
        </button>
        <button
          onClick={() => setMainTab('desserts')}
          style={{
            padding: '0.8rem 1.6rem',
            background: mainTab === 'desserts' ? '#DCCA87' : 'transparent',
            color: mainTab === 'desserts' ? '#3b0911' : '#DCCA87',
            border: '2px solid #DCCA87',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
        >
          DESSERTS
        </button>
        <button
          onClick={() => setMainTab('drinks')}
          style={{
            padding: '0.8rem 1.6rem',
            background: mainTab === 'drinks' ? '#DCCA87' : 'transparent',
            color: mainTab === 'drinks' ? '#3b0911' : '#DCCA87',
            border: '2px solid #DCCA87',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
        >
          DRINKS
        </button>
      </div>

      {/* Christmas Menu Content */}
      {mainTab === 'christmas' && renderChristmasMenu()}

      {/* Food Menu Content */}
      {mainTab === 'food' && (
        <div style={{ width: '100%' }}>
          {/* Food Sub-tabs */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '3rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            flexWrap: 'nowrap',
            paddingBottom: '1rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollbarColor: '#DCCA87 transparent'
          }}>
            {[
              { key: 'starters', label: 'Starters' },
              { key: 'christmas', label: 'Christmas Menu' },
              { key: 'specials', label: 'Specials' },
              { key: 'bao-buns', label: 'Bao Buns' },
              { key: 'fried-rice', label: 'Fried Rice' },
              { key: 'signature-mains', label: 'Signature Mains' },
              { key: 'gunkan', label: 'Gunkan' },
              { key: 'sashimi', label: 'Sashimi' },
              { key: 'tataki', label: 'Tataki' },
              { key: 'temaki', label: 'Temaki' },
              { key: 'hosomaki', label: 'Hosomaki' },
              { key: 'special-rolls', label: 'Special Rolls' },
              { key: 'super-crunchy-rolls', label: 'Super Crunchy Rolls' },
              { key: 'teriyaki', label: 'Teriyaki' },
              { key: 'noodles', label: 'Noodles' },
              { key: 'ceviche', label: 'Ceviche' },
              { key: 'poke-bowl', label: 'Poke Bowl' },
              { key: 'curry', label: 'Katsu Curry' },
              { key: 'sushi-platters', label: 'Sushi Platters' },
              { key: 'sides', label: 'Sides' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFoodSubTab(tab.key)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: foodSubTab === tab.key ? '#DCCA87' : 'transparent',
                  color: foodSubTab === tab.key ? '#3b0911' : '#DCCA87',
                  border: '1px solid #DCCA87',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Food Content */}
          {foodSubTab === 'starters' && renderFoodSection('STARTERS (SMALLS)', foodMenuData.starters)}
          {foodSubTab === 'christmas' && renderChristmasMenu()}
          {foodSubTab === 'specials' && renderFoodSection('SPECIALS', foodMenuData.specials)}
          {foodSubTab === 'bao-buns' && renderFoodSection('BAO BUNS', foodMenuData.baoBuns, 'Japanese steamed buns filled with house pickles, Asian slaw')}
          {foodSubTab === 'fried-rice' && renderFoodSection('FRIED RICE', foodMenuData.friedRice)}
          {foodSubTab === 'signature-mains' && renderFoodSection('SIGNATURE MAINS', foodMenuData.signatureMains)}
          {foodSubTab === 'gunkan' && renderFoodSection('GUNKAN (2 pcs)', foodMenuData.gunkan, 'Ship-like sushi rice in the shape of an oval')}
          {foodSubTab === 'sashimi' && renderFoodSection('SASHIMI (5 pcs)', foodMenuData.sashimi, 'Japanese delicacy consisting of fresh raw fish sliced into thin pieces')}
          {foodSubTab === 'tataki' && renderFoodSection('TATAKI (6 pcs)', foodMenuData.tataki, 'Seared marinated fish or beef served with aburi-style sauce & chive')}
          {foodSubTab === 'temaki' && renderFoodSection('TEMAKI (Hand Rolls)', foodMenuData.temaki, 'Cone-like nori wraps stuffed with rice, fish, meat, seafood, etc.')}
          {foodSubTab === 'hosomaki' && renderFoodSection('HOSOMAKI (8 pcs)', foodMenuData.hosomaki)}
          {foodSubTab === 'special-rolls' && renderFoodSection('SPECIAL ROLLS (8 pcs)', foodMenuData.specialRolls, 'Special in-out rolls where the rice is on the outside and nori is on the inside')}
          {foodSubTab === 'super-crunchy-rolls' && renderFoodSection('SUPER CRUNCHY ROLLS (10 pcs)', foodMenuData.superCrunchyRolls, 'Tempura-styled deep-fried futomaki rolls')}
          {foodSubTab === 'teriyaki' && renderFoodSection('TERIYAKI', foodMenuData.teriyaki, 'All teriyaki dishes include teriyaki sauce, Japanese rice, pink pickled ginger, and Asian salad')}
          {foodSubTab === 'noodles' && renderFoodSection('JAPANESE STIR FRY NOODLES', foodMenuData.noodles, 'All stir-fried noodles include Japanese noodles, mixed peppers, red onion, carrot, cabbage, pickled red ginger, yakisoba sauce, crispy shallots, and aonori flakes')}
          {foodSubTab === 'ceviche' && renderFoodSection('CEVICHE', foodMenuData.ceviche, 'All ceviches include pickled onion, shredded orange, pickled jalapeño, micro herbs, cracked black pepper, and citrus vinaigrette dressing')}
          {foodSubTab === 'poke-bowl' && renderFoodSection('POKE BOWL', foodMenuData.pokeBowl, 'All poke bowls include avocado, cucumber, mango Japanese salad, pickled onion, edamame beans, wafu dressing, and roasted sesame seeds')}
          {foodSubTab === 'curry' && renderFoodSection('JAPANESE KATSU CURRY', foodMenuData.curry, 'All Japanese curries include rich java curry sauce, Japanese rice, and Asian salad')}
          {foodSubTab === 'sushi-platters' && renderFoodSection('SHARING SUSHI PLATTERS', foodMenuData.sushiPlatters)}
          {foodSubTab === 'sides' && renderFoodSection('SIDES', foodMenuData.sides)}
        </div>
      )}

      {/* Desserts Content */}
      {mainTab === 'desserts' && (
        <div style={{ width: '100%' }}>
          {renderFoodSection('DESSERTS', foodMenuData.desserts)}
        </div>
      )}

      {/* Drinks Menu Content */}
      {mainTab === 'drinks' && (
        <div style={{ width: '100%' }}>
          {/* Drinks Sub-tabs */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '3rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            flexWrap: 'nowrap',
            paddingBottom: '1rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollbarColor: '#DCCA87 transparent'
          }}>
            {[
              { key: 'white-wines', label: 'White Wines' },
              { key: 'red-wines', label: 'Red Wines' },
              { key: 'rose-wines', label: 'Rosé Wines' },
              { key: 'sparkling', label: 'Sparkling' },
              { key: 'champagne', label: 'Champagne' },
              { key: 'cocktails', label: 'Cocktails' },
              { key: 'mocktails', label: 'Mocktails' },
              { key: 'spirits', label: 'Spirits' },
              { key: 'beer', label: 'Beer' },
              { key: 'soft-drinks', label: 'Soft Drinks' },
              { key: 'hot-drinks', label: 'Hot Drinks' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setDrinksSubTab(tab.key)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: drinksSubTab === tab.key ? '#DCCA87' : 'transparent',
                  color: drinksSubTab === tab.key ? '#3b0911' : '#DCCA87',
                  border: '1px solid #DCCA87',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Drinks Content */}
          {drinksSubTab === 'white-wines' && (
            <div>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>White Wines</p>
              {renderWineTable(whiteWinesData, ['175ml', '250ml', 'Bottle'])}
            </div>
          )}

          {drinksSubTab === 'red-wines' && (
            <div>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Red Wines</p>
              {renderWineTable(redWinesData, ['175ml', '250ml', 'Bottle'])}
            </div>
          )}

          {drinksSubTab === 'rose-wines' && (
            <div>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Rosé Wines</p>
              {renderWineTable(roseWinesData, ['175ml', '250ml', 'Bottle'])}
            </div>
          )}

          {drinksSubTab === 'sparkling' && (
            <div>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Sparkling Wines</p>
              {renderWineTable(sparklingWinesData, ['125ml', 'Bottle'])}
            </div>
          )}

          {drinksSubTab === 'champagne' && (
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Champagne</p>
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {champagneData.map((item, index) => renderMenuItem(item, index))}
              </div>
            </div>
          )}

          {drinksSubTab === 'cocktails' && (
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Cocktails</p>
              <div style={{ columnCount: 2, columnGap: '60px', width: '100%' }}>
                {cocktailsData.map((item, index) => (
                  <div key={index} style={{ breakInside: 'avoid' }}>
                    {renderMenuItem(item, index)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {drinksSubTab === 'mocktails' && (
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Mocktails</p>
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {mocktailsData.map((item, index) => renderMenuItem(item, index))}
              </div>
            </div>
          )}

          {drinksSubTab === 'spirits' && (
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <div style={{ columnCount: 2, columnGap: '60px', width: '100%' }}>
                {/* Rum */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Rum</p>
                  {rumData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Gin */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Gin</p>
                  {ginData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Vodka */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Vodka</p>
                  {vodkaData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Tequila */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tequila</p>
                  {tequilaData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Whisky */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Whisky / Whiskey</p>
                  {whiskyData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Cognac */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Cognac</p>
                  {cognacData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Aperitifs */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Aperitifs</p>
                  {aperitifData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Liqueurs */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Liqueurs</p>
                  {liqueursData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Shots */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Shots</p>
                  {shotsData.map((item, index) => renderMenuItem(item, index))}
                </div>
              </div>
            </div>
          )}

          {drinksSubTab === 'beer' && (
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Beer</p>
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {beerData.map((item, index) => renderMenuItem(item, index))}
              </div>
            </div>
          )}

          {drinksSubTab === 'soft-drinks' && (
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <div style={{ columnCount: 2, columnGap: '60px', width: '100%' }}>
                {/* Soft Drinks */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Soft Drinks</p>
                  {softDrinksData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Juice */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Juice</p>
                  {juiceData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Water */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Water</p>
                  {waterData.map((item, index) => renderMenuItem(item, index))}
                </div>
              </div>
            </div>
          )}

          {drinksSubTab === 'hot-drinks' && (
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <div style={{ columnCount: 2, columnGap: '60px', width: '100%' }}>
                {/* Coffee */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Coffee</p>
                  {coffeeData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Mocha */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Mocha</p>
                  {mochaData.map((item, index) => renderMenuItem(item, index))}
                </div>

                {/* Tea */}
                <div style={{ breakInside: 'avoid', marginBottom: '3rem' }}>
                  <p className="app__specialMenu-menu_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tea</p>
                  {teaData.map((item, index) => renderMenuItem(item, index))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div> */}
    </div>
  );
};

export default SpecialMenu;
