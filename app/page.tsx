import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {

  return (
  <form className="searchbar" action="/list" method="GET"> 
    <input type="text" placeholder="typesomething here" name="search"/>
    <button type="submit">Search</button>
  </form>
  );
}
