import {createTripRouteTemplate} from './components/tripRouteTemplate.js';
import {createSiteMenuTemplate} from './components/siteMenuTemplate.js';
import {createSiteFiltersTemplate} from './components/siteFiltersTemplate.js';
import {createTripSortingTemplate} from './components/tripSortingTemplate.js';
import {createEventEditTemplate} from './components/eventEditTemplate.js';
import {createEventCardTemplate} from './components/eventCardTemplate.js';
import {createTripDaysTemplate} from './components/tripDaysTemplate.js';

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteTripRouteElement = siteHeaderElement.querySelector(`.trip-main__trip-info`);

render(siteTripRouteElement, createTripRouteTemplate(), `afterbegin`);

const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-main__trip-controls`);

render(siteTripControlsElement, createSiteMenuTemplate(), `beforeend`);
render(siteTripControlsElement, createSiteFiltersTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.page-body__page-main`);
const siteTripEventsElement = siteMainElement.querySelector(`.trip-events`);

render(siteTripEventsElement, createTripSortingTemplate(), `beforeend`);
render(siteTripEventsElement, createEventEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(siteTripEventsElement, createEventCardTemplate(), `beforeend`);
}

render(siteTripEventsElement, createTripDaysTemplate(), `beforeend`);

