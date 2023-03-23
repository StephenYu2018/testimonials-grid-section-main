import TestimonialCard from "./TestimonialCard";
import { cards } from "./cards-data";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center
    bg-light-grayish-blue py-[4.4375rem]">
      <header className="fixed top-[-99rem] left-[-99rem]">
        <h1>Testimonials Grid Section Component</h1>
      </header>
      <section className="grid
      grid-rows-[27.75rem_14.875rem_14rem_24rem_27.375rem]
      xl:grid-rows-[17.625rem_16.625rem] grid-cols-[20.25rem]
      xl:grid-cols-[repeat(4,_15.9375rem)] xl:gap-x-[1.8125rem]
      gap-y-6 xl:gap-y-[1.4375rem]">
        <h2 className="fixed top-[-99rem] left-[-99rem]">Testimonials</h2>
        {cards.map(card => 
          <TestimonialCard key={card.content.fullName}
          content={card.content}
          style={card.style} />)
        }
      </section>
    </main>
  );
}

export default App;
