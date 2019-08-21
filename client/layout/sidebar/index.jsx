/** @format */

/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';
import SidebarRegion from './region';

/**
 * Style dependencies
 */
import './style.scss';

export default function Sidebar( { children, onClick, className } ) {
	const hasRegions = React.Children.toArray( children ).some( el => el.type === SidebarRegion );

	const clickHandler = 'undefined' === typeof onClick ? {} : { onClick };

	const finalClassName = classNames( 'sidebar', className, { 'has-regions': hasRegions } );

	return (
		<ul className={ finalClassName } { ...clickHandler } data-tip-target="sidebar">
			{ children }
		</ul>
	);
}
