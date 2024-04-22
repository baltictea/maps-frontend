export const Navbar = () => {
    return (
        <header className="flex items-center h-16">
            <NavButton name="Карта" href="/" />
        </header>
    )
}

interface NavButtonProps {
    name: string;
    href: string;
}

export const NavButton = (props: NavButtonProps) => {
    return (
        <a
            className="p-2 mx-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
            href={props.href}
        >{props.name}</a>
    )
}