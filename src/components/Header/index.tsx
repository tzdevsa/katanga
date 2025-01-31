import { Environment } from "@think-zambia-foundation/api";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const menu = [
    {
      key: '1',
      text: 'Home',
      href: '/',
    },
    {
      key: '2',
      text: 'About Us',
      href: '/about',
    },
    {
      key: '3',
      text: 'Admissions',
      href: '/apply',
    },
    {
      key: '4',
      text: 'CONTACT',
      href: '/contact',
    },
  ];
  
  export function Header({organisation}: {organisation?: Environment}) {
    return (
      <>
        <MobileHeader organisation={organisation}/>
        <DesktopHeader organisation={organisation}/>
      </>
    )
  }