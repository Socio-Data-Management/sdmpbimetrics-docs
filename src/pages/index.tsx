import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
          <Link className="button button--secondary button--lg" to="/docs/metrictile/introduction/overview">
            MetricTile Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/funnel/introduction/overview">
            Funnel Docs
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img src={useBaseUrl("/img/hero-screenshot.png")} alt="SDM Metrics" />
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
    <Layout title={siteConfig.title} description="Documentation for Socio-DM's custom Power BI visuals — MetricTile and Funnel">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '3rem 0'}}>
          <div className="feature-grid">
            <FeatureCard
              title="MetricTile"
              description="An advanced shape tile for headline KPIs: 17 shapes, gradients, effects, drag positioning and rotation, data-driven color and logo."
              link="/docs/metrictile/introduction/overview"
              icon="&#x25C6;"
            />
            <FeatureCard
              title="Funnel Tile"
              description="A multi-step funnel with leakage tracking, statistical significance testing against a benchmark segment, competitor comparison and up to 8 extra columns."
              link="/docs/funnel/introduction/overview"
              icon="&#x1F4C9;"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
