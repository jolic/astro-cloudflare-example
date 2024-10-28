import React, {useEffect} from "react"

export default function DarkMode() {

	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [])

	const toggleDarkMode = () => {
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		} else {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		}
	}
	
	return (
		<button type="button"
			className="!mr-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-gray-700 transition-all hover:ring-2 dark:bg-[#202E4A] sm:ml-3"
			onClick={toggleDarkMode}
		>
			<span className="sr-only">Enable <span className="dark:hidden">light</span>
			<span className="hidden dark:inline">dark</span> mode</span>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-100 hidden dark:inline" fill="none"
				viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
				</path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-900 dark:hidden" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
			</svg>
		</button>
	)}