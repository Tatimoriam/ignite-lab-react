import { List } from 'phosphor-react';
import { Logo } from './Logo';

interface toggledSidebarProps {
	handleToggleSidebar: () => boolean;
}

export function Header(props: toggledSidebarProps) {
	return (
		<header className="w-full py-5 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
			<div className='w-[50px] md:hidden'></div>

            <div><Logo/></div>			

			<button className="mr-4 md:hidden" onClick={props.handleToggleSidebar}>
				<List size={40} />
			</button>
		</header>
	);
}
