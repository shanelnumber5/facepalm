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
  comments: '0 Comments',
  shares: '0 Shares',

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
  shares: '0 Shares',

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
};


function avatarMarkup(profile, className = '') {
  const pos = profile.imagePosition || 'center top';
  const isImage = profile.icon && profile.icon.includes('images/');

  const imgStyle = className === 'dir-thumb' || className === 'about-portrait'
    ? `style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:${pos};display:block;"`
    : `style="object-position:${pos}"`;

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
  document.getElementById('friendsDirectory').innerHTML = Object.entries(profiles).map(([id, p]) => `
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