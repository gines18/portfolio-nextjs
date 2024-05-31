import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome } from "react-icons/fa";
import RecentProjects from '@/components/RecentProjects'
export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-8xl w-fill">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>} 
        ]}/>
        <Hero />
        <Grid />
        <RecentProjects />
    </div>
   </main>
  );
}
