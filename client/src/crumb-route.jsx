// Import External Dependencies
import React from 'react';
import * as reactRouterDom from 'react-router-dom';
// Import Components
import { Breadcrumb } from 'react-breadcrumbs';
reactRouterDom.CrumbRoute = (({
	component: Component,
	includeSearch = false,
	render,
	...props
}) => (<reactRouterDom.Route {...props} render={routeProps => (
	<Breadcrumb data={{
		title: props.title || routeProps.match.params.id,
		pathname: routeProps.match.url,
		search: includeSearch ? routeProps.location.search : null
	}}>
		{Component ? <Component {...routeProps} /> : render(routeProps)}
	</Breadcrumb>
)} />));
