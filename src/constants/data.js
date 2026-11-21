import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Gourmet Cuisine',
    subtitle: 'Our chefs deliver an exquisite blend of flavors, offering a memorable dining experience with every dish.',
  },
  {
    imgUrl: images.award01,
    title: 'Inviting Atmosphere',
    subtitle: 'Relax in our modern, stylish setting that creates the perfect ambiance for any occasion.',
  },
  {
    imgUrl: images.award05,
    title: 'Innovative Cocktails',
    subtitle: 'Sip on signature cocktails, crafted with creativity and passion by our expert mixologists.',
  },
  {
    imgUrl: images.award03,
    title: 'Event & Private Dining',
    subtitle: 'Host your next celebration or intimate gathering with us – we cater to all your event needs, big or small.',
  },
];

const data = { wines, cocktails, awards };
export default data;
