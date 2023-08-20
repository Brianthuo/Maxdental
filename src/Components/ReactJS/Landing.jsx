import React,{useState, useEffect} from 'react'
import '../Stylesheets/Landing.scss'
import dentalchair from '../Assets/dentalChair.jpg'
import Checkup from '../Assets/checkup.jpg'
import frontdesk from '../Assets/frontdesk.jpg'
import {AiOutlineHome, AiOutlineMail, AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {VscLocation} from 'react-icons/vsc'
import {TbDental} from 'react-icons/tb'
import {BsHospital} from 'react-icons/bs'
import {FaUserDoctor} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {GrGroup} from 'react-icons/gr'
import {GiMedicalPack} from 'react-icons/gi'
import dentalCleaning from '../Assets/DentalCleaning.mp4'
import braces from '../Assets/maxxbraces.jpg'
import checkup from '../Assets/checkup.jpg'
import filling from '../Assets/filing.jpg'
import crown from '../Assets/crownwork.jpeg'
import whiten from '../Assets/whitening.jpg'
import extraction from '../Assets/extraction.jpg'
import rootCanal from '../Assets/rootcanal.jpg'
import venia from '../Assets/implant2.jpeg'
import headDentist from '../Assets/hedDentist.jpg'
import assistant from '../Assets/maleAssistant.jpg'
import otherAssistant from '../Assets/dentalAsisistant.jpg'
import secretary from '../Assets/secretary.jpg'
import receptionnist from '../Assets/staff 1.jpg'
import chemist from '../Assets/chemist.jpg'
import nhif from '../Assets/NHIF.jpg'
import jubilee from '../Assets/JUBILEE-INSUARANCE.jpg'
import APA from '../Assets/APA.png'
import madison from '../Assets/madison.webp'
import maxxdental from '../Assets/clinicFront.jpg'
import maxxCheckup from '../Assets/maxxcheckup.jpg'
import maxxdentalChair from '../Assets/maxxdentalchair.jpg'
import maxxdentalcheckup from '../Assets/maxxdentalCheckup.jpg'
import { Link } from 'react-scroll'
import logo from '../Assets/logo-removebg-preview.png'
import Child from '../Assets/child.jpg'
import brian from '../Assets/brian.jpg'


// Define the images for the carousel
const images = [
    { src: maxxdental,
      alt: 'Maxdental',
      text: "Welcome to maxx Dental",
      subText: "Your trusted partner for oral health since 2013."
    },
    { src: maxxCheckup ,
      alt: 'maxxdental',
      text: "Get a Quick Checkup",
      subText: "Always maintaine your oral hygine"
    },
    { src: maxxdentalChair ,
      alt: 'maxedental',
      text: "Make an appointment",
      subText: "Call 0704789564"
   },
  ];

  const services = [
    {
      id:1,
      img: filling,
      title: "Filling",
      text: "Don’t let a cavity or a damaged tooth spoil your smile. Get a tooth filling that suits your needs and looks great. Our procedure is fast, painless, and affordable. Contact us today and smile with confidence."
    },
    {
      id:2,
      img: braces,
      title: "braces",
      text: "Want a straight and beautiful smile? Get braces and improve your appearance and oral health. Our braces procedure is simple, safe, and effective. We offer different types of braces to suit your needs and preferences"
    },
    {
      id:3,
      img: maxxdentalcheckup,
      title: "Consultation",
      text: "Get a consultation and get expert advice and guidance. A consultation can help you save time, money, and effort by providing you with customized solutions. Our consultation process is simple, effective, and tailored to your needs. "
    },
    {
      id:4,
      img: crown,
      title: "Crown",
      text: "A dental crown is a cap that covers a damaged tooth. You may need a crown if you have a weak, cracked, decayed, or discolored tooth. Max dental offers high-quality crown placement services with experienced dentists and flexible payment plans. Call us today to book an appointment."
    },
    {
      id:5,
      img: whiten,
      title: "Teeth Whitening",
      text: "This is a dental serviceYou want to have a beautiful smile with white teeth. Teeth whitening can help you achieve that. There are many ways to whiten your teeth, but some are better than others. Some may hurt your teeth or gums. Our teeth whitening service is the best option for you. We use safe and effective products that make your teeth white fast."
    },
    {
      id:6,
      img: extraction,
      title: "tooth extraction",
      text: "Tooth extraction is a dental procedure that involves removing a tooth. Dentists and oral surgeons perform this procedure for various reasons such as dental cavities, gum disease, dental infections, trauma or crowding. The procedure is relatively quick and can be done on an outpatient basis with either local, general, intravenous anesthesia or a combination. Maxx Dental can help you."
    },
    {
      id:7,
      img: rootCanal,
      title: "root canal",
      text: "A root canal is a dental procedure that releives pain caused by an infected tooth.During this procedure the inflamed pulp is removed and the surface is cleaned and a filling is added to seal the place . A root canal can improve your oral health, function, and appearance.Our experienced dentists use state-of-the-art equipment and techniques to ensure that your root canal therapy is as comfortable and pain-free as possible."
    },
    {
      id:8,
      img: venia,
      title: "Replacement",
      text: "Tooth replacement is a dental procedure that involves restoring a lost tooth or teeth to restore your dental function and make your smile healthier and more appealing. Dental implants are a reliable type of tooth replacement that both looks and feels like a real tooth. They provide a permanent solution if you need to replace a single tooth or multiple teeth in different areas. "
    },
  ]

  const Team = [
    {
      id:1,
      name: "Max",
      title: "head dentist",
      image: headDentist
    },
    {
      id:2,
      name: "John kimani",
      title: "Assistant Dentist",
      image: assistant
    },
    {
      id:3,
      name: "moureen wangari",
      title: "Assistant Dentist",
      image: otherAssistant
    },
    {
      id:4,
      name: "mary wambui",
      title: "secretary",
      image: secretary
    },
    {
      id:5,
      name: "grace wangari",
      title: "receptionist",
      image: receptionnist
    },
    {
      id:6,
      name: "joan murimi",
      title: "Chemist",
      image: chemist
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Brian Thuo",
      image: brian,
      text:"I would get toothaches in morning thinking it was a cavity or toothdecay but i was wrong,when i went to max dental i had my teeth cleaned and since then i not goten this issue agian i did not even have to use the pain killers i was prescribed"
    },
    {
      id: 2,
      name: "Joan wanjiru",
      image: Child,
      text:"I would get toothaches in morning thinking it was a cavity or toothdecay but i was wrong,when i went to max dental i had my teeth cleaned and since then i not goten this issue agian i did not even have to use the pain killers i was prescribed"
    },
    {
      id: 3,
      name: "paul kimani",
      image: assistant,
      text:"I would get toothaches in morning thinking it was a cavity or toothdecay but i was wrong,when i went to max dental i had my teeth cleaned and since then i not goten this issue agian i did not even have to use the pain killers i was prescribed"
    }
  ]

  const Insuarance =[
    {
      id:1,
      img: APA,
    },
    {
      id:1,
      img: jubilee,
    },
    {
      id:1,
      img: madison,
    },
    {
      id:1,
      img: nhif,
    },
  ]

const Landing = () => {
      // Define the state for the current index of the carousel
  const [index, setIndex] = useState(0);
  const [open , setOpen]=useState(false)

  // Define the function to go to the next image
  const next = () => {
    // Update the index by adding one and wrapping around if needed
    setIndex((index + 1) % images.length);
  };

  // Define the function to go to the previous image
  const prev = () => {
    // Update the index by subtracting one and wrapping around if needed
    setIndex((index - 1 + images.length) % images.length);
  };

  // Use an effect to change the image every 3 seconds
  useEffect(() => {
    // Set a timer to call the next function
    const timer = setTimeout(next, 3000);
    // Return a cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [index]); // Only run the effect when the index changes

  const close =()=>{
    setOpen(!open)
  }

  return (
    <div className='Landing'>
      
        <div className="navbar">
            <div className="logo"><img src={logo} alt="maxdental" /> </div>
            {
              open && 
                  <div className="elements">
                      <ul>
                      <Link to='carousel'  spy={true} smooth={true} offset={-100} duration={500}>
                          <li> <AiOutlineHome className='navicon'/> <p>Home</p></li>
                      </Link>
                      <Link to='about'  spy={true} smooth={true} offset={-100} duration={500}>
                          <li>  <BsHospital className='navicon'/> <p>why us</p></li>
                      </Link>
                      <Link to='Services'  spy={true} smooth={true} offset={-100} duration={500}>
                          <li>  <TbDental className='navicon'/> <p>Our services</p></li>
                      </Link>
                      <Link to='testimonials'  spy={true} smooth={true} offset={-100} duration={500}>
                          <li> <GrGroup  className='navicon'/>  <p>testimonials</p></li>
                      </Link>
                      <Link to='team'  spy={true} smooth={true} offset={-100} duration={500}>
                          <li> <GiMedicalPack className='navicon'/> <p>The Team</p></li>
                      </Link>
                      <Link to='appointment'  spy={true} smooth={true} offset={-100} duration={500}>
                          <li> <BiPhoneCall className='navicon'/> <p>Make an appointment</p></li>
                      </Link>
                      </ul>
                  </div>
            }
            <div className="icons">
              {
                open ? <AiOutlineClose onClick={close}/> : <AiOutlineMenu onClick={close}/>
              }
            </div>
        </div>

        <div className="carousel">
        <img src={images[index].src} alt={images[index].alt} />
        <div className="overlay"></div>
        <div className="carouselContent">
        <h2>{images[index].text}</h2>
        <hr />
        <p className='subtext'>{images[index].subText}</p>
        <a href="tel:+254728540053">Call us</a>

        </div>
        </div>

        <div className="about">
          <div className="content">
          <h2>Why choose US</h2>
          <p>Welcome to MaxxDental, your trusted partner for oral health. We have been serving the community for almost 10 years, providing quality dental care for patients of all ages. Whether you need a routine checkup, a cosmetic makeover, or a complex treatment, we have the experience, expertise, and equipment to meet your needs.

At MaxxDental, we have a team of highly qualified and experienced dentists who are committed to excellence in dentistry. They use the latest technology and techniques to ensure your comfort and satisfaction. Our dentists are also friendly and compassionate to children, and they will listen to your concerns and explain your options clearly.

We are proud to have earned the trust and loyalty of many satisfied customers over the years. Our patients appreciate our professionalism, honesty, and affordability. They also love our cozy and relaxing atmosphere, where they can feel at ease and enjoy their visit. You can read some of their testimonials on our website or on our social media pages.

If you are looking for a dental clinic that cares about your smile and your health, look no further than MaxxDental. We are conveniently located in Thika Town, Kiambu County, and we are open from Monday to Saturday. You can book an appointment online or by phone, or you can walk in anytime. We look forward to seeing you soon!</p>
          </div>
        </div>

        <div className="statics">
          <div className="content-container">
          <h1> +1,000 members</h1>
          <h1>+5,000 satisfied patients</h1>
          </div>

        </div>

        <div className="Services">
          <h2>Our Services</h2>
          <div className="servicesContainer">
            {services.map((service)=>{
              return(
                <div className='SubContainer'>
                  <img src={service.img} alt="maxdental" />
                  <div className="content">
                    <h5>{service.title}</h5>
                    <p>{service.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="testimonials">
          <h2>What our Clients say</h2>
          <div className="testimonialsContainer">
            {testimonials.map((testimonials)=>{
              return(
                <div className="testimonialsubcontiner">
                  <img src={testimonials.image} alt="maxdental" />
                  <div className="testimonialscontent">
                    <h5>{testimonials.name}</h5>
                    <p>{testimonials.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
{/* 
        <div className="insuarance">
          <h2>Our insuarance partners</h2>
          <div className="insuaraceContainer">
          {Insuarance.map((Insuarance)=>{
            return(
             <div className="imageContiner">
              <img src={Insuarance.img} alt="" />
             </div>
            )
          })}
          </div>
        </div> */}

        <div className="team">
          <h2>Meet our Team</h2>
          <div className="teamContainer">
              {Team.map((Team)=>{
                return(
                  <div className="TeamSubcontainer">
                    <img src={Team.image} alt="" />
                    <h4>{Team.title}</h4>
                    <h5>{Team.name}</h5>
                  </div>
                )
              })}
          </div>
        </div>

       

        <div className="appointment">
        <video src={dentalCleaning} autoPlay loop muted />
        <h2>To book an Appointment call 0728540053</h2>
        </div>

        <div className="footer">
          <div className="footerNav">
            <h4>Navigation</h4>
          <ul>
                    <li><p>Home</p></li>
                    <li><p>Find us</p></li>
                    <li><p>Our services</p></li>
                    <li><p>Why us</p></li>
                    <li><p>Isuarance partners</p></li>
                    <li><p>Make an appointment</p></li>
                </ul>
          </div>
          <div className="location">
            <h4>Find us</h4>
              <ul>
                <li><VscLocation className='navicon'/><p>Marks Plaza 1st floor,Post lane,Off uhuru street,Thika</p></li>
                <li> <BiPhoneCall className='navicon'/> <p>0728540053</p></li>
                <li><AiOutlineMail className='navicon'/><p>Email: maxxdental1@gmail.com</p></li>
              </ul>
          </div>
          <div className="working">
            <h4>Working hours</h4>
            <ul>
              <li>Monday-friday: 8Am-6PM</li>
              <li>Saturday: 8AM - 6PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <h4>copyright || all rights reserved</h4>
        </div>

    </div>
  )
}

export default Landing