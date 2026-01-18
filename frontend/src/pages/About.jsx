import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t' >
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img src={assets.about_img} className='w-full md:max-w-[450px] ' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600  ' > 
        <p>At Forever, we believe shopping should be timeless. Founded with a passion for curating the finest fashion, accessories, and lifestyle essentials, our journey began as a dream to redefine e-commerce in India. From the bustling streets of Patna to doorsteps across the nation, we've grown into a trusted haven for trendsetters and everyday shoppers alike. What sets us apart? An unwavering commitment to quality products that stand the test of time, sourced from ethical brands and delivered with lightning speed.</p>
        <p>Picture this: late-night brainstorming sessions turning into a full-fledged platform that connects you with wardrobe staples and statement pieces. As a team of young innovators passionate about tech and fashion, we built Forever using cutting-edge MERN stack technology to ensure a seamless, intuitive experience. Whether you're hunting for sustainable ethnic wear, chic gadgets, or premium home essentials, our carefully handpicked collections celebrate diversity and individuality. We're not just selling products – we're crafting moments that last forever.</p>
        <b>Our Mission</b>
        <p>We prioritize you, our Forever family. With secure payments, easy returns, and personalized recommendations powered by smart algorithms, we've made online shopping effortless and exciting. Our vision? To empower every Indian shopper with endless possibilities, one click at a time. Join thousands who have already discovered their forever favorites with us – because style isn't fleeting; it's eternal.</p>
        </div>
      </div>
      <div className='text-xl py-4  '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 ' >
        <div className='border border-zinc-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>At Forever, quality isn't a promise—it's our foundation. Every product undergoes rigorous checks, from material sourcing to final packaging, ensuring durability, safety, and authenticity. Partnering with certified suppliers and leveraging advanced inventory tech, we guarantee zero compromises. Shop with confidence knowing your Forever purchase is built to last, backed by our satisfaction warranty.</p>
        </div>
        <div className='border border-zinc-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convenience :</b>
          <p className='text-gray-600'>We get it—life's busy, and shopping shouldn't add to the chaos. Forever delivers unparalleled convenience with 24/7 access, one-click checkouts, real-time tracking, and nationwide delivery in 2-5 days. Browse from your phone during a late-night coding session or order gifts with same-day options in select cities. Multiple payment methods, including UPI and EMI, make it effortless for every budget.</p>
        </div>
        <div className='border border-zinc-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Your happiness drives us. Our dedicated support team is available via chat, call, or email, resolving queries in under 2 minutes on average. From personalized style advice to hassle-free returns within 30 days, we treat you like family. Real feedback from our community shapes our improvements—because exceptional service isn't just what we do, it's who we are.

</p>
        </div>
       
      </div>
<NewsletterBox/>
    </div>
  )
}

export default About