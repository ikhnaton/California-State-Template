import React from 'react';
import { UtilityHeader } from './UtilityHeader';
import { SettingsBar } from './SettingsBar';
import { Branding } from './Branding';
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';

export const Header: React.FunctionComponent = () =>
{
	return (
		<header role="banner" id="header" className="global-header fixed">
			<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
			<UtilityHeader />
			<SettingsBar />
			<Branding fullWidth={false} icons={false}/>
			<MobileNavigation/>
			<Navigation/>

			<div className="header-decoration"></div>
		</header>

	);
};

// <!-- Ask Bar -->
// <!--#include virtual="/ssi/ask-bar.html" -->

// <div id="main-content" className="main-content">
// 	<h1 className="sr-only">California State Website Template (Version 5.5)</h1>
// 	<!-- Include for optional slideshow banner -->
// 	<!--#include virtual="/ssi/header-single-banner.html" -->
// 	<main className="main-primary">
// 		{/* <!-- Begin Main Content -->
// 		<!--#include virtual="/ssi/section-info-blocks.html" -->
// 		<!--#include virtual="/ssi/section-service-icons.html" -->
// 		<!--#include virtual="/ssi/section-service-panes.html" -->
// 		<!--#include virtual="/ssi/section-open-data.html" -->
// 		<!--#include virtual="/ssi/section-service-group.html" -->
// 		<!--#include virtual="/ssi/section-counter-pie-charts.html" -->
// 		<!--#include virtual="/ssi/section-footer2.html" -->
// 		<!-- End Main Content --> */}
// 	</main>
// </div>

// // <!--#include virtual="/ssi/global-footer.html" -->
// // <!--#include virtual="/ssi/scripts.html" -->
