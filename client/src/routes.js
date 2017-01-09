import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './components/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

const routes = {

	component: Base,
	childRoutes: [
		{
			path: '/',
			getComponent: (location, callback) => {
				if(Auth.isUserAuthenticated()) {
					callback(null, DashboardPage);
				} else {
					callback(null, Homepage);
				}
			}
		},

		{
			path:'/login',
			component: LoginPage
		},

		{
			path: '/signup',
			component: SignUpPage
		},
		{
			path: '/logout',
			onEnter: (nextState, replace) => {
				Auth.deauthenticateUser();
				replace('/');
			}
		}
	]
}

export default routes;
