import React from 'react';
import { Search } from './Search';

export const Navigation: React.FunctionComponent = () =>
{
	return (
		<div className="navigation-search">
			<nav id="navigation" className="main-navigation megadropdown auto-highlight">
				<ul id="nav_list" className="top-level-nav">
					<li className="nav-item">
						<a href="/sample/" className="first-level-link"><span className="ca-gov-icon-gears"></span>Examples</a>
						<div className="sub-nav">
							<div className="second-level-nav flex">
								<a href="/sample/" className="second-level-link">
									<span className="ca-gov-icon-gears font-size-40" aria-hidden="true"></span>
									<p className="h3 sub-nav-link">Examples</p>
									<p className="link-description">View example modules and description of their usage</p>
								</a>

								<a href="/getting-started.html" className="second-level-link">
									<span className="ca-gov-icon-gear font-size-40" aria-hidden="true"></span>
									<p className="h3 sub-nav-link">Getting Started</p>
									<p className="link-description">How to apply California State Template css, js and ssi</p>
								</a>

								<a href="/cdn.html" className="second-level-link">
									<span className="ca-gov-icon-globe font-size-40" aria-hidden="true"></span>
									<p className="h3 sub-nav-link">CDN</p>
									<p className="link-description">Load your website faster by using State Template CDN</p>
								</a>
							</div>
							<div className="second-level-nav flex with-border">
								<a href="https://github.com/Office-of-Digital-Innovation/California-State-Template-v5" className="second-level-link" target="_blank">
									<span className="ca-gov-icon-cloud-download" aria-hidden="true"></span>Download
									<div className="link-description">Download or clone State Template on GitHub </div>
								</a>
								<a href="/structure.html" className="second-level-link">
									<span className="ca-gov-icon-flowchart" aria-hidden="true"></span>Structure
									<div className="link-description">Find out more about State Template structure</div>
								</a>
								<a href="https://webstandards.ca.gov/" className="second-level-link" target="_blank">
									<span className="ca-gov-icon-state" aria-hidden="true"></span>Web Standards
									<div className="link-description">Web Standards and Design System for California Government</div>
								</a>
								<a href="/about.html" className="second-level-link">
									<span className="ca-gov-icon-info-bubble" aria-hidden="true"></span>About
									<div className="link-description">California State Template overview</div>
								</a>
							</div>
						</div>
					</li>

					<li className="nav-item">
						<a href="/about.html" className="first-level-link"><span className="ca-gov-icon-info-bubble" aria-hidden="true"></span>About</a>
						<div className="sub-nav">
							<div className="second-level-nav flex">
								<a href="/about.html" className="second-level-link">
									<img className="image-icon rounded-50x m-b-md" src="/sample/images/02.png" alt="Image Description"/>
									<p className="h3 sub-nav-link">About</p>
									<p className="link-description">California State Template overview</p>
								</a>
								<a href="/Getting-started.html" className="second-level-link">
									<img className="image-icon rounded-50x m-b-md" src="/sample/images/01.png" alt="Image Description"/>
									<p className="h3 sub-nav-link">Getting Started</p>
									<p className="link-description">How to apply California State Template css, js and ssi</p>
								</a>

								<a href="/structure.html" className="second-level-link">
									<img className="image-icon rounded-50x m-b-md" src="/sample/images/03.png" alt="Image Description"/>
									<p className="h3 sub-nav-link">Structure</p>
									<p className="link-description">Find out more about State Template structure</p>
								</a>
							</div>
							<div className="second-level-nav flex with-border">
								<a href="/cdn.html" className="second-level-link">
									<span className="ca-gov-icon-globe" aria-hidden="true"></span>CDN
									<div className="link-description">Load your website faster by using State Template CDN </div>
								</a>
								<a href="https://github.com/Office-of-Digital-Innovation/California-State-Template-v5" className="second-level-link" target="_blank">
									<span className="ca-gov-icon-cloud-download" aria-hidden="true"></span>Download
									<div className="link-description">Download or clone State Template on GitHub </div>
								</a>
								<a href="/sample/" className="second-level-link">
									<span className="ca-gov-icon-gears" aria-hidden="true"></span>Examples
									<div className="link-description">View example modules and description of their usage</div>
								</a>
								<a href="https://webstandards.ca.gov/" className="second-level-link" target="_blank">
									<span className="ca-gov-icon-state" aria-hidden="true"></span>Web Standards
									<div className="link-description">Web Standards and Design System for California Government</div>
								</a>
								<a href="/contact.html" className="second-level-link">
									<span className="ca-gov-icon-contact-us" aria-hidden="true"></span>Contact Us
									<div className="link-description">Provide State Template v5.5 Feedback</div>
								</a>
							</div>
						</div>
					</li>


					<li className="nav-item">
						<a href="/getting-started.html" className="first-level-link"><span className="ca-gov-icon-gear" aria-hidden="true"></span>Getting Started</a>
						<div className="sub-nav">
							<div className="second-level-nav flex with-border">
								<a href="/Getting-started.html" className="second-level-link">
									<div className="media-left">
										<img className="media-object width-80 height-80" src="/sample/images/01.png" alt="Gettings started gear image"/>
									</div>
									<div className="media-body">
										<div className="title text-left">Getting Started</div>
										<div className="teaser link-description text-left">How to apply California State Template css, js and ssi</div>
									</div>
								</a>

								<a href="/sample/" className="second-level-link">
									<div className="media-left">
										<img className="media-object width-80 height-80" src="/sample/images/02.png" alt="Examples"/>
									</div>
									<div className="media-body">
										<div className="title text-left">Examples</div>
										<div className="teaser link-description text-left">View example modules and description of their usage</div>
									</div>
								</a>

							</div>
							<div className="second-level-nav flex">
								<a href="/about.html" className="second-level-link">
									<span className="ca-gov-icon-info-bubble font-size-40" aria-hidden="true"></span>
									<p className="h3 sub-nav-link">About</p>
									<p className="link-description">California State Template overview</p>
								</a>

								<a href="https://github.com/Office-of-Digital-Innovation/California-State-Template-v5" className="second-level-link" target="_blank">
									<span className="ca-gov-icon-cloud-download font-size-40" aria-hidden="true"></span>
									<p className="h3 sub-nav-link">Download</p>
									<p className="link-description">Download or clone State Template on GitHub</p>
								</a>

								<a href="/cdn.html" className="second-level-link">
									<span className="ca-gov-icon-globe font-size-40" aria-hidden="true"></span>
									<p className="h3 sub-nav-link">CDN</p>
									<p className="link-description">Load your website faster by using State Template CDN</p>
								</a>
								<a href="/structure.html" className="second-level-link">
									<span className="ca-gov-icon-flowchart font-size-40" aria-hidden="true"></span>
									<p className="h3 sub-nav-link">Structure</p>
									<p className="link-description">Find out more about State Template structure</p>
								</a>
							</div>
						</div>
					</li>
					<li className="nav-item">
						<a href="/structure.html" className="first-level-link"><span className="ca-gov-icon-flowchart" aria-hidden="true"></span>Structure</a>
					</li>
					<li className="nav-item">
						<a href="https://webstandards.ca.gov/" className="first-level-link" target="_blank"><span className="ca-gov-icon-state" aria-hidden="true"></span>Web Standards</a>
					</li>
					<li className="nav-item">
						<a href="https://github.com/Office-of-Digital-Innovation" target="_blank" className="first-level-link"><span className="ca-gov-icon-download" aria-hidden="true"></span>Download</a>
					</li>

					<li className="nav-item" id="nav-item-search">
						<button className="first-level-link"><span className="ca-gov-icon-search" aria-hidden="true"></span>Search</button>
					</li>
				</ul>
			</nav>
			<Search/>
		</div>
	);
};
