import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const languages = ['en', 'de']

function getTransLink(language, slug) {
  return language === 'en' ? slug : `/${language}${slug}`
}

export { getTransLink, languages }