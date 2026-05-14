const profiles = {
 clark: {
  icon: 'images/clark-profile.jpg',
  portrait: 'images/clark-profile.jpg',
  imagePosition: 'center top',
  name: 'Clark “Not Speaking Officially” Valve',
  label: 'Civic Disclaimer Engine',
  archetype: 'Lawful Neutral · Human · Level 8 Municipal Adjacent',
  banner: 'images/clark-banner.jpg',
  

  tagline: 'Operating with authority. Posting without it.',

  bio: 'Clark operates in the space between official responsibility and personal opinion, and moves between the two without warning. He works close enough to Town Hall to sound authoritative, and far enough away to deny accountability.',

  about: [
    { icon: '🏠', text: 'Lives in <strong>Small Town, MT</strong>' },
    { icon: '🏛️', text: 'Works near Town Hall · Not technically representing it' },
    { icon: '📊', text: 'Deep knowledge of infrastructure, grants, and funding cycles' },
    { icon: '⚖️', text: 'Frequently references potential legal action' },
    { icon: '🚗', text: 'Drives a Corvette · Parks it next to a trailer' },
    { icon: '🧾', text: 'Posts public information followed by personal escalation' },
    { 
      icon: '🎨', 
      text: 'Banner: <a href="https://www.pexels.com/photo/an-orange-corvette-parked-under-a-bridge-27303585/" target="_blank">William Gevorg Urban · Pexels</a>' 
    }
  ],

  stats: {
    'CIVIC AUTHORITY': 14,
    'SELF-AWARENESS': 3,
    'LEGAL CONFIDENCE': 18,
    'FILTER': 2,
    'GRANT KNOWLEDGE': 16,
    'DISCLAIMER USAGE': 20
  },

  skills: [
    { name: 'Public Information Framing', val: '+10', prof: true },
    { name: 'Passive-Aggressive Transparency', val: '+9', prof: true },
    { name: 'Escalation to Legal Threats', val: '+11', prof: true },
    { name: 'Reading the Room', val: '-4', prof: false },
    { name: 'Separating Personal from Professional', val: '-8', prof: false }
  ],

  specialAbility: 'This Is Not the Opinion of Town Hall (At Will)',

  passiveNote: 'Passive: Liability Diffusion. Statements that would normally create consequences instead generate confusion, side conversations, and prolonged comment threads.',

  post: `Here is a good article on Larger Small Town’s water situation, and it is a strong reminder that we in Small Town are very fortunate to have an adequate water supply and leadership that prioritizes system upgrades.

  We could very easily find ourselves in the same situation if we were not continuing to replace aging infrastructure and pursue grant funding wherever possible. When rates increase, it is due to inflation and matching requirements for major projects. Over the last decade, millions have been invested while minimizing loans. We do not leave funding on the table.

  That said, conservation still matters. This has been a dry winter and snowpack is low. Everyone needs to do their part.

  At this time, no restrictions are planned. However, large water users and anyone with sprinkler systems should be prepared to follow a schedule if necessary. The goal is to maintain capacity for fire protection and the overall good of the community.

  Also, if the school continues to ignore prior concerns, there will be legal consequences.

  This is not the opinion of Town Hall.`,

  postDate: 'April 24 at 10:56 AM',
  reactions: '24',
  comments: '12 Comments',
  shares: '3 Shares',

  friends: ['veronica', 'derek', 'grant']
},
mara: {
  icon: 'images/mara-profile.jpg',
  portrait: 'images/mara-profile.jpg',
  imagePosition: 'center top',
  name: 'Mara “Vitals Check” Greenee',
  label: 'Trauma Authority Loop',
  archetype: 'Neutral Good · Human · Level 6 Volunteer Responder',
  banner: 'images/mara-banner.jpg',
  


  tagline: 'Healing, but also explaining.',

  bio: 'Mara presents herself as both caretaker and interpreter of complex systems. She volunteers as a responder in her community and often positions herself as someone who understands what others are missing. Her posts tend to blend genuine concern with conclusions that are not always grounded in verifiable information.',

  about: [
    { icon: '🏠', text: 'Lives in <strong>Small Town, MT</strong>' },
    { icon: '🚑', text: 'Volunteer responder · Talks about it frequently' },
    { icon: '📚', text: 'Self-taught in health topics · High confidence in conclusions' },
    { icon: '🧠', text: 'Frames personal experience as expertise' },
    { icon: '🗣️', text: 'Shares information with certainty, regardless of source quality' },
    { icon: '🧩', text: 'Past experiences strongly shape current worldview' },
    { 
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/goat-at-farm-20952546/" target="_blank">Frank Van Esch · Pexels</a>'
    }
  ],

  stats: {
    'PERCEIVED INTELLIGENCE': 17,
    'ACTUAL VERIFICATION': 3,
    'EMPATHY': 14,
    'SELF-REFLECTION': 5,
    'CONFIDENCE': 18,
    'FACT-CHECKING': 2
  },

  skills: [
    { name: 'Confident Explanation', val: '+10', prof: true },
    { name: 'Pattern Recognition (Unverified)', val: '+9', prof: true },
    { name: 'Personal Narrative Framing', val: '+8', prof: true },
    { name: 'Source Evaluation', val: '-6', prof: false },
    { name: 'Letting Information Go', val: '-5', prof: false }
  ],

  specialAbility: 'I’ve Seen Things You Haven’t (2/day)',

  passiveNote: 'Passive: Lived Experience Override. Personal anecdotes take priority over external information, regardless of source quality.',

  post: `Vitals check at the Senior Center this Monday at 5:30pm.

It’s important to stay informed about what’s really going on with our health and not just accept everything at face value.

There’s a lot more people should be aware of, especially when it comes to long-term effects that aren’t always talked about.

Just something to think about.`,

  postDate: 'March 25',
  reactions: '2',
  comments: '1 Comment',
  shares: '2 Shares',

  friends: ['clark', 'veronica', 'derek']
},
veronica: {
  icon: 'images/veronica-profile.jpg',
  name: 'Veronica “Cabernet Live” Vale',
  portrait: 'images/veronica-profile.jpg',
  imagePosition: 'center top',
  label: 'Performative Socialite Spiral',
  archetype: 'Chaotic Neutral · Human · Level 7 Lifestyle Curator',
  banner: 'images/veronica-banner.jpg',

  tagline: 'Curating the moment. Broadcasting the feeling.',

  bio: 'Veronica treats social media as both stage and audience. She presents her life as a curated sequence of moments, often elevated beyond their original context. Her posts shift quickly from celebratory to confrontational, especially after extended evening “reflection.”',

  about: [
    { icon: '🏠', text: 'Lives in <strong>Small Town, MT</strong> · Prominent neighborhood presence' },
    { icon: '🍷', text: 'Enjoys wine as both lifestyle and narrative device' },
    { icon: '🎭', text: 'Frames everyday events as high-stakes social episodes' },
    { icon: '📣', text: 'Publicly reacts to community decisions in real time' },
    { icon: '🧠', text: 'High emotional expression · Low situational filtering' },
    { icon: '🗑️', text: 'Deletes posts after backlash or direct confrontation' },
    { 
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/house-surrounded-with-trees-photo-1671846/" target="_blank">Benjamin Lehman · Pexels</a>'
    }
  ],

  stats: {
    'PERFORMATIVE CHARISMA': 17,
    'IMPULSE CONTROL': 4,
    'PUBLIC DRAMA OUTPUT': 18,
    'ACCOUNTABILITY': 5,
    'SOCIAL AWARENESS': 6,
    'POST DELETION SPEED': 16
  },

  skills: [
    { name: 'Narrative Escalation', val: '+10', prof: true },
    { name: 'Emotional Broadcasting', val: '+9', prof: true },
    { name: 'Event Reframing', val: '+8', prof: true },
    { name: 'Timing Awareness', val: '-5', prof: false },
    { name: 'Private Conflict Resolution', val: '-6', prof: false }
  ],

  specialAbility: '“Going Live Emotionally” (1/night)',

  passiveNote: 'Passive: Delete After Impact. Posts remain visible long enough to generate reactions before being removed, preserving the outcome while obscuring the source.',

  post: `I’m honestly shocked at the decision to cancel such a beloved community event.

Some of us put a lot of time and energy into making these nights special, and it’s disappointing to see that effort dismissed over concerns that feel… selective.

There are ways to manage environments responsibly without shutting things down entirely.

Just because something requires oversight doesn’t mean it should be removed altogether.

Also, I’m starting to question certain leadership figures and the kind of image they’re choosing to project lately. Not exactly the example I would expect for this community.

Some comparisons are starting to feel a little too accurate.

Just saying.

Also, I’m starting to question certain leadership figures and the kind of image they’re choosing to project lately.

Not exactly the example I would expect for this community.

At a certain point, the comparisons start writing themselves.

And no, I’m not the only one noticing.`,


  postDate: 'Late Evening',
  reactions: '14',
  comments: '23 Comments',
  shares: '2 Shares',

  friends: ['derek', 'grant']
},
derek: {
  icon: 'images/derek-profile.jpg',
  portrait: 'images/derek-profile.jpg',
  imagePosition: 'center center',
  name: 'Derek "Is This Still Available" Vance',
  label: 'YardSale Lurker',
  archetype: 'True Neutral · Human · Level 5 Opportunistic Buyer',
  banner: 'images/derek-banner.jpg',

  tagline: 'Interested. Not desperate.',

  bio: 'Derek exists on facepalm primarily to locate underpriced goods. He lives just far enough outside of Small Town, MT to not fully understand the social context, but close enough to participate when it benefits him. He occasionally comments to appear normal, but the timing and tone rarely align with the conversation.',

  about: [
    { icon: '🏙️', text: 'Lives in <strong>Nearby City, MT</strong> (30 minutes away)' },
    { icon: '🛒', text: 'Uses <strong>YardSale</strong> almost exclusively' },
    { icon: '🔧', text: 'Looking for instrument parts, computer components, and anything useful' },
    { icon: '💬', text: 'Occasionally comments to appear socially active' },
    { icon: '⏱️', text: 'Response timing is often slightly off' },
    { icon: '📦', text: 'Prefers deals that feel like he won the interaction' },
    { 
      icon: '🎨', 
      text: 'Banner: <a href="https://unsplash.com/photos/audio-mixer-set-4h0HqC3K4-c" target="_blank">Martijn Baudoin · Unsplash</a>' 
    }
  ],

  stats: {
    'PRICE AWARENESS': 18,
    'SOCIAL TIMING': 3,
    'PERSISTENCE': 16,
    'CONTEXT READING': 2,
    'DEAL CONFIDENCE': 19,
    'SELF-AWARENESS': 4
  },

  skills: [
    { name: 'Is This Still Available', val: '+12', prof: true },
    { name: 'Lowball Framing', val: '+10', prof: true },
    { name: 'Part Compatibility Guessing', val: '+8', prof: true },
    { name: 'Reading the Room', val: '-6', prof: false },
    { name: 'Ending Conversations Normally', val: '-5', prof: false }
  ],

  specialAbility: 'DM Sent (Passive)',

  passiveNote: 'Passive: Can initiate a private message from any public post regardless of context. Messages often lack greeting, punctuation, or emotional temperature.',

  post: `Interested.

Is this still available?

Would you take $40?

Also where are you located.

I am in the city but could come down this weekend depending.

Let me know.

Thanks.`,

  postDate: 'Marketplace-adjacent evening',
  reactions: '3',
  comments: '1 Comment',
  shares: '3 Shares',

  friends: ['veronica', 'grant']
},
grant: {
  icon: 'images/grant-profile.jpg',
  portrait: 'images/grant-profile.jpg',
  imagePosition: 'center center',
  name: 'Grant "Market Rate" Halvorsen',
  label: 'Extractive Opportunist',
  archetype: 'Lawful Evil · Human · Level 9 Asset Repositioner',
  banner: 'images/grant-banner.jpg',

  tagline: 'Improving the area. One property at a time.',

  bio: 'Grant presents himself as a community-minded investor, focused on “improving” underutilized properties. His projects consistently result in higher prices and reduced accessibility, which he frames as necessary progress. When deals do not go his way, his tone shifts quickly from polite to pointed, often reframing rejection as incompetence on the part of others.',

  about: [
    { icon: '🏠', text: 'Acquires older homes for renovation and repositioning' },
    { icon: '📈', text: 'Prices units at “market rate,” regardless of local context' },
    { icon: '🚗', text: 'Works at a used car dealership · strong sales background' },
    { icon: '📉', text: 'Reacts poorly when business is not conducted through him' },
    { icon: '✉️', text: 'Prefers indirect communication when expressing frustration' },
    { icon: '🍸', text: 'Planning to open a bar despite limited industry experience' },
    { 
      icon: '🎨', 
      text: 'Banner: <a href="https://unsplash.com/photos/modern-living-room-with-neutral-tones-and-natural-elements-tPz3Lhh3z_4" target="_blank">Brian Zajac · Unsplash</a>' 
    }
  ],

  stats: {
    'PRICE OPTIMIZATION': 19,
    'COMMUNITY EMPATHY': 2,
    'PERSISTENCE': 17,
    'REPUTATION AWARENESS': 5,
    'NEGOTIATION PRESSURE': 18,
    'SELF-JUSTIFICATION': 20
  },

  skills: [
    { name: 'Friendly Opening', val: '+10', prof: true },
    { name: 'Price Anchoring', val: '+12', prof: true },
    { name: 'Reframing Rejection', val: '+11', prof: true },
    { name: 'Reading the Room', val: '-4', prof: false },
    { name: 'Letting Things Go', val: '-6', prof: false }
  ],

  specialAbility: '“It’s Just Business” (Active)',

  passiveNote: 'Passive: Market Correction. Any criticism is internally reframed as misunderstanding, allowing continued behavior without adjustment.',

  post: `Just finished another property that was sitting unused for years.

It’s amazing what a little vision and investment can do for a place.

I know some people don’t like seeing prices go up, but that’s what happens when something is actually improved and brought up to standard.

If we want this area to grow, we have to stop thinking small.

Opportunities don’t wait around forever.`,

  postDate: 'Midday · Work Break',
  reactions: '11',
  comments: '18 Comments',
  shares: '3 Shares',

  friends: ['clark', 'mara']},
bev: {
  icon: 'images/bev-profile.jpg',
  portrait: 'images/bev-profile.jpg',
  imagePosition: 'center top',
  name: 'Bev "Just a Trim" Tanglewood',
  label: 'Gift Shop Expansionist',
  archetype: 'Neutral Evil · Human · Level 11 Legacy Stylist',
  banner: 'images/bev-banner.jpg',

  tagline: 'Serving the community since 1986. Whether it asked or not.',

  bio: 'Bev has been cutting hair since the mid-80s and speaks with the confidence of someone who stopped updating her techniques around the same time. She presents herself as sweet, helpful, and community-minded, but her generosity often arrives attached to boxes, displays, racks, and a suggestion that someone else should make room for her things.',

  about: [
    { icon: '✂️', text: 'Cutting hair since the mid-80s · Results vary dramatically' },
    { icon: '🏠', text: 'Lives in <strong>Small Town, MT</strong>' },
    { icon: '📦', text: 'Owns more inventory than any business technically requires' },
    { icon: '🎁', text: 'Wants to add a gift shop section to every available surface' },
    { icon: '😊', text: 'Polite tone · aggressive spatial expectations' },
    { icon: '🪑', text: 'Has never seen an empty corner she did not consider underused' },
    { 
      icon: '🎨', 
      text: 'Banner: <a href="https://unsplash.com/photos/collection-of-various-antique-objects-and-toys-x-OxyNc-6gc" target="_blank">Melanie Chan · Unsplash</a>' 
    }
  ],

  stats: {
    'LEGACY CONFIDENCE': 18,
    'HAIRCUT ACCURACY': 3,
    'INVENTORY VOLUME': 20,
    'BOUNDARY AWARENESS': 2,
    'FAKE NICE': 17,
    'DISPLAY RACK DENSITY': 19
  },

  skills: [
    { name: 'Backhanded Compliment', val: '+10', prof: true },
    { name: 'Unrequested Merchandising', val: '+12', prof: true },
    { name: 'Creating Shelf Space From Nothing', val: '+9', prof: true },
    { name: 'Modern Layering Technique', val: '-7', prof: false },
    { name: 'Accepting No', val: '-6', prof: false }
  ],

  specialAbility: 'I Brought a Few Things (Recharge 5-6)',

  passiveNote: 'Passive: Inventory Creep. Any location Bev visits has a 40% chance of gaining a small display of handmade items, seasonal décor, or mystery stock with unclear pricing.',

  post: `I have a few cute little things that would look just darling in someone’s front area.

Nothing big.

Just a small display.

Maybe a shelf.

Or a table.

People love having something to browse while they wait, and honestly it would bring a little charm.

Some places could use that.`,

  postDate: 'Tuesday · After Closing',
  reactions: '9',
  comments: '14 Comments',
  shares: '1 Share',

  friends: ['veronica', 'grant', 'mara']
},
rick: {
  icon: 'images/rick-profile.jpg',
  portrait: 'images/rick-profile.jpg',
  imagePosition: 'center top',
  name: 'Rick "Hammer Down" Kincaid',
  label: 'Single-Issue Signal Amplifier',
  archetype: 'Lawful Chaotic · Human · Level 10 Independent Operator',
  banner: 'images/rick-banner.jpg',

  tagline: 'Not everything is about it. Most things are though.',

  bio: 'Rick spends most of his time on the road but treats social media as a broadcast channel for his core beliefs. Nearly any topic can be redirected into a larger point he feels strongly about. Rising costs, long drives, and everyday inconveniences are consistently reframed as acceptable tradeoffs in service of something he considers more important.',

  about: [
    { icon: '🚛', text: 'Long-haul truck driver · secondary identity to online presence' },
    { icon: '📢', text: 'Redirects most conversations toward a single central theme' },
    { icon: '⛽', text: 'Frames higher costs as a necessary and acceptable tradeoff' },
    { icon: '🧠', text: 'High certainty · low interest in counterpoints' },
    { icon: '📻', text: 'Consumes commentary that reinforces existing views' },
    { 
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/red-and-silver-truck-on-asphalt-road-6574072/" target="_blank">Quintin Gellar · Pexels</a>'
    }
  ],

  stats: {
    'CERTAINTY': 20,
    'TOPIC REDIRECTION': 19,
    'ENDURANCE': 17,
    'COST TOLERANCE': 16,
    'SOURCE VARIETY': 3,
    'SELF-REFLECTION': 2
  },

  skills: [
    { name: 'Conversation Redirect', val: '+12', prof: true },
    { name: 'Reframing Costs as Sacrifice', val: '+10', prof: true },
    { name: 'Confident Assertion', val: '+9', prof: true },
    { name: 'Nuanced Discussion', val: '-6', prof: false },
    { name: 'Letting Topics Stay Local', val: '-7', prof: false }
  ],

  specialAbility: 'Central Theme Override (At Will)',

  passiveNote: 'Passive: Topic Gravity. Any discussion has a high chance of being pulled toward Rick’s primary focus within two responses.',

  post: `Fuel prices are up again but honestly I don’t mind paying more if it means things are headed in the right direction.

Some people complain about every little increase but don’t look at the bigger picture.

You have to be willing to put something in if you want to get something out.

I’ve been all over this country and I can tell you there’s a reason some people see it and some people don’t.

Not everything is about convenience.`,

  postDate: 'Highway · Late Afternoon',
  reactions: '21',
  comments: '34 Comments',
  shares: '7 Shares',

  friends: ['clark', 'grant']
},
evan: {
  icon: 'images/evan-profile.jpg',
  portrait: 'images/evan-profile.jpg',
  imagePosition: 'center top',
  name: 'Evan "Have You Tried Restarting" Mercer',
  label: 'Local Systems Fixer',
  archetype: 'Neutral Good · Human · Level 7 IT Generalist',
  banner: 'images/evan-banner.jpg',

  tagline: 'It’s probably a simple fix. It rarely is.',

  bio: 'Evan repairs computers locally and is known for being reliable, patient, and quietly overbooked. He spends most of his time troubleshooting other people’s problems while his own environment becomes increasingly chaotic. He has developed an intense interest in karaoke systems, specifically the setup and calibration side, despite having no interest in performing.',

  about: [
    { icon: '💻', text: 'Repairs computers and handles local IT issues' },
    { icon: '🧰', text: 'Comfortable with both hardware and software troubleshooting' },
    { icon: '📍', text: 'Operates locally in <strong>Small Town, MT</strong>' },
    { icon: '🐕', text: 'Lives with a large number of dogs (not all his)' },
    { icon: '🎤', text: 'Obsessed with karaoke system setup · does not sing' },
    { icon: '🔊', text: 'Will optimize audio levels for events he does not attend' },
    { 
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/a-satellite-dish-on-a-roof-under-a-starry-sky-27347491/" target="_blank">Lucas Andrade · Pexels</a>'
    }
  ],

   stats: {
    'TECHNICAL SKILL': 18,
    'PATIENCE': 17,
    'FOCUS': 10,
    'ENVIRONMENTAL CONTROL': 4,
    'PROBLEM SOLVING': 19,
    'PERSONAL BOUNDARIES': 6
  },

  skills: [
    { name: 'Troubleshooting', val: '+12', prof: true },
    { name: 'Hardware Repair', val: '+10', prof: true },
    { name: 'Audio Calibration', val: '+11', prof: true },
    { name: 'Explaining Simple Fixes', val: '+9', prof: true },
    { name: 'Maintaining Order at Home', val: '-6', prof: false },
    { name: 'Participating in Karaoke', val: '-8', prof: false }
  ],

  specialAbility: 'Perfect Levels (At Will)',

  passiveNote: 'Passive: Setup Over Performance. Gains satisfaction from preparing systems for optimal use, regardless of whether he participates in the activity.',

  post: `If anyone is setting up karaoke this weekend make sure your input levels are balanced before people start.

Most of the issues I see are from gain being set too high on the mic and not enough separation from the backing track.

I can help get it dialed in if needed.

Also if I don’t respond right away it’s because I am currently trying to keep three laptops running while five dogs are losing their minds at the same time.`,

  postDate: 'Afternoon · Between Jobs',
  reactions: '9',
  comments: '6 Comments',
  shares: '1 Share',

  friends: ['mara', 'derek']
},
walt: {
  icon: 'images/walt-profile.jpg',
  portrait: 'images/walt-profile.jpg',
  imagePosition: 'center top',
  name: 'Walt "You Can’t Say Anything Anymore" Finnagan',
  label: 'Homestead Humor Broadcaster',
  archetype: 'Chaotic Good · Human · Level 8 Self-Sufficient Storyteller',
  banner: 'images/walt-banner.jpg',

  tagline: 'If the joke lands, great. If not, he’ll explain it.',

  bio: 'Walt runs a small homestead outside of Small Town, MT and treats every interaction as a potential setup for a joke. His humor ranges from harmlessly awkward to deeply mistimed, usually delivered with complete confidence. People generally tolerate it because he is helpful, hardworking, and capable of fixing almost anything with baling wire and misplaced optimism.',

  about: [
    { icon: '🌾', text: 'Runs a small homestead outside <strong>Small Town, MT</strong>' },
    { icon: '🐔', text: 'Keeps livestock and talks to them like coworkers' },
    { icon: '🔨', text: 'Can repair nearly anything with improvised materials' },
    { icon: '😂', text: 'Tells jokes with absolute commitment regardless of audience reaction' },
    { icon: '🧍', text: 'Frequently misjudges the appropriate tone for a conversation' },
    { 
      icon: '🎨',
      text: 'Banner: <a href="https://unsplash.com/photos/white-and-black-rooster-on-brown-soil-JXXRYrK2kGU" target="_blank">Andre Taissin · Unsplash</a>'
    }
  ],

  stats: {
    'SELF-SUFFICIENCY': 18,
    'SOCIAL TIMING': 4,
    'CONFIDENCE': 17,
    'PRACTICAL KNOWLEDGE': 16,
    'JOKE FREQUENCY': 20,
    'AWARENESS OF SILENCE': 2
  },

  skills: [
    { name: 'Improvised Repairs', val: '+11', prof: true },
    { name: 'Commitment to the Bit', val: '+12', prof: true },
    { name: 'Animal Handling', val: '+9', prof: true },
    { name: 'Reading the Room', val: '-7', prof: false },
    { name: 'Ending a Joke Early', val: '-9', prof: false }
  ],

  specialAbility: 'Double Down (Recharge 5-6)',

  passiveNote: 'Passive: Courtesy Laugh Field. Nearby individuals feel socially obligated to react positively even when confused or uncomfortable.',

  post: `Spent half the morning fixing fencing and the other half trying to figure out which chicken keeps escaping.

At this point I’m starting to think she’s freer range than free range.

Anyway if anyone needs eggs let me know.

They’re fresh and unlike most jokes around here they actually land.`,

  postDate: 'Early Morning · Already Outside',
  reactions: '15',
  comments: '18 Comments',
  shares: '1 Share',

  friends: ['bev', 'evan', 'clark']
},
doug: {
  icon: 'images/doug-profile.jpg',
  portrait: 'images/doug-profile.jpg',
  imagePosition: 'center top',
  name: 'Doug "Federal Employee" Renshaw',
  label: 'Public Patience Collapse',
  archetype: 'Lawful Neutral · Human · Level 9 Postal Survivor',
  banner: 'images/doug-banner.jpg',

  tagline: 'There are procedures for this. None of them helped.',

  bio: 'Doug has worked at the local post office long enough to develop a deep respect for routine and a visible distrust of the general public. Years of small daily incidents have gradually eroded his patience, though he still tries to maintain professionalism. A recent event involving a child, the front lobby, and an area rug appears to have accelerated this process significantly.',

  about: [
    { icon: '📬', text: 'Works at the post office in <strong>Small Town, MT</strong>' },
    { icon: '🧾', text: 'Strong belief in forms, procedures, and posted signage' },
    { icon: '⏰', text: 'Becomes visibly stressed when people ignore instructions' },
    { icon: '🧼', text: 'Recently developed intense concern about public surfaces' },
    { icon: '😐', text: 'Attempts professionalism through increasingly thin restraint' },
    { 
      icon: '🎨',
      text: 'Banner: <a href="https://unsplash.com/photos/a-bunch-of-mail-boxes-with-numbers-on-them-9szCcOw4BWo" target="_blank">Elizabeth Kay · Unsplash</a>'
    }
  ],

  stats: {
    'PATIENCE': 5,
    'PROCEDURAL KNOWLEDGE': 18,
    'PUBLIC TRUST': 2,
    'EMOTIONAL RESTRAINT': 7,
    'ENDURANCE': 16,
    'VISIBLE EXHAUSTION': 19
  },

  skills: [
    { name: 'Deadpan Customer Service', val: '+11', prof: true },
    { name: 'Passive-Aggressive Sign Creation', val: '+10', prof: true },
    { name: 'Queue Monitoring', val: '+8', prof: true },
    { name: 'Maintaining Optimism', val: '-8', prof: false },
    { name: 'Believing in Humanity', val: '-10', prof: false }
  ],

  specialAbility: 'Lobby Incident (1/day)',

  passiveNote: 'Passive: Public Exposure. Repeated interaction with preventable situations lowers morale over time while increasing story quality.',

  post: `I would like to remind everyone that the front lobby of the post office is not a restroom.

This sentence should not need to exist.

Additionally, covering a problem with a rug does not resolve the situation and actually creates several new ones.

Whoever raised that child owes me an apology and possibly hazard pay.

We will also be replacing the rug.

Again.`,

  postDate: 'Tuesday · Clearly Had Enough',
  reactions: '34',
  comments: '41 Comments',
  shares: '6 Shares',

  friends: ['walt', 'clark', 'bev']
},
linda: {
  icon: 'images/linda-profile.jpg',
  portrait: 'images/linda-profile.jpg',
  imagePosition: 'center',
  name: 'Linda "One Second Hon" Kincaid',
  label: 'Overwhelmed Café Keeper',
  archetype: 'Neutral Good · Human · Level 6 Small Business Survivor',
  banner: 'images/linda-banner.jpg',

  tagline: 'Trying very hard. Missing several details.',

  bio: 'Linda owns a small coffee shop in Small Town, MT and is generally liked by nearly everyone who visits. Unfortunately, the café operates in a constant state of low-level disorder. Orders are occasionally forgotten, inventory disappears mysteriously, and customers sometimes leave without paying simply because nobody noticed. Linda herself rarely seems upset about this, though people close to her worry she is overwhelmed more often than she admits.',

  about: [
    { icon: '☕', text: 'Owns and operates a local coffee shop' },
    { icon: '🧾', text: 'Frequently loses track of transactions and receipts' },
    { icon: '🌾', text: 'Local farmers often “settle up later” whether she remembers or not' },
    { icon: '🧠', text: 'Easily distracted during conversations and tasks' },
    { icon: '😬', text: 'Occasionally gets publicly corrected by her husband online' },
    { icon: '🍪', text: 'Compensates for operational chaos with genuine kindness' },
    { 
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/glasses-with-drinks-on-the-table-18023771/" target="_blank">Nam Quân Nguyễn · Pexels</a>'
    }
  ],

  stats: {
    'KINDNESS': 18,
    'ORGANIZATION': 3,
    'MULTITASKING': 5,
    'COMMUNITY GOODWILL': 17,
    'FINANCIAL AWARENESS': 2,
    'EMOTIONAL ENDURANCE': 12
  },

  skills: [
    { name: 'Remembering Regulars', val: '+10', prof: true },
    { name: 'De-Escalating Tension', val: '+8', prof: true },
    { name: 'Making People Comfortable', val: '+11', prof: true },
    { name: 'Tracking Inventory', val: '-7', prof: false },
    { name: 'Maintaining Focus', val: '-5', prof: false }
  ],

  specialAbility: 'House Coffee (Passive)',

  passiveNote: 'Passive: Familiar Atmosphere. Customers remain unusually loyal despite mounting evidence that the business should not function this way.',

  post: `Sorry if anyone got the wrong drink this morning.

We were very busy and I think I accidentally made three caramel lattes that nobody claimed.

If you were missing one please come back by and I’ll remake it.

Also if anyone left a seed catalog and a blue jacket at the shop they are both still here.

I think.`,

  postDate: 'Morning Rush · Probably',
  reactions: '22',
  comments: '11 Comments',
  shares: '1 Share',

  friends: ['rick', 'walt', 'evan']
},
brenda: {
  icon: 'images/brenda-profile.jpg',
  portrait: 'images/brenda-profile.jpg',
  imageFit: '110%',
  imagePosition: 'center',
  name: 'Brenda "Dragon Lady" Krill',
  label: 'Institutional Gatekeeper',
  archetype: 'Lawful Evil · Human · Level 12 Administrative Enforcer',
  banner: 'images/brenda-banner.jpg',

  tagline: 'If you needed something, you should have asked earlier.',

  bio: 'Brenda works in the front office at the school and has developed a reputation for being both highly organized and deeply intimidating. She treats administrative control as a personal responsibility and appears to operate through a combination of aggression, momentum, and laminated schedules. In addition to her school duties, she produces a community newsletter during office hours that rarely contains information related to the school itself.',

  about: [
    { icon: '🏫', text: 'Works in the school office in <strong>Small Town, MT</strong>' },
    { icon: '📰', text: 'Produces an aggressively local community newsletter' },
    { icon: '🦶', text: 'Newsletter frequently contains updates about toenail clinics and unrelated events' },
    { icon: '📣', text: 'Provides unsolicited promotional coverage for local businesses' },
    { icon: '🏀', text: 'Obsessively manages school sports logistics and scheduling' },
    { icon: '😡', text: 'Communication style described by staff as “direct” and by students as “terrifying”' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://unsplash.com/photos/office-table-with-pile-of-papers-6jA6eVsRJ6Q" target="_blank">Wonderlane · Unsplash</a>'
    }
  ],

  stats: {
    'ORGANIZATION': 19,
    'INTIMIDATION': 20,
    'COMMUNITY GOSSIP': 16,
    'EMPATHY': 2,
    'SCHEDULING CONTROL': 18,
    'VOLUME': 17
  },

  skills: [
    { name: 'Passive-Aggressive Reminder Emails', val: '+12', prof: true },
    { name: 'Clipboard Authority', val: '+11', prof: true },
    { name: 'Sports Schedule Enforcement', val: '+10', prof: true },
    { name: 'Tone Moderation', val: '-8', prof: false },
    { name: 'Remaining Calm', val: '-6', prof: false }
  ],

  specialAbility: 'Per My Last Email (Recharge 5-6)',

  passiveNote: 'Passive: Administrative Presence. Nearby individuals instinctively begin apologizing even when unsure they did anything wrong.',

  post: `The newsletter is finished and available in the office.

Please actually read it this time because people continue asking questions that were already answered in bold.

Also:
- Toenail clinic is Thursday
- Youth basketball forms are overdue
- Whoever keeps taking the good pens needs to stop
- Support local businesses instead of complaining there is “nothing in town”

Thank you.`,

  postDate: '6:12 AM · Already Angry',
  reactions: '19',
  comments: '27 Comments',
  shares: '4 Shares',

  friends: ['clark', 'bev', 'doug']
},
calvin: {
  icon: 'images/calvin-profile.jpg',
  portrait: 'images/calvin-profile.jpg',
  imagePosition: 'center top',
  name: 'Calvin "Just Trying to Help" Yoder',
  label: 'Over-Involved Tradesman',
  archetype: 'Neutral Good · Human · Level 9 Community Fixer',
  banner: 'images/calvin-banner.jpg',

  tagline: 'Helpful advice arrives whether requested or not.',

  bio: 'Calvin is a local plumber with a reputation for being hardworking, capable, and impossible to avoid once he starts offering suggestions. After leaving a more insulated upbringing behind years ago, he became intensely invested in community life and now inserts himself into nearly every local issue. His attempts to help are sincere, though his delivery often creates more friction than resolution.',

  about: [
    { icon: '🔧', text: 'Works as a plumber throughout <strong>Small Town, MT</strong>' },
    { icon: '🛠️', text: 'Cannot witness a problem without proposing three solutions' },
    { icon: '🗣️', text: 'Offers advice with the confidence of a town council member' },
    { icon: '🥧', text: 'Frequently reminds people about his wife’s baking' },
    { icon: '😬', text: 'Has unintentionally accumulated several long-term grudges' },
    { icon: '🚪', text: 'Known for conversations that become impossible to exit cleanly' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://unsplash.com/photos/white-metal-pipe-on-brown-brick-wall-PFMz8RkPn8E" target="_blank">Brett Jordan · Unsplash</a>'
    }
  ],

  stats: {
    'HELPFULNESS': 18,
    'SELF-AWARENESS': 4,
    'PERSISTENCE': 17,
    'COMMUNITY INVOLVEMENT': 19,
    'BOUNDARY RECOGNITION': 3,
    'POTLUCK ENTHUSIASM': 16
  },

  skills: [
    { name: 'Emergency Repairs', val: '+11', prof: true },
    { name: 'Extended Explanations', val: '+10', prof: true },
    { name: 'Showing Up Unprompted', val: '+9', prof: true },
    { name: 'Recognizing Social Cues', val: '-7', prof: false },
    { name: 'Ending Conversations Quickly', val: '-8', prof: false }
  ],

  specialAbility: 'Actually Pretty Useful (Passive)',

  passiveNote: 'Passive: Reluctant Dependability. Despite interpersonal fatigue, townspeople continue calling Calvin because he reliably solves problems and usually arrives quickly.',

  post: `If anyone is having issues with frozen pipes this week let me know before things get worse.

Most problems can be prevented if people would stop ignoring small leaks until they become large leaks.

Also Ruth made cinnamon rolls again and I’m telling you right now there are not many people baking like that anymore.

Anyway stay warm and check your crawl spaces.`,

  postDate: 'Early Morning · Already Working',
  reactions: '23',
  comments: '14 Comments',
  shares: '2 Shares',

  friends: ['walt', 'linda', 'doug']
},
ruth: {
  icon: 'images/ruth-profile.jpg',
  portrait: 'images/ruth-profile.jpg',
  imagePosition: 'center top',
  name: 'Ruth "Fresh Out of the Oven" Yoder',
  label: 'Aspirational Cottage Entrepreneur',
  archetype: 'Neutral Good · Human · Level 6 Community Baker',
  banner: 'images/ruth-banner.jpg',

  tagline: 'Support small business. Supplies and motivation limited.',

  bio: 'Ruth is attempting to launch a small baking business from home while balancing family life, inconsistent energy, and a strong preference for baking only when inspiration strikes. Her baked goods are genuinely excellent, though availability is unpredictable and often depends on whether her children requested something first. After a recent injury, community fundraising efforts intensified conversations around healthcare, self-reliance, and whether anyone actually knows how insurance works.',

  about: [
    { icon: '🥧', text: 'Produces highly regarded homemade baked goods' },
    { icon: '🏡', text: 'Runs an informal home baking operation in <strong>Small Town, MT</strong>' },
    { icon: '🧁', text: 'Most baking projects eventually become “for the kids”' },
    { icon: '📅', text: 'Business hours best described as spiritually flexible' },
    { icon: '🩺', text: 'Recently relied on community donations after breaking an arm' },
    { icon: '🤝', text: 'Receives strong support from locals despite inconsistent output' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://unsplash.com/photos/brown-cupcake-on-brown-wooden-table-Tx0kraTQJlA" target="_blank">David Todd McCarty · Unsplash</a>'
    }
  ],

  stats: {
    'BAKING SKILL': 19,
    'CONSISTENCY': 4,
    'COMMUNITY GOODWILL': 18,
    'BUSINESS STRUCTURE': 3,
    'COMFORT FOOD AURA': 20,
    'FOLLOW-THROUGH': 5
  },

  skills: [
    { name: 'Cinnamon Rolls', val: '+12', prof: true },
    { name: 'Community Fundraising Momentum', val: '+9', prof: true },
    { name: 'Making People Feel Guilty Politely', val: '+8', prof: true },
    { name: 'Maintaining Regular Hours', val: '-7', prof: false },
    { name: 'Separating Business From Family Snacks', val: '-6', prof: false }
  ],

  specialAbility: 'Just Took Them Out (Recharge 5-6)',

  passiveNote: 'Passive: Fresh Bread Effect. Nearby individuals become significantly more patient, supportive, and financially generous in the presence of homemade baked goods.',

  post: `Thank you everyone again for the prayers, donations, meals, and support after my arm injury.

We are so blessed to live in such a caring community.

I am hoping to slowly start baking again soon once things settle down a little here at home.

The kids requested cinnamon rolls today so I may have accidentally used most of the ingredients already.

I’ll keep everyone posted ❤️`,

  postDate: 'Afternoon · Recovering Slowly',
  reactions: '47',
  comments: '31 Comments',
  shares: '3 Shares',

  friends: ['calvin', 'linda', 'bev']
}, 
wayne: {
  icon: 'images/wayne-profile.jpg',
  portrait: 'images/wayne-profile.jpg',
  imagePosition: 'center',
  name: 'Wayne "That’s Right, Bev" Tolliver',
  label: 'Publicly Uncomplicated Companion',
  archetype: 'Lawful Neutral · Human · Level 7 Agreement Specialist',
  banner: 'images/wayne-banner.jpg',

  tagline: 'Not hiding. Not explaining either.',

  bio: 'Wayne is widely known around Small Town, MT for his long-term relationship with Bev Tanglewood despite the fact that Bev remains married to Harold Tanglewood. The arrangement is treated with a level of public acknowledgment that somehow makes everyone more uncomfortable, not less. Wayne himself rarely elaborates on any of it and instead focuses most conversations on community decline, traditional values, and agreeing with whatever Bev said immediately beforehand.',

  about: [
    { icon: '🧢', text: 'Regularly accompanies Bev to community events and sales' },
    { icon: '👍', text: 'Publicly agrees with Bev at nearly every opportunity' },
    { icon: '📣', text: 'Frequently comments on “how things used to be”' },
    { icon: '🪑', text: 'Can often be found sitting silently near seasonal décor displays' },
    { icon: '😐', text: 'Treats socially complicated situations as completely ordinary' },
    { icon: '📰', text: 'Occasionally contributes opinions to Bev’s unofficial business ideas' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/road-in-small-town-in-countryside-13777907/" target="_blank">Tom Fisk · Pexels</a>'
    }
  ],

  stats: {
    'AGREEMENT': 20,
    'SELF-ASSERTION': 2,
    'SOCIAL COMFORT': 5,
    'TRADITIONALISM': 17,
    'PUBLIC COMPOSURE': 16,
    'CONFLICT AVOIDANCE': 18
  },

  skills: [
    { name: 'Supportive Nodding', val: '+12', prof: true },
    { name: 'Reinforcing Opinions', val: '+10', prof: true },
    { name: 'Remaining Calm During Tension', val: '+9', prof: true },
    { name: 'Clarifying Relationships', val: '-10', prof: false },
    { name: 'Independent Thought in Public', val: '-6', prof: false }
  ],

  specialAbility: 'Back Me Up Here (Passive)',

  passiveNote: 'Passive: Social Persistence. Repeated exposure gradually causes nearby individuals to stop questioning the situation out of emotional exhaustion.',

  post: `Bev is absolutely right about local businesses needing more support.

People complain there’s “nothing in town” but then refuse to shop local when someone is actually trying to build something meaningful.

Different generation I guess.

Anyway we’ll be at the craft fair Saturday if anyone wants to stop by and say hello.`,

  postDate: 'Evening · Shared Account Energy',
  reactions: '13',
  comments: '22 Comments',
  shares: '1 Share',

  friends: ['bev', 'brenda', 'grant']
},
carol: {
  icon: 'images/carol-profile.jpg',
  portrait: 'images/carol-profile.jpg',
  imagePosition: 'center',
  name: 'Carol "Just Staying Positive" Hendricks',
  label: 'Conflict-Avoidant Grandparent',
  archetype: 'Neutral Neutral · Human · Level 8 Community Balancer',
  banner: 'images/carol-banner.jpg',

  tagline: 'There are good people on both sides. Especially if they support literacy.',

  bio: 'Carol is one of the few people in Small Town, MT capable of maintaining friendly relationships across nearly every social group. She accomplishes this primarily by refusing to commit strongly to anything beyond basic politeness and the academic success of her granddaughter. Nearly every conversation eventually circles back to school performance, reading levels, enrichment activities, or future scholarship opportunities.',

  about: [
    { icon: '🎓', text: 'Deeply invested in her granddaughter’s education and future' },
    { icon: '📚', text: 'Treats elementary academic milestones like Olympic achievements' },
    { icon: '😊', text: 'Maintains exhausting levels of social neutrality' },
    { icon: '☕', text: 'Can sit through opposing political conversations without reacting' },
    { icon: '🧩', text: 'Frequently recommends educational activities regardless of context' },
    { icon: '🏫', text: 'Views the school primarily as an extension of her granddaughter’s development' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/woman-holding-baby-near-window-1109238/" target="_blank">Juan Pablo Serrano · Pexels</a>'
    }
  ],

  stats: {
    'SOCIAL SURVIVAL': 19,
    'CONFLICT AVOIDANCE': 20,
    'GRANDPARENT ENERGY': 18,
    'POLITICAL COMMITMENT': 3,
    'ACADEMIC ENTHUSIASM': 19,
    'BOUNDARY REDIRECTION': 16
  },

  skills: [
    { name: 'Neutral Response Generation', val: '+12', prof: true },
    { name: 'Conversation Deflection', val: '+10', prof: true },
    { name: 'Educational Resource Sharing', val: '+11', prof: true },
    { name: 'Taking a Firm Position', val: '-8', prof: false },
    { name: 'Ending Discussions Naturally', val: '-5', prof: false }
  ],

  specialAbility: 'Speaking of Education... (At Will)',

  passiveNote: 'Passive: Granddaughter Priority. Any topic can be redirected toward educational achievement, academic planning, or child enrichment within three conversational turns.',

  post: `I know everyone has strong feelings right now but I think it’s important we all remember we are neighbors first.

Anyway Sophie got another perfect spelling test this week and has moved up two reading groups.

I’m just so proud of how hard she works.

Does anyone know of any good summer STEM programs nearby?`,

  postDate: 'Evening · Keeping Things Civil',
  reactions: '31',
  comments: '17 Comments',
  shares: '1 Share',

  friends: ['linda', 'calvin', 'doug', 'rick']
},
gary: {
  icon: 'images/gary-profile.jpg',
  portrait: 'images/gary-profile.jpg',
  imageFit: '90%',
  imagePosition: 'center top',
  name: 'Gary "Back in Our Day" Bellamy',
  label: 'Nostalgia Loop Enthusiast',
  archetype: 'Chaotic Neutral · Human · Level 8 Aging Charmer',
  banner: 'images/gary-banner.jpg',

  tagline: 'Things were simpler then. He mentions this constantly.',

  bio: 'Gary spends most of his online time reminiscing about earlier decades, usually with heavy emphasis on how people used to behave, dress, or “carry themselves.” His attempts at friendliness often become uncomfortable due to poor boundaries, especially around younger adults who clearly do not enjoy the interaction as much as he believes they do. Despite this, Gary continues operating with complete confidence and very little self-awareness.',

  about: [
    { icon: '📼', text: 'Deeply nostalgic for the 70s, 80s, and selective parts of the 90s' },
    { icon: '🎵', text: 'Frequently posts old music clips and “they don’t make them like this anymore” comments' },
    { icon: '😬', text: 'Attempts at charm often make conversations uncomfortable' },
    { icon: '🕶️', text: 'Believes his social instincts are stronger than they actually are' },
    { icon: '📸', text: 'Comments on profile pictures with unnecessary familiarity' },
    { icon: '🚗', text: 'Treats nostalgia as both personality and moral framework' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.safetyandhealthmagazine.com/25377-is-it-safe-to-drink-from-the-hose/" target="_blank">Yamada Taro · Ghetty Images</a>'
    }
  ],

  stats: {
    'NOSTALGIA': 20,
    'SELF-AWARENESS': 2,
    'CONFIDENCE': 16,
    'SOCIAL FILTERING': 3,
    'OLD STORY REPETITION': 18,
    'BOUNDARY RECOGNITION': 4
  },

  skills: [
    { name: 'Unprompted Storytelling', val: '+11', prof: true },
    { name: 'Selective Memory', val: '+10', prof: true },
    { name: 'Turning Any Topic Into the Past', val: '+9', prof: true },
    { name: 'Reading Discomfort', val: '-8', prof: false },
    { name: 'Knowing When to Stop Talking', val: '-7', prof: false }
  ],

  specialAbility: 'Different Times (Passive)',

  passiveNote: 'Passive: Nostalgia Field. Nearby conversations gradually shift toward stories, comparisons, and increasingly inaccurate memories of how things supposedly used to be.',

  post: `Kids today will never understand how good things used to be.

People actually talked to each other face to face and knew how to have fun without staring at screens all day.

Not saying everything was perfect but there was definitely more respect and people carried themselves differently.

Some of these younger generations could learn a thing or two from the old days.`,

  postDate: 'Late Night · Listening to Classic Rock',
  reactions: '14',
  comments: '33 Comments',
  shares: '2 Shares',

  friends: ['rick', 'wayne', 'walt']
},
harlan: {
  icon: 'images/harlan-profile.jpg',
  portrait: 'images/harlan-profile.jpg',
  imagePosition: 'center top',
  name: 'Harlan "Back When Discipline Meant Something" Pike',
  label: 'Neighborhood Velocity Monitor',
  archetype: 'Lawful Neutral · Human · Level 10 Standards Preservationist',
  banner: 'images/harlan-banner.jpg',

  tagline: 'Someone has to say something.',

  bio: 'Harlan strongly believes that modern society suffers from a lack of accountability, structure, and consequences. He monitors local behavior closely and treats small violations as indicators of broader cultural decline. Though generally polite in public, he regularly contacts schools, businesses, and town offices to report incidents he feels are being ignored by everyone else.',

  about: [
    { icon: '🚗', text: 'Deeply concerned about vehicle speed within town limits' },
    { icon: '📞', text: 'Frequently contacts institutions directly to report concerns' },
    { icon: '🏫', text: 'Believes schools should enforce stronger discipline standards' },
    { icon: '🧠', text: 'Views minor rule-breaking as evidence of societal decline' },
    { icon: '👀', text: 'Pays extremely close attention to neighborhood activity' },
    { icon: '📏', text: 'Strong personal attachment to order, procedure, and consequences' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/vintage-hollis-country-store-with-gas-pumps-32226673/" target="_blank">John Robertson · Pexels</a>'
    }
  ],

  stats: {
    'VIGILANCE': 19,
    'TOLERANCE': 3,
    'PHONE CALL INITIATION': 18,
    'RULE ENFORCEMENT': 17,
    'PERSPECTIVE': 4,
    'MORAL CERTAINTY': 20
  },

  skills: [
    { name: 'Immediate Complaint Reporting', val: '+12', prof: true },
    { name: 'Neighborhood Observation', val: '+10', prof: true },
    { name: 'Escalating Minor Incidents', val: '+9', prof: true },
    { name: 'Letting Things Go', val: '-9', prof: false },
    { name: 'Distinguishing Intent From Accident', val: '-6', prof: false }
  ],

  specialAbility: 'I Called About This Already (Recharge 4-6)',

  passiveNote: 'Passive: Standards Decline Detection. Minor inconveniences are automatically interpreted as evidence of worsening generational behavior.',

  post: `To the parents of the student driving the dark pickup near the school this morning:

Five miles over the speed limit is still speeding.

I already contacted the school because somebody clearly needs to start paying attention before someone gets hurt.

Kids today seem to think rules are optional and honestly that attitude starts at home.

Back when we were growing up there were consequences for this kind of behavior.`,

  postDate: '9:14 AM · Watching Traffic',
  reactions: '12',
  comments: '39 Comments',
  shares: '2 Shares',

  friends: ['doug', 'brenda', 'rick']
},
keith: {
  icon: 'images/keith-profile.jpg',
  portrait: 'images/keith-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Keith "I Don’t Trust People" Maddox',
  label: 'Protective Territorialist',
  archetype: 'Lawful Neutral · Human · Level 9 Suspicious Spouse',
  banner: 'images/keith-banner.jpg',

  tagline: 'People have different intentions than they let on.',

  bio: 'Keith is a former Marine who approaches relationships, friendships, and public interaction with intense caution and territorial instinct. He views most outside social influence as potentially disrespectful or manipulative and believes loyalty should naturally limit outside relationships. While he frames his behavior as protective and respectful, people around him often find the dynamic uncomfortable, especially given that both he and his wife are fully grown adults with decades of life experience.',

  about: [
    { icon: '🪖', text: 'Former Marine with strong opinions about discipline and loyalty' },
    { icon: '👀', text: 'Deeply suspicious of other people’s motives' },
    { icon: '📱', text: 'Monitors social interactions more closely than necessary' },
    { icon: '💍', text: 'Views marriage as complete social alignment' },
    { icon: '😐', text: 'Does not understand why others find this concerning' },
    { icon: '🎸', text: 'Still references Gen X independence while behaving extremely possessively' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/tractor-working-in-potato-field-2252576/" target="_blank">Mark Stebnicki · Pexels</a>'
    }
  ],

  stats: {
    'VIGILANCE': 18,
    'TRUST': 3,
    'LOYALTY': 19,
    'SELF-AWARENESS': 4,
    'INTENSITY': 17,
    'EMOTIONAL FLEXIBILITY': 2
  },

  skills: [
    { name: 'Protective Framing', val: '+11', prof: true },
    { name: 'Reading Threat Into Neutral Situations', val: '+10', prof: true },
    { name: 'Social Monitoring', val: '+9', prof: true },
    { name: 'Relaxing', val: '-8', prof: false },
    { name: 'Understanding Independence', val: '-7', prof: false }
  ],

  specialAbility: 'Who’s That? (Recharge 4-6)',

  passiveNote: 'Passive: Territorial Awareness. Neutral interactions involving his spouse are automatically flagged internally as suspicious until proven otherwise.',

  post: `Maybe this is just how I was raised but I don’t really understand why married people need constant attention from random outsiders online.

Seems like a lot of people today forgot what commitment actually means.

If you really love somebody you should want to spend your time with them instead of needing validation from everyone else.

Just my opinion.`,

  postDate: 'Late Evening · Watching Comments Closely',
  reactions: '16',
  comments: '28 Comments',
  shares: '3 Shares',

  friends: ['rick', 'gary', 'wayne']
},
terry: {
  icon: 'images/terry-profile.jpg',
  portrait: 'images/terry-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Terry "Authorized Use Only" Barlow',
  label: 'Waste Management Sentinel',
  archetype: 'Lawful Neutral · Human · Level 11 Dump Guardian',
  banner: 'images/terry-banner.jpg',

  tagline: 'Somebody has to maintain standards.',

  bio: 'Terry has developed a deep personal attachment to the town dump and behaves as though he has been unofficially appointed its sole protector. He closely monitors usage, documents suspicious activity, and frequently posts online warnings about unauthorized dumping. His sense of territorial ownership has expanded over time to include opinions about who should be allowed access, what items belong there, and how long people should reasonably remain on site.',

  about: [
    { icon: '🗑️', text: 'Treats the town dump as a protected civic resource' },
    { icon: '📷', text: 'Installed multiple cameras to monitor activity at the site' },
    { icon: '🚨', text: 'Posts pictures of unfamiliar visitors online for “community awareness”' },
    { icon: '📦', text: 'Strong opinions about acceptable dumping categories' },
    { icon: '🚛', text: 'Suspicious of trailers, mattresses, and out-of-town license plates' },
    { icon: '🧠', text: 'Believes vigilance prevents total societal collapse' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/rusty-blue-industrial-container-against-metal-wall-33842119/" target="_blank">Jan van der Wolf · Pexels</a>'
    }
  ],

  stats: {
    'VIGILANCE': 20,
    'TERRITORIALITY': 19,
    'PUBLIC TRUST': 5,
    'CAMERA OWNERSHIP': 18,
    'RULE INTERPRETATION': 17,
    'ABILITY TO MIND HIS OWN BUSINESS': 2
  },

  skills: [
    { name: 'Suspicious Vehicle Detection', val: '+12', prof: true },
    { name: 'Public Warning Posts', val: '+10', prof: true },
    { name: 'Trash Classification', val: '+11', prof: true },
    { name: 'Assuming Innocent Intent', val: '-8', prof: false },
    { name: 'Letting People Throw Things Away Normally', val: '-7', prof: false }
  ],

  specialAbility: 'Caught on Camera (Recharge 5-6)',

  passiveNote: 'Passive: Territorial Surveillance. Unknown individuals entering monitored areas are automatically perceived as potential violators until proven otherwise.',

  post: `To the individual with the silver pickup and utility trailer at the dump this afternoon:

I have your vehicle on camera.

This facility is for residents only and not for commercial dumping or whatever it was you were trying to pull.

Also whoever left paint cans in the metal section needs to educate themselves before creating problems for everyone else.

People seem to think rules are optional until the site gets shut down.`,

  postDate: 'Afternoon · Monitoring Activity',
  reactions: '18',
  comments: '46 Comments',
  shares: '4 Shares',

  friends: ['harlan', 'doug', 'rick']
},
sherri: {
  icon: 'images/sherri-profile.jpg',
  portrait: 'images/sherri-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Sherri "Don’t Judge Me" Lattimer',
  label: 'Perpetual Crisis Generator',
  archetype: 'Chaotic Neutral · Human · Level 10 Overwhelmed Parent',
  banner: 'images/sherri-banner.jpg',

  tagline: 'People don’t know the full story.',

  bio: 'Sherri lives in a constant state of emotional overload and unfinished situations. Most responsibilities are handled only after becoming unavoidable, usually following calls from the school or complaints from neighbors. She carries around a highly realistic baby doll that she treats with intense seriousness while maintaining a house full of small dogs that everyone quietly pretends not to count too carefully.',

  about: [
    { icon: '📞', text: 'Usually responds to problems after the school calls repeatedly' },
    { icon: '🍼', text: 'Carries a realistic baby doll everywhere and treats it like a real infant' },
    { icon: '🐕', text: 'Owns an unclear but concerning number of small dogs' },
    { icon: '😤', text: 'Feels constantly attacked and misunderstood' },
    { icon: '🏠', text: 'Home environment described by others as “a lot”' },
    { icon: '🚨', text: 'Minor issues regularly escalate into major situations' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/adorable-puppy-inside-the-box-7749996/" target="_blank">Hue Chi · Pexels</a>'
    }
  ],

  stats: {
    'CHAOS ENERGY': 20,
    'FOLLOW-THROUGH': 2,
    'DEFENSIVENESS': 18,
    'ORGANIZATION': 3,
    'SELF-AWARENESS': 2,
    'CRISIS RECOVERY': 12
  },

  skills: [
    { name: 'Excuse Generation', val: '+11', prof: true },
    { name: 'Ignoring Problems Temporarily', val: '+10', prof: true },
    { name: 'Emotional Posting', val: '+9', prof: true },
    { name: 'Long-Term Planning', val: '-8', prof: false },
    { name: 'Accepting Responsibility', val: '-9', prof: false }
  ],

  specialAbility: 'Everybody’s Against Me (Recharge 5-6)',

  passiveNote: 'Passive: Escalation Spiral. Outside criticism immediately increases emotional posting activity and reduces productive decision-making.',

  post: `Really tired of people talking about me like they know everything.

Some of us are trying our best and thats more than I can say for other people around here.

Maybe worry about your own house.

Anyway if anyone sees a little pink baby blanket around town message me because I cant find it anywhere and I KNOW I had it earlier.`,

  postDate: '12:42 AM · Rough Night',
  reactions: '19',
  comments: '48 Comments',
  shares: '2 Shares',

  friends: ['gary', 'bev', 'rick']
},
pam: {
  icon: 'images/pam-profile.jpg',
  portrait: 'images/pam-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Pam "I Might Need That" Done',
  label: 'Generational Chaos Stabilizer',
  archetype: 'Lawful Chaotic · Human · Level 11 Emergency Grandparent',
  banner: 'images/pam-banner.jpg',

  tagline: 'Don’t throw that away. There’s still good parts on it.',

  bio: 'Pam spends much of her time managing crises created by other family members while simultaneously maintaining several large-scale crises of her own. She frequently steps in to discipline or supervise Sherri’s children due to inconsistent parenting at home. Over the years, Pam has accumulated a vast and poorly documented collection of belongings distributed between sheds, storage piles, spare rooms, and multiple parked vehicles that no longer reliably operate.',

  about: [
    { icon: '🚚', text: 'Uses parked trucks as long-term storage solutions' },
    { icon: '📦', text: 'Strong emotional attachment to objects with “possible future use”' },
    { icon: '🐕', text: 'Also quietly involved in small dog breeding operations' },
    { icon: '👵', text: 'Often acts as the primary disciplinarian for her grandchildren' },
    { icon: '🧹', text: 'Attempts organization through increasingly complex pile systems' },
    { icon: '😤', text: 'Believes modern parenting lacks structure and accountability' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/plants-and-bags-in-garage-15828484/" target="_blank">Jimmy Liao · Pexels</a>'
    }
  ],

  stats: {
    'RESOURCE RETENTION': 20,
    'DISCIPLINE': 16,
    'ORGANIZATION': 4,
    'ENDURANCE': 18,
    'HOARD DENSITY': 19,
    'EMOTIONAL PROCESSING': 5
  },

  skills: [
    { name: 'Finding Lost Items Eventually', val: '+11', prof: true },
    { name: 'Grandchild Management', val: '+10', prof: true },
    { name: 'Improvised Storage Solutions', val: '+12', prof: true },
    { name: 'Throwing Things Away', val: '-10', prof: false },
    { name: 'Recognizing Capacity Limits', val: '-7', prof: false }
  ],

  specialAbility: 'There’s One Out Back (Recharge 5-6)',

  passiveNote: 'Passive: Hidden Inventory. Nearly any requested object has a moderate chance of existing somewhere on the property beneath unrelated materials.',

  post: `If one more person tells me I need to clean up around here they can come do it themselves.

Half the stuff people throw away nowadays still works fine with a little effort.

Also whoever moved the blue tarp pile behind the old Chevy needs to put it back because now I cant find anything.

And if you hear little barking over here mind your own business because not everything needs to involve town gossip.`,

  postDate: 'Morning · Looking For Something',
  reactions: '22',
  comments: '31 Comments',
  shares: '1 Share',

  friends: ['sherri', 'calvin', 'walt']
},
trina: {
  icon: 'images/trina-profile.jpg',
  portrait: 'images/trina-profile.jpg',
  imagePosition: 'center',
  imageFit: 'cover',
  name: 'Trina "Hot Trina" Vale',
  label: 'Perpetual Reform Candidate',
  archetype: 'Chaotic Neutral · Human · Level 9 Civic Disruptor',
  banner: 'images/trina-banner.jpg',

  tagline: 'This town is not ready for my ideas.',

  bio: 'Trina runs for local leadership positions with remarkable frequency and unwavering confidence. Her campaigns are built around vague promises of major reform, government transparency, and “finally shaking things up,” though details are usually limited or contradictory. She is known for speaking with absolute certainty regardless of subject matter and reacting aggressively to criticism, fact-checking, or requests for clarification.',

  about: [
    { icon: '🗳️', text: 'Regularly campaigns for local leadership roles' },
    { icon: '📣', text: 'Promises sweeping change with minimal logistical detail' },
    { icon: '🔥', text: 'Nickname began ironically and is now universally accepted' },
    { icon: '😤', text: 'Treats disagreement as evidence of corruption or jealousy' },
    { icon: '🧠', text: 'High confidence · extremely inconsistent reasoning' },
    { icon: '📱', text: 'Frequently posts campaign-style declarations online' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/sticky-note-on-a-white-wall-8850836/" target="_blank">Tara Winstead · Pexels</a>'
    }
  ],

  stats: {
    'CONFIDENCE': 20,
    'PLANNING': 3,
    'VOLUME': 18,
    'SELF-AWARENESS': 2,
    'AMBITION': 17,
    'FACT RETENTION': 4
  },

  skills: [
    { name: 'Campaign Posting', val: '+12', prof: true },
    { name: 'Turning Criticism Into Drama', val: '+11', prof: true },
    { name: 'Public Declarations', val: '+10', prof: true },
    { name: 'Answering Direct Questions', val: '-8', prof: false },
    { name: 'Understanding Policy', val: '-7', prof: false }
  ],

  specialAbility: 'Wake Up, People (Recharge 5-6)',

  passiveNote: 'Passive: Reform Aura. Any routine municipal issue can be reframed as evidence of systemic failure requiring immediate leadership change.',

  post: `This town has needed new leadership for YEARS and honestly people are finally starting to wake up.

Everybody keeps complaining about the same problems but then keeps voting for the same people over and over expecting different results.

Thats literally insanity.

I have REAL ideas that would completely transform this community if people would actually listen for once.`,

  postDate: 'Late Night · Campaign Mode',
  reactions: '16',
  comments: '52 Comments',
  shares: '7 Shares',

  friends: ['rick', 'grant', 'gary']
},
doris: {
  icon: 'images/doris-profile.jpg',
  portrait: 'images/doris-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Mayor Doris "We’ve Always Done It This Way" Grindle',
  label: 'Permanent Municipal Fixture',
  archetype: 'Lawful Neutral · Human · Level 14 Entrenched Incumbent',
  banner: 'images/doris-banner.jpg',

  tagline: 'Change creates confusion.',

  bio: 'Mayor Doris Grindle has held leadership positions in Small Town, MT for so long that many residents cannot remember exactly when it started. Her governing philosophy centers primarily around maintaining existing systems, avoiding unnecessary improvements, and surviving another election cycle through sheer inevitability. Though frequently criticized by residents, nobody ever seems willing to challenge her directly, largely because the position appears exhausting and spiritually corrosive.',

  about: [
    { icon: '🏛️', text: 'Has occupied town leadership roles for multiple decades' },
    { icon: '🛑', text: 'Strongly opposes change regardless of potential benefit' },
    { icon: '💰', text: 'Constantly fundraising for mysterious town-related expenses' },
    { icon: '🤷', text: 'Rarely participates in community fundraisers personally' },
    { icon: '📋', text: 'Believes “good enough” is the highest form of efficiency' },
    { icon: '😐', text: 'Universally criticized yet consistently reelected through inertia' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/brown-bare-trees-under-orange-sky-during-sunset-10333094/" target="_blank">Scott Platt · Pexels</a>'
    }
  ],

  stats: {
    'POLITICAL ENDURANCE': 20,
    'TRANSPARENCY': 3,
    'CHANGE RESISTANCE': 19,
    'COMMUNITY ENTHUSIASM': 2,
    'SURVIVAL INSTINCT': 18,
    'BUDGET CLARITY': 4
  },

  skills: [
    { name: 'Avoiding Accountability', val: '+12', prof: true },
    { name: 'Meeting Adjournment', val: '+10', prof: true },
    { name: 'Fundraising Ambiguity', val: '+11', prof: true },
    { name: 'Innovation', val: '-9', prof: false },
    { name: 'Direct Answers', val: '-7', prof: false }
  ],

  specialAbility: 'Tabled Until Further Notice (Recharge 5-6)',

  passiveNote: 'Passive: Institutional Inertia. New ideas gradually lose momentum after prolonged exposure to procedural delay and vague concerns about “how things look.”',

  post: `I keep hearing people complain that “nothing changes around here” but what they fail to understand is stability matters.

Every time some new idea comes through town everybody acts like we need to completely reinvent everything overnight.

That is not how responsible leadership works.

Also donations for the municipal improvement fund are still being accepted at the office during regular hours.`,

  postDate: 'Midday · Office Closed Early',
  reactions: '11',
  comments: '61 Comments',
  shares: '2 Shares',

  friends: ['brenda', 'harlan', 'grant']
},
sadie: {
  icon: 'images/sadie-profile.jpg',
  portrait: 'images/sadie-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Sadie "Small Town Soul" Smith',
  label: 'Lifestyle Micro-Influencer',
  archetype: 'Chaotic Neutral · Human · Level 8 Rustic Content Creator',
  banner: 'images/sadie-banner.jpg',

  tagline: 'Slow living. Strong coffee. Local roots.',

  bio: 'Sadie documents what she calls “authentic small-town living” through constant social media updates involving coffee, soft lighting, rustic décor, and carefully framed slices of daily life. While she considers herself a growing lifestyle influencer, most of her audience consists of local residents quietly observing increasingly dramatic disputes involving chickens, zoning rules, and emotionally charged posts about freedom, homesteading, and negative energy.',

  about: [
    { icon: '☕', text: 'Creates lifestyle content centered around coffee and rural aesthetics' },
    { icon: '📱', text: 'Refers to ordinary daily activities as “content creation”' },
    { icon: '🧁', text: 'Runs a cottage bakery operation from home' },
    { icon: '🐔', text: 'Strong emotional attachment to backyard chicken ownership' },
    { icon: '😢', text: 'Recently experienced a public emotional breakdown over poultry regulations' },
    { icon: '✨', text: 'Frames local disagreements as attacks on authenticity and creativity' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/search/iced%20coffee%20country/" target="_blank">Sóc Năng Động · Pexels</a>'
    }
  ],

  stats: {
    'AESTHETIC CURATION': 19,
    'EMOTIONAL STABILITY': 4,
    'CONTENT CONFIDENCE': 17,
    'REGULATION TOLERANCE': 2,
    'CHICKEN ENTHUSIASM': 20,
    'SELF-BRANDING': 18
  },

  skills: [
    { name: 'Coffee Reel Creation', val: '+12', prof: true },
    { name: 'Soft Lighting', val: '+10', prof: true },
    { name: 'Emotional Story Posting', val: '+11', prof: true },
    { name: 'Reading Ordinances', val: '-8', prof: false },
    { name: 'Accepting Minor Regulation', val: '-9', prof: false }
  ],

  specialAbility: 'This Is My Safe Space (Recharge 5-6)',

  passiveNote: 'Passive: Curated Reality. Visually calming content conceals increasingly stressful real-world situations occurring just outside the frame.',

  post: `I honestly didnt even want to talk about this publicly but I’ve been crying all morning.

Apparently wanting fresh eggs and a peaceful life is now something that needs PERMISSION and paperwork.

This town says I either have to reduce my flock or pay fees and register everything like I’m some kind of industrial operation.

I just wanted a simple life for my family and my followers.

Anyway today’s cinnamon maple cold foam recipe will still be posted later 🤎🐓✨`,

  postDate: 'Morning · Processing Heavy Emotions',
  reactions: '46',
  comments: '78 Comments',
  shares: '9 Shares',

  friends: ['ruth', 'linda', 'carol']
},
willow: {
  icon: 'images/willow-profile.jpg',
  portrait: 'images/willow-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Willow "Nature Provides" Hart',
  label: 'Holistic Living Evangelist',
  archetype: 'Chaotic Good · Human · Level 7 Natural Wellness Advocate',
  banner: 'images/willow-banner.jpg',

  tagline: 'Your body already knows how to heal.',

  bio: 'Willow is deeply committed to natural living practices and believes modern society has disconnected people from how humans are supposed to exist. She advocates strongly for raw milk, herbal remedies, essential oils, homemade food, sunlight, and avoiding unnecessary chemicals whenever possible. While generally kind and well-intentioned, her confidence in holistic wellness often extends far beyond her actual expertise.',

  about: [
    { icon: '🥛', text: 'Strong supporter of raw milk and local farm sourcing' },
    { icon: '🌿', text: 'Uses essential oils for nearly every situation imaginable' },
    { icon: '☀️', text: 'Believes sunlight and grounding are medically underrated' },
    { icon: '🧴', text: 'Distrustful of processed foods and “chemical-heavy products”' },
    { icon: '🍯', text: 'Makes homemade tinctures, teas, and infused syrups' },
    { icon: '😌', text: 'Maintains a calm tone while saying increasingly questionable things' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://unsplash.com/photos/black-and-white-labeled-bottle-Pm0K9Y3EPUc" target="_blank">Elsa Olofsson · Unsplash</a>'
    }
  ],

  stats: {
    'HOLISTIC CONFIDENCE': 20,
    'CHEMICAL FEAR': 18,
    'CALM ENERGY': 17,
    'SCIENTIFIC RIGOR': 4,
    'HOMEMADE REMEDIES': 19,
    'BOUNDARY BETWEEN WELLNESS AND MEDICINE': 3
  },

  skills: [
    { name: 'Oil Recommendation', val: '+12', prof: true },
    { name: 'Herbal Tea Preparation', val: '+10', prof: true },
    { name: 'Natural Lifestyle Content', val: '+9', prof: true },
    { name: 'Accepting Modern Medicine', val: '-7', prof: false },
    { name: 'Evidence Evaluation', val: '-6', prof: false }
  ],

  specialAbility: 'Try Lavender First (Recharge 5-6)',

  passiveNote: 'Passive: Natural Remedy Aura. Nearby individuals become increasingly likely to receive unsolicited wellness recommendations involving oils, herbs, minerals, or hydration.',

  post: `Friendly reminder that a lot of modern health problems started when people stopped trusting nature and started trusting corporations.

Raw milk, fresh air, mineral rich food, sunlight, herbs, rest, and less stress does more than people realize.

Also if anyone needs more magnesium spray let me know because I made another batch this morning 🌿✨`,

  postDate: 'Morning · Grounding Barefoot',
  reactions: '29',
  comments: '41 Comments',
  shares: '6 Shares',

  friends: ['sadie', 'ruth', 'carol']
},
pastor_ellis: {
  icon: 'images/ellis-profile.jpg',
  portrait: 'images/ellis-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Pastor Ellis "The World Is Watching" Grady',
  label: 'Insular Community Shepherd',
  archetype: 'Lawful Evil · Human · Level 13 Spiritual Authority Figure',
  banner: 'images/ellis-banner.jpg',

  tagline: 'The truth is narrow for a reason.',

  bio: 'Pastor Ellis leads a highly insular church community in Small Town, MT centered around strict social expectations, loyalty, and separation from outside influence. Members are encouraged to maintain close ties within the church while viewing broader culture with suspicion. Ellis presents himself as calm, humble, and deeply caring, though many former attendees describe the environment as emotionally controlling and difficult to leave socially.',

  about: [
    { icon: '⛪', text: 'Leads a tightly interconnected church community' },
    { icon: '📖', text: 'Frames most modern culture as spiritually dangerous' },
    { icon: '👀', text: 'Strong emphasis on accountability and “guarding influences”' },
    { icon: '🤝', text: 'Church functions as primary social structure for many members' },
    { icon: '🧠', text: 'Uses calm language to communicate intense expectations' },
    { icon: '🚪', text: 'Former members often describe difficulty reconnecting socially afterward' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://unsplash.com/photos/blue-sky-with-white-clouds-c7YYeMemTzw" target="_blank">Jessica Mangano · Unsplash</a>'
    }
  ],

  stats: {
    'CHARISMA': 18,
    'SOCIAL INFLUENCE': 20,
    'CERTAINTY': 19,
    'OUTSIDE TRUST': 2,
    'COMMUNITY CONTROL': 17,
    'SELF-DOUBT': 1
  },

  skills: [
    { name: 'Soft-Spoken Authority', val: '+12', prof: true },
    { name: 'Community Consolidation', val: '+11', prof: true },
    { name: 'Moral Framing', val: '+10', prof: true },
    { name: 'Accepting Criticism', val: '-8', prof: false },
    { name: 'Encouraging Independence', val: '-9', prof: false }
  ],

  specialAbility: 'Concerned For Your Soul (Recharge 5-6)',

  passiveNote: 'Passive: Social Gravity. Members gradually reduce outside relationships and activities after prolonged exposure to church-centered community structure.',

  post: `A reminder that not every opportunity presented by the world is healthy for your spirit.

People today are more connected than ever and yet more isolated, anxious, and lost.

There is peace in structure, truth, and surrounding yourself with people who genuinely care about your walk and accountability.

Be careful who influences your home and your family.`,

  postDate: 'Sunday Evening · After Service',
  reactions: '38',
  comments: '24 Comments',
  shares: '11 Shares',

  friends: ['rick', 'keith', 'carol']
},
tiffany: {
  icon: 'images/tiffany-profile.jpg',
  portrait: 'images/tiffany-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Tiffany "We’re Just Friends" Lawson',
  label: 'Community Chaos Coordinator',
  archetype: 'Chaotic Neutral · Human · Level 11 Boundary-Free Motivator',
  banner: 'images/tiffany-banner.jpg',

  tagline: 'Positive vibes only 💕',

  bio: 'Tiffany coaches youth activities in Small Town, MT and maintains an extremely active social presence built around encouragement, motivation, and relentless community involvement. Unfortunately, her personal life has become increasingly complicated due to overlapping relationships, vague boundaries, and a tendency to treat emotional consequences as unfortunate misunderstandings. Despite ongoing drama, Tiffany continues operating with unwavering optimism and aggressive positivity.',

  about: [
    { icon: '🏐', text: 'Heavily involved in local coaching and youth activities' },
    { icon: '📱', text: 'Posts motivational content during active interpersonal disasters' },
    { icon: '💕', text: 'Frequently describes complicated situations as “people being negative”' },
    { icon: '🎈', text: 'Currently planning an extremely public gender reveal event' },
    { icon: '😬', text: 'Town speculation surrounding the pregnancy remains intense' },
    { icon: '✨', text: 'Believes authenticity means never feeling embarrassed publicly' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/search/gender%20reveal/" target="_blank">0l R · Pexels</a>'
    }
  ],

  stats: {
    'SOCIAL ENERGY': 20,
    'BOUNDARY RECOGNITION': 2,
    'OPTIMISM': 18,
    'SELF-AWARENESS': 3,
    'PUBLIC DRAMA GENERATION': 19,
    'COMMUNITY VISIBILITY': 17
  },

  skills: [
    { name: 'Motivational Posting', val: '+11', prof: true },
    { name: 'Emotional Deflection', val: '+10', prof: true },
    { name: 'Event Planning', val: '+9', prof: true },
    { name: 'Reading Consequences', val: '-8', prof: false },
    { name: 'Private Decision Making', val: '-9', prof: false }
  ],

  specialAbility: 'Positive Energy Only (Recharge 5-6)',

  passiveNote: 'Passive: Community Spillover. Personal drama automatically expands into school events, local gossip networks, and social media discussions within 24 hours.',

  post: `Just a reminder that happiness really triggers people who are unhappy with themselves 💕

Life is too short to live according to other peoples expectations.

Anyway we are SO excited for the gender reveal this weekend!! Smoke cannons, cupcakes, games, photos, the whole thing 🎈✨

No negativity please. We are focusing on love and positivity only.`,

  postDate: 'Evening · Comment Monitoring Active',
  reactions: '54',
  comments: '117 Comments',
  shares: '8 Shares',

  friends: ['sadie', 'bev', 'wayne']
},
janice: {
  icon: 'images/janice-profile.jpg',
  portrait: 'images/janice-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Janice "Why Would Anyone Leave?" Palmer',
  label: 'Unofficial Tourism Ambassador',
  archetype: 'Lawful Good · Human · Level 9 Civic Optimist',
  banner: 'images/janice-banner.jpg',

  tagline: 'Everything you need is right here.',

  bio: 'Janice is deeply committed to promoting Small Town, MT as an ideal place to live despite mounting evidence to the contrary. She regularly posts about the town’s “many amenities” which primarily include a gas station, school events, seasonal craft fairs, and the fact that parking is easy. Criticism of the town is treated as both ungrateful and deeply confusing to her.',

  about: [
    { icon: '🏘️', text: 'Strong advocate for small-town living and community values' },
    { icon: '📣', text: 'Frequently promotes local events with extreme enthusiasm' },
    { icon: '⛽', text: 'Describes basic conveniences as major amenities' },
    { icon: '🎪', text: 'Treats annual events as nationally significant attractions' },
    { icon: '😤', text: 'Cannot understand why young people move away' },
    { icon: '🧠', text: 'Believes community spirit compensates for all missing infrastructure' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/buildings-in-village-5244957/" target="_blank">Chris Flaten · Pexels</a>'
    }
  ],

  stats: {
    'CIVIC PRIDE': 20,
    'REALISM': 3,
    'EVENT ENTHUSIASM': 18,
    'TOWN LOYALTY': 19,
    'PERSPECTIVE': 4,
    'FACEPALM BOOSTERISM': 17
  },

  skills: [
    { name: 'Community Promotion', val: '+12', prof: true },
    { name: 'Event Sharing', val: '+10', prof: true },
    { name: 'Defending Local Culture', val: '+9', prof: true },
    { name: 'Acknowledging Limitations', val: '-8', prof: false },
    { name: 'Understanding Urban Appeal', val: '-7', prof: false }
  ],

  specialAbility: 'Hidden Gem (Passive)',

  passiveNote: 'Passive: Civic Reframing. Ordinary town features become increasingly impressive when described repeatedly with enough enthusiasm.',

  post: `People always say theres “nothing to do” here and honestly I just dont understand that mindset.

We have school sports, two parks, the summer fair, church activities, craft sales, community breakfasts, and one of the friendliest gas stations anywhere around.

Not every town can say that.

Some people are so focused on what we dont have that they forget how special simple living really is ❤️`,

  postDate: 'Afternoon · Sharing Another Event Flyer',
  reactions: '27',
  comments: '34 Comments',
  shares: '5 Shares',

  friends: ['carol', 'linda', 'doris']
},
amber: {
  icon: 'images/amber-profile.jpg',
  portrait: 'images/amber-profile.jpg',
  imagePosition: 'center top',
  imageFit: 'cover',
  name: 'Amber "Cash Only" Devereaux',
  label: 'After-Hours Network Specialist',
  archetype: 'Chaotic Neutral · Human · Level 10 Nightlife Survivor',
  banner: 'images/amber-banner.jpg',

  tagline: 'No drama. Serious inquiries only.',

  bio: 'Amber works nights at a regional strip club and has developed an extensive social network spanning nearly every demographic in and around Small Town, MT. She is known for hosting chaotic gatherings, knowing everybody’s business, and somehow always being connected to whatever questionable situation is currently unfolding. Amber is currently attempting to sell her house, though the heavily customized basement has become a recurring obstacle during showings.',

  about: [
    { icon: '🌙', text: 'Works nights at a regional adult entertainment venue' },
    { icon: '🏠', text: 'Currently attempting to sell a highly personalized home' },
    { icon: '🪩', text: 'Basement includes a permanently installed dance pole' },
    { icon: '📱', text: 'Knows everyone and communicates mostly through late-night messages' },
    { icon: '💸', text: 'Strong preference for cash transactions and vague arrangements' },
    { icon: '🍸', text: 'Frequently surrounded by rapidly escalating situations' },
    {
      icon: '🎨',
      text: 'Banner: <a href="https://www.pexels.com/photo/red-ferrari-at-southampton-car-show-36690568/" target="_blank">George Blatchford · Pexels</a>'
    }
  ],

  stats: {
    'SOCIAL CONNECTIONS': 20,
    'CHAOS MAGNETISM': 19,
    'FINANCIAL STABILITY': 4,
    'CONFIDENCE': 18,
    'LATE NIGHT ENERGY': 17,
    'QUESTIONABLE DECISION MAKING': 16
  },

  skills: [
    { name: 'Reading People Quickly', val: '+11', prof: true },
    { name: 'Crisis Navigation', val: '+10', prof: true },
    { name: 'Avoiding Specific Questions', val: '+9', prof: true },
    { name: 'Long-Term Planning', val: '-7', prof: false },
    { name: 'Maintaining Calm Environments', val: '-8', prof: false }
  ],

  specialAbility: 'You Didn’t Hear It From Me (Recharge 5-6)',

  passiveNote: 'Passive: Social Gravity Well. Rumors, drama, and complicated interpersonal situations naturally accumulate around Amber over time.',

  post: `PRICE REDUCED AGAIN.

3 bedroom, 2 bath, finished basement, updated kitchen, lots of storage.

And YES the pole stays because removing it damaged the ceiling last time.

Honestly its a really nice setup if people would stop acting weird during walkthroughs.

Message me if serious because I’m tired of wasting my time with people who just want to look around.`,

  postDate: '11:48 PM · Frustrated Seller Energy',
  reactions: '41',
  comments: '67 Comments',
  shares: '5 Shares',

  friends: ['tiffany', 'gary', 'wayne']
},
};


function avatarMarkup(profile, className = '') {
  const pos = profile.imagePosition || 'center top';
  const isImage = profile.icon && profile.icon.includes('images/');

  const fit = profile.imageFit || 'cover';

  const imgStyle = className === 'dir-thumb' || className === 'about-portrait'
    ? `style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:${fit};object-position:${pos};display:block;"`
    : `style="object-fit:${fit};object-position:${pos}"`;

  const content = isImage
    ? `<img src="${profile.icon}" alt="${profile.name}" ${imgStyle}>`
    : profile.icon;

  return className
    ? `<div class="${className}">${content}</div>`
    : content;
}

function nav(view, profileId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  ['tnHome', 'tnFriends', 'tnAbout', 'bnHome', 'bnFriends', 'bnAbout'].forEach(id => {
    document.getElementById(id)?.classList.remove('active');
  });

  if (view === 'home') {
    document.getElementById('viewHome').classList.add('active');
    document.getElementById('tnHome')?.classList.add('active');
    document.getElementById('bnHome')?.classList.add('active');
  } else if (view === 'profile' && profileId) {
    renderProfile(profileId);
    document.getElementById('viewProfile').classList.add('active');
  } else if (view === 'friends') {
    renderFriendsDir();
    document.getElementById('viewFriends').classList.add('active');
    document.getElementById('tnFriends')?.classList.add('active');
    document.getElementById('bnFriends')?.classList.add('active');
  } else if (view === 'about') {
    document.getElementById('viewAbout').classList.add('active');
    document.getElementById('tnAbout')?.classList.add('active');
    document.getElementById('bnAbout')?.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHomeGrid() {
  const all = Object.entries(profiles);
  // Shuffle and take 4
  const picks = all
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  document.getElementById('homeProfileGrid').innerHTML = picks.map(([id, p]) => `
    <div class="profile-tile" role="button" tabindex="0"
         onclick="nav('profile','${id}')"
         onkeydown="if(event.key==='Enter'||event.key===' ')nav('profile','${id}')">
      ${avatarMarkup(p, 'small-avatar')}
      <div class="tile-name">${p.name}</div>
      <div class="tile-label">${p.label}</div>
    </div>
  `).join('');
}

function renderFriendsDir() {
  const shuffled = Object.entries(profiles)
    .slice()
    .sort(() => Math.random() - 0.5);

  document.getElementById('friendsDirectory').innerHTML = shuffled.map(([id, p]) => `
    <div class="directory-card" role="button" tabindex="0"
         onclick="nav('profile','${id}')"
         onkeydown="if(event.key==='Enter'||event.key===' ')nav('profile','${id}')">
      ${avatarMarkup(p, 'dir-thumb')}
      <div class="dir-info">
        <div class="dir-name">${p.name}</div>
        <div class="dir-label">${p.label}</div>
        <div class="dir-add-btn">View Profile</div>
      </div>
    </div>
  `).join('');
}

function mod(score) {
  const m = Math.floor((Number(score) - 10) / 2);
  return Number.isFinite(m) ? (m >= 0 ? `+${m}` : `${m}`) : '';
}

function renderProfile(id, tab = 'about') {
  const p = profiles[id];

  document.getElementById('profileCard').innerHTML = `
    <div class="profile-cover-card">
      <div class="profile-cover">
        <img src="${p.banner}" alt="${p.name} banner" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid'">
        <div class="profile-cover-placeholder" style="display:none;">🖼️ banner drawing goes here<br><small>${p.banner}</small></div>
      </div>

      <div class="profile-identity">
        <div class="profile-avatar-row">
          ${avatarMarkup(p, 'profile-big-avatar')}
          <div class=\"profile-name-block\">
            <div class="profile-name">${p.name}</div>
            <div class="profile-archetype">${p.archetype}</div>
            <div class="profile-friends-count">${p.friends.length} friends</div>
          </div>
        </div>

        <div class="profile-action-row">
          <button class="btn-primary" onclick="openModal(this)" data-icon="${p.icon}" data-name="${p.name.replace(/"/g, '&quot;')}">👀 View Photo</button>
          <button class="btn-secondary">📨 Message (Ignored)</button>
          <button class="btn-secondary" onclick="nav('home')">← Back</button>
        </div>
      </div>

      <div class="profile-tab-bar">
        <button class="profile-tab ${tab === 'about' ? 'active' : ''}" onclick="renderProfile('${id}', 'about')">About</button>
        <button class="profile-tab ${tab === 'posts' ? 'active' : ''}" onclick="renderProfile('${id}', 'posts')">Posts</button>
        <button class="profile-tab" onclick="nav('friends')">"Friends"</button>
      </div>
    </div>

    <div id="profileTabContent">
      ${tab === 'posts' ? renderPostsTab(p) : renderAboutTab(p)}
    </div>
  `;
}

function renderAboutItems(p) {
  return p.about.map(a => `
    <div class="about-item">
      <span class="about-icon">${a.icon}</span>
      <span>${a.text}</span>
    </div>
  `).join('');
}

function renderStats(p) {
  return Object.entries(p.stats).map(([label, val]) => `
    <div class="stat-box">
      <div class="stat-score">${val}</div>
      <div class="stat-mod">${mod(val)}</div>
      <div class="stat-label">${label}</div>
    </div>
  `).join('');
}

function renderSkills(p) {
  return p.skills.map(s => `
    <div class="skill-row">
      <span>${s.prof ? '●' : '○'} ${s.name}</span>
      <span class="skill-val">${s.val}</span>
    </div>
  `).join('');
}

function renderAboutTab(p) {
  return `
    <div class="about-tab-wrap">

      <!-- TOP ROW: two columns -->
      <div class="about-top-grid">

        <!-- LEFT: portrait + bio + tagline -->
        <div class="panel about-panel">
          <div class="about-section-title">About</div>
          ${p.portrait ? `
            <div class="about-portrait">
              <img src="${p.portrait}" alt="${p.name}">
            </div>
          ` : ''}
          <p class="profile-bio">${p.bio}</p>
          <div class="divider"></div>
          <p style="font-size:.92rem; font-style:italic; color:var(--muted);">${p.tagline}</p>
        </div>

        <!-- RIGHT: about items with icons -->
        <div class="panel about-panel">
          <div class="about-section-title">Details</div>
          ${renderAboutItems(p)}
        </div>

      </div>

      <!-- BOTTOM ROW: stats full width -->
      <div class="panel about-panel">
        <div class="about-section-title">📊 Character Stats</div>
        <div class="stat-block">${renderStats(p)}</div>
        <div class="divider"></div>
        <div class="about-section-title small-section-title">Skills</div>
        <div class="skills-list">${renderSkills(p)}</div>
        <div class="divider"></div>
        <p class="ability-text"><strong>${p.specialAbility}</strong></p>
        <p class="passive-text">${p.passiveNote}</p>
      </div>

    </div>
  `;
}

function renderPostsTab(p) {
  // Convert blank lines to paragraph breaks, single newlines to <br>
  const postHtml = p.post
    .split(/\n\n+/)
    .map(para => `<p>${para.trim().replace(/\n/g, '<br>')}</p>`)
    .join('');

  return `
    <div class="posts-tab-grid">
      <div class="panel about-panel">
        <div class="about-section-title">About</div>
        <p class="profile-bio">${p.bio}</p>
        <div class="divider"></div>
        <p><em>${p.tagline}</em></p>
        <div class="divider"></div>
        ${renderAboutItems(p)}
      </div>

      <article class="post-card">
        <div class="post-head">
          ${avatarMarkup(p, 'post-avatar')}
          <div class="post-head-text">
            <div class="post-name">${p.name}</div>
            <div class="post-meta-line">${p.postDate} · 🌐</div>
          </div>
          <span class="post-dots">···</span>
        </div>
        <div class="post-body">${postHtml}</div>
        <div class="reaction-bar">
          <span>👍 😡 😮 ${p.reactions}</span>
          <span>${p.comments} · ${p.shares}</span>
        </div>
        <div class="reaction-btns">
          <button class="rxn-btn">👍 Like</button>
          <button class="rxn-btn">💬 Comment</button>
          <button class="rxn-btn">↗️ Share</button>
        </div>
      </article>
    </div>
  `;
}

function openModal(btn) {
  const icon = btn.dataset.icon;
  const name = btn.dataset.name;
  const modalContent = document.getElementById('modalContent');
  if (icon && icon.includes('images/')) {
    modalContent.innerHTML = `<img src="${icon}" alt="${name}">`;
  } else {
    modalContent.textContent = icon;
  }
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

renderHomeGrid();