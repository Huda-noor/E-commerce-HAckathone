import Image from "next/image";
import Link from "next/link";
import Header from "../components/Nav";
import Features from "../components/Feature";


const testimonials = [
  {
    name: "Sarah Khan",
    review:
      "Absolutely love the quality of the furniture! It perfectly complements my living room. Highly recommend.",
  },
  {
    name: "Ali Raza",
    review:
      "Great customer service and timely delivery. I’m very satisfied with my purchase.",
    
  },
  {
    name: "Maria Ahmed",
    review:
      "The designs are modern and durable. This is my second time shopping here, and I’m never disappointed.",
   
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="wrapper container mx-auto px-6 py-10 space-y-12">
      {/* Hero Section */}  <Header />
      {/* Hero Section */}
      <div className="relative h-[316px] flex items-center justify-center bg-[#FAF4F4]">
        {/* Background Image */}
        <Image
          src="/shop-bg.jpg"
          layout="fill" // Makes the image cover the parent div
          objectFit="cover" // Ensures the image scales properly
          className="opacity-[50%]"
          alt="Background"
        />

        {/* Centered Content */}
        <div className="absolute text-center font-poppins text-black">
           <div>
            <Image src="/bglogo.png" width={100} height={100} alt="Logo" className='ml-16' /></div>
              <h1 className="font-extrabold text-[50px] mb-4">About</h1>
              <Link href="/" className="flex ml-14">
            
                    Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>About

        
             
           
          </Link>
        </div>
      </div>
      <section className="text-center bg-yellow-100 p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are dedicated to providing high-quality furniture and decor that
          adds style, comfort, and elegance to your home. Your dream home starts
          here.
        </p>
      </section>

      {/* About Us */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          At <strong>Our Store</strong>, we believe that every home deserves to
          reflect the personality and style of its owner. With years of
          experience, we curate and deliver furniture that combines quality
          craftsmanship with affordability.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
             
             <p className="text-gray-700 italic mb-2">
                 &quot;{testimonial.review}&quot;
                 </p>

              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h2>
        <p className="text-gray-600 mb-4">
          Review your selected items below or continue shopping for more.
        </p>
        
 m      </section>

      {/* CTA */}
      <section className="text-center mt-10">
        <Link href="/shop">
          <button className="py-3 px-6 bg-yellow-500 text-white text-lg font-semibold rounded-lg hover:bg-yellow-600">
            Continue Shopping
          </button>
        </Link>
      </section>
      <div>
        <Features />
      </div>
     
    </div>
  );
};

export default AboutPage;
