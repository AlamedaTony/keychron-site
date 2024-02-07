require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: '60% Layout', sortOrder: 10},
    {name: '65% Layout', sortOrder: 20},
    {name: '70% Layout', sortOrder: 30},
    {name: '75% Layout', sortOrder: 40},
    {name: '80% Layout', sortOrder: 50},
    {name: '96% Layout', sortOrder: 60},
    {name: '100% Layout', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Keychron Q4 QMK', category: categories[0], price: 129.00},
    {name: 'Keychron K12', category: categories[0], price: 55.30},
    {name: 'Keychron V4 QMK', category: categories[0], price: 49.00},
    {name: 'Keychron K12 Pro QMK/VIA', category: categories[0], price: 89.00},
    {name: 'Keychron K7 Pro QMK/VIA', category: categories[1], price: 94.00},
    {name: 'Keychron Q2 QMK', category: categories[1], price: 149.00},
    {name: 'Keychron Q2 Pro QMK/VIA', category: categories[1], price: 179.00},
    {name: 'Keychron Q65 QMK', category: categories[1], price: 159.20},
    {name: 'Keychron Q8 Pro(Alice Layout) QMK/VIA', category: categories[1], price: 190.00},
    {name: 'Keychron V7 QMK', category: categories[2], price: 54.00},
    {name: 'Keychron K14', category: categories[2], price: 69.00},
    {name: 'Keychron K14 Pro QMK/VIA', category: categories[2], price: 89.00},
    {name: 'Keychron Q7 QMK', category: categories[2], price: 139.00},
    {name: 'Keychron Q1 QMK', category: categories[3], price: 149.00},
    {name: 'Keychron K2', category: categories[3], price: 79.00},
    {name: 'Keychron Q1 Pro QMK/VIA', category: categories[3], price: 179.00},
    {name: 'Keychron Q1 QMK', category: categories[3], price: 140.00},
    {name: 'Keychron S1 QMK', category: categories[3], price: 109.00},
    {name: 'Keychron V1 Max QMK/VIA', category: categories[3], price: 74.00},
    {name: 'Keychron Q5 Pro QMK/VIA', category: categories[3], price: 190.00},
    {name: 'Keychron Q3 Pro QMK/VIA', category: categories[4], price: 194.00},
    {name: 'Keychron K8', category: categories[4], price: 62.30},
    {name: 'Keychron K1 Pro QMK/VIA', category: categories[4], price: 84.00},
    {name: 'Keychron Q3 QMK', category: categories[4], price: 154.00},
    {name: 'Keychron K13 Pro QMK/VIA', category: categories[4], price: 94.00},
    {name: 'Keychron K8 Pro QMK/VIA', category: categories[4], price: 62.30},
    {name: 'Keychron K4 Pro QMK/VIA', category: categories[5], price: 89.00},
    {name: 'Keychron Q5 QMK', category: categories[5], price: 165.00},
    {name: 'Keychron Q14 Pro(Alice Layout) QMk/VIA', category: categories[5], price: 200.00},
    {name: 'Keychron V5 QMK', category: categories[5], price: 84.00},
    {name: 'Keychron Q3 Pro QMK/VIA', category: categories[5], price: 194.00},
    {name: 'Keychron Q5 Pro QMK/VIA', category: categories[5], price: 190.00},
    {name: 'Keychron K5 Pro QMK/VIA', category: categories[6], price: 99.00},
    {name: 'Keychron Q6 Pro QMK/VIA', category: categories[6], price: 190.00},
    {name: 'Keychron K10', category: categories[6], price: 84.00},
    {name: 'Keychron Q6 QMK', category: categories[6], price: 59.00},
    {name: 'Keychron V6 QMK', category: categories[6], price: 84.00},
    {name: 'Keychron C2 Pro QMK/VIA', category: categories[6], price: 59.00},
  ]);

  console.log(items)

  process.exit();

})();