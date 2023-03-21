import TestimonialCard from "./TestimonialCard";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <header className="hidden">
        <h1>Testimonials Grid Section Component</h1>
      </header>
      <section className="grid-rows-testimonials-default grid-cols-1 
      gap-y-6 w-[20.25rem]">
        <h2 className="hidden">Testimonials</h2>
        {cards().map((card) => 
          <TestimonialCard key={card.content.fullName}
          content={card.content} 
          style={card.style} />)
        }
      </section>
    </main>
  );
}

function cards() {
  return [
    {
      content: {
        pictureURL: './images/image-daniel.jpg',
        fullName: 'Daniel Clifford',
        title: `I received a job offer mid-course, and the subjects I learned 
        were current, if not more so, in the company I joined. I honestly feel 
        I got every penny’s worth.`,
        quote: `“ I was an EMT for many years before I joined the bootcamp. 
        I’ve been looking to make a transition and have heard some people who 
        had an amazing experience here. I signed up for the free intro course 
        and found it incredibly fun! I enrolled shortly thereafter. The next 
        12 weeks was the best - and most grueling - time of my life. Since 
        completing the course, I’ve successfully switched careers, working as 
        a Software Engineer at a VR startup. ”`
      },
      style: {
        gridArea: 'row-span-1 col-span-1',
        backgroundColor: 'bg-moderate-violet',
        textColor: 'text-light-gray',
        pictureBorderColor: 'border-light-gray/30'
      }
    }
  ];
}

export default App;
