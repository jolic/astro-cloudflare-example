import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  {
    short: 'en',
    long: 'English',
  },
  {
    short: 'de',
    long: 'Deutsch',
  },
  {
    short: 'fr',
    long: 'Français',
  },
  {
    short: 'es',
    long: 'Español',
  },
]

export const LanguageDropdown = ({config}) => {
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-2 flex h-9 w-12 items-center justify-center rounded-lg bg-white ring-gray-700 transition-all hover:ring-2 dark:bg-[#202E4A] sm:ml-3">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 h-5 w-5 text-gray-100 hidden dark:inline"
          >
              <path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545 19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05.75.75 0 0 0-1.384.577 20.935 20.935 0 0 0 1.492 2.91 19.613 19.613 0 0 1-3.828 4.154.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487 32.832 32.832 0 0 0-3.599-.278V2.75Z" />
              <path fillRule="evenodd" d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8Zm2.037 6.5L13 10.427 10.964 14.5h4.073Z" clipRule="evenodd" />
          </svg>
          
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 h-5 w-5 text-gray-900 block dark:hidden"
              // stroke-gray-100 hidden dark:inline

          >
              <path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545 19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05.75.75 0 0 0-1.384.577 20.935 20.935 0 0 0 1.492 2.91 19.613 19.613 0 0 1-3.828 4.154.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487 32.832 32.832 0 0 0-3.599-.278V2.75Z" />
              <path fillRule="evenodd" d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8Zm2.037 6.5L13 10.427 10.964 14.5h4.073Z" clipRule="evenodd" />
          </svg>
          

          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="rounded-md bg-white shadow-xl ring-opacity-5 focus:outline-none">
            {
              languages.map((language, i) => {
                return (
                  <DropdownMenuItem key={`${language.short}_${i}`} onSelect={(e) => {console.log(language.short);
                  }} className="text-gray-700 hover:bg-gray-200 cursor-pointer py-2 pl-4 text-lg">
                    {language.long}
                  </DropdownMenuItem>
                )
              })
            }
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
