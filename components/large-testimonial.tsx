import React from "react";

// Define the testimonial data structure
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  image: string;
  quote: string;
}

// Props for the TestimonialList component
interface TestimonialListProps {
  testimonials: Testimonial[];
  className?: string;
}

// Individual Testimonial Card component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="mb-4">
        <svg
          className="h-8 w-8 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
      <div className="flex items-center mt-auto">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
          <div className="text-sm text-gray-500">
            {testimonial.role}
            {testimonial.company && ` at ${testimonial.company}`}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main TestimonialList component
const TestimonialList: React.FC<TestimonialListProps> = ({
  testimonials,
  className = "",
}) => {
  return (
    <div className={`py-12 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage with sample data
const LargeTestimonial: React.FC = () => {
  const sampleTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Laszlo Csömör",
      role: "Digital Marketing Expert",
      image: "/images/testimonial/laszlo-DUTJc4X9.jpeg",
      quote:
        "it is one of the best chatbot builders with its intelligent features and drag-and-drop simplicity. Its UI/UX is an earthly paradise.",
    },
    {
      id: 2,
      name: "Oscar",
      role: "Founder & CEO",
      image: "/images/testimonial/oscar-BWCNOw-u.jpeg",

      quote:
        "Within 5 minutes of signing up you can already have your bot running thanks to the templates it comes with. I have used many tools to make bots but none as simple, easy and powerful.",
    },
    {
      id: 3,
      name: "Kurnia Kwik",
      role: "Founder & CEO",
      company: "DigitalPointer.ID",
      image: "/images/testimonial/kurnia-C8dDlURd.jpeg",
      quote:
        "I can't recommend this service enough. The support team is responsive, and the product delivers everything promised and more.",
    },
    {
      id: 4,
      name: "Matt Schenck",
      role: "EVP, Admissions",
      company: "US - Africa MSSE",
      image: "/images/testimonial/1719085317222.jpeg",
      quote:
        "The feature richness and polish in this project is incredible, it feel like a mature product. Unbelievable that this was built by one person. ",
    },
    {
      id: 5,
      name: "Daniel Watt",
      role: "Chief Technology Officer ",
      company: "Nutrition Integrated at Nutrition Integrated",
      image: "/images/testimonial/1672842206717.jpeg",
      quote:
        "Good to see some sports nutrition products in the product recommendation template. I've become a bigger fan of low code tools like this.",
    },
    {
      id: 6,
      name: "Magren Al Qahtani",
      company: "Eayni",
      role: "Executive Director",
      image: "/images/testimonial/1651619253737.jpeg",
      quote:
        "I used ZazuBot at my company and was impressed with how it cut our customer service workload in half. I was able to create a fully functional chatbot in minutes.",
    },
  ];

  return <TestimonialList testimonials={sampleTestimonials} />;
};

export default LargeTestimonial;
