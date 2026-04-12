import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--gradient', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/introduction/overview">
            Get Started
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img src="/sdmpbimetrictile-docs/img/hero-screenshot.png" alt="SDM MetricTile" />
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link, icon}: {title: string, description: string, link: string, icon: string}) {
  return (
    <div className="feature-card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
      <Link to={link}>Learn more &rarr;</Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Documentation for SDM MetricTile — advanced shape tile for Power BI">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '3rem 0'}}>
          <div className="feature-grid">
            <FeatureCard
              title="17 Shapes"
              description="Rectangle, circle, ellipse, diamond, triangle, pentagon, hexagon, octagon, stars, arrow, chevron, parallelogram, trapezoid, cross, heart, pill — all with mirror, rotation and per-corner customization."
              link="/docs/formatting/shape"
              icon="&#x25C6;"
            />
            <FeatureCard
              title="Visual Effects"
              description="Linear gradients (4 directions), drop shadow, glow, edge softening, border styles. All effects integrated in unified fitting so the tile never overflows."
              link="/docs/formatting/effects"
              icon="&#x2728;"
            />
            <FeatureCard
              title="Drag & Data-Driven"
              description="Drag value, label and logo to any position in edit mode. Series color and series logo can be controlled directly from your data model."
              link="/docs/getting-started/data-roles"
              icon="&#x1F3AF;"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
