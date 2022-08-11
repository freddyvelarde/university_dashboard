import { HomeStyled } from '../../styles/home';
import {
	inf111,
	inf112,
	inf113,
	mat114,
	mat115,
	lin116,
	lab111,
} from '../../info/classes';
import Cards from './Cards';

function Home() {
	return (
		<HomeStyled>
			<Cards materia={inf111} />
			<Cards materia={inf112} />
			<Cards materia={inf113} />
			<Cards materia={mat114} />
			<Cards materia={mat115} />
			<Cards materia={lin116} />
			<Cards materia={lab111} />
		</HomeStyled>
	);
}

export default Home;
