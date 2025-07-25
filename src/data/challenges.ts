import Day1Modal from "@/components/solutions/day-1-modal";
export interface Challenge {
  id: string;
  day: number;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "not-started";
  completedDate?: string;
  timeSpent?: string;
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  technologies?: string[];
  learnings?: string[];
  challenges?: string[];
  notes?: string;
  component?: React.ComponentType;
}

export const challenges: Challenge[] = [
  {
    id: "day-1",
    day: 1,
    title: "Sign Up",
    description:
      "Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.",
    status: "in-progress",
    notes:
      "Project: Cosmic Explorers Club - Newsletter; A weekly newsletter delivering facts, stunning images, and updates about space exploration, astronomy, and recent discoveries. Sign Up for exclusive content, early access to interviews with astronomers, and printable star charts.",
    component: Day1Modal,
    image: "day1.png",
  },
  {
    id: "day-2",
    day: 2,
    title: "Credit Card Checkout",
    description:
      "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.",
    status: "in-progress",
  },
  {
    id: "day-3",
    day: 3,
    title: "Landing Page",
    description:
      "What's the main focus? Is it for a book, an album, a mobile app, a SaaS product? Consider important landing page elements (Headlines, call-to-action buttons, typography, clarity, etc.)",
    status: "not-started",
  },
  {
    id: "day-4",
    day: 4,
    title: "Calculation",
    description:
      "Design a calculation element or interface. Is it a standard calculator, a scientific one, or specialty calculator for something such as a home mortgage or auto loan? Is it to forecast a calculation such as for a credit score? Is it for a phone, a tablet, a web app?",
    status: "not-started",
  },
  {
    id: "day-5",
    day: 5,
    title: "App Icon",
    description:
      "Design an app icon. What best represents the brand or product? Or is it incredibly unique? Does it look great at a distance and does it stand out when put on your home screen alongside other apps?",
    status: "not-started",
  },
  {
    id: "day-6",
    day: 6,
    title: "User Profile",
    description:
      "Design a user profile and be mindful of the most important data, names, imagery, placement, etc. Is it for a serious profile? A social profile? (It's up to you!)",
    status: "not-started",
  },
  {
    id: "day-7",
    day: 7,
    title: "Settings",
    description:
      "Design settings for something. Is it for security or privacy settings? Game settings? Light mode vs. dark mode? System settings (sound, notifications, screen time, Wi-Fi, etc.)? What is it and what are the most important settings?",
    status: "not-started",
  },
  {
    id: "day-8",
    day: 8,
    title: "404 Page Design",
    description:
      "Design a 404 page - that's not boring! Does it suit the brand's style? Is it user-friendly? It might sound mundane, but not everything can be flashy or glamorous. Every day millions of people will be landing on 404 pages. You have an opportunity to help them in a way that's useful and aesthetically pleasing. (It's up to you!)",
    status: "not-started",
  },
  {
    id: "day-9",
    day: 9,
    title: "Music Player",
    description:
      "Design a music player. It could be browser based or an app (i.e. Pandora, Spotify, SoundCloud, etc.) or in a standalone product like in a car dashboard, jukebox, etc. Consider the controls, placements, imagery such as the artist or album cover, etc. Also, consider the device type that's playing the music. A dashboard in a tour bus, a smartwatch, or via a web browser. Each device type will have different requirements, features, and restrictions to consider.",
    status: "not-started",
  },
  {
    id: "day-10",
    day: 10,
    title: "Social Share",
    description:
      "Design a social share button/icon and be mindful of the size, imagery, placement, and purpose for sharing. It could be to share an article snippet, or a simple link with a photo.",
    status: "not-started",
  },
  {
    id: "day-11",
    day: 11,
    title: "Flash Message",
    description:
      "Design a Flash Message with both the error message and success message. Is it for a sign up form? A download/upload message? Is it to promote a membership plan?",
    status: "not-started",
  },
  {
    id: "day-12",
    day: 12,
    title: "E-commerce Shop",
    description:
      "Design an e-commerce shop. Is it simple for a local business or a large online retailer? Is it for clothing, shoes, handmade soap, or something else? Consider the brand, the products offered, product views, product options, desired actions (conversions, product views, pricing options, etc.) and of course, the users!",
    status: "not-started",
  },
  {
    id: "day-13",
    day: 13,
    title: "Direct Message",
    description:
      "Design a Direct Messaging app, profile, or chat box. Consider the parties involved in the messages, images, placement, and context of the messages. Are the messages for social purposes? Customer support?",
    status: "not-started",
  },
  {
    id: "day-14",
    day: 14,
    title: "Countdown Timer",
    description:
      "Is it for an app? An interface for an oven or cooking device? A sport related countdown such as on a scoreboard? Or is it a launch countdown for NASA, race cars, or something else?",
    status: "not-started",
  },
  {
    id: "day-15",
    day: 15,
    title: "On/Off Switch",
    description:
      "Consider what's being turned on/off and how it should be done. Is it a push-to-start electric vehicle? A control panel for a smart refrigerator or some other touch-panel display?",
    status: "not-started",
  },
  {
    id: "day-16",
    day: 16,
    title: "Pop-up Overlay",
    description:
      "Is it for a newsletter sign-up form ? Is it an ad overlay? A gated subscription page such as for premium news or member-only access?",
    status: "not-started",
  },
  {
    id: "day-17",
    day: 17,
    title: "Purchase Receipt",
    description:
      "What was purchased? On what date? How much was the item? And from what source and vendor? Consider other elements such as a customer support info, a tracking number or receipt number, business location/phone number/website, pictures if needed, and any other related elements. Tip:  The bottoms and tops of receipts are usually really underutilized. They can be great places to inform customers about upcoming promotions, news, ask for feedback, or promote your social media with a QR code.",
    status: "not-started",
  },
  {
    id: "day-18",
    day: 18,
    title: "Analytics Chart",
    description:
      "Is it to be used for web or app usage, a health monitor, e-commerce or traffic analytics? Is it tracking sports or stock market performance? Consider the data, the type of chart, the placement, and the purpose of the chart.",
    status: "not-started",
  },
  {
    id: "day-19",
    day: 19,
    title: "Leaderboard",
    description:
      "Is it for gaming, sports, racing, politics, top sellers, the highest grossing movies, or something else? Consider the important statistics to show, percentages, points, avatar pictures or logos, and the most critical elements. (Don't overwhelm the users with too much information)",
    status: "not-started",
  },
  {
    id: "day-20",
    day: 20,
    title: "Location Tracker",
    description:
      "Consider the icon, placement, and purpose of the location. Are you mapping something? Is it a tracking beacon to find a friend or a tracking device such as a phone? Is the NSA or FBI tracking you? ;)",
    status: "not-started",
  },
  {
    id: "day-21",
    day: 21,
    title: "Home Monitoring Dashboard",
    description:
      "Design a home monitoring dashboard. Be creative! What would make a dashboard visually appealing and fun to use, while also being mindful of its function? Try to make it a realistic exercise as if it were your own dashboard... one that you need to refer to daily. What is the most relevant data and what's the most appropriate placement for it?",
    status: "not-started",
  },
  {
    id: "day-22",
    day: 22,
    title: "Search",
    description:
      "Design something search related. It could be a search bar, an advanced search window, or a search function. It could even be a page to search for hotel rooms, homes for sale, plane tickets, concert seats, or something else. ",
    status: "not-started",
  },
  {
    id: "day-23",
    day: 23,
    title: "Onboarding",
    description:
      "Are you recruiting people for an organization? Are people signing up for a new service or website? Is it welcoming people into a mobile app? Onboarding might seem trivial, but it's the first experience your users have with your product or service. It's like the first page of a book and it can instantly excite them. If not implemented well, a bad onboarding experience could turn someone off of a brand completely.",
    status: "not-started",
  },
  {
    id: "day-24",
    day: 24,
    title: "Boarding Pass",
    description:
      "Consider the origin, the destination, gates, seats, the airline, etc. Is it for a multi-stop trip, round-trip, or one-way journey? Boarding passes are sometimes used to promote additional information such as credit card offers, frequent flyer programs, or partner deals with local hotels and resorts.",
    status: "not-started",
  },
  {
    id: "day-25",
    day: 25,
    title: "TV App",
    description:
      "What type of app is it? What are the features/controls such as volume, favorites, closed captions, or other languages? Does it have a carousel selection feature? Would it be important to have a “Continue Watching” area? Or other recommendations such as most viewed, recently added, etc.?",
    status: "not-started",
  },
  {
    id: "day-26",
    day: 26,
    title: "Subscribe",
    description:
      "What is a person subscribing to? A streaming service, a video course, or a consultation service? Is it just a button or a widget? What type of information are you looking to capture from the user? Their name and email? Their country, state, or postal code? Age consent? Something else?",
    status: "not-started",
  },
  {
    id: "day-27",
    day: 27,
    title: "Dropdown",
    description:
      "Is it a menu dropdown? Or a tip that's dropped down during a tutorial? Or inside of a software tool to show more features? What extra information is displayed? The current price of gold? A login/logout button? Menu selections?",
    status: "not-started",
  },
  {
    id: "day-28",
    day: 28,
    title: "Contact Page",
    description:
      "Is it for customer support? A purchase inquiry? To schedule an appointment? Is it a full page or just a form? Imagine a scenario and the most important feature it would require. Contact pages are some of the most visited pages on websites so it's important to have the most critical information, but not so much that people get lost.",
    status: "not-started",
  },
  {
    id: "day-29",
    day: 29,
    title: "Map Design",
    description:
      "Not one of those old school paper ones though. Actually, that might be kinda neat. ;)What type of information should it have? Should its color scheme compliment the brand? Is it for food delivery? Or an interactive map of train stations?",
    status: "not-started",
  },
  {
    id: "day-30",
    day: 30,
    title: "Pricing",
    description:
      "Is it a pricing table for a SaaS website? An in-app purchase? Or upgrade options for a restaurant menu? Displaying prices in an easy-to-read format is a good design and business practice. Make the price obvious and don't try to hide anything. Overly complex pricing tables or designs create confusion and consequently a lack of trust… bad for both business and design.",
    status: "not-started",
  },
  {
    id: "day-31",
    day: 31,
    title: "File Upload",
    description:
      "Is it the loading screen and an icon? A progress element? Are folders being uploaded by flying across the screen like Ghostbusters? ;) Would a user need to input additional information such as tax data or attach an image (like an identification card) during the process?",
    status: "not-started",
  },
  {
    id: "day-32",
    day: 32,
    title: "Crowdfunding",
    description:
      "Keep in mind the purpose... raising funds. It's important to make a design simple and compelling if you're seeking money. Is it for startups to raise money from investors? (Such as on WeFunder, Republic, StartEngine) Or raising funds for a community cause like funding the restoration of a historical monument? So what's really important? The number of contributors, the total amount raised, campaign details, and highlights? Also consider size, imagery, placement, slogans, etc.",
    status: "not-started",
  },
  {
    id: "day-33",
    day: 33,
    title: "Customize Product",
    description:
      "Design something related to customizing a product. It could be a custom t-shirt, stickers, shoes, etc. Or is this someone customizing their phone's text and lock screen? What elements does a custom product need? A logo, an image, extra text, or something else? ",
    status: "not-started",
  },
  {
    id: "day-34",
    day: 34,
    title: "Automotive Interface",
    description:
      "Consider the elements you'd want and need in your own vehicle's dashboard. If you don't have a car, think of what's needed to control one in a video game, a VR headset, or in a movie. Be creative, yet logical.",
    status: "not-started",
  },
  {
    id: "day-35",
    day: 35,
    title: "Blog Post",
    description:
      "Consider what's important- the content of course. Also consider the author, date, category, comments, layout, etc. Are you viewing it as the author (with extra features for editing content) or a reader?",
    status: "not-started",
  },
  {
    id: "day-36",
    day: 36,
    title: "Special Offer",
    description:
      "Design a promo. What is the product and how is it being promoted? Is it an email promotion, a clearance item on a website, a “Buy One, Get One” offer, or something else? Is it the discount size or percentage that's important? Does it look compelling?",
    status: "not-started",
  },
  {
    id: "day-37",
    day: 37,
    title: "Weather Design",
    description:
      "It could be a UI for a mobile app, a web app, or something completely different such as a weather alert widget. Consider its elements: city, temperature, forecasts, colors, weather icons/graphics, etc. Is it being viewed on a smart watch or phone? Is it a weather warning for a storm or is it something unique such as something for a farm?",
    status: "not-started",
  },
  {
    id: "day-38",
    day: 38,
    title: "Calendar",
    description:
      "Design a Calendar focused element. Is it for scheduling an appointment? A reservation, flight, hotel, or a health check? Is it a calendar reminder feature? Is it used in email or for something else entirely? It could even be a calendar booking page for design services. Or an interactive online holiday calendar.",
    status: "not-started",
  },
  {
    id: "day-39",
    day: 39,
    title: "Testimonial",
    description:
      "Create a design with some kind of testimonial. It could be a book or product review testimonial. Who is the customer? What did they buy and why did they enjoy it? Is there a star rating or a 1-10 style review? Testimonials help build trust with an audience so these can be especially important elements for a website.",
    status: "not-started",
  },
  {
    id: "day-40",
    day: 40,
    title: "Recipe or Food Order",
    description:
      "Design a food related recipe. It could displayed on a tablet while someone is cooking in their home kitchen or in the back of a restaurant on a Kitchen Display System (aka KDS). Clarity is important because a restaurant or online food ordering service needs to be simple in order to be fast for customers to find what they want and how it can be customized. Confusing menus or recipes slow down the kitchen and the entire business.",
    status: "not-started",
  },
  {
    id: "day-41",
    day: 41,
    title: "Workout / Exercise",
    description:
      "Create a UI related for monitoring health or tracking various workout/training routines. It could be for a personal workout, for a team, or even gym equipment tracking customer workouts. Making a health app that is fun to use makes the entire experience more enjoyable and therefor more likely to be repeated. Tip: exercise regularly to get blood and oxygen flowing for health, better sleep, and to boost your creative mood. It's easier to be happy if you're healthy. :)",
    status: "not-started",
  },
  {
    id: "day-42",
    day: 42,
    title: "To-Do List or Manager",
    description:
      "Everyone has priorities. Working in technology is a never-ending flow of new projects, requests, revisions, and more. What productivity software or tool would you use to improve your workflow?",
    status: "not-started",
  },
  {
    id: "day-43",
    day: 43,
    title: "Food Menu Items",
    description:
      "Create a food menu for a bar or restaurant. It could be a simple coffee shop or a more complex menu such as for a pizza restaurant (with multiple sizes, toppings, variations, etc.). Or is it for a touchscreen tabletop ordering system at a nightclub? You can be creative here.",
    status: "not-started",
  },
  {
    id: "day-44",
    day: 44,
    title: "Favorites",
    description:
      "Bookstores, video games, podcasts, and streaming services all have a favorites section. Are you favoriting certain items? Or are you favoriting something on a website such as Facebook, Behance, Github, etc.?",
    status: "not-started",
  },
  {
    id: "day-45",
    day: 45,
    title: "Info Card",
    description:
      "These are designed to be snippets of information - so not too much, just the basics. What's being viewed? Is it a small information area about a home for sale? (square footage, # of bathrooms and bedrooms, year built) Or a gamer's profile page with some recent statistics?",
    status: "not-started",
  },
  {
    id: "day-46",
    day: 46,
    title: "Invoice",
    description:
      "Invoices are generally sent for products or services before or after fulfillment. For example, a web designer or software engineer might send an invoice for a new website with 25% as a downpayment and the remainder on completion. This is not a quote or proposal, so it should have only the required information for payment, services rendered, prices, etc. and ideally a link/button to receive payment. Tip: An invoice is a nice opportunity to thank a client. Uplifting comments can put clients in a good mood. If you know them in a personal/friendly context, sometimes a meme can help break the ice on making a payment. :)",
    status: "not-started",
  },
  {
    id: "day-47",
    day: 47,
    title: "Activity Feed",
    description:
      "Everyday we're overwhelmed with information. Design an activity feed that's fun and useful. It could be for a news reader app, a social media site, or for inspirational travel content updates.",
    status: "not-started",
  },
  {
    id: "day-48",
    day: 48,
    title: "Coming Soon",
    description:
      "What's coming soon? A new video game? A new blockbuster film? When and where is it being released? Or is this for a specific company or product announcement? Some brands are famous for their teaser and coming soon pages. It's an opportunity to excite and/or educate your users.",
    status: "not-started",
  },
  {
    id: "day-49",
    day: 49,
    title: "Notification",
    description:
      "Today's challenge is super simple. Just a plain and easy notification. It could be a daily reminder to take medication, a new message received notification, or app updates.",
    status: "not-started",
  },
  {
    id: "day-50",
    day: 50,
    title: "Job Listing or Hiring Page",
    description:
      "Who is hiring? What's the position? Where is it located? Are there benefits? Hiring pages are a great opportunity for brands to give fun facts about their team. That can help prospective employees learn something interesting that could inspire them. For example, a team page might say We take an annual team vacation to Hawaii.",
    status: "not-started",
  },
  {
    id: "day-51",
    day: 51,
    title: "Press Page",
    description:
      "Create a Press Page design. Think about who you are representing and what important information you should convey. Is it for a new startup? A huge global brand? A nonprofit organization? Or a small local business? Or is it actually for a person such as a celebrity, athlete, politician, etc.?",
    status: "not-started",
  },
  {
    id: "day-52",
    day: 52,
    title: "Logo Design",
    description:
      "Will it be animated? In what capacity will it be used? Branding is generally a serious matter for most companies and the considerations for size, placement, color, etc. should be thought out carefully. The biggest brands don't always have the best logos. A great logo is one that compliments a specific purpose and not necessarily a generic image or name. For example, Nike uses a swoosh which shows motion and speed - core parts of their running image. Mailchimp showcases a monkey rather than an “email” icon and it adds depth and character to their brand.",
    status: "not-started",
  },
  {
    id: "day-53",
    day: 53,
    title: "Website Navigation",
    description:
      "Most websites have a navbar that's stuffed with links and logos. What could you design that's both functional and appealing? How could you make it unique?",
    status: "not-started",
  },
  {
    id: "day-54",
    day: 54,
    title: "Confirmation",
    description:
      "Design a Confirmation UI element. What's being confirmed? Is it confirming an address, order, shipping, plane tickets, hotel reservation, dinner reservation, booking tickets to the opera, or something else? Also consider where it's occurring (i.e. website, mobile app, email confirmation, etc.)",
    status: "not-started",
  },
];
