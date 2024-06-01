import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome } from "react-icons/fa";
import RecentProjects from '@/components/RecentProjects'
import {navItems} from '@/data/index'
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-8xl w-fill">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
    </div>
   </main>
  );
}
