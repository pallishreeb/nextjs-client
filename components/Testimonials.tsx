import { UserCircle } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    company: "CEO of Something",
    review:
      "Packed with awesome content and exactly what I waslooking for. I would highly recommend this to anyone.",
  },
  {
    name: "John Doe",
    company: "CEO of Something",
    review:
      "Packed with awesome content and exactly what I waslooking for. I would highly recommend this to anyone.",
  },
  {
    name: "John Doe",
    company: "CEO of Something",
    review:
      "Packed with awesome content and exactly what I waslooking for. I would highly recommend this to anyone.",
  }
];

const Testimonials = () => {
  return (
    <>
      <section className="flex items-center justify-center py-20 bg-white min-w-screen">
        <div className="px-16 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
              Dont just take our word for it
            </p>

            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              See what others are saying
            </h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              {reviews.map((r) => (
                <div
                  className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0"
                  key={r.name}
                >
                  <div className="flex items-center justify-center">
                    <UserCircle size={45} className="mr-4" />
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">{r.name}</h4>
                      <p className="text-gray-600">{r.company}</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500 px-2">
                    {r.review}
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
