const profiles = {
 clark: {
  icon: 'images/clark-profile.jpg',
  portrait: 'images/clark-profile.jpg',
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

  friends: ['mara', 'veronica']
},
mara: {
  icon: 'images/mara-profile.jpg',
  portrait: 'images/mara-profile.jpg',
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

  friends: ['clark', 'veronica']
},
veronica: {
  icon: '🍷',
  name: 'Veronica “Cabernet Live” Vale',
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

  friends: ['clark', 'mara']
}
};


function avatarMarkup(profile, className = '') {
  const content = profile.icon && profile.icon.includes('images/')
    ? `<img src="${profile.icon}" alt="${profile.name}">`
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
  document.getElementById('homeProfileGrid').innerHTML = Object.entries(profiles).map(([id, p]) => `
    <button class="profile-tile" type="button" onclick="nav('profile','${id}')">
      ${avatarMarkup(p, 'small-avatar')}
      <div class="tile-name">${p.name}</div>
      <div class="tile-label">${p.label}</div>
    </button>
  `).join('');
}

function renderFriendsDir() {
  document.getElementById('friendsDirectory').innerHTML = Object.entries(profiles).map(([id, p]) => `
    <button class="directory-card" type="button" onclick="nav('profile','${id}')">
      ${avatarMarkup(p, 'dir-thumb')}
      <div class="dir-info">
        <div class="dir-name">${p.name}</div>
        <div class="dir-label">${p.label}</div>
        <div class="dir-add-btn">View Profile</div>
      </div>
    </button>
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
          <button class=\"btn-primary\" onclick=\"openModal('${p.icon}')\">👀 Observe</button>
          <button class="btn-secondary">📨 Message (Ignored)</button>
          <button class="btn-secondary" onclick="nav('home')">← Back</button>
        </div>
      </div>

      <div class="profile-tab-bar">
        <button class="profile-tab ${tab === 'about' ? 'active' : ''}" onclick="renderProfile('${id}', 'about')">About</button>
        <button class="profile-tab ${tab === 'posts' ? 'active' : ''}" onclick="renderProfile('${id}', 'posts')">Posts</button>
        <button class="profile-tab" onclick="nav('friends')">Friends</button>
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
    <div class="tab-content-grid about-tab-grid refined-about">
      <div class="panel about-panel about-full">
        <div class="about-section-title">About</div>
        ${p.portrait ? `
          <div class="about-portrait">
            <img src="${p.portrait}" alt="${p.name}">
          </div>
        ` : ''}
        <p class="profile-bio">${p.bio}</p>
        <div class="divider"></div>
        <p><em>${p.tagline}</em></p>
        <div class="divider"></div>
        ${renderAboutItems(p)}
      </div>

      <div class="panel about-panel stats-full">
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
  const postLines = p.post.split('\n').join('<br>');

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
        <div class="post-body">${postLines}</div>
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

function openModal(icon) {
  const modalContent = document.getElementById('modalContent');
  if (icon && icon.includes('images/')) {
    modalContent.innerHTML = `<img src="${icon}" alt="Profile image">`;
  } else {
    modalContent.textContent = icon;
  }
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

renderHomeGrid();
