import React from 'react';

export const SettingsBar: React.FunctionComponent = () =>
{
	return (
		<div className="site-settings section section-standout collapse collapsed" id="siteSettings">
			<div className="container p-y">
				<div className="btn-group btn-group-justified-sm" aria-label="contrastMode">
					<div className="btn-group"><button type="button" className="btn btn-standout disableHighContrastMode">Default</button></div>
					<div className="btn-group"><button type="button" className="btn btn-standout enableHighContrastMode">High Contrast</button></div>
				</div>

				<div className="btn-group" aria-label="textSizeMode">
					<div className="btn-group"><button type="button" className="btn btn-standout resetTextSize">Reset</button></div>
					<div className="btn-group"><button type="button" className="btn btn-standout increaseTextSize"><span className="hidden-xs">Increase Font Size</span><span className="visible-xs">Font <span className="sr-only">Increase</span><span className="ca-gov-icon-plus-line font-size-sm" aria-hidden="true"></span></span></button></div>
					<div className="btn-group"><button type="button" className="btn btn-standout decreaseTextSize"><span className="hidden-xs">Decrease Font Size</span><span className="visible-xs">Font <span className="sr-only">Decrease</span><span className="ca-gov-icon-minus-line font-size-sm" aria-hidden="true"></span></span></button></div>
				</div>
				<button type="button" className="close" data-toggle="collapse" data-target="#siteSettings" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			</div>
		</div>
	);
};
