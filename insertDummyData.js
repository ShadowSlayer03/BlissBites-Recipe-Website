const { MongoClient } = require('mongodb');
const data = [{
    "name": "Southern Fried Chicken",
    "description": "Classic Southern fried chicken with a crispy and flavorful coating.",
    "email": "southernfriedchef@example.com",
    "ingredients": [
      "Chicken pieces (drumsticks, thighs, etc.)",
      "Buttermilk",
      "All-purpose flour",
      "Cornmeal",
      "Paprika",
      "Garlic powder",
      "Onion powder",
      "Salt and pepper",
      "Cayenne pepper (optional for spice)",
      "Vegetable oil for frying"
    ],
    "category": "Southern",
    "image": "southern-fried-chicken.jpg",
    "instruction": "To prepare Southern Fried Chicken, marinate chicken pieces in buttermilk. In a separate bowl, mix all-purpose flour, cornmeal, paprika, garlic powder, onion powder, salt, and cayenne pepper. Dredge the marinated chicken in the flour mixture and deep-fry until golden and crispy. Drain on paper towels. Serve the Southern Fried Chicken hot, accompanied by your favorite sides, such as mashed potatoes and coleslaw."
  },
  {
    "name": "Ratatouille",
    "description": "A classic French vegetable stew bursting with flavors.",
    "email": "frenchchef@example.com",
    "ingredients": [
      "1 eggplant, sliced",
      "2 zucchinis, sliced",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "Tomato sauce",
      "Fresh thyme and rosemary"
    ],
    "category": "French",
    "image": "ratatouille.jpg",
    "instruction": "For Ratatouille, layer sliced eggplant, zucchini, red and yellow bell peppers, and tomatoes in a baking dish. Sauté onions and garlic until softened and spread over the layered vegetables. Drizzle with tomato sauce and olive oil. Season with fresh thyme and rosemary. Bake until the vegetables are tender. Serve this classic French vegetable stew as a side or a main dish."
  },
  {
    "name": "Sushi Rolls",
    "description": "Delicious Japanese sushi rolls with a variety of fillings.",
    "email": "sushichef@example.com",
    "ingredients": [
      "Nori seaweed sheets",
      "Sushi rice",
      "Fresh fish (salmon, tuna, etc.)",
      "Avocado slices",
      "Cucumber strips",
      "Soy sauce for dipping",
      "Pickled ginger and wasabi"
    ],
    "category": "Japanese",
    "image": "sushi-rolls.jpg",
    "instruction": "To make Sushi Rolls, start by preparing sushi rice and cutting nori seaweed sheets in half. Lay a bamboo sushi mat on a flat surface. Place a half-sheet of nori on the mat, spread a thin layer of sushi rice, and add a variety of fillings such as fresh fish, avocado, and cucumber. Roll the sushi using the mat and a bit of water to seal the edge. Slice into bite-sized pieces and serve with soy sauce, pickled ginger, and wasabi."
  },
  {
    "name": "Chicken Tikka Masala",
    "description": "A popular Indian dish featuring marinated and grilled chicken in a creamy tomato sauce.",
    "email": "indianchef@example.com",
    "ingredients": [
      "1 lb boneless chicken, cubed",
      "1 cup yogurt",
      "2 tablespoons garam masala",
      "1 teaspoon turmeric",
      "1 cup tomato puree",
      "1 cup heavy cream",
      "Fresh cilantro for garnish"
    ],
    "category": "Indian",
    "image": "chicken-tikka-masala.jpg",
    "instruction": "For Chicken Tikka Masala, marinate chicken cubes in a mixture of yogurt, garam masala, turmeric, and ginger-garlic paste. Grill or bake the marinated chicken until fully cooked. In a separate pan, prepare a sauce with tomato puree and heavy cream, adding garam masala and fresh cilantro. Add the grilled chicken to the sauce and simmer until the flavors meld. Serve the Chicken Tikka Masala over rice."
  },
  {
    "name": "Spaghetti Bolognese",
    "description": "Classic Italian pasta dish with rich and hearty meat sauce.",
    "email": "italianchef@example.com",
    "ingredients": [
      "1 lb ground beef",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 can crushed tomatoes",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste",
      "1 lb spaghetti"
    ],
    "category": "Italian",
    "image": "spaghetti-bolognese.jpg",
    "instruction": "To make Spaghetti Bolognese, begin by sautéing ground beef with diced onions and minced garlic until browned. Add crushed tomatoes, dried oregano, salt, and pepper. Simmer until the sauce thickens. Meanwhile, cook spaghetti according to package instructions. Serve the Bolognese sauce over the cooked spaghetti, garnish with fresh parsley, and sprinkle with grated Parmesan cheese."
  },
  {
    "name": "Thai-Inspired Vegetable Broth",
    "description": "A flavorful Thai-inspired vegetable broth, perfect as a base for various Thai dishes.",
    "email": "thaichef@example.com",
    "ingredients": [
      "Vegetable broth",
      "Galangal",
      "Lemongrass stalks",
      "Kaffir lime leaves",
      "Thai bird chilies",
      "Garlic cloves",
      "Cilantro roots",
      "Soy sauce",
      "Salt and sugar to taste"
    ],
    "category": "Thai",
    "image": "thai-inspired-vegetable-broth.jpg",
    "instruction": "For Thai-Inspired Vegetable Broth, start by simmering vegetable broth with galangal, lemongrass, kaffir lime leaves, Thai bird chilies, garlic, cilantro roots, soy sauce, salt, and sugar. Strain the broth to remove solids. Reheat before serving and garnish with fresh cilantro. This aromatic and flavorful broth is perfect as a base for various Thai-inspired dishes."
  },
  {
    "name": "Thai Red Chicken Soup",
    "description": "A hearty Thai red chicken soup with a blend of aromatic herbs and spices.",
    "email": "thaichef@example.com",
    "ingredients": [
      "Chicken thighs",
      "Red curry paste",
      "Coconut milk",
      "Fish sauce",
      "Kaffir lime leaves",
      "Bamboo shoots",
      "Thai basil leaves",
      "Red bell pepper",
      "Rice noodles"
    ],
    "category": "Thai",
    "image": "thai-red-chicken-soup.jpg",
    "instruction": "To prepare Thai Red Chicken Soup, start by making the red curry base. In a pot, sauté red curry paste in a bit of oil until fragrant. Add boneless chicken thighs and cook until they are no longer pink. Pour in coconut milk, fish sauce, and chicken broth to create a rich and flavorful broth. Add bamboo shoots, Thai basil leaves, kaffir lime leaves, and red bell pepper. Simmer until the vegetables are tender and the flavors meld together. Adjust the seasoning with more fish sauce or lime juice if needed. Garnish with cilantro before serving. This Thai Red Chicken Soup is a comforting and spicy delight, perfect for warming up on cooler days. Serve over rice or noodles for a complete meal."
  },
  {
    "name": "Thai-Style Mussels",
    "description": "Delicious Thai-style mussels cooked in a flavorful broth.",
    "email": "thaichef@example.com",
    "ingredients": [
      "Fresh mussels",
      "Coconut milk",
      "Red curry paste",
      "Lemongrass",
      "Ginger",
      "Garlic",
      "Fish sauce",
      "Thai basil leaves",
      "Cilantro",
      "Lime wedges"
    ],
    "category": "Thai",
    "image": "thai-style-mussels.jpg",
    "instruction": "To prepare Thai-Style Mussels, start by cleaning and debearding fresh mussels. In a large pot, heat coconut milk and red curry paste until well combined. Add lemongrass, ginger, garlic, and lime leaves for aromatic flavor. Stir in fresh mussels and cover the pot, allowing the mussels to steam until they open. Discard any unopened mussels. Finish the dish by adding Thai basil leaves, cilantro, and a squeeze of lime juice. Adjust the seasoning with fish sauce. Serve the Thai-Style Mussels hot, accompanied by crusty bread or over rice, allowing the delicious broth to be enjoyed. This flavorful and fragrant dish captures the essence of Thai cuisine."
  },
  {
    "name": "Thai Green Curry",
    "description": "Classic Thai green curry with a perfect balance of flavors and heat.",
    "email": "thaichef@example.com",
    "ingredients": [
      "Chicken or tofu",
      "Green curry paste",
      "Coconut milk",
      "Thai eggplant",
      "Bamboo shoots",
      "Kaffir lime leaves",
      "Thai basil leaves",
      "Fish sauce",
      "Sugar",
      "Rice for serving"
    ],
    "category": "Thai",
    "image": "thai-green-curry.jpg",
    "instruction": "To make Thai Green Curry, start by preparing the green curry paste or use a store-bought one. In a pan, heat a bit of oil and sauté the green curry paste until fragrant. Add chicken or tofu and cook until browned. Pour in coconut milk and bring the mixture to a simmer. Add Thai eggplant, bamboo shoots, kaffir lime leaves, and Thai basil leaves. Season with fish sauce and sugar to balance the flavors. Allow the curry to simmer until the vegetables are tender and the flavors are well infused. Serve the Thai Green Curry over rice or noodles for a comforting and aromatic Thai dish. Adjust the spiciness according to your preference and garnish with additional Thai basil leaves."
  },
  {
    "name": "Thai Chinese-Inspired Pinch Salad",
    "description": "A refreshing Thai Chinese-inspired pinch salad with a zesty dressing.",
    "email": "thaichef@example.com",
    "ingredients": [
      "Napa cabbage leaves",
      "Carrots, julienned",
      "Bell peppers, thinly sliced",
      "Cucumbers, diced",
      "Bean sprouts",
      "Peanuts, crushed",
      "Fresh cilantro",
      "Soy sauce",
      "Sesame oil",
      "Rice vinegar"
    ],
    "category": "Thai",
    "image": "thai-chinese-inspired-pinch-salad.jpg",
    "instruction": "Begin by assembling the ingredients for the Thai Chinese-Inspired Pinch Salad. Julienne Napa cabbage, slice carrots and bell peppers thinly, and dice cucumbers. In a bowl, combine the prepared vegetables along with bean sprouts and crushed peanuts. For the dressing, whisk together soy sauce, sesame oil, and rice vinegar. Toss the vegetables with the dressing until well coated. To serve, take individual Napa cabbage leaves, fill them with the dressed vegetable mixture, and pinch them closed. Garnish with fresh cilantro. This vibrant and zesty Thai Chinese-Inspired Pinch Salad is a delightful combination of textures and flavors. Serve as a refreshing appetizer or a light side dish."
  },
  {
    "name": "Chicken Biryani",
    "description": "A flavorful and aromatic rice dish with chicken, spices, and herbs.",
    "email": "biryani_chef@example.com",
    "ingredients": [
      "Basmati rice",
      "Chicken pieces",
      "Onions",
      "Tomatoes",
      "Yogurt",
      "Ginger-garlic paste",
      "Biryani masala",
      "Saffron strands",
      "Mint leaves",
      "Cilantro",
      "Ghee",
      "Cashews",
      "Raisins",
      "Spices"
    ],
    "category": "Indian",
    "image": "chicken-biryani.jpg",
    "instruction": "Begin by marinating chicken pieces in a mixture of yogurt, ginger-garlic paste, and biryani masala. Parboil Basmati rice and layer it with the marinated chicken in a heavy-bottomed pot. Garnish with saffron strands, mint leaves, cilantro, and fried onions. Seal the pot and cook on low heat until the rice is fully cooked. Serve this aromatic Chicken Biryani with raita."
  },
  {
    "name": "Palak Paneer",
    "description": "A creamy spinach curry with paneer (Indian cottage cheese) and aromatic spices.",
    "email": "palakpaneer_chef@example.com",
    "ingredients": [
      "Spinach",
      "Paneer",
      "Onions",
      "Tomatoes",
      "Ginger",
      "Garlic",
      "Green chilies",
      "Garam masala",
      "Cream",
      "Butter",
      "Spices"
    ],
    "category": "Indian",
    "image": "palak-paneer.jpg",
    "instruction": "To prepare Palak Paneer, blanch spinach and blend it into a smooth puree. Sauté paneer cubes until golden. In a separate pan, cook onions, tomatoes, and spices. Add the spinach puree and simmer until the flavors meld. Add the sautéed paneer and finish with cream and butter. Palak Paneer is best served hot with naan or rice."
  },
  {
    "name": "Masala Dosa",
    "description": "A South Indian delicacy, masala dosa is a thin, crispy rice crepe filled with spiced potatoes.",
    "email": "masaladosa_chef@example.com",
    "ingredients": [
      "Rice flour",
      "Urad dal",
      "Potatoes",
      "Onions",
      "Mustard seeds",
      "Curry leaves",
      "Green chilies",
      "Turmeric",
      "Chutney",
      "Sambar",
      "Ghee",
      "Spices"
    ],
    "category": "Indian",
    "image": "masala-dosa.jpg",
    "instruction": "Make the dosa batter by fermenting rice flour and urad dal. Spread thin dosa crepes on a hot griddle. In a separate pan, sauté potatoes with mustard seeds, curry leaves, onions, and spices. Place the potato mixture inside the dosa and fold. Serve the Masala Dosa hot with coconut chutney and sambar."
  },
  {
    "name": "Rogan Josh",
    "description": "A rich and aromatic curry with tender pieces of meat, traditionally made with lamb or goat.",
    "email": "roganjosh_chef@example.com",
    "ingredients": [
      "Lamb or Goat meat",
      "Onions",
      "Tomatoes",
      "Yogurt",
      "Ginger-garlic paste",
      "Rogan josh masala",
      "Red chili powder",
      "Saffron strands",
      "Fennel seeds",
      "Kashmiri red chili",
      "Ghee",
      "Spices"
    ],
    "category": "Indian",
    "image": "rogan-josh.jpg",
    "instruction": "For Rogan Josh, marinate lamb or goat meat in yogurt and spices. Sauté onions, tomatoes, and ginger-garlic paste until fragrant. Add the marinated meat and cook until browned. Stir in Rogan Josh masala, red chili powder, and saffron. Simmer until the meat is tender and the curry is rich and flavorful. Garnish with fresh coriander and serve with rice or naan."
  },
  {
    "name": "Paella",
    "description": "A famous Spanish rice dish with saffron, vegetables, and a variety of meats or seafood.",
    "ingredients": [
      "Short-grain rice",
      "Saffron",
      "Chicken",
      "Rabbit",
      "Bell peppers",
      "Tomatoes",
      "Onions",
      "Garlic",
      "Paprika",
      "Peas",
      "Lemon wedges",
      "Olive oil",
      "Chicken broth",
      "Seafood (optional)"
    ],
    "category": "Spanish",
    "image": "paella.jpg",
    "instruction": "To prepare Paella, start by heating olive oil in a large paella pan. Add chicken and rabbit pieces, sauté until browned. Stir in onions, bell peppers, and tomatoes until softened. Add garlic, paprika, and saffron. Pour in the rice, coating it in the mixture. Pour in chicken broth, season with salt and pepper, and arrange seafood on top if desired. Allow the rice to absorb the liquid and cook until done. Garnish with peas and lemon wedges before serving."
  },
  {
    "name": "Gazpacho",
    "description": "A cold Spanish soup made from tomatoes, peppers, onions, cucumbers, and other fresh ingredients.",
    "ingredients": [
      "Tomatoes",
      "Cucumbers",
      "Bell peppers",
      "Onions",
      "Garlic",
      "Bread",
      "Olive oil",
      "Red wine vinegar",
      "Salt",
      "Pepper"
    ],
    "category": "Spanish",
    "image": "gazpacho.jpg",
    "instruction": "Gazpacho is a refreshing cold soup. Blend tomatoes, cucumbers, bell peppers, onions, and garlic until smooth. Soak bread in water, then add it to the blender along with olive oil and red wine vinegar. Blend until well combined. Season with salt and pepper. Chill the soup in the refrigerator for a few hours before serving. Garnish with chopped vegetables if desired."
  },
  {
    "name": "Patatas Bravas",
    "description": "Crispy fried potatoes served with a spicy tomato sauce and aioli.",
    "ingredients": [
      "Potatoes",
      "Olive oil",
      "Tomato sauce",
      "Paprika",
      "Cayenne pepper",
      "Garlic",
      "Mayonnaise",
      "Garlic powder",
      "Lemon juice"
    ],
    "category": "Spanish",
    "image": "patatas-bravas.jpg",
    "instruction": "For Patatas Bravas, start by frying cubed potatoes until golden brown. In a separate pan, make a spicy tomato sauce with olive oil, garlic, paprika, and cayenne pepper. Toss the fried potatoes in the sauce until well coated. Prepare an aioli by mixing mayonnaise with garlic powder and lemon juice. Serve the crispy potatoes with the spicy tomato sauce and a side of aioli."
  },
  {
    "name": "Churros con Chocolate",
    "description": "Deep-fried dough pastries served with a rich chocolate dipping sauce.",
    "ingredients": [
      "All-purpose flour",
      "Water",
      "Salt",
      "Sugar",
      "Vegetable oil",
      "Dark chocolate",
      "Milk",
      "Salt"
    ],
    "category": "Spanish",
    "image": "churros-con-chocolate.jpg",
    "instruction": "To make Churros, combine water, flour, salt, and sugar in a saucepan. Heat until it forms a dough. Pipe the dough through a star-tipped nozzle and fry until golden brown. Roll the fried churros in sugar. For the chocolate sauce, melt dark chocolate with milk and a pinch of salt. Dip the churros in the chocolate sauce and enjoy!"
  },
  {
    "name": "Gambas al Ajillo",
    "description": "Garlic shrimp cooked in olive oil and served with a touch of spice.",
    "ingredients": [
      "Shrimp",
      "Olive oil",
      "Garlic",
      "Red pepper flakes",
      "Paprika",
      "White wine",
      "Parsley",
      "Salt"
    ],
    "category": "Spanish",
    "image": "gambas-al-ajillo.jpg",
    "instruction": "For Gambas al Ajillo, sauté shrimp in olive oil with garlic, red pepper flakes, and paprika until the shrimp turn pink. Deglaze the pan with white wine and cook until the liquid reduces. Sprinkle with chopped parsley and season with salt. Serve the garlic shrimp hot, perhaps with a slice of crusty bread to soak up the flavorful juices."
  },
  {
    "name": "Chocolate Banoffee Whoopie Pies",
    "description": "Delicious chocolate whoopie pies filled with banana cream and toffee sauce.",
    "ingredients": [
      "2 cups all-purpose flour",
      "1/2 cup unsweetened cocoa powder",
      "1 teaspoon baking powder",
      "1/2 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/2 cup unsalted butter, softened",
      "1 cup granulated sugar",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "1 cup buttermilk",
      "For the filling:",
      "2 ripe bananas, mashed",
      "1 cup heavy cream",
      "1/2 cup sweetened condensed milk",
      "1/2 cup toffee sauce",
      "Chocolate shavings for garnish"
    ],
    "country": "American",
    "image": "chocolate-banoffee-whoopie-pies.jpg",
    "instruction": "1. Preheat the oven to 350°F (175°C) and line baking sheets with parchment paper.\n\n2. In a bowl, whisk together flour, cocoa powder, baking powder, baking soda, and salt.\n\n3. In another bowl, cream together butter and sugar until light and fluffy. Add the egg and vanilla extract, mixing well.\n\n4. Gradually add the dry ingredients to the wet ingredients, alternating with buttermilk. Mix until just combined.\n\n5. Drop rounded tablespoons of batter onto the prepared baking sheets, spacing them 2 inches apart.\n\n6. Bake for 10-12 minutes or until the tops spring back when lightly touched. Allow the whoopie pies to cool completely.\n\n7. For the filling, whip the heavy cream until stiff peaks form. Fold in mashed bananas, sweetened condensed milk, and toffee sauce.\n\n8. Spread a generous amount of the banana-toffee filling on the flat side of one whoopie pie and sandwich with another whoopie pie.\n\n9. Optionally, garnish with chocolate shavings.\n\n10. Enjoy these delightful Chocolate Banoffee Whoopie Pies!"
  }];

  async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db("recipes");
      const collection = db.collection("recipedetails");
  
      // Insert documents
      const result = await collection.insertMany(data);
      console.log(`${result.insertedCount} documents inserted`);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Close the connection
      await client.close();
      console.log('Connection closed');
    }
  }
  
  main().catch(console.error);