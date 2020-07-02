import React from 'react';

export const UtilityHeader: React.FunctionComponent = () =>
{
	return (
		<div className="utility-header">
			<div className="container">
				<div className="group flex-row">
					<div className="social-media-links">
						<div className="header-cagov-logo"><a href="https://ca.gov"><span className="sr-only">CA.gov</span><img src="/images/Ca-Gov-Logo-Gold.svg" className="pos-rel" alt="" aria-hidden="true" /></a></div>
						<a href="/" className="ca-gov-icon-home"><span className="sr-only">Home</span></a>
						<a href="/" className="ca-gov-icon-facebook"><span className="sr-only">Facebook</span></a>
						<a href="/" className="ca-gov-icon-twitter"><span className="sr-only">Twitter</span></a>
						<a href="/" className="ca-gov-icon-email"><span className="sr-only">Email</span></a>
					</div>
					<div className="settings-links">
						<a href="/contact.html"><span className="ca-gov-icon-contact-us" aria-hidden="true"></span> Contact Us</a>
						<button className="btn btn-xs btn-primary" data-toggle="collapse" data-target="#siteSettings" aria-expanded="false" aria-controls="siteSettings"><span className="ca-gov-icon-gear" aria-hidden="true"></span> Settings</button>
					</div>
				</div>
			</div>
		</div>
	);
};
