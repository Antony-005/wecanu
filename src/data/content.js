export const club = {
  fullName: "Wildlife & Environmental Club of Africa Nazarene University",
  acronym: "WECANU",
  slogan: "Don't Be Greedy, Be Green",
  founded: 2009,
  email: "wildlifeandenviromentalclub@anu.ac.ke",
  address: "P.O. Box 53067, Nairobi, Kenya",
  mission: "Leave the world better than we found it.",
  vision:
    "To be the most recommended club not just in our institution but also globally — because what we get involved in incorporates the three C's: character, competence and community in all club activities.",
  history:
    "WECANU began in 2009 as two separate entities — the Wildlife Club, led by Mrs Beth Wokabi, and the Environmental Club, led by Professor Isaac Kigatiira — which later merged into one club under the guidance of the Environment and Natural Resource Management Department. The club sits within Students Services and draws members from every school at ANU: Law, Religion, Science & Technology, Business, and Humanities & Social Sciences.",
};

export const objectives = [
  "Educate members and non-members on environmental issues.",
  "Encourage the preservation and upgrading of flora and fauna through wildlife conservation activities.",
  "Make an environmental impact within and beyond ANU.",
  "Advocate for responsible tourism.",
  "Incorporate the 3 C's: character, competence and community.",
  "Motivate students to keep the environment clean and green.",
  "Conduct ANU Creation Care / Green Week.",
];

export const threeCs = [
  { letter: "C", word: "Character", detail: "Building integrity in how members show up for the club and each other." },
  { letter: "C", word: "Competence", detail: "Real skill and knowledge in conservation, built through hands-on activity." },
  { letter: "C", word: "Community", detail: "A club that pulls in every school at ANU, and reaches beyond campus." },
];

// Duties are keyed by role name — must match the `role` strings used in
// teamsByYear below exactly, or the Team page won't be able to look up
// the duties text for that card.
export const executiveRoles = [
  { role: "Chairperson", duties: "Calls and chairs club meetings, keeps the club aligned with its mission, represents WECANU at external meetings and forums." },
  { role: "Vice Chairperson", duties: "Stands in for the Chairperson, represents the club at partner organisations, keeps the other offices running smoothly." },
  { role: "Secretary", duties: "Takes minutes at meetings, designs posters and reminders for upcoming events, keeps the club's records." },
  { role: "Organising Secretary", duties: "Plans and organises club activities and events, keeps time during club activities." },
  { role: "Treasurer", duties: "Keeps the club's accounts, handles payments, receives membership and activity fees." },
  { role: "Club Welfare & International Students Relation", duties: "Organises meeting venues and welfare, supports international members, markets club activities internationally." },
  { role: "Mr. Environment", subtitle: "Crowned during Green Week", duties: "Branding club merchandise, managing external communications and social media, handling invitations to and from partner organisations." },
  { role: "Miss Environment", subtitle: "Crowned during Green Week", duties: "Branding club merchandise, managing external communications and social media, handling invitations to and from partner organisations." },
  // {
  //   role: "Student Networking",
  //   duties: "Organises off-campus activities, represents the club in outside forums, builds partnerships with other organisations.",
  // },
];

export const exOfficio = [
  { role: "Patron", name: "John Henry" },
  { role: "Dean of Students", name: "Dr. Victor Boiyo" },
  { role: "Alumni Representative", name: "Cliff Donley" },
];

export const teamsByYear = [
  {
    year: "2025/26",
    members: [
      { role: "Chairperson", name: "Jeckly Mucua/ Mitchelle Njoroge" },
      { role: "Vice Chairperson", name: "Collins Ongeri" },
      { role: "Secretary", name: "Gloria Liona" },
      { role: "Organising Secretary", name: "Atolile Righton" },
      { role: "Treasurer", name: "Paula Mutwiri" },
      { role: "Club Welfare & International Students Relation", name: "Edgar Humphrey" },
      { role: "Mr. Environment", name: "Ian Oigo" },
      { role: "Miss Environment", name: "Stacey Irungu" },
    ],
  },
  {
    year: "2024/25",
    members: [
      { role: "Chairperson", name: "Antony Ochieng" },
      { role: "Vice Chairperson", name: "Maureen Wainaina/ Kheityna Ishimwe" },
      { role: "Secretary", name: "Mitchelle Njoroge/ Nicole Akinyi" },
      { role: "Organising Secretary", name: "Crispinus Karume" },
      { role: "Treasurer", name: "Natalie Edris" },
      { role: "Club Welfare & International Students Relation", name: "Barrack Oyoo" },
      { role: "Mr. Environment", name: "Eric Macharia" },
      { role: "Miss Environment", name: "Debbie Maina" },
    ],
  },
  {
    year: "2023/24",
    members: [
      { role: "Chairperson", name: "Shemaiah Clowers" },
      { role: "Vice Chairperson", name: "Purity" },
      { role: "Secretary", name: "Debbie Maina" },
      { role: "Organising Secretary", name: "Antony Ochieng" },
      { role: "Treasurer", name: "Maureen Wainaina" },
      { role: "Club Welfare & International Students Relation", name: "Jeckly Mucua" },
      { role: "Mr. Environment", name: "Jeckly Mucua" },
      { role: "Miss Environment", name: "Beth Wangui" },
    ],
  },
  {
    year: "2022/23",
    members: [
      { role: "Chairperson", name: "Hardley Shiwani" },
      { role: "Vice Chairperson", name: "Shemaiah Clowers" },
      { role: "Secretary", name: "Ivy Hariet" },
      { role: "Organising Secretary", name: "Vitalis Chirchir" },
      { role: "Treasurer", name: "Clinton Omweri" },
      { role: "Club Welfare & International Students Relation", name: "Kheityna Ishimwe" },
      { role: "Mr. Environment", name: "Latifa Hassan" },
      { role: "Miss Environment", name: "Joseph Joshua Sila Jabali" },
    ],
  },
];

export const membershipTiers = [
  {
    name: "Full Membership",
    audience: "Current ANU students",
    points: [
      "Active, year-round participation in club activities",
      "Eligible to run for any club office",
      "Full voting rights to elect (and remove) club leaders",
      "Can be selected to represent the club at conferences, seminars and competitions",
    ],
  },
  {
    name: "Alumni Membership",
    audience: "Former members, post-graduation",
    points: [
      "Must have been an active registered member while a student (10+ events minimum)",
      "Eligible to join the alumni forum and mentor current members",
      "Eligible for election to the executive board as an advisor",
    ],
  },
  {
    name: "Staff Membership",
    audience: "Current ANU staff",
    points: [
      "Open to any current staff member",
      "Can be elected to help patronise the club",
      "Can be selected to represent the club at conferences, seminars and competitions",
    ],
  },
];

export const meetingSchedule = [
  { day: "Tuesday", time: "4:00 PM", where: "TBC", type: "Weekly club meeting" },
];

export const activities = [
  { title: "Weekly Club Meetings", cadence: "Every Tuesday, 4:00 PM", blurb: "The club's regular gathering point — updates, planning, and where new members get folded in." },
  { title: "Clean-Ups", cadence: "On & off campus", blurb: "Hands-on litter and waste clean-up drives around ANU and the wider community." },
  { title: "Tree Planting", cadence: "On & off campus", blurb: "Restoring green cover through planting drives on and beyond campus." },
  { title: "Citizen Science", cadence: "e.g. The Great Southern Bioblitz", blurb: "Members contribute real biodiversity data using the iNaturalist app." },
  { title: "Outside Club Events", cadence: "e.g. KIUESA events", blurb: "Collaborations and joint events with environmental clubs at other universities." },
  { title: "Team Building", cadence: "", blurb: "Activities that strengthen the club as a community, not just a committee." },
  { title: "Trips & Adventures", cadence: "", blurb: "Excursions that put members directly in Kenya's wild spaces." },
  { title: "Bonfire Nights", cadence: "", blurb: "Relaxed evening gatherings for members to connect outside formal meetings." },
  { title: "Environmental Competitions", cadence: "", blurb: "Contests that test and sharpen members' environmental knowledge and skills." },
  { title: "Environmental Awareness Walks", cadence: "", blurb: "Walks in regard to raising awareness in regard to the environment." },
  { title: "Green Week", cadence: "Annual flagship event", blurb: "WECANU's biggest event of the year, a week of conservation campaigns, activities, and the crowning of Mr & Miss ANU Environment." },
];

// URLs verified via web search where possible. GAYO, Tony Wild, and KIUESA
// don't have a clearly confirmed official website (KIUESA in particular
// appears to operate mainly through social media) — url is null for those,
// so the About page renders them as plain text instead of a broken/wrong
// link. Send Antony the real links if you have them.
export const partners = [
  { name: "Giraffe Centre", url: "https://www.giraffecentre.org" },
  { name: "Wildlife Clubs of Kenya", url: "https://www.wildlifeclubsofkenya.or.ke" },
  { name: "Tony Wild", url: null },
  { name: "Nature Kenya", url: "https://naturekenya.org" },
  { name: "Kenya Wildlife Service", url: "https://www.kws.go.ke" },
  { name: "Friends of Nairobi National Park", url: "https://www.fonnap.com" },
  { name: "GAYO", url: null },
  { name: "Wildlife Direct", url: "https://wildlifedirect.org" },
  { name: "KIUESA (Kenya Inter University Environmental Students Association)", url: null },
];

export const projects = [
  {
    title: "Creation Care / Green Week",
    status: "Annual",
    blurb: "The club's flagship conservation and awareness campaign, run in line with ANU's Wesleyan-Holiness commitment to creation care.",
  },
  {
    title: "Tree Planting Initiative",
    status: "Ongoing",
    blurb: "Here, we have the initiative of adopting a tree whereby any club member/ a champion of the environment picks a tree or several of them. Then takes care of the tree by watering and weeding it until it grows fully.",
  },
  {
    title: "Citizen Science Activity",
    status: "Annual",
    blurb: "In partnership with Giraffe Centre and Tony Wild foundation, the club participates in the Great Southern Bioblitz that happens annually. They also do the same with Wildlife Direct whenever the need arises at any time of the year.",
  },
  {
    title: "Environmental Competitions",
    status: "Throughout the year",
    blurb: "WECANU participates in competitions all year round whenever such opportunities arise, and sees to it that they deliver/give their best in it.",
  },
];

export const socials = {
  instagram: "https://www.instagram.com/wecanuclub?igsi=ODg0NDdpeDhzY2I3",
  x: "https://x.com/WECANU2",
  youtube: "https://youtube.com/@enviromentnaturalresourcemanag?si=OIhbSDRINofn5WiG",
  facebook: "https://www.facebook.com/share/18FqRe4iCG/",
  tiktok: "https://www.tiktok.com/@wecanu.club?is_from_webapp=1&sender_device=pc",
};

export const contactPatron = {
  name: "John Henry",
  phone: "+254 715 042 391",
};

export const builder = {
  name: "Antony Ochieng",
  portfolio: "https://antonyochieng.co.ke",
  email: "you@example.com", // TODO: swap in your preferred contact email
};
