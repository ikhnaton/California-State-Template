import React from 'react';

type props = { fullWidth: boolean, icons: boolean };
export const Branding: React.FunctionComponent<props> = ({ fullWidth = false, icons = false }) =>
{
	return fullWidth ? icons ? <FullWithIcons/> : <Full/> : <Basic/>;
};

const Basic: React.FunctionComponent = () =>
{
	return (
		<div className="branding">
			<div className="header-organization-banner"><a href="/"><img src="/images/template-logo.png" alt="State of California Website Template logo" /></a></div>
		</div>
	);
};

const Full: React.FunctionComponent = () =>
{
	return (
		<div className="branding">
			<div className="row">
				<div className="col-md-6">
					<div className="header-organization-banner"><a href="/"><img src="/images/template-logo.png" alt="Organization Title" /></a></div>
				</div>
				<div className="col-md-6">
					<div className="float-right font-size-12 p-r">
						<a className="m-r-md" href="/contact.html">Contact Us</a>
						<a id="settings-btn" data-toggle="collapse" href="#siteSettings"><span className="ca-gov-icon-gear" aria-hidden="true"></span> Settings</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const FullWithIcons: React.FunctionComponent = () =>
{
	return (
		<div className="utility-header">
			<div className="container">
				<div className="header-cagov-logo"><a href="/"><img src="/images/Ca-Gov-Logo-Gold.svg" alt="CA.gov"/></a></div>
				<div className="header-organization-banner"><a href="/"><img src="/images/template-logo-white.png" alt="Organization Title"/></a></div>

				<div className="settings-links">
					<ul className="utility-links">
						<li><a href="/contact.html">Contact Us</a></li>
						<li><button id="settings-btn" data-toggle="collapse" aria-expanded="false"><span className="ca-gov-icon-gear" aria-hidden="true"></span> Settings</button></li>
					</ul>
				</div>
			</div>
		</div>
	);
};
