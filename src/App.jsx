import React from 'react'
import { Globe2, Package, GraduationCap, TrendingUp, MapPin, Globe, MonitorPlay, Handshake, Compass } from 'lucide-react'
import { MAP_DOTS } from './mapDots'

const WHATSAPP_URL = 'https://wa.me/3816068932' 
const WEBSITE_LABEL = 'WWW.Academiadeimportacion.site'
const CONTACT_EMAIL = ''
const PORT_PHOTO = 'https://images.unsplash.com/photo-1759216373394-91146ca977c7?fm=jpg&q=80&w=1400&auto=format&fit=crop'
const SHIP_PHOTO = 'https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?fm=jpg&q=80&w=1400&auto=format&fit=crop'

function BrandMark({ size = 40 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} role="img" aria-label="ComEx">
      <circle cx="32" cy="32" r="30" fill="none" stroke="#E8622A" strokeWidth="3" />
      <path d="M18 40 L32 20 L46 40" fill="none" stroke="#0B2A4D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="20" r="4" fill="#E8622A" />
    </svg>
  )
}

function DotMap() {
  return (
    <svg className="dots" viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid slice">
      {MAP_DOTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#FFFFFF" opacity={0.55} />
      ))}
    </svg>
  )
}

function NetworkOverlay() {
  const nodes = [
    [60, 60], [180, 40], [300, 90], [420, 50], [520, 120],
    [140, 160], [260, 200], [380, 170], [480, 220], [60, 220],
  ]
  const links = [[0,1],[1,2],[2,3],[3,4],[0,5],[1,5],[5,6],[2,6],[6,7],[3,7],[7,8],[5,9],[6,9]]
  return (
    <svg className="network" viewBox="0 0 560 280" preserveAspectRatio="xMidYMid slice">
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#E8622A" strokeWidth="1" opacity="0.55" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#F17A3D" />
      ))}
    </svg>
  )
}

const modules = [
  {
    day: 'Lunes',
    title: 'Comercio Exterior',
    desc: 'Vas a aprender a realizar una importación paso a paso desde cero y a dominar todo el lenguaje técnico necesario para negociar con seguridad.',
  },
  {
    day: 'Martes y Jueves',
    title: 'Inglés de ComEx y Viajes',
    desc: 'Inglés técnico para negociar directamente con proveedores extranjeros, más el vocabulario práctico para tus viajes de negocios: hacer booking de hoteles, salir a cenar y moverte con fluidez.',
  },
  {
    day: 'Viernes',
    title: 'E-commerce y Ventas',
    desc: 'Vas a aprender a crear tu tienda online desde cero en distintas plataformas y las estrategias clave para empezar a vender tus productos por ahí.',
  },
]

const scheduleNotes = [
  'Las clases son 100% virtuales, a cargo de profesionales previamente filtrados por Javier.',
  'Javier, además de dictar Comercio Exterior, participa como apoyo en las clases de los otros módulos.',
  'Cada clase dura aproximadamente entre 1 hora y 1 hora y media, según lo requiera el tema.',
  'El horario definitivo se define en común acuerdo entre quienes se van sumando al grupo.',
]

const teacherPoints = [
  {
    title: 'Filtra a cada profesional',
    desc: 'Javier selecciona personalmente a los profesionales que dictan Inglés y E-commerce, y participa como apoyo en ambas clases.',
  },
  {
    title: 'Estuvo en la Feria de Cantón',
    desc: 'Viajó a China hace unos meses y estuvo en la Feria de Cantón. Va a compartir cómo es manejarse ahí: aplicaciones, contactos y cómo moverse en el mercado chino.',
  },
  {
    title: 'Classroom con material propio',
    desc: 'Sube contenido al Classroom del curso, comparte herramientas clave para el COMEX y algunos contactos y proveedores de cortesía.',
  },
]

const includes = [
  { icon: MonitorPlay, title: 'Classroom del curso', desc: 'Contenido de cada módulo disponible para repasar cuando quieras.' },
  { icon: Compass, title: 'Herramientas de COMEX', desc: 'Recursos prácticos para armar tu propia importación.' },
  { icon: Handshake, title: 'Contactos de cortesía', desc: 'Algunos contactos y proveedores compartidos por Javier.' },
  { icon: Globe, title: 'Mirada del mercado chino', desc: 'Lo que Javier vivió en la Feria de Cantón, de primera mano.' },
]

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            <BrandMark />
            <div className="brand-text">
              JAVIER RIVERO
              <span>COMEX</span>
            </div>
          </div>
          <div className="nav-links nav-links-web">
            <a className="plain" href="#modulos">Módulos</a>
            <a className="plain" href="#cronograma">Cronograma</a>
            <a className="plain" href="#profesor">Profesor</a>
            <a href="#contacto" className="btn btn-orange">Inscribirme</a>
          </div>
        </div>
      </nav>

      <header>
        <div className="hero-banner">
          <div className="hero-map-panel">
            <DotMap />
            <div className="hero-map-copy">
              Conectamos oportunidades,<br />
              <span className="accent">impulsamos</span> tu negocio.
            </div>
          </div>

          <div className="hero-center">
            <div className="hero-eyebrow-mono">Formación en comercio exterior</div>
            <h1 className="hero-title">
              JAVIER RIVERO
              <span className="lic">LIC. EN COMEX</span>
            </h1>
            <div className="hero-rule" />
            <div className="hero-tagline">
              Comex, inglés y e-commerce <span className="accent">en un solo recorrido.</span>
            </div>
          </div>

          <div className="hero-photo" style={{ backgroundImage: `url(${PORT_PHOTO})` }} />
        </div>

        <div className="hero-strip">
          <div className="hero-ship" style={{ backgroundImage: `url(${SHIP_PHOTO})` }}>
            <NetworkOverlay />
          </div>
          <div className="icon-strip">
            <div className="icon-item">
              <div className="ic-circle"><Globe2 size={24} /></div>
              <span>Comercio<br />Exterior</span>
            </div>
            <div className="icon-item">
              <div className="ic-circle"><GraduationCap size={24} /></div>
              <span>Inglés de<br />ComEx</span>
            </div>
            <div className="icon-item">
              <div className="ic-circle"><Package size={24} /></div>
              <span>E-commerce<br />y Ventas</span>
            </div>
            <div className="icon-item">
              <div className="ic-circle"><TrendingUp size={24} /></div>
              <span>Crecemos<br />Con vos</span>
            </div>
          </div>
        </div>

        <div className="hero-contact-bar">
          <div className="item"><Globe /> {WEBSITE_LABEL}</div>
          <div className="item"><Mail /> {CONTACT_EMAIL}</div>
          <div className="item"><MapPin /> Clases 100% virtuales</div>
        </div>
      </header>

      <section className="block" id="modulos">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Los tres módulos</div>
            <h2>Qué vamos a ver <span className="accent">en cada módulo</span></h2>
            <p>Un recorrido semanal que combina la parte técnica de importar, el idioma para negociar y la forma de vender lo que importás.</p>
          </div>
          <div className="modules-grid">
            {modules.map((m) => (
              <div className="module-card" key={m.title}>
                <span className="module-day">{m.day}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block section-dark" id="cronograma">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Cronograma</div>
            <h2>Clases virtuales, en un horario flexible</h2>
            <p>Todo se cursa online. El horario se termina de definir según la disponibilidad del grupo que se va formando.</p>
          </div>
          <div className="schedule-wrap">
            <div>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Día</th>
                    <th>Módulo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="day">Lunes</td><td>Comercio Exterior</td></tr>
                  <tr><td className="day">Martes</td><td>Inglés de ComEx y Viajes</td></tr>
                  <tr><td className="day">Jueves</td><td>Inglés de ComEx y Viajes</td></tr>
                  <tr><td className="day">Viernes</td><td>E-commerce y Ventas</td></tr>
                </tbody>
              </table>
              <div className="time-pills">
                <span className="pill">19 a 20 hs</span>
                <span className="pill">20 a 21 hs</span>
                <span className="pill">21 a 22 hs</span>
              </div>
            </div>
            <ul className="schedule-notes">
              {scheduleNotes.map((n, i) => (
                <li key={i}><span className="num">{String(i + 1).padStart(2, '0')}</span><span>{n}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block" id="profesor">
        <div className="container">
          <div className="teacher-wrap">
            <div className="teacher-card">
              <div className="teacher-name">JAVIER<br />RIVERO</div>
              <div className="teacher-role">Lic. en Comex</div>
              <p>
                A cargo del módulo de Comercio Exterior y del acompañamiento general del curso.
                Filtra personalmente a los profesionales de Inglés y E-commerce, y está presente
                como apoyo en esas clases también.
              </p>
            </div>
            <div>
              <div className="section-head" style={{ marginBottom: 30 }}>
                <div className="eyebrow">Sobre el profesor</div>
                <h2>No es solo el que enseña <span className="accent">Comex</span></h2>
              </div>
              <ul className="teacher-points">
                {teacherPoints.map((p, i) => (
                  <li key={p.title}>
                    <span className="tp-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--paper-dim)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Qué incluye</div>
            <h2>Todo lo que vas a tener disponible</h2>
          </div>
          <div className="includes-grid">
            {includes.map((it) => (
              <div className="include-card" key={it.title}>
                <div className="ic-circle-sm"><it.icon size={20} /></div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="cta-final">
        <div className="container">
          <h2>Sumate al próximo grupo de <span className="accent">ComEx.</span></h2>
          <p>Escribinos y te contamos cuándo arranca el próximo grupo y cómo se define el horario según quienes se vayan sumando.</p>
          <div className="cta-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-orange">Escribir por WhatsApp</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="brand">
            <BrandMark size={30} />
            <div className="brand-text" style={{ fontSize: '0.9rem' }}>
              JAVIER RIVERO
              <span>COMEX</span>
            </div>
          </div>
          <div>© {new Date().getFullYear()} Javier Rivero — Formación en comercio exterior</div>
        </div>
      </footer>
    </>
  )
}
