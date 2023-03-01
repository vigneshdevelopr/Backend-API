const express = require("express");
const app = express();
const PORT = 9000;
const path = require("path");
const fs = require("fs");
const { MongoClient } = require("mongodb");

const data = [
  {
    name: "Darla Graham",
    gender: "Androgyne",
    address: "37748",
    country: "Burkina Faso",
    mailid: "Kaylah80@hotmail.com",
    phone: "1-552-308-6568",
    id: "1",
  },
  {
    name: "Amos Zboncak",
    gender: "Genderqueer",
    address: "13346",
    country: "Colombia",
    mailid: "Belle_Williamson49@gmail.com",
    phone: "784.492.5365 x499",
    id: "2",
  },
  {
    name: "Lucille West",
    gender: "MTF",
    address: "8756",
    country: "Botswana",
    mailid: "Amelia_Pfannerstill90@hotmail.com",
    phone: "521.270.4760 x289",
    id: "3",
  },
  {
    name: "Lindsey Stiedemann",
    gender: "Cisgender male",
    address: "09988",
    country: "Andorra",
    mailid: "Ernest32@gmail.com",
    phone: "223-366-3063",
    id: "4",
  },
  {
    name: "Johanna Farrell",
    gender: "Demi-woman",
    address: "884",
    country: "Kuwait",
    mailid: "Orlo_Schimmel44@gmail.com",
    phone: "998-899-7851 x9406",
    id: "5",
  },
  {
    name: "Kristin King",
    gender: "Male to female transgender woman",
    address: "087",
    country: "Tokelau",
    mailid: "Valentina.Streich73@hotmail.com",
    phone: "238.581.7798 x018",
    id: "6",
  },
  {
    name: "Christine Trantow",
    gender: "Intersex man",
    address: "04102",
    country: "Christmas Island",
    mailid: "Susanna76@yahoo.com",
    phone: "(582) 680-1161 x9086",
    id: "7",
  },
  {
    name: "Verna Crist I",
    gender: "Two-spirit",
    address: "070",
    country: "Fiji",
    mailid: "Hallie.Yost@hotmail.com",
    phone: "529-832-2683 x895",
    id: "8",
  },
  {
    name: "Mrs. Ryan Aufderhar",
    gender: "Genderflux",
    address: "115",
    country: "Lithuania",
    mailid: "Haskell.Kunze@hotmail.com",
    phone: "541.885.7420 x789",
    id: "9",
  },
  {
    name: "Clara Schneider",
    gender: "Agender",
    address: "67909",
    country: "Central African Republic",
    mailid: "Brenna93@hotmail.com",
    phone: "(676) 203-2075 x651",
    id: "10",
  },
  {
    name: "Ruth Gibson MD",
    gender: "Transexual woman",
    address: "7363",
    country: "Tajikistan",
    mailid: "Aron84@yahoo.com",
    phone: "919.295.8601 x932",
    id: "11",
  },
  {
    name: "Yvonne Zieme",
    gender: "Man",
    address: "03994",
    country: "Chile",
    mailid: "Jada_Jast27@hotmail.com",
    phone: "773.839.2193",
    id: "12",
  },
  {
    name: "Tasha Yost",
    gender: "Demi-boy",
    address: "1517",
    country: "Russian Federation",
    mailid: "Lyric.Bednar@yahoo.com",
    phone: "1-441-604-8059",
    id: "13",
  },
  {
    name: "Israel Pollich",
    gender: "Two-spirit",
    address: "518",
    country: "Uzbekistan",
    mailid: "Eunice55@gmail.com",
    phone: "1-991-750-6003 x144",
    id: "14",
  },
  {
    name: "Brett Doyle",
    gender: "Trans",
    address: "1904",
    country: "Barbados",
    mailid: "Joana_Fritsch1@gmail.com",
    phone: "1-286-800-6025",
    id: "15",
  },
  {
    name: "Jay Spencer DVM",
    gender: "T* woman",
    address: "6900",
    country: "New Zealand",
    mailid: "Rickey.Schmeler79@hotmail.com",
    phone: "993.527.5943 x719",
    id: "16",
  },
  {
    name: "Chelsea Predovic Sr.",
    gender: "Male to female trans woman",
    address: "8010",
    country: "Israel",
    mailid: "Mohammed20@gmail.com",
    phone: "(684) 730-4688 x2897",
    id: "17",
  },
  {
    name: "Patricia West",
    gender: "Cisgender man",
    address: "948",
    country: "Montenegro",
    mailid: "Yasmine_Deckow@gmail.com",
    phone: "766-327-8310",
    id: "18",
  },
  {
    name: "Maria Huels",
    gender: "Trigender",
    address: "67715",
    country: "Cocos (Keeling) Islands",
    mailid: "Sabrina_Romaguera41@gmail.com",
    phone: "1-786-598-8938 x86075",
    id: "19",
  },
  {
    name: "Freda Abernathy",
    gender: "FTM",
    address: "9047",
    country: "Saint Barthelemy",
    mailid: "Tristian_Reichert70@yahoo.com",
    phone: "736.545.5527 x92282",
    id: "20",
  },
  {
    name: "Latoya Paucek",
    gender: "Hermaphrodite",
    address: "231",
    country: "Libyan Arab Jamahiriya",
    mailid: "Mertie.Roberts@hotmail.com",
    phone: "(750) 542-9146 x13102",
    id: "21",
  },
  {
    name: "Ana Lakin",
    gender: "Androgyne",
    address: "31548",
    country: "Puerto Rico",
    mailid: "Jaylon8@hotmail.com",
    phone: "1-566-835-3154 x9513",
    id: "22",
  },
  {
    name: "Miss Chelsea Beer",
    gender: "F2M",
    address: "25416",
    country: "Azerbaijan",
    mailid: "Marilyne.Frami@yahoo.com",
    phone: "404.901.1874 x9648",
    id: "23",
  },
  {
    name: "George Reichel I",
    gender: "Bigender",
    address: "25310",
    country: "Zambia",
    mailid: "Daniela41@hotmail.com",
    phone: "1-480-743-5052 x1059",
    id: "24",
  },
  {
    name: "Lydia Russel PhD",
    gender: "Demi-woman",
    address: "4177",
    country: "Germany",
    mailid: "Madison_Schaden@yahoo.com",
    phone: "825.538.8182",
    id: "25",
  },
  {
    name: "Philip Powlowski IV",
    gender: "Gender fluid",
    address: "602",
    country: "Somalia",
    mailid: "Emmitt85@yahoo.com",
    phone: "607-607-1818 x556",
    id: "26",
  },
  {
    name: "Carlos Turner",
    gender: "Female to male",
    address: "550",
    country: "Macao",
    mailid: "Stefan29@hotmail.com",
    phone: "1-480-469-9234",
    id: "27",
  },
  {
    name: "Dean Collier",
    gender: "Trans female",
    address: "69208",
    country: "Turkey",
    mailid: "Heidi.Smith52@yahoo.com",
    phone: "1-389-949-0978 x701",
    id: "28",
  },
  {
    name: "Melanie Cassin",
    gender: "Hermaphrodite",
    address: "532",
    country: "Vanuatu",
    mailid: "Thaddeus.Stehr@yahoo.com",
    phone: "487-333-2231 x649",
    id: "29",
  },
  {
    name: "Mindy Hyatt",
    gender: "Demi-girl",
    address: "0436",
    country: "Venezuela",
    mailid: "Gabrielle_Wuckert22@hotmail.com",
    phone: "(866) 462-1693 x22801",
    id: "30",
  },
  {
    name: "Mrs. Ray Olson",
    gender: "Androgynous",
    address: "1209",
    country: "Cayman Islands",
    mailid: "Audreanne_Swaniawski@hotmail.com",
    phone: "211-362-7134 x2685",
    id: "31",
  },
  {
    name: "Brandy Herman",
    gender: "Gender nonconforming",
    address: "0093",
    country: "Slovenia",
    mailid: "Mona78@yahoo.com",
    phone: "472-551-4883",
    id: "32",
  },
  {
    name: "Dr. Christie Hoeger",
    gender: "Genderqueer",
    address: "915",
    country: "Reunion",
    mailid: "Hosea_Rodriguez@hotmail.com",
    phone: "(540) 234-6155 x29262",
    id: "33",
  },
  {
    name: "Ms. Edna Hartmann",
    gender: "Woman",
    address: "87621",
    country: "Argentina",
    mailid: "Ronaldo91@yahoo.com",
    phone: "(972) 863-1359 x6832",
    id: "34",
  },
  {
    name: "Rudy Monahan",
    gender: "Intersex woman",
    address: "348",
    country: "Panama",
    mailid: "Shad.Walsh@yahoo.com",
    phone: "(811) 798-0551 x98230",
    id: "35",
  },
  {
    name: "Essie Reinger",
    gender: "Trans man",
    address: "968",
    country: "Montserrat",
    mailid: "Leopold_Torphy@gmail.com",
    phone: "781-915-5362 x56861",
    id: "36",
  },
  {
    name: "Matt McGlynn",
    gender: "Gender variant",
    address: "092",
    country: "Saint Kitts and Nevis",
    mailid: "Chaya50@yahoo.com",
    phone: "(208) 894-1807 x1671",
    id: "37",
  },
  {
    name: "Tiffany Little",
    gender: "Transgender person",
    address: "8404",
    country: "Ukraine",
    mailid: "Micheal_Hayes@yahoo.com",
    phone: "235.894.3888 x80458",
    id: "38",
  },
  {
    name: "Catherine Thompson",
    gender: "Polygender",
    address: "75325",
    country: "Bhutan",
    mailid: "Alva64@hotmail.com",
    phone: "984.352.4688 x87541",
    id: "39",
  },
  {
    name: "Joyce Bosco",
    gender: "Neither",
    address: "35477",
    country: "Mongolia",
    mailid: "Orland_Funk51@yahoo.com",
    phone: "211.573.3583 x29796",
    id: "40",
  },
  {
    name: "Laurence Lesch",
    gender: "Androgyne",
    address: "33493",
    country: "Burundi",
    mailid: "Favian_Durgan@hotmail.com",
    phone: "366.818.8629 x594",
    id: "41",
  },
  {
    name: "Geraldine Bernier",
    gender: "Man",
    address: "426",
    country: "Belize",
    mailid: "Spencer93@gmail.com",
    phone: "1-590-628-2008 x750",
    id: "42",
  },
  {
    name: "Hilda Kessler Sr.",
    gender: "Demi-woman",
    address: "255",
    country: "Bulgaria",
    mailid: "Zechariah.Carroll@gmail.com",
    phone: "971-502-4970 x128",
    id: "43",
  },
  {
    name: "Karl Botsford",
    gender: "Intersex person",
    address: "200",
    country: "Monaco",
    mailid: "Noah48@yahoo.com",
    phone: "846.666.7797 x69564",
    id: "44",
  },
  {
    name: "George Vandervort",
    gender: "Gender questioning",
    address: "3438",
    country: "Brunei Darussalam",
    mailid: "Felipa.Boehm95@yahoo.com",
    phone: "371-575-2334 x3057",
    id: "45",
  },
  {
    name: "Colin Mitchell PhD",
    gender: "Trans",
    address: "0889",
    country: "Liechtenstein",
    mailid: "Milo.Larson4@yahoo.com",
    phone: "1-407-863-5206",
    id: "46",
  },
  {
    name: "Ernesto Doyle",
    gender: "Demi-man",
    address: "343",
    country: "Cape Verde",
    mailid: "Margret_Dickinson@hotmail.com",
    phone: "580.840.9083 x30931",
    id: "47",
  },
  {
    name: "Terrell Streich",
    gender: "Demi-boy",
    address: "370",
    country: "Azerbaijan",
    mailid: "Macy10@hotmail.com",
    phone: "594.279.6052 x64628",
    id: "48",
  },
  {
    name: "Mrs. Edward Blanda",
    gender: "Female to male transgender man",
    address: "2752",
    country: "Taiwan",
    mailid: "Richie55@yahoo.com",
    phone: "379.793.4838 x6487",
    id: "49",
  },
  {
    name: "Daryl Mante",
    gender: "Demi-man",
    address: "006",
    country: "Turkmenistan",
    mailid: "Krystina.Dooley54@hotmail.com",
    phone: "659-217-3574 x2526",
    id: "50",
  },
  {
    name: "Kelley Daniel",
    gender: "Cisgender female",
    address: "17972",
    country: "Czech Republic",
    mailid: "Edd.Rodriguez@yahoo.com",
    phone: "459-674-5541 x6427",
    id: "51",
  },
  {
    name: "Ms. Jan Friesen",
    gender: "Male to female",
    address: "807",
    country: "Sri Lanka",
    mailid: "Amari65@yahoo.com",
    phone: "802.770.8569 x74957",
    id: "52",
  },
  {
    name: "Sadie Schuppe",
    gender: "Trans woman",
    address: "483",
    country: "Zambia",
    mailid: "Laney25@gmail.com",
    phone: "(681) 673-1059 x1819",
    id: "53",
  },
  {
    name: "Willis Renner",
    gender: "Female to male transsexual man",
    address: "4650",
    country: "Fiji",
    mailid: "Noe32@gmail.com",
    phone: "1-423-299-3265 x724",
    id: "54",
  },
  {
    name: "Julian Oberbrunner",
    gender: "Gender questioning",
    address: "999",
    country: "Thailand",
    mailid: "Dock.Hackett7@yahoo.com",
    phone: "(395) 404-6311 x9190",
    id: "55",
  },
  {
    name: "Mr. Lynda Heaney",
    gender: "Transexual man",
    address: "577",
    country: "United States Minor Outlying Islands",
    mailid: "Cassandra53@gmail.com",
    phone: "271.209.6436",
    id: "56",
  },
  {
    name: "Myra Schroeder",
    gender: "Trans male",
    address: "56479",
    country: "Comoros",
    mailid: "Amalia74@gmail.com",
    phone: "(980) 674-4936 x5833",
    id: "57",
  },
  {
    name: "Rosemary Crooks",
    gender: "T* man",
    address: "050",
    country: "Togo",
    mailid: "Ron37@gmail.com",
    phone: "334.705.5546 x52665",
    id: "58",
  },
  {
    name: "Francis Grady",
    gender: "Man",
    address: "125",
    country: "Papua New Guinea",
    mailid: "Cortney_Stoltenberg36@gmail.com",
    phone: "316.350.7423 x70532",
    id: "59",
  },
  {
    name: "Wallace Veum DVM",
    gender: "Gender variant",
    address: "60726",
    country: "Russian Federation",
    mailid: "Alfred.Casper@yahoo.com",
    phone: "(443) 306-3037 x065",
    id: "60",
  },
  {
    name: "Michelle Kiehn",
    gender: "Male to female trans woman",
    address: "880",
    country: "Palau",
    mailid: "Beryl_Becker@yahoo.com",
    phone: "927.507.7438 x50952",
    id: "61",
  },
  {
    name: "Pamela Torp",
    gender: "Omnigender",
    address: "45131",
    country: "Niger",
    mailid: "Garland.Gerlach@hotmail.com",
    phone: "1-881-543-0211 x1343",
    id: "62",
  },
  {
    name: "Mr. Duane Greenfelder",
    gender: "Gender variant",
    address: "0835",
    country: "Bangladesh",
    mailid: "Sim2@gmail.com",
    phone: "536-280-8743 x742",
    id: "63",
  },
  {
    name: "Dominick Tromp II",
    gender: "Xenogender",
    address: "4428",
    country: "Gambia",
    mailid: "Remington.Terry@gmail.com",
    phone: "961-302-5359",
    id: "64",
  },
  {
    name: "Wilson Lindgren",
    gender: "Transexual person",
    address: "0617",
    country: "Falkland Islands (Malvinas)",
    mailid: "Judy_Metz@yahoo.com",
    phone: "765.711.5888 x445",
    id: "65",
  },
  {
    name: "Guy Lemke",
    gender: "Cis",
    address: "8573",
    country: "Taiwan",
    mailid: "Percival_McKenzie86@yahoo.com",
    phone: "(900) 480-9186 x6661",
    id: "66",
  },
  {
    name: "Eugene Franecki",
    gender: "Intersex man",
    address: "41381",
    country: "Vietnam",
    mailid: "Blanca25@hotmail.com",
    phone: "923-779-7161 x1228",
    id: "67",
  },
  {
    name: "Tommy Ledner",
    gender: "Cisgender",
    address: "98363",
    country: "Madagascar",
    mailid: "Laurence_Homenick@yahoo.com",
    phone: "1-544-846-9130 x43385",
    id: "68",
  },
  {
    name: "Kim Gutmann",
    gender: "Genderflux",
    address: "975",
    country: "Holy See (Vatican City State)",
    mailid: "Koby_Grady@hotmail.com",
    phone: "740.556.9541 x291",
    id: "69",
  },
  {
    name: "Alonzo Hackett",
    gender: "Polygender",
    address: "61518",
    country: "Indonesia",
    mailid: "Amely_Jacobi@hotmail.com",
    phone: "(911) 817-1451 x118",
    id: "70",
  },
  {
    name: "Erin Runolfsdottir",
    gender: "T* woman",
    address: "348",
    country: "French Southern Territories",
    mailid: "Brooks.Halvorson@gmail.com",
    phone: "(825) 678-6702 x78757",
    id: "71",
  },
  {
    name: "Todd Ernser",
    gender: "Man",
    address: "098",
    country: "Democratic People's Republic of Korea",
    mailid: "Aiden.Cormier33@yahoo.com",
    phone: "923.961.8977 x0611",
    id: "72",
  },
  {
    name: "Brooke Pagac",
    gender: "Bigender",
    address: "5289",
    country: "Kyrgyz Republic",
    mailid: "Jaida.Schowalter@yahoo.com",
    phone: "(672) 761-2822 x554",
    id: "73",
  },
  {
    name: "Donnie Hahn",
    gender: "Agender",
    address: "119",
    country: "Switzerland",
    mailid: "Jovanny.Walsh49@hotmail.com",
    phone: "1-560-955-4290 x2563",
    id: "74",
  },
  {
    name: "Clara Buckridge",
    gender: "Gender fluid",
    address: "51081",
    country: "India",
    mailid: "Winston82@yahoo.com",
    phone: "645-792-4684 x87608",
    id: "75",
  },
  {
    name: "Teresa Konopelski III",
    gender: "Demi-woman",
    address: "93499",
    country: "Suriname",
    mailid: "Tina.Rempel56@yahoo.com",
    phone: "929.325.4901 x72300",
    id: "76",
  },
  {
    name: "Orlando Simonis",
    gender: "Man",
    address: "29667",
    country: "Cook Islands",
    mailid: "Kailey50@gmail.com",
    phone: "1-589-766-0342 x096",
    id: "77",
  },
  {
    name: "Paul Bogisich",
    gender: "Demiflux",
    address: "212",
    country: "Seychelles",
    mailid: "Gregory_Ruecker29@gmail.com",
    phone: "523.711.0804",
    id: "78",
  },
  {
    name: "Lynne Hauck Sr.",
    gender: "Trans person",
    address: "10584",
    country: "Sierra Leone",
    mailid: "Brittany.Wiegand90@hotmail.com",
    phone: "(215) 655-4054 x36798",
    id: "79",
  },
  {
    name: "Donnie Stroman",
    gender: "Genderqueer",
    address: "156",
    country: "Malawi",
    mailid: "Turner85@yahoo.com",
    phone: "(545) 330-4715 x4043",
    id: "80",
  },
  {
    name: "Lydia O'Reilly",
    gender: "Transmasculine",
    address: "92977",
    country: "Rwanda",
    mailid: "Treva.Stokes49@gmail.com",
    phone: "610-355-0759 x0716",
    id: "81",
  },
  {
    name: "Felicia Haag",
    gender: "Intersex man",
    address: "7636",
    country: "Tonga",
    mailid: "Imogene.Grady@yahoo.com",
    phone: "(768) 208-7235 x6739",
    id: "82",
  },
  {
    name: "Jessie Hettinger",
    gender: "Genderqueer",
    address: "11125",
    country: "New Caledonia",
    mailid: "Kristoffer.Bode56@hotmail.com",
    phone: "1-508-562-1627",
    id: "83",
  },
  {
    name: "Caleb Mante",
    gender: "Demi-man",
    address: "46745",
    country: "Algeria",
    mailid: "Johnnie81@hotmail.com",
    phone: "1-205-261-2410 x058",
    id: "84",
  },
  {
    name: "Orville Bernier",
    gender: "Man",
    address: "29104",
    country: "Pitcairn Islands",
    mailid: "Nelle.Windler@gmail.com",
    phone: "266-321-7478 x0135",
    id: "85",
  },
  {
    name: "Wendell Franey",
    gender: "Intersex man",
    address: "98828",
    country: "Lao People's Democratic Republic",
    mailid: "Alena0@hotmail.com",
    phone: "(857) 446-7820",
    id: "86",
  },
  {
    name: "Ms. Alberta Cole",
    gender: "Transexual man",
    address: "731",
    country: "Guatemala",
    mailid: "Karlie.Wuckert@hotmail.com",
    phone: "1-413-545-6982 x4154",
    id: "87",
  },
  {
    name: "Rudolph Harber MD",
    gender: "Demigender",
    address: "6786",
    country: "Chad",
    mailid: "Drake70@yahoo.com",
    phone: "1-483-467-9940 x735",
    id: "88",
  },
  {
    name: "Thomas Kohler",
    gender: "Multigender",
    address: "045",
    country: "Falkland Islands (Malvinas)",
    mailid: "Earlene95@gmail.com",
    phone: "(340) 312-2513",
    id: "89",
  },
  {
    name: "Frankie Auer",
    gender: "Pangender",
    address: "226",
    country: "Niue",
    mailid: "Elenora_Kihn@yahoo.com",
    phone: "1-811-778-2802 x823",
    id: "90",
  },
  {
    name: "Jimmie Krajcik",
    gender: "Multigender",
    address: "13824",
    country: "Norfolk Island",
    mailid: "Mariela78@gmail.com",
    phone: "986.539.7899 x08468",
    id: "91",
  },
  {
    name: "Natalie Jakubowski",
    gender: "Neutrois",
    address: "983",
    country: "Gibraltar",
    mailid: "Myriam.Herzog18@hotmail.com",
    phone: "580.770.6359 x286",
    id: "92",
  },
  {
    name: "Kristin Homenick",
    gender: "Transexual person",
    address: "1378",
    country: "Netherlands",
    mailid: "Mustafa_Howe@hotmail.com",
    phone: "313-393-8129 x12538",
    id: "93",
  },
  {
    name: "Dr. Nettie Ziemann",
    gender: "Transexual woman",
    address: "58015",
    country: "Gabon",
    mailid: "Gardner8@yahoo.com",
    phone: "(229) 320-3902",
    id: "94",
  },
  {
    name: "Lloyd Feest",
    gender: "Transexual person",
    address: "209",
    country: "American Samoa",
    mailid: "Veronica.Bahringer@yahoo.com",
    phone: "(985) 529-2783 x02544",
    id: "95",
  },
  {
    name: "Lorraine Bernhard",
    gender: "Gender fluid",
    address: "877",
    country: "Bahrain",
    mailid: "Brandt92@hotmail.com",
    phone: "429-432-6854 x86397",
    id: "96",
  },
  {
    name: "Lewis Schinner",
    gender: "Demi-woman",
    address: "455",
    country: "Argentina",
    mailid: "Providenci.Stracke@gmail.com",
    phone: "1-695-219-5496",
    id: "97",
  },
  {
    name: "Shelley Gusikowski",
    gender: "Agender",
    address: "96396",
    country: "Uzbekistan",
    mailid: "Melvina.McLaughlin83@hotmail.com",
    phone: "(278) 257-8489 x09049",
    id: "98",
  },
  {
    name: "Arlene Dooley",
    gender: "MTF",
    address: "97407",
    country: "Chile",
    mailid: "Amina.Hoppe@hotmail.com",
    phone: "654.996.7538 x718",
    id: "99",
  },
  {
    name: "Dwayne Lubowitz",
    gender: "F2M",
    address: "9861",
    country: "Uruguay",
    mailid: "Vanessa1@gmail.com",
    phone: "797.832.1923 x661",
    id: "100",
  },
];

//changing directory
const currentfile = path.join(__dirname, "databreach");
console.log(currentfile);

//writing
const writetext = "hello world";
fs.writeFile(`${currentfile}/databreach.txt`, writetext, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully written databreach❤️");
  }
});

//picking particular file from the whole dataset
//syntax:
//app.use(express.static())

app.use(express.static("databreach"));
  app.use(express.json());


//==================connectivity to mongodb==========================================================
// const Mongourl = "mongodb://127.0.0.1:27017/Mockdata"





// async function createconnection() {
// const client = new MongoClient(Mongourl)
// const dbname = "Mockdata"
// await client.connect()
// console.log("successfully MongoDB created connection");
// return "success"
// }

// const client = createconnection()
// .then((client) => console.log(client) )
// .catch((err) => console.log(err));

//Mongo Db Connection 

const MONGO_URL = "mongodb://127.0.0.1:27017/Mockdata"

async function createConnection(){
 const client = new MongoClient(MONGO_URL)
 await client.connect(); 
 console.log("Mongodb is succesfuly connected")
 return client
}

const client = createConnection();

//============================================================================

app.get("/all/students", async (req, res)=>{
  const studentsData =  await (await client)
  .db("Mockdata")
  .collection("students")
  .find()
  .toArray() // to return all data from an array 
  res.status(200).json(studentsData)
})





//==============
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "databreach/databreach.txt"));
});
//================================================================

//get by parameters

app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.params);
  const finaldata = data.find((datas) => datas.id === id);
  //reason to use find..  is if i use filter they return array but find returns only objects
  res.send(finaldata);
});

//================================================================

// get by query

app.get("/data", (req, res) => {
  const { country } = req.query;
  console.log(req.query);
  const finalcountry = data.filter(
    (countries) => countries.country === country,
 );

  res.send(finalcountry);
});


//================================================================
//Post data to server

app.post("/data", (req, res) => {
  const postdata = {
    name: req.body.name,
    gender: req.body.gender,
    address: req.body.address,
    country: req.body.country,
    mailid: req.body.mailid,
    phone: req.body.phone,
    id: req.body.id,
  };
  console.log(postdata);
  data.push(postdata);
  res.send(data);
});

//================================================================

//Edit the database

app.put('/data/:id', (req, res)=>{
const {id} = req.params 
const editData = data.find((stud)=>stud.id === id);
console.log(editData)
editData.name = req.body.name
editData.gender = req.body.gender
editData.address = req.body.address
editData.country = req.body.country
editData.mailid = req.body.mailid
editData.phone = req.body.phone
editData.id = req.body.id

  res.send(data)
})



//================================================================

//delete the specific data from the database


app.delete('/data/:id', (req, res)=>{
  const {id}=req.params
  const DeleteData = data.filter((stud)=>stud.id != id)
  // const data = DeleteData
  res.send(DeleteData);
})

//================================================================

// basic

app.get("/all/data", (req, res) => {
  res.send(data);
});




app.get("/", (req, res) => {
  res.send("Welcome to databreach");
});

app.listen(PORT, () =>
  console.log(`Backend server listening on  localhost:${PORT}`)
);
