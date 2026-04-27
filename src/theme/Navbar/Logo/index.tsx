import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';

export default function NavbarLogo(): JSX.Element {
    const {navbar} = useThemeConfig();
    const title = navbar.title;
    const homeUrl = useBaseUrl('/');

    return (
        <div className="navbar__brand sdm-navbar-brand">
            <a
                href="https://www.socio-dm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sdm-watermark sdm-navbar-watermark"
                aria-label="Socio Data Management"
            >
                <span>Powered by</span>
                <span className="sdm-watermark-logo">
                    <span className="sdm-logo-socio">S&nbsp;O&nbsp;C&nbsp;I&nbsp;O</span>
                    <span className="sdm-logo-dm">Data Management</span>
                </span>
            </a>
            {title && (
                <Link to={homeUrl} className="sdm-navbar-title-link">
                    <b className="navbar__title sdm-navbar-title">{title}</b>
                </Link>
            )}
        </div>
    );
}
