"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TeamCardSeven from '@/components/sections/team/TeamCardSeven';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="animatedGrid"
      cardStyle="solid-accent-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812668126-94lo6adp.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew & Bean"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
          className="relative z-50"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Discover Premium Coffee Experience"
          description="Handcrafted coffee made with passion. Join us for the perfect blend of flavor and atmosphere."
          tag="Specialty Coffee"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812670061-k4wmzfn1.jpg",
              imageAlt: "Fresh brewed coffee cup"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812671731-a475grt2.jpg",
              imageAlt: "Latte art coffee drink"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812673036-8ifmppv2.jpg",
              imageAlt: "Espresso machine brewing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812674219-zq5rx69l.jpg",
              imageAlt: "Coffee beans roasted"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812675612-f3hnd8oi.jpg",
              imageAlt: "Barista pouring coffee"
            }
          ]}
          buttons={[
            {
              text: "View Menu",
              href: "products"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Coffee Menu"
          description="Explore our carefully curated selection of premium coffee drinks, each crafted to perfection"
          tag="Popular Items"
          products={[
            {
              id: "1",
              name: "Single Origin Espresso",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812676711-2j4s47ta.jpg",
              imageAlt: "Espresso coffee shot"
            },
            {
              id: "2",
              name: "Creamy Cappuccino",
              price: "$6.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812677792-9j8hd2he.jpg",
              imageAlt: "Cappuccino foam art"
            },
            {
              id: "3",
              name: "Bold Americano",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812678944-rali07hn.jpg",
              imageAlt: "Americano black coffee"
            },
            {
              id: "4",
              name: "Rich Mocha",
              price: "$7.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812680837-p89x3awh.jpg",
              imageAlt: "Mocha chocolate coffee"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="variety" data-section="variety">
        <FeatureCardSix
          title="Coffee Varieties"
          description="From single-origin beans to signature blends, discover what makes our coffee special"
          tag="Our Selection"
          features={[
            {
              id: 1,
              title: "Single Origin Beans",
              description: "Ethically sourced from coffee farms around the world, each batch delivers unique flavors and characteristics",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812681978-h775b490.jpg",
              imageAlt: "Single origin coffee beans package"
            },
            {
              id: 2,
              title: "Signature Blend",
              description: "Our proprietary mix of premium beans creates a smooth, balanced cup with exceptional depth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812683221-c0ebkj34.jpg",
              imageAlt: "Coffee blend package design"
            },
            {
              id: 3,
              title: "Cold Brew",
              description: "Smooth and refreshing, our cold brew is prepared using a 12-hour steeping process for perfect flavor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812684874-bssm8d31.jpg",
              imageAlt: "Cold brew coffee pitcher"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Sarah Anderson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812686377-xqqce1uy.jpg",
              imageAlt: "Sarah Anderson"
            },
            {
              id: "2",
              name: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812687654-yyzfcgxo.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812688604-dysrn9rc.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "James Wilson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812690286-a8esvr41.jpg",
              imageAlt: "James Wilson"
            }
          ]}
          cardTitle="Over 5,000 coffee lovers visit us every month for the perfect brew"
          cardTag="Customer Reviews"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardSeven
          team={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812691232-uo2ffoc5.jpg",
              imageAlt: "Head Barista"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812692455-196oyx7g.jpg",
              imageAlt: "Coffee Specialist"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812693461-zgmlbhvj.jpg",
              imageAlt: "Cafe Manager"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812695107-bktntabf.jpg",
              imageAlt: "Coffee Roaster"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765812698383-zs6gmpw9.jpg",
              imageAlt: "Owner & Founder"
            }
          ]}
          title="Meet the passionate team behind every cup"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our coffee shop, menu, and services"
          faqs={[
            {
              id: "1",
              title: "What coffee beans do you use?",
              content: "We source premium, ethically-raised coffee beans from farms across Africa, Latin America, and Asia. Each batch is carefully selected for quality and sustainability."
            },
            {
              id: "2",
              title: "Do you offer oat milk and other alternatives?",
              content: "Yes! We offer oat milk, almond milk, soy milk, and coconut milk as alternatives. All our milk alternatives are sourced from premium suppliers."
            },
            {
              id: "3",
              title: "Can I order coffee for events?",
              content: "Absolutely! We provide coffee catering for corporate events, weddings, and private gatherings. Please contact us for custom quotes and arrangements."
            },
            {
              id: "4",
              title: "What are your hours?",
              content: "We're open Monday-Friday 6am-6pm, Saturday 7am-7pm, and Sunday 8am-5pm. We're closed on major holidays."
            },
            {
              id: "5",
              title: "Do you have WiFi?",
              content: "Yes, we offer free high-speed WiFi for all customers. It's perfect for working or studying at our cafe."
            },
            {
              id: "6",
              title: "Can I purchase beans to take home?",
              content: "Yes! We sell freshly roasted beans in 1lb and 2lb bags. Ask our baristas for recommendations based on your brewing method."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit Our Cafe"
          ctaDescription="Stop by for a fresh cup and experience our warm hospitality"
          ctaButton={{
            text: "Get Directions",
            href: "https://maps.google.com"
          }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: "1",
              title: "What's your location?",
              content: "123 Coffee Street, Downtown District. Just a short walk from the main station."
            },
            {
              id: "2",
              title: "Is there parking available?",
              content: "Yes, there's a public parking lot 50 meters away and street parking nearby."
            },
            {
              id: "3",
              title: "Can I book a table?",
              content: "We accept walk-ins but recommend booking for groups of 6 or more. Email us or call ahead!"
            },
            {
              id: "4",
              title: "Do you have a loyalty program?",
              content: "Yes! Every 10th coffee is free. Ask for a loyalty card when you visit."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Coffee",
                  href: "products"
                },
                {
                  label: "Pastries",
                  href: "products"
                },
                {
                  label: "Seasonal Drinks",
                  href: "products"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "contact"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          logoText="Brew & Bean"
          copyrightText="© 2025 Brew & Bean Coffee Shop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}