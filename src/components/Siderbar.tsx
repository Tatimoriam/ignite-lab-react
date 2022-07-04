import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

interface OpenMenu {
	isMenuOpen: boolean;
}

export function Sidebar(props: OpenMenu) {
	const { data } = useGetLessonsQuery();

	return (
		<aside className={`absolute right-0 w-auto h-screen bg-gray-700 p-6 border-l border-gray-600 md:relative md:block md:w-[348px] ${props.isMenuOpen ? 'block' : 'hidden'}`}>
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
				Cronograma de aulas
			</span>

			<div className="flex flex-col gap-8">
				{data?.lessons.map(lesson => {
					return (
						<Lesson
                            key={lesson.id}
							title={lesson.title}
							slug={lesson.slug}
							availableAt={new Date(lesson.availableAt)}
							type={lesson.lessonType}
						/>
					);
				})}
			</div>
		</aside>
	);
}
