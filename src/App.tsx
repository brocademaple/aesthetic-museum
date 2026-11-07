import { useEffect, useRef, useState } from "react";
import {
  getTheme,
  museumThemes,
  type ClassicWork,
  type Exhibit,
  type MuseumTheme,
  type ThemeId,
} from "./museumData";

function Icon({
  name,
  size = 20,
}: {
  name: "museum" | "grid" | "archive" | "search" | "arrow" | "close" | "heart" | "sparkle";
  size?: number;
}) {
  const paths = {
    museum: (
      <>
        <path d="m3 10 9-6 9 6" />
        <path d="M5 10h14M6 10v7m4-7v7m4-7v7m4-7v7M4 20h16" />
      </>
    ),
    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="2" />
        <rect x="14" y="4" width="6" height="6" rx="2" />
        <rect x="4" y="14" width="6" height="6" rx="2" />
        <rect x="14" y="14" width="6" height="6" rx="2" />
      </>
    ),
    archive: (
      <>
        <path d="M5 8h14v12H5zM4 4h16v4H4z" />
        <path d="M9 12h6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    heart: <path d="M20 8.5c0 5-8 10-8 10s-8-5-8-10A4.5 4.5 0 0 1 12 5.7 4.5 4.5 0 0 1 20 8.5Z" />,
    sparkle: (
      <>
        <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z" />
        <path d="M19 16c.2 1.7.8 2.3 2.5 2.5-1.7.2-2.3.8-2.5 2.5-.2-1.7-.8-2.3-2.5-2.5 1.7-.2 2.3-.8 2.5-2.5Z" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Mark() {
  return (
    <div className="mark" aria-hidden="true">
      <span className="mark-orbit" />
      <span className="mark-drop" />
    </div>
  );
}

function AmbientDecor() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="orb orb-a" />
      <span className="orb orb-b" />
      <span className="orb orb-c" />
      <span className="flare" />
    </div>
  );
}

function HeroArtwork({ theme }: { theme: MuseumTheme }) {
  if (theme.hero) {
    return <img src={theme.hero} alt={`${theme.name} 风格展厅主视觉`} />;
  }
  return (
    <div className={`${theme.id}-scene theme-scene`} aria-label={`${theme.name} 风格图形主视觉`}>
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

function MuseumTimeline({
  activeTheme,
  onSelect,
}: {
  activeTheme: ThemeId;
  onSelect: (id: ThemeId) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const chronological = [...museumThemes].sort((a, b) => a.timelineStart - b.timelineStart);

  useEffect(() => {
    const track = trackRef.current;
    const activeEl = track?.querySelector<HTMLButtonElement>("button.active");
    if (track && activeEl && track.scrollWidth > track.clientWidth) {
      const left = activeEl.offsetLeft - (track.clientWidth - activeEl.offsetWidth) / 2;
      track.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }, [activeTheme]);

  return (
    <nav className="museum-timeline global-timeline" aria-label="切换美学风格">
      <div className="timeline-track" ref={trackRef} role="list" aria-label="美学风格时间轴">
        {chronological.map((theme) => (
          <button
            key={theme.id}
            role="listitem"
            className={theme.id === activeTheme ? "active" : ""}
            onClick={() => onSelect(theme.id)}
          >
            <span className="timeline-year">{theme.timelineStart}</span>
            <i />
            <b>{theme.name}</b>
            <small>{theme.zhName}</small>
          </button>
        ))}
      </div>
    </nav>
  );
}

function ExhibitVisual({ exhibit, theme }: { exhibit: Exhibit; theme: MuseumTheme }) {
  if (theme.id === "aero") {
    if (exhibit.visual === 3) {
      return (
        <div
          className="visual horizon"
          style={{ backgroundImage: `url(${theme.hero})` }}
          aria-hidden="true"
        />
      );
    }
    if (exhibit.visual === 6) {
      return (
        <div className="visual birds-visual" aria-hidden="true">
          <span className="mini-sun" />
          <i />
          <i />
          <i />
          <b />
        </div>
      );
    }
    if (exhibit.visual === 4) {
      return (
        <div className="visual button-visual" aria-hidden="true">
          <span>EXPLORE</span>
        </div>
      );
    }
    if (exhibit.visual === 0) {
      return (
        <div className="visual droplet-visual" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <b />
        </div>
      );
    }
    if (exhibit.visual === 1) {
      return (
        <div className="visual bubble-visual" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      );
    }
    if (exhibit.visual === 2) {
      return (
        <div className="visual flare-visual" aria-hidden="true">
          <i />
          <i />
          <i />
          <b />
        </div>
      );
    }
    if (exhibit.visual === 5) {
      return (
        <div className="visual gradient-visual" aria-hidden="true">
          <i />
          <i />
        </div>
      );
    }
    return (
      <div className="visual lcd-visual" aria-hidden="true">
        <span />
        <i />
      </div>
    );
  }

  return (
    <div
      className={`visual motif-visual motif-${exhibit.visual} motif-${theme.id}`}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
      <span />
      <b>{theme.id === "brutal" && exhibit.visual === 1 ? "Aa" : ""}</b>
    </div>
  );
}

function ExhibitCard({
  exhibit,
  theme,
  onClick,
}: {
  exhibit: Exhibit;
  theme: MuseumTheme;
  onClick: () => void;
}) {
  return (
    <button className="exhibit-card" onClick={onClick} aria-label={`查看展品：${exhibit.title}`}>
      <ExhibitVisual exhibit={exhibit} theme={theme} />
      <div className="card-copy">
        <span>{exhibit.number}</span>
        <div>
          <h3>{exhibit.title}</h3>
          <p>{exhibit.en}</p>
        </div>
        <i>
          <Icon name="arrow" size={17} />
        </i>
      </div>
    </button>
  );
}

function DetailDrawer({
  exhibit,
  theme,
  onClose,
}: {
  exhibit: Exhibit | null;
  theme: MuseumTheme;
  onClose: () => void;
}) {
  const [saved, setSaved] = useState(false);
  if (!exhibit) return null;

  return (
    <>
      <button className="drawer-scrim" aria-label="关闭详情" onClick={onClose} />
      <aside className="detail-drawer" aria-label={`${exhibit.title}展品详情`}>
        <div className="drawer-top">
          <span>
            EXHIBIT DETAIL · HALL {theme.id.toUpperCase()} · {exhibit.number}
          </span>
          <button onClick={onClose} aria-label="关闭详情">
            <Icon name="close" />
          </button>
        </div>
        <ExhibitVisual exhibit={exhibit} theme={theme} />
        <div className="drawer-content">
          <span className="eyebrow">{exhibit.en}</span>
          <h2>{exhibit.title}</h2>
          <p className="lead">{exhibit.description}</p>
          <div className="hairline" />
          <p className="detail-text">{exhibit.detail}</p>
          <div className="drawer-section">
            <small>色彩标本</small>
            <div className="color-chips">
              {theme.colors.map((color) => (
                <span key={color}>
                  <i style={{ background: color }} />
                  <b>{color}</b>
                </span>
              ))}
            </div>
          </div>
          <div className="drawer-section">
            <small>视觉关键词</small>
            <div className="tags">
              {exhibit.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
          <button
            className={`collect-button ${saved ? "saved" : ""}`}
            onClick={() => setSaved(!saved)}
          >
            <Icon name="heart" size={19} />
            {saved ? "已加入临时收藏" : "加入临时收藏"}
            <span>{saved ? "COLLECTED" : "LOCAL STUDY"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}

function ClassicGallery({
  theme,
  openWork,
}: {
  theme: MuseumTheme;
  openWork: (work: ClassicWork) => void;
}) {
  return (
    <section className="classic-gallery">
      <div className="collection-title">
        <h2>经典作品</h2>
      </div>
      <div className="classic-track">
        {theme.classics.map((work) => (
          <button className="classic-card" key={work.id} onClick={() => openWork(work)}>
            <div className="classic-art">
              {work.image ? (
                <img src={work.image} alt={`${work.title}作品预览`} loading="lazy" />
              ) : (
                <div className="archive-unavailable">图像待补</div>
              )}
            </div>
            <div className="classic-caption">
              <h3>{work.title}</h3>
              <span>{work.year}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ClassicDrawer({ work, onClose }: { work: ClassicWork | null; onClose: () => void }) {
  if (!work) return null;
  return (
    <>
      <button className="drawer-scrim" aria-label="关闭作品档案" onClick={onClose} />
      <aside className="detail-drawer classic-drawer" aria-label={`${work.title}作品档案`}>
        <div className="drawer-top">
          <span>{work.year}</span>
          <button onClick={onClose} aria-label="关闭作品档案">
            <Icon name="close" />
          </button>
        </div>
        <div className="classic-drawer-art">
          {work.image ? (
            <img src={work.image} alt={`${work.title}参考图像`} />
          ) : (
            <div className="archive-unavailable">图像待补</div>
          )}
        </div>
        <div className="drawer-content">
          <h2>{work.title}</h2>
          <p className="lead">
            {work.maker} · {work.year}
          </p>
        </div>
      </aside>
    </>
  );
}

function Hall({
  theme,
  isSwitching,
  openDetail,
  openWork,
}: {
  theme: MuseumTheme;
  isSwitching: boolean;
  openDetail: (exhibit: Exhibit) => void;
  openWork: (work: ClassicWork) => void;
}) {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let frame = 0;
    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const update = () => {
      frame = 0;
      if (window.matchMedia("(max-width: 720px), (prefers-reduced-motion: reduce)").matches) {
        stage.style.setProperty("--aero-hero-scale", "1");
        stage.style.setProperty("--aero-hero-brightness", "1");
        stage.style.setProperty("--aero-title-y", "0px");
        stage.style.setProperty("--aero-title-scale", "1");
        stage.style.setProperty("--aero-title-opacity", "1");
        stage.style.setProperty("--aero-specimens-y", "0px");
        stage.style.setProperty("--aero-specimens-opacity", "1");
        stage.style.setProperty("--aero-classics-y", "0px");
        stage.style.setProperty("--aero-classics-opacity", "1");
        stage.style.setProperty("--aero-classics-pointer", "auto");
        return;
      }

      const rect = stage.getBoundingClientRect();
      const distance = Math.max(1, stage.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / distance);
      const specimenIn = clamp((progress - 0.16) / 0.27);
      const specimenOut = clamp((progress - 0.59) / 0.18);
      const classicIn = clamp((progress - 0.56) / 0.3);
      const specimenOpacity = specimenIn * (1 - specimenOut);
      const titleOpacity = 1 - clamp((progress - 0.4) / 0.16);

      stage.style.setProperty("--aero-hero-scale", `${1 + progress * 0.055}`);
      stage.style.setProperty("--aero-hero-brightness", `${1 - progress * 0.34}`);
      stage.style.setProperty("--aero-title-y", `${progress * -34}px`);
      stage.style.setProperty("--aero-title-scale", `${1 - progress * 0.18}`);
      stage.style.setProperty("--aero-title-opacity", `${titleOpacity}`);
      stage.style.setProperty(
        "--aero-specimens-y",
        `${108 - specimenIn * 108 - specimenOut * 12}vh`,
      );
      stage.style.setProperty("--aero-specimens-opacity", `${specimenOpacity}`);
      stage.style.setProperty("--aero-classics-y", `${108 - classicIn * 108}vh`);
      stage.style.setProperty("--aero-classics-opacity", `${classicIn}`);
      stage.style.setProperty("--aero-classics-pointer", classicIn > 0.05 ? "auto" : "none");
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [theme.id, isSwitching]);

  return (
    <main className="aero-exhibition">
      <section className="aero-scroll-stage" ref={stageRef}>
        <div className={`aero-sticky-viewport ${isSwitching ? "is-switching" : ""}`}>
          <AmbientDecor />
          <header className="hall-header aero-stage-header">
            <div className="museum-wordmark">
              <Mark />
              <span>
                <b>美学收集馆</b>
                <small>{theme.zhName}</small>
              </span>
            </div>
            <button className="icon-button" aria-label="搜索展品">
              <Icon name="search" />
            </button>
          </header>

          <section className="hall-hero aero-stage-hero">
            <HeroArtwork theme={theme} />
            <div className="hero-overlay" />
            <div className="hero-title">
              <h1>{theme.name}</h1>
            </div>
            {theme.id === "aero" && (
              <>
                <div className="hero-orb orb-main" />
                <div className="hero-orb orb-small" />
              </>
            )}
          </section>

          <section
            className="aero-stage-panel aero-specimen-panel"
            aria-label={`${theme.name} 风格标本`}
          >
            <div className="aero-panel-heading">
              <span>01</span>
              <h2>风格标本</h2>
            </div>
            <div className="exhibit-grid">
              {theme.exhibits.map((exhibit) => (
                <ExhibitCard
                  exhibit={exhibit}
                  theme={theme}
                  key={exhibit.id}
                  onClick={() => openDetail(exhibit)}
                />
              ))}
            </div>
          </section>

          <section
            className="aero-stage-panel aero-classic-panel"
            aria-label={`${theme.name} 经典作品`}
          >
            <ClassicGallery theme={theme} openWork={openWork} />
          </section>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [themeId, setThemeId] = useState<ThemeId>("aero");
  const [isSwitching, setIsSwitching] = useState(false);
  const [selected, setSelected] = useState<Exhibit | null>(null);
  const [selectedWork, setSelectedWork] = useState<ClassicWork | null>(null);
  const switchTimerRef = useRef<number | null>(null);
  const theme = getTheme(themeId);

  useEffect(() => {
    return () => {
      if (switchTimerRef.current !== null) {
        window.clearTimeout(switchTimerRef.current);
      }
    };
  }, []);

  const selectTheme = (id: ThemeId) => {
    if (id === themeId && window.scrollY < 8) return;
    if (switchTimerRef.current !== null) {
      window.clearTimeout(switchTimerRef.current);
    }
    setSelected(null);
    setSelectedWork(null);
    setIsSwitching(true);
    switchTimerRef.current = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setThemeId(id);
      window.requestAnimationFrame(() => {
        setIsSwitching(false);
      });
      switchTimerRef.current = null;
    }, 170);
  };

  return (
    <div className={`museum-shell theme-${themeId}`}>
      <Hall
        theme={theme}
        isSwitching={isSwitching}
        openDetail={setSelected}
        openWork={setSelectedWork}
      />
      <MuseumTimeline activeTheme={themeId} onSelect={selectTheme} />
      <DetailDrawer
        key={selected?.id ?? "closed"}
        exhibit={selected}
        theme={theme}
        onClose={() => setSelected(null)}
      />
      <ClassicDrawer
        key={selectedWork?.id ?? "classic-closed"}
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </div>
  );
}
