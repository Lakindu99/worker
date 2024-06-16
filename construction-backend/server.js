const express = require('express');
const app = express();
const port = 3000;

// Sample data for construction items
const items = [
  { "id": 1, "name": "Cement", "price": "1000.00","imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3taE_JoktoKM-aQNw7y6MWpWQyMvEYbGeiw&s","websiteUrl":"https://asirihardware.lk/" },
  // { "id": 2, "name": "Sand", "price": "200.00" },
  // { "id": 3, "name": "Gravel", "price": "300.00" },
  // { "id": 4, "name": "Steel Rebar", "price": "1500.00" },
  // { "id": 5, "name": "Bricks", "price": "500.00" },
  // { "id": 6, "name": "Concrete Blocks", "price": "800.00" },
  // { "id": 7, "name": "Plywood", "price": "700.00" },
  // { "id": 8, "name": "Timber", "price": "1200.00" },
  // { "id": 9, "name": "Glass", "price": "1100.00" },
  // { "id": 10, "name": "Paint", "price": "400.00" },
  // { "id": 11, "name": "Roof Tiles", "price": "1300.00" },
  // { "id": 12, "name": "Insulation", "price": "600.00" },
  // { "id": 13, "name": "PVC Pipes", "price": "350.00" },
  // { "id": 14, "name": "Copper Pipes", "price": "1600.00" },
  // { "id": 15, "name": "Electrical Wiring", "price": "900.00" },
  // { "id": 16, "name": "Light Fixtures", "price": "450.00" },
  // { "id": 17, "name": "Doors", "price": "750.00" },
  // { "id": 18, "name": "Windows", "price": "950.00" },
  // { "id": 19, "name": "Nails", "price": "50.00" },
  // { "id": 20, "name": "Screws", "price": "40.00" },
  // { "id": 21, "name": "Bolts", "price": "60.00" },
  // { "id": 22, "name": "Washers", "price": "30.00" },
  // { "id": 23, "name": "Adhesive", "price": "70.00" },
  // { "id": 24, "name": "Sealant", "price": "80.00" },
  // { "id": 25, "name": "Mortar", "price": "90.00" },
  // { "id": 26, "name": "Plaster", "price": "100.00" },
  // { "id": 27, "name": "Tiles", "price": "1100.00" },
  // { "id": 28, "name": "Grout", "price": "120.00" },
  // { "id": 29, "name": "Shingles", "price": "1300.00" },
  // { "id": 30, "name": "Gutters", "price": "400.00" },
  // { "id": 31, "name": "Downspouts", "price": "300.00" },
  // { "id": 32, "name": "Flashing", "price": "200.00" },
  // { "id": 33, "name": "Ventilation Ducts", "price": "500.00" },
  // { "id": 34, "name": "HVAC System", "price": "6000.00" },
  // { "id": 35, "name": "Thermostat", "price": "150.00" },
  // { "id": 36, "name": "Radiator", "price": "700.00" },
  // { "id": 37, "name": "Boiler", "price": "5000.00" },
  // { "id": 38, "name": "Water Heater", "price": "2500.00" },
  // { "id": 39, "name": "Faucets", "price": "300.00" },
  // { "id": 40, "name": "Sinks", "price": "400.00" },
  // { "id": 41, "name": "Toilets", "price": "500.00" },
  // { "id": 42, "name": "Bathtubs", "price": "1200.00" },
  // { "id": 43, "name": "Showers", "price": "1000.00" },
  // { "id": 44, "name": "Kitchen Cabinets", "price": "2000.00" },
  // { "id": 45, "name": "Countertops", "price": "1500.00" },
  // { "id": 46, "name": "Flooring", "price": "1800.00" },
  // { "id": 47, "name": "Wallpaper", "price": "300.00" },
  // { "id": 48, "name": "Curtains", "price": "200.00" },
  // { "id": 49, "name": "Blinds", "price": "250.00" },
  // { "id": 50, "name": "Door Handles", "price": "100.00" },
  // { "id": 51, "name": "Locks", "price": "150.00" },
  // { "id": 52, "name": "Hinges", "price": "50.00" },
  // { "id": 53, "name": "Latches", "price": "70.00" },
  // { "id": 54, "name": "Power Tools", "price": "5000.00" },
  // { "id": 55, "name": "Hand Tools", "price": "2000.00" },
  // { "id": 56, "name": "Scaffolding", "price": "3000.00" },
  // { "id": 57, "name": "Ladders", "price": "700.00" },
  // { "id": 58, "name": "Safety Gear", "price": "400.00" },
  // { "id": 59, "name": "Work Gloves", "price": "50.00" },
  // { "id": 60, "name": "Hard Hats", "price": "100.00" },
  // { "id": 61, "name": "Safety Glasses", "price": "80.00" },
  // { "id": 62, "name": "Ear Protection", "price": "60.00" },
  // { "id": 63, "name": "Safety Boots", "price": "150.00" },
  // { "id": 64, "name": "High Visibility Vests", "price": "70.00" },
  // { "id": 65, "name": "First Aid Kits", "price": "100.00" },
  // { "id": 66, "name": "Fire Extinguishers", "price": "200.00" },
  // { "id": 67, "name": "Smoke Detectors", "price": "120.00" },
  // { "id": 68, "name": "Carbon Monoxide Detectors", "price": "150.00" },
  // { "id": 69, "name": "Lumber", "price": "900.00" },
  // { "id": 70, "name": "Drywall", "price": "400.00" },
  // { "id": 71, "name": "Joint Compound", "price": "120.00" },
  // { "id": 72, "name": "Drywall Tape", "price": "30.00" },
  // { "id": 73, "name": "Corner Bead", "price": "50.00" },
  // { "id": 74, "name": "Construction Adhesive", "price": "80.00" },
  // { "id": 75, "name": "Concrete Mix", "price": "300.00" },
  // { "id": 76, "name": "Rebar Ties", "price": "40.00" },
  // { "id": 77, "name": "Masonry Drill Bits", "price": "100.00" },
  // { "id": 78, "name": "Concrete Vibrators", "price": "1500.00" },
  // { "id": 79, "name": "Concrete Finishing Tools", "price": "400.00" },
  // { "id": 80, "name": "Concrete Sealers", "price": "200.00" },
  // { "id": 81, "name": "Asphalt", "price": "1000.00" },
  // { "id": 82, "name": "Asphalt Paving Equipment", "price": "7000.00" },
  // { "id": 83, "name": "Grading Equipment", "price": "6000.00" },
  // { "id": 84, "name": "Compaction Equipment", "price": "5000.00" },
  // { "id": 85, "name": "Pavers", "price": "1500.00" },
  // { "id": 86, "name": "Skid Steers", "price": "30000.00" },
  // { "id": 87, "name": "Excavators", "price": "70000.00" },
  // { "id": 88, "name": "Backhoes", "price": "50000.00" },
  // { "id": 89, "name": "Cranes", "price": "100000.00" },
  // { "id": 90, "name": "Bulldozers", "price": "80000.00" },
  // { "id": 91, "name": "Dump Trucks", "price": "60000.00" },
  // { "id": 92, "name": "Flatbed Trucks", "price": "50000.00" },
  // { "id": 93, "name": "Concrete Mixers", "price": "30000.00" },
  // { "id": 94, "name": "Forklifts", "price": "25000.00" },
  // { "id": 95, "name": "Scissor Lifts", "price": "15000.00" },
  // { "id": 96, "name": "Aerial Lifts", "price": "20000.00" },
  // { "id": 97, "name": "Generators", "price": "5000.00" },
  // { "id": 98, "name": "Compressors", "price": "4000.00" },
  // { "id": 99, "name": "Jackhammers", "price": "3000.00" },
  // { "id": 100, "name": "Pressure Washers", "price": "2000.00" }
]
;

// GET endpoint to fetch construction items
app.get('/items', (req, res) => {
    res.json(items);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
