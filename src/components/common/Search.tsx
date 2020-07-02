import React from 'react';

export const Search: React.FunctionComponent = () =>
{
	return (
		<div id="head-search" className="search-container featured-search fade">
			<div className="container">
				<form id="Search" className="pos-rel" action="/serp.html">
					<span className="sr-only" id="SearchInput">Custom Google Search</span>
					<input type="text" id="q" name="q" aria-labelledby="SearchInput" placeholder="Search this website" className="height-50 border-0 p-x-sm w-100 search-textfield" />
					<button type="submit" className="pos-abs gsc-search-button top-0 width-50 height-50 border-0 bg-transparent"><span className="ca-gov-icon-search font-size-30 color-gray" aria-hidden="true"></span><span className="sr-only">Submit</span></button>
					<div className="width-50 height-50 close-search-btn"><button className="close-search gsc-clear-button width-50 height-50 border-0 bg-transparent pos-rel" type="reset"><span className="sr-only">Close Search</span><span className="ca-gov-icon-close-mark" aria-hidden="true"></span></button></div>
				</form>
			</div>
		</div>
	);
};
