import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Siderbar';
import { Video } from '../components/Video';

export function Event() {
	const { slug } = useParams<{ slug: string }>();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleToggleSidebar() {
		setIsMenuOpen(!isMenuOpen);
		return isMenuOpen;		
	}

	return (
		<div className="flex flex-col min-h-screen">
			<Header handleToggleSidebar={handleToggleSidebar} />
			<main className="flex flex-1">
				{slug ? (
					<Video lessonSlug={slug} />
				) : (
					<div className="flex-1" />
				)}
				<Sidebar isMenuOpen={isMenuOpen} />
			</main>
		</div>
	);
}
