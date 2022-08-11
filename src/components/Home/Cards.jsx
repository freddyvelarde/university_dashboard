import { CardStyled } from '../../styles/home/card';
import { darkTheme } from '../../styles/tools';

function Cards({ materia }) {
	return (
		<CardStyled color={darkTheme}>
			<h2 className="title">{materia.title}</h2>
			<h2>
				<span>Teacher:</span> {materia.teacher}
			</h2>
			<h2>
				<span>Auxi:</span> {materia.auxi}
			</h2>
			<h2>
				<span>Paralelo:</span> {materia.paralelo}
			</h2>
			<h2>
				<span>Classroom:</span> {materia.classroom}
			</h2>
			{materia.classLink.length > 0 ? (
				<a href={materia.classLink} target="__blank">
					Link
				</a>
			) : (
				<p>there is no link</p>
			)}
		</CardStyled>
	);
}

export default Cards;
