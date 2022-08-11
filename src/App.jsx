//styled components
import { AppStyled } from './styles/app';
// components
import Home from './components/Home';
// colors
import { darkTheme } from './styles/tools';

function App() {
	return (
		<AppStyled color={darkTheme}>
			<h1>Welcome Back Freddy!</h1>
			<Home />
		</AppStyled>
	);
}

export default App;
