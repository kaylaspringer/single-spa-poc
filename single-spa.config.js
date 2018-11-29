import {registerApplication, start} from 'single-spa';
import { globalStore } from './src/store'

registerApplication(
    'applicationOne',
    () => import('./src/applicationOne/applicationOne.app.js'),
    () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/applicationOne'),
    { globalStore }
);
registerApplication(
    'applicationTwo',
    () => import('./src/applicationTwo/applicationTwo.app.js'),
    pathPrefix('/applicationTwo'),
    { globalStore }
);

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}