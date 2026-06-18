import './style.css'

const app = document.getElementById('app')

app.innerHTML = `
<!-- COVER -->
<div class="cover" id="cover">
  <div class="cover-inner">
    <div class="monogram">F & R</div>
    <div class="subtitle script">a celebration of love & union</div>
    <div class="hint">Tap anywhere to open</div>
  </div>
</div>

<main class="site" id="site">

  <!-- HERO -->
 <section class="hero reveal">

  <img src="/couple.jpg" class="hero-img"/>

  <div class="hero-gradient"></div>

  <div class="hero-overlay">

    <div class="hero-content">
      <p class="hero-kicker script">A union of hearts</p>

      <h1 class="name">
        Fathima <span>&</span> Rashid
      </h1>

      <p class="date">24 January 2027</p>

      <div class="hero-line"></div>

      <p class="hero-sub">
        Wedding Invitation Ceremony
      </p>
    </div>

  </div>

</section>
  

<!-- SECTION INTRO -->
<div class="section-heading">
  <h2 class="meet-couple">MEET THE COUPLE</h2>
</div>

  <!-- GROOM -->
<section class="profile reveal">
  <img class="rounded" src="/groom.jpg"/>

  <div>
    <h2 class="title">The Groom</h2>

    <p class="script">Calm, grounded, elegant presence.</p>

   <div class="mini-address">
  <span class="mini-label">groom's Family</span>
  Fathima Residence<br/>
  Bandra, Mumbai<br/>
  Maharashtra, India
</div>
  </div>
</section>

<!-- BRIDE -->
<section class="profile reverse reveal">
  <img class="rounded" src="/bride.jpg"/>

  <div>
    <h2 class="title">The Bride</h2>

    <p class="script">Graceful, timeless, radiant charm.</p>

<div class="mini-address">
  <span class="mini-label">Bride’s Family</span>
  Fathima Residence<br/>
  Bandra, Mumbai<br/>
  Maharashtra, India
</div>
  </div>
</section>

<section class="invitation reveal">

  <div class="invitation-card">

    <p class="inv-kicker script">With love & blessings</p>

    <div class="gold-divider"></div>

    <h2 class="inv-title">Wedding Invitation</h2>

    <p class="inv-text">
      We joyfully invite you to celebrate the union of two hearts,
      bound by love, faith, and lifelong companionship.
    </p>

    <div class="gold-divider small"></div>

    <div class="inv-details">

      <div class="inv-item">
        <span>Date</span>
        <p>24 January 2027</p>
      </div>

      <div class="inv-item">
        <span>Time</span>
        <p>7:00 PM</p>
      </div>

      <div class="inv-item">
        <span>Venue</span>
        <p>The Grand Ballroom</p>
      </div>

      <div class="inv-item">
        <span>Reception</span>
        <p>8:30 PM</p>
      </div>

    </div>

    <div class="inv-footer-script script">
      A celebration written in grace & timeless love
    </div>

  </div>

</section>
<!-- COUNTDOWN -->
<section class="countdown reveal">

  <p class="countdown-kicker script">Counting the moments</p>

  <h2 class="countdown-title">Wedding Countdown</h2>

  
  <div class="countdown-card">
  
  <div class="count-item">
    <span id="days">00</span>
    <p>Days</p>
  </div>

  <div class="divider"></div>

  <div class="count-item">
    <span id="hours">00</span>
    <p>Hours</p>
  </div>

  <div class="divider"></div>

  <div class="count-item">
    <span id="minutes">00</span>
    <p>Minutes</p>
  </div>

  <div class="divider"></div>

  <div class="count-item">
    <span id="seconds">00</span>
    <p>Seconds</p>
  </div>

</div>

</section>
  <!-- VENUE -->
<section class="venue reveal">

  <div class="venue-media">

    <img src="/venue.jpg"/>

    <div class="venue-overlay">

      <div class="venue-box">
        <h2 class="title">The Venue</h2>

        <p class="script venue-name">The Grand Ballroom</p>

        <p class="venue-desc">
          Elegant celebrations • Premium experience venue
        </p>

        <a class="venue-btn" href="https://maps.google.com" target="_blank">
          Open in Maps
        </a>
      </div>

    </div>

  </div>

</section>

  <!-- TIMELINE -->
  <section class="timeline reveal">

    <h2 class="section-title">Event Timeline</h2>

    <div class="timeline-wrap">
      <div class="timeline-item"><span>7:00 PM</span><p>Guest Arrival</p></div>
      <div class="timeline-item"><span>7:30 PM</span><p>Nikah Ceremony</p></div>
      <div class="timeline-item"><span>8:30 PM</span><p>Dinner & Celebration</p></div>
      <div class="timeline-item"><span>10:00 PM</span><p>Closing Moment</p></div>
    </div>

  </section>

  <!-- CLOSING -->
  <section class="closing reveal">
    <h2 class="name">Fathima & Rashid</h2>
    <p class="script soft">Two souls • One journey • Infinite love</p>

    <a class="ig" href="https://instagram.com/aurelle_vows" target="_blank">
      @aurelle_vows
    </a>
  </section>

</main>
`

// ================= COUNTDOWN LOGIC =================

const weddingDate = new Date("2027-01-24T19:00:00").getTime()

function updateCountdown() {
  const now = new Date().getTime()
  const diff = weddingDate - now

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  const set = (id, val) => {
    const el = document.getElementById(id)
    if (el) el.innerText = val < 10 ? "0" + val : val
  }

  set("days", days)
  set("hours", hours)
  set("minutes", minutes)
  set("seconds", seconds)
}

setInterval(updateCountdown, 1000)
updateCountdown()

const cover = document.getElementById('cover')
const site = document.getElementById('site')

cover.addEventListener('click', () => {
  cover.classList.add('open')

  setTimeout(() => {
    cover.style.display = 'none'
    document.body.style.overflow = 'auto'

    document.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('show'), i * 120)
    })

  }, 1200)
})
