// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Achievements from './components/Achievements';
// import Experience from './components/Experience';
// import Skills from './components/Skills';
// import Contact from './components/Contact';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#0a0a1a]">
//       <Navigation />
//       <main className="w-full">
//         <Hero />
//         <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-0 md:px-20 lg:px-40">
//           <About />
//           <div className="h-16 sm:h-20 md:h-30" />
//           <Projects />
//           <div className="h-16 sm:h-20 md:h-30" />
//           <Achievements />
//           <div className="h-16 sm:h-20 md:h-30" />
//           <Experience />
//           <div className="h-16 sm:h-20 md:h-30" />
//           <Skills />
//           <div className="h-16 sm:h-20 md:h-30" />
//           <Contact />
//         </div>
//       </main>
//     </div>
//   );
// }



export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>テストページ</h1>
      <p>このページがスマホで表示できれば、環境自体は正常です。</p>
    </main>
  );
}