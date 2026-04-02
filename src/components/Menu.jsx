import { useState } from "react";

function Menu() {

  const menuData = {
    "Welcome Drink": [
      "Pine Apple Juice","Apple Juice","Mango Juice","Grape Juice",
      "Watermelon Juice","Moosambi Juice","Muskmelon Juice","Lime Juice",
      "Pudina Juice","Anarkali","Fruit Punch","Cocktail",
      "Sugarcane Juice","Badam Milk","Vanilla Milk Shake",
      "Pista Milk Shake","Rose Milk Shake","Lichi Milk Shake"
    ],

    "Soup": [
      "Tomato Soup","Cream of Tomato Soup","Tomato Shorba Soup",
      "Roasted Tomato Soup","Tomato Carrot Soup","Carrot Soup",
      "French Onion Soup","Minestrone Soup","Mushroom Soup",
      "Spinach Soup","Sweet Corn Soup","Hot and Sour Soup",
      "Lauki Soup","Manchow Soup","Lemon Rasam Soup",
      "Lemon Coriander Soup","Thai Coconut Soup",
      "Cream of Broccoli Soup","Spring Onion Soup","Veg Clear Soup"
    ],

    "South Snacks": [
      "Mirchi Bajji","Aloo Pakora","Palak Pakoda","Onion Pakoda",
      "Churumuri","Bhel Puri","Maddur Vada","Punugulu",
      "Bread Upma","Bread Pakoda","Medu Vada","Goli Baje",
      "Aloo Bonda","Mysore Bonda","Kothimbir Vadi"
    ],

    "Chats": [
      "Masala Puri","Pani Puri","Bhel Puri","Sev Puri",
      "Aloo Puri","Tikki Puri","Dahi Puri","Pudina Puri",
      "Cutlet Masala","Samosa Chat","Aloo Tikki",
      "Dahi Aloo Tikki","Aloo Chaat","Dhahi Batata Puri","Kachori Chat"
    ],

    "Dry Chats": [
      "Chirmuri","Karibeu Chirmuri","Pudina Chirmuri",
      "Nippat Bhel","Nippat Masala","Bun Masala",
      "Bun Nippat","Boti Masala","Tomato Slice",
      "Molike Kaalu Masala","Sweet Corn Masala",
      "Chips Masala","Mix Masala","Chakli Masala",
      "Mosaru Boondi","Hesaru Bele Masala","Congress Masala"
    ],

    "Dosa": [
      "Baby Masala Dosa","Davanagere Benne Masala","Tomato Masala",
      "Spring Masala","Onion Masala","Paneer Masala",
      "Karabevu Masala","Set Dosa","Kali Dosa",
      "Sagu Masala Dosa","Methi Dosa","Carrot Dosa",
      "Veg Dosa","Godi Dosa","Cucumber Dosa",
      "Savige Dosa","Ragi Dosa"
    ],

    "Idly": [
      "Carrot Idly","Bullet Idly","Kadubu Idly",
      "Tatte Idly","Masala Idly","Rava Idly",
      "Cup Idly","Shee Idly","Selam Idly","Veg Idly"
    ],

    "Light Breakfast": [
      "Dragon Savige Bath","Avalakki Bath","Mangalore Avalakki",
      "Gunthponglu","Madras Pongal","Veg Kharabath"
    ],

    "Breads / Roti": [
      "Kulcha","Baby Pudina Kulcha","Butter Pudina Kulcha",
      "Stuffed Kulcha","Masala Kulcha","Veg Sindi Kulcha",
      "Garlic Kulcha","Butter Roti","Rumali Roti",
      "Pista Rumali","Carrot Rumali","Custard Rumali","Naan"
    ],

    "Gravy & Curry": [
      "Veg Kollapuri","Veg Hydrabadi","Veg Kandai","Veg Kandahar",
      "Veg Malai Kurma","Veg Pepper Masala","Veg Greenpeas Curry",
      "Veg Shahi Kurma","Veg Makanvala","Capsicum Masala",
      "Veg Hariyali","Paneer Butter Masala","Paneer Mutter Masala",
      "Paneer Green Peas Masala","Paneer Kadai","Paneer Malai Masala",
      "Paneer Do Paiza","Paneer Gucchi Masala","Gujaratiwala"
    ],

    "Assorted Rice": [
      "Veg Palav","Pudina Palav","Menthya Palav","Peas Palav",
      "Mushroom Palav","Coriander Rice","Pepper Rice",
      "Capsicum Rice","Kaju Rice","Kaju & Peas Rice",
      "Tomato Rice","Pista Rice","Badam Rice",
      "Coconut Rice","Lemon Rice","Ghee Rice",
      "Pudina Bath","Chitranna","Mango Chitranna"
    ],

    "Salads": [
      "Green Salad","Russian Salad","Chinese Salad","Corn Salad",
      "Cabbage & Beetroot Salad","Pomegranate Beetroot Salad",
      "Tomato Pineapple Salad","Orange Grape Mint Salad",
      "Paneer and Makhana Salad","Potato Salad"
    ],

    "Raitha": [
      "Pineapple Raitha","Vegetable Raitha","Fruit Raitha",
      "Boondhi Raitha","Tomato Raitha","Potato Raitha",
      "Chilli Raitha","Cucumber Raitha","Pasta Raitha"
    ],

    "Papad": [
      "Rice Papad","Curd Papad","Masala Papad","Stick Papad",
      "Sandige","Peni Sandige","Aralu Sandige",
      "Akki Sandige","Sweet Potato Papad"
    ],

    "Palya": [
      "Beans Palya","Tondekai & Cashew Palya","Tondekay Fry",
      "Karamani Palya","Alu Fry","Alu Finger Fry",
      "Alu Chaps","Suvarnagedde Chaps","Ennegayi",
      "Cauliflower Corn Palya"
    ],

    "Fruits & Ice Creams": [
      "Choice Fruit","Custured Fruit","Special Fruit",
      "Vanilla Ice Cream","Strawberry Ice Cream",
      "Gudbud","Falooda","Honey Dew",
      "Badam Roll","Pista Roll","Madka Kulfi","Kulfi"
    ],

    "Special Ice Creams & Beeda": [
      "Top Notch","Hot Chocolate Fudge","Litchi Sundae",
      "Mango Walts","Coffee Fudge Scotsman",
      "Beeda Mogai Pan","Mogai Jodi"
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState("Welcome Drink");

  return (
    <section id="menu" className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-10 text-red-700">
          Our Menu
        </h2>

        <div className="flex flex-col md:flex-row gap-6">

          {/* LEFT MENU */}
          <div className="md:w-1/4 bg-white rounded-lg shadow-md max-h-[500px] overflow-y-auto">
            {Object.keys(menuData).map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-3 cursor-pointer border-b ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {category}
              </div>
            ))}
          </div>

          {/* RIGHT ITEMS */}
          <div className="md:w-3/4">

            <h3 className="text-2xl font-semibold mb-6">
              {selectedCategory}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {menuData[selectedCategory].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  🍽️ {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Menu;