import './App.css'
import { publicPath } from './publicPath'

const offerings = [
  {
    title: 'Space and infrastructure',
    items: [
      'Dedicated space for training and collaboration',
      'Support for technical teamwork, co-creation, and community events',
    ],
  },
  {
    title: 'Compute and resources',
    items: [
      'Compute resources aligned with your project stage',
      'Hardware and software coverage for development, testing, and demos',
    ],
  },
  {
    title: 'OEM-grade technical training',
    items: [
      'Q&A with senior developers and technology evangelists',
      'Deep dives and hands-on labs on AI tools and modern stacks',
    ],
  },
  {
    title: 'Mentor network and startup coaching',
    items: [
      'Mentors from industry, top universities, and the investment community',
      'One-to-one and small-group sessions across product, go-to-market, and commercialization',
      'Long-term support and a connected developer community',
    ],
  },
  {
    title: 'Structured curriculum and investor access',
    items: [
      'Core modules: AI-native development, product design, growth, financing, equity, and IP',
      'Demo days and investor pitch days with leading funds and partners',
    ],
  },
  {
    title: 'Community and long-term support',
    items: [
      'Ties to global developer ecosystems and partner communities',
      'Alumni recognition for completing teams, plus continued visibility and growth support',
    ],
  },
] as const

/* Avatar filenames match Pinyin slugs: same order as program reference grid */
const mentors = [
  {
    name: 'Liu Jia',
    org: 'Jinsha River Venture Capital',
    role: 'Partner',
    photo: publicPath('mentors/liu-jia.png'),
  },
  {
    name: 'Li Xinhang',
    org: 'Tongge Ventures',
    role: 'Executive Director',
    photo: publicPath('mentors/li-xinhang.png'),
  },
  {
    name: 'Wang Xiaoyu',
    org: 'GURU NETWORK',
    role: 'Founder & CEO',
    photo: publicPath('mentors/wang-xiaoyu.png'),
  },
  {
    name: 'Xu Wu',
    org: 'ZhenFund',
    role: 'Partner',
    photo: publicPath('mentors/xu-wu.png'),
  },
  {
    name: 'Chen Mingquan',
    org: 'Danatech',
    role: 'Founder',
    photo: publicPath('mentors/chen-mingquan.png'),
  },
  {
    name: 'Cheng Xiangjun',
    org: 'iReader Technology',
    role: 'Chairman',
    photo: publicPath('mentors/cheng-xiangjun.png'),
  },
  {
    name: 'Fang Bo',
    org: 'WePai Network',
    role: 'Founder',
    photo: publicPath('mentors/fang-bo.png'),
  },
  {
    name: 'Liu Yiwei',
    org: 'LeXin ShengWen',
    role: 'CEO',
    photo: publicPath('mentors/liu-yiwei.png'),
  },
  {
    name: 'Shen Xiang',
    org: 'DianDian Interactive',
    role: 'CTO',
    photo: publicPath('mentors/shen-xiang.png'),
  },
  {
    name: 'Wang Jialiang',
    org: 'TouchPal',
    role: 'Co-founder & CEO',
    photo: publicPath('mentors/wang-jialiang.png'),
  },
  {
    name: 'Xie Feng',
    org: 'Gamehaus',
    role: 'CEO',
    photo: publicPath('mentors/xie-feng.png'),
  },
  {
    name: 'Zhu Bideng',
    org: '99 Interactive · Genki Forest',
    role: 'Chairman · Executive Director',
    photo: publicPath('mentors/zhu-bideng.png'),
  },
  {
    name: 'Cai Hua',
    org: 'WeLink App',
    role: 'Founder',
    photo: publicPath('mentors/cai-hua.png'),
  },
  {
    name: 'Chen Wenzhi',
    org: 'Zhejiang University, College of Computer Science',
    role: 'Professor',
    photo: publicPath('mentors/chen-wenzhi.png'),
  },
  {
    name: 'Zhang Kejun',
    org: 'Zhejiang University, School of Artificial Intelligence',
    role: 'Professor',
    photo: publicPath('mentors/zhang-kejun.png'),
  },
] as const

function App() {
  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Zhejiang University · App Incubator, home"
          >
            <img
              className="brand__zju"
              src={publicPath('logo-text-left.svg')}
              alt=""
              width={40}
              height={40}
              decoding="async"
            />
            <span className="brand__rule" aria-hidden="true" />
            <img
              className="brand__app"
              src={publicPath('logo-apple.svg')}
              alt=""
              width={150}
              height={40}
              decoding="async"
            />
          </a>
          <nav className="nav" aria-label="Primary">
            <ul>
              <li>
                <a href="#about">Program</a>
              </li>
              <li>
                <a href="#offerings">What we offer</a>
              </li>
              <li>
                <a href="#mentors">Mentors</a>
              </li>
              <li>
                <a href="#apply">Apply</a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <a className="btn btn--ghost" href="#apply">
              Mentor application
            </a>
            <a className="btn btn--primary" href="#apply">
              Apply now
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div
            className="hero__bg"
            aria-hidden="true"
            style={{
              background: `linear-gradient(
      100deg,
      rgba(2, 8, 22, 0.94) 0%,
      rgba(4, 14, 36, 0.78) 34%,
      rgba(6, 20, 44, 0.45) 62%,
      rgba(8, 26, 48, 0.2) 100%
    ), #1a1410 url(${publicPath('hero-bg.png')}) 48% 46% / cover no-repeat`,
            }}
          />
          <div className="section-inner hero__content">
            <p className="eyebrow">Join us</p>
            <h1 className="hero__title">App Incubator</h1>
            <p className="hero__lede">
              Mentorship and incubation for the next generation of iOS
              developers—helping you build products, grow businesses, and ship
              in the global app economy.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#apply">
                Apply for an upcoming session
              </a>
              <a className="btn btn--secondary" href="#about">
                About the program
              </a>
            </div>
          </div>
        </section>

        <section className="band band--tint" id="about">
          <div className="section-inner about">
            <h2>About the App Incubator</h2>
            <p className="about__text">
              The App Incubator is supported by the App Incubation Fund. We
              provide world-class training across{' '}
              <strong>app development</strong>,{' '}
              <strong>product design</strong>, <strong>marketing</strong>, and{' '}
              <strong>business operations</strong>. We connect teams with
              industry leaders and investors, deepen business skills, and
              help you succeed in the evolving <strong>iOS app economy</strong>
              .
            </p>
          </div>
        </section>

        <section className="band" id="offerings">
          <div className="section-inner">
            <h2 className="section-heading">What we offer</h2>
            <p className="section-sub">
              Free and structured support across space, technology, people, and
              go-to-market—similar in spirit to how an academy pairs
              instruction with expert consultation.
            </p>
            <ul className="offering-grid">
              {offerings.map((o) => (
                <li key={o.title} className="offering-card">
                  <h3>{o.title}</h3>
                  <ul className="offering-card__list">
                    {o.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band band--tint" id="mentors">
          <div className="section-inner">
            <h2 className="section-heading">Mentor network</h2>
            <p className="section-sub mentor-intro">
              Senior builders, leading faculty, and investors—your extended
              team for product, growth, and funding. (Representative list;
              order is not a ranking. Additional mentors are joining on an
              ongoing basis.)
            </p>
            <ul className="mentor-grid">
              {mentors.map((m) => (
                <li key={m.name} className="mentor-card">
                  <div className="mentor-card__photo">
                    <img
                      src={m.photo}
                      alt=""
                      width={400}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mentor-card__name">{m.name}</h3>
                  <p className="mentor-card__org">{m.org}</p>
                  <p className="mentor-card__role">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band cta" id="apply">
          <div className="section-inner cta__inner">
            <div>
              <h2 className="section-heading cta__title">Apply and stay in
                touch</h2>
              <p className="cta__text">
                Apply for the online program and in-person options when
                available. With your consent, we can send email updates on
                deadlines, events, and ways to connect with mentors and
                partners.
              </p>
            </div>
            <div className="cta__actions">
              <a
                className="btn btn--primary"
                href="mailto:incubator@example.com?subject=App%20Incubator%20application"
              >
                Apply now
              </a>
              <a
                className="btn btn--secondary"
                href="mailto:incubator@example.com?subject=Mailing%20list"
              >
                Mailing list
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner">
          <div className="footer__grid">
            <div>
              <p className="footer__brand">App Incubator</p>
              <p className="footer__muted">App Incubation Fund</p>
            </div>
            <div>
              <p className="footer__label">Program</p>
              <ul className="footer__links">
                <li>
                  <a href="#about">Program overview</a>
                </li>
                <li>
                  <a href="#apply">Mentor application</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer__label">Contact</p>
              <p>
                <a href="mailto:incubator@example.com">incubator@example.com</a>
              </p>
            </div>
          </div>
          <div className="footer__legal">
            <p>ICP filing: 浙ICP备2026018678号-1</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
