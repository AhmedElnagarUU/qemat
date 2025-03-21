import {defineRouting} from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from './config'

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // Used when no locale matches
    defaultLocale: 'ar'
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }) 