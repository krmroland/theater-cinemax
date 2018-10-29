import Theater from './components/Theater';
import Booking from './components/Booking';
import Statistics from './components/Statistics';
export default [
    {
        text: 'Theater',
        path: '/',
        component: Theater,
    },
    {
        text: 'Booking',
        path: '/booking',
        component: Booking,
    },
    {
        text: 'Statistics',
        path: '/statistics',
        component: Statistics,
    },
];
