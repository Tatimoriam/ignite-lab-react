import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <div className="flex-1 md:hidden"></div>
            <Logo />            

            <div className="flex-1 mr-4 md:hidden">
                <List className="ml-auto" size={40}/>
            </div>
        </header>
    )
}