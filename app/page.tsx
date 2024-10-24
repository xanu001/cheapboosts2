'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Clock, TagIcon, AlertCircle, Star, ExternalLink, Slash, BadgeCheck, Signature, Globe, Check, Sparkles  } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import dynamic from 'next/dynamic';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import VouchesSection from '../components/VouchesSection';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import tokenImage from './/images/tokens.png';
import toolsImage from './/images/tools.png';
import boostbotImage from './/images/BB.png';
import nitroImage from './/images/nitro.png';
import serverBoostImage from './/images/SB.png';
import socialboostImage from './/images/Social_Boosts.png';
import socialpanelImage from './/images/Social_Panel.png';
import SellixEmbed from '@/components/SellixEmbed';

// import boostImage from '/images/boost.png';
// import membersImage from '/images/members.png';

// StarField component for section headers
const StarField = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full animate-twinkle"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    opacity: 0.6
                }}
            />
        ))}
    </div>
);

const CrispWithNoSSR = dynamic(
    () => import('../components/crisp'),
    { ssr: false }
);

const LandingPage = () => {
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [showEmbed, setShowEmbed] = useState(false); // State to toggle SellixEmbed

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        //     // setMousePosition({ x: e.clientX, y: e.clientY });
        // };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            // window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  const products = [
    {
      id: 1,
      title: "NITRO TOKENS",
      subtitle: "UHQ",
      startingAt: "0.35",
      image: tokenImage.src,
      category: "nitro",
      link: "#blocked"
    },
    {
      id: 2,
      title: "DISCORD TOOLS",
      subtitle: "UHQ",
      startingAt: "3.00",
      image: toolsImage.src,
      category: "nitro",
      link: "https://cheapboostssz.mysellix.io/product/discord-status-rotator"
    },
    {
      id: 3,
      title: "BOOST BOT",
      subtitle: "UHQ",
      startingAt: "3.50",
      image: boostbotImage.src,
      category: "nitro",
      link: "https://cheapboostssz.mysellix.io/"
    },
    {
      id: 4,
      title: "NITRO",
      subtitle: "UHQ",
      startingAt: "HOLD",
      image: nitroImage.src,
      category: "nitro",
      link: "https://cheapboostssz.mysellix.io/"
    },
    {
      id: 5,
      title: "SERVER BOOST",
      subtitle: "UHQ",
      startingAt: "2.99",
      image: serverBoostImage.src,
      category: "nitro",
      link: "https://cheapboostssz.mysellix.io/product/1m-14x-boosts-66e56e7a8275d"
    },
    {
      id: 6,
      title: "Social_Boosts",
      subtitle: "UHQ",
      startingAt: "Unlisted",
      image: socialboostImage.src,
      category: "nitro",
      link: "https://cheapboostssz.mysellix.io/product/tiktok-uhq-followers"
    },
    {
      id: 3,
      title: "SOCIALPANEL",
      subtitle: "UHQ",
      startingAt: "10.00",
      image: socialpanelImage.src,
      category: "nitro",
      link: "https://cheapboostssz.mysellix.io/product/social-boost-panel"
    },

  ];

    const faqItems = [
        {
            question: "How does delivery work?",
            answer: "Our delivery system is fully automated and instant. As soon as your payment is confirmed, you'll receive your purchase immediately through our automated system. No waiting time, no manual processing needed!"
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept a wide range of payment methods including all major credit cards, PayPal, and various cryptocurrencies. All transactions are processed through secure payment gateways to ensure your safety."
        },
        {
            question: "Is my payment secure?",
            answer: "Absolutely! We use industry-standard encryption and secure payment processors. Your financial information never touches our servers directly, and all transactions are processed through verified secure channels."
        },
        {
            question: "How long do boosts last?",
            answer: "Boost duration varies depending on the package you choose. We offer different timeframes ranging from 1 month to permanent boosts. The duration is clearly marked on each product page."
        },
        {
            question: "What if I need help?",
            answer: "Our support team is available 24/7 through Discord and our website's live chat. We typically respond within minutes to ensure you get the help you need right away."
        }
    ];

    return (
        <div>
                <div className="relative overflow-hidden bg-zinc-900">
      
      {/* Enhanced announcement banner */}

      {/* Interactive background gradient that follows mouse */}
      {/* <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent)`,
          transition: 'all 0.15s ease'
        }}
      /> */}
      
      {/* Grid background with subtle animation */}
      <div className="fixed inset-0 grid-background opacity-40" />

      {/* Alert Banner with hover effect */}

      {/* Enhanced Navigation */}
      <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${Math.min(scrollY / 500, 0.8)})`,
        backdropFilter: 'blur-16px',
        borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
      }}
    >
           <Alert className="rounded-none border-purple-500/20 bg-blue-900/80 transition-all duration-300 hover:bg-purple-900/90">
        <div className="relative w-full">
          <div className="flex items-center justify-center">
            <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
            <AlertDescription className="text-purple-200 ml-2">
              All services are live and fully operational. 24/10/24
            </AlertDescription>
          </div>
          {/* Small animated stars around announcement */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-twinkle"
              style={{
                top: `${50 + Math.cos(i * Math.PI / 3) * 20}%`,
                left: `${50 + Math.sin(i * Math.PI / 3) * 40}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </Alert>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo Section */}
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <Sparkles className="h-8 w-8 text-purple-400 relative animate-pulse-slow" />
            </div>
            <span className="text-2xl font-bold text-white relative">
              CheapBoosts
              <span className="absolute -inset-1 bg-purple-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center bg-zinc-800/50 rounded-full px-6 py-2 backdrop-blur-sm border border-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 animate-gradient" />
            
            {["Home" ,'About', 'Products', 'Features', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="relative px-4 py-1 group transition duration-300"
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
                <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - You can expand this later */}
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  
      
      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen relative bg-gradient-to-b from-black via-purple-950/30 to-purple-900/20 pt-16">
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
  {Array.from({ length: 50 }).map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-purple-500 rounded-full animate-twinkle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: 0.3
      }}
    />
  ))}
</div>


        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <div className="w-24 h-24 border border-purple-500/30 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Hero Content with enhanced animations */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
          <div className="flex flex-col sm:flex-row gap-4 animate-float"
               style={{ animationDelay: '0.6s' }}>
                      <Badge 
            variant="outline"
            className="mb-8 bg-purple-500/20 text-purple-200 border-purple-500/30 animate-pulse-slow"
          >
            discord.gg/cheapboosts
          </Badge>
          <Badge
            // variant="" 
            className="mb-8 bg-purple-500/20 text-purple-200 border-purple-500/30 animate-pulse-slow"
          >
            New
          </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-float"
              style={{ animationDelay: '0.2s' }}>
            Get discounted services<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600 animate-gradient">
              From Cheap Boosts
            </span>
          </h1>
          <p className="max-w-2xl text-gray-300 mb-12 leading-relaxed animate-float"
             style={{ animationDelay: '0.4s' }}>
            Welcome to CheapBoosts, your ultimate destination for unleashing the full potential 
            of your Discord server! Experience premium boosting services at unbeatable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-float"
               style={{ animationDelay: '0.6s' }}>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 transition-all duration-300 hover:scale-105 hover:glow"
              onClick={() => window.location.href = '/shop'}
            >
              Shop now <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-purple-500/30 hover:bg-purple-500/20 text-white px-8 py-6 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'https://discord.gg/cheapboosts'}
            >
              Join Discord <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Scrolling Text */}
      <div className="relative bg-purple-900/30 border-y border-purple-500/20 overflow-hidden py-4 glass-effect">
        <div className="flex whitespace-nowrap animate-scroll">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-8 mx-4">
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">INSTANT DELIVERY</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">24/7 SUPPORT</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">BEST PRICES</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">INSTANT DELIVERY</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">24/7 SUPPORT</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">BEST PRICES</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
      {/* Enhanced About Section */}
      <section id="about"  className="py-60 relative absolute inset-0 grid-background">
      <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <div className="w-24 h-24 border border-purple-500/30 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent)] animate-pulse-slow" />
          <div className="absolute inset-0 grid-background opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
                <div className="grid grid-cols-1 gap-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 bg-zinc-800/50 p-4 rounded-lg border border-purple-500/10">
                      <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-purple-300" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-purple-500/20 rounded w-24" />
                        <div className="h-2 mt-2 bg-purple-500/10 rounded w-16" />
                      </div>
                      <div className="text-purple-300 text-sm">/Month</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to know more about us?
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                We're your top choice for Discord needs.
              </h3>
              <p className="text-gray-300 mb-8">
                At CheapBoosts, we pride ourselves on delivering premium Discord services
                at unbeatable prices. Our automated systems ensure instant delivery,
                while our 24/7 support team stands ready to assist you with any questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-purple-500/10">
                  <Clock className="text-purple-400" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-purple-500/10">
                  <Zap className="text-purple-400" />
                  <span>Instant Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-purple-500/10">
                  <TagIcon className="text-purple-400" />
                  <span>Most affordable pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Enhanced Scrolling Text */}
 <div className="relative bg-purple-900/30 border-y border-purple-500/20 overflow-hidden py-4 glass-effect">
        <div className="flex whitespace-nowrap animate-scroll">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-8 mx-4">
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
            </div>
          ))}
        </div>
        
      </div>
      <section id="products" className="py-24 bg-black-900 relative overflow-hidden absolute inset-0 grid-background">
      <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <div className="w-24 h-24 border border-purple-500/30 rounded-lg" />
            </div>
          ))}
        </div>
      <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent)] animate-pulse-slow" />
          <div className="absolute inset-0 grid-background opacity-20" />
        </div>
  {/* Background effects */}

  <div className="max-w-7xl mx-auto px-6 relative">
    <div className="text-center mb-4">
      <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
        <Sparkles className="w-5 h-5" />
        <p>Explore the products</p>
      </div>
      <h2 className="text-4xl font-bold text-white mb-12">Products</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
  <Card key={product.id} className="group bg-zinc-800/50 border-purple-500/20 hover:border-purple-500/40 hover:bg-zinc-800/70 transition-all duration-300">
    <CardContent className="p-0">
      {/* Animated line for each card */}
      <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </CardContent>
    <CardFooter className="flex items-center justify-between p-4 bg-zinc-900/50">
      <div className="text-gray-400">
        Starting at: <span className="text-purple-400 font-bold">${product.startingAt}</span>
      </div>
      {/* Button redirects to a website */}
      <Button 
        variant="ghost" 
        className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300"
        onClick={() => window.location.href = product.link} // Redirect on click
      >
        Purchase
      </Button>
    </CardFooter>
  </Card>
))}
    </div>
  </div>
</section>


    

      {/* Features Section */}
      <section id="features" className="py-24 bg-black-900 relative overflow-hidden absolute inset-0 grid-background">
      <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <div className="w-24 h-24 border border-purple-500/30 rounded-lg" />
            </div>
          ))}
        </div>
      <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent)] animate-pulse-slow" />
          <div className="absolute inset-0 grid-background opacity-20" />
        </div>
      
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Clock />, title: "24/7 Support", desc: "Round-the-clock assistance for all your needs" },
              { icon: <Zap />, title: "Instant Delivery", desc: "Automated delivery system for immediate service" },
              { icon: <TagIcon />, title: "Best Prices", desc: "Competitive pricing without compromising quality" },
              { icon: <Globe />, title: "Well Maintained", desc: "Always letting customers know about stock and any issues." },
              { icon: <Signature />, title: "Quality products", desc: "Automated delivery system for immediate service" },
              { icon: <BadgeCheck />, title: "300+ Sales", desc: "Extremely trusted in the community. Many vouches" }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-zinc-800/50 rounded-lg border border-purple-500/20">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ... */}
      {/* Enhanced Scrolling Text */}
      <div className="relative bg-purple-900/30 border-y border-purple-500/20 overflow-hidden py-4 glass-effect">
        <div className="flex whitespace-nowrap animate-scroll">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-8 mx-4">
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <Clock className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">discord.gg/cheapboosts</span>
              <TagIcon className="h-4 w-4 text-purple-400 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
      {/* Enhanced FAQ Section with Accordion */}
      <section id="faq" className="py-24 bg-black-900 relative overflow-hidden absolute inset-0 grid-background">
      <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <div className="w-24 h-24 border border-purple-500/30 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent)] animate-pulse-slow" />
          <div className="absolute inset-0 grid-background opacity-20" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-zinc-800/50 border border-purple-500/20 rounded-lg px-6 transition-all duration-300 hover:bg-zinc-800/70"
              >
                <AccordionTrigger className="text-white hover:text-purple-400 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <VouchesSection/>
      <footer className="bg-black-900 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Cheap Boosts
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevate your Discord experience with our premium server boost services. 
              Fast, reliable, and secure solutions for your community growth.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Server Boosts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Nitro Tokens</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Social media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Members UHQ</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
      <h3 className="text-white font-semibold mb-4">Company</h3>
      <ul className="flex flex-col space-y-2">
      {["home" ,'about', 'products', 'features', 'FAQ'].map((item) => (
          <li key={item} className="w-full">
            <button
              onClick={() => scrollToSection(item)}
              className="w-full text-left text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="capitalize">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>
    </div>
          
          {/* Connect Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  discord.gg/cheapboosts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235c-.484.186-4.92 1.902-9.41 3.64c-2.26.873-4.518 1.746-6.256 2.415c-1.737.67-3.045 1.168-3.114 1.192c-.46.16-1.082.362-1.61.984c-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976c1.76.564 3.58 1.102 5.087 1.608c.556 1.96 1.09 3.927 1.618 5.89c.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565c.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337c.403-.294.67-.767.795-1.307c.374-1.63 2.853-13.427 3.276-15.38c.04-.222.116-.97.13-1.23c.02-.272-.015-.565-.15-.838c-.13-.27-.34-.46-.59-.59c-.482-.252-.95-.412-1.998-.377zm-3.99 15.226c-.53-.77-1.93-2.757-2.82-4.025l-.228-.31l-.03-.046c1.823-1.827 8.366-8.47 8.532-8.59c-.02-.037-.02-.042-.03-.058c-.84.898-10.424 10.05-11.106 10.702c2.77-1.78 8.853-5.765 8.853-5.765c-.012-.032-.03-.085-.03-.085c-1.396 1.135-7.684 6.252-9.166 7.426l-2.882-1.965z"/>
                  </svg>
                  https://t.me/cheapboostsz
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
  <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CheapBoosts. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
      
      {/* Add keyframes for twinkling animation in global styles */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
    
        </div>
    );
};

export default LandingPage;
