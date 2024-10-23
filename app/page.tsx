'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Clock, TagIcon, AlertCircle, Star, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import dynamic from 'next/dynamic';

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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const feedbacks = [
        { id: 1, rating: 5, comment: "Excellent service!", date: "2024-10-23" },
        { id: 2, rating: 5, comment: "Fast delivery!", date: "2024-10-22" },
        { id: 3, rating: 5, comment: "Great support!", date: "2024-10-22" }
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
      <Alert className="rounded-none border-purple-500/20 bg-purple-900/80 transition-all duration-300 hover:bg-purple-900/90">
        <div className="relative w-full">
          <div className="flex items-center justify-center">
            <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
            <AlertDescription className="text-purple-200 ml-2">
              All services are live and fully operational. Get your automated boosts today!
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
      <Alert className="rounded-none border-purple-500/20 bg-blue-900/80 transition-all duration-300 hover:bg-purple-900/90">
        <div className="relative w-full">
          <div className="flex items-center justify-center">
            <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
            <AlertDescription className="text-purple-200 ml-2">
              All services are live and fully operational. Get your automated boosts today!
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
      {/* Interactive background gradient that follows mouse */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent)`,
          transition: 'all 0.15s ease'
        }}
      />
      
      {/* Grid background with subtle animation */}
      <div className="fixed inset-0 grid-background opacity-40" />

      {/* Alert Banner with hover effect */}

      {/* Enhanced Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${Math.min(scrollY / 500, 0.8)})`,
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
        }}>
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 glow">
              <Zap className="h-8 w-8 text-purple-500 animate-pulse-slow" />
              <span className="text-2xl font-bold text-white">CheapBoosts</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'features', 'FAQ', 'vouches'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  <span className="capitalize">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
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
          <Badge 
            variant="secondary" 
            className="mb-8 bg-purple-500/20 text-purple-200 border-purple-500/30 animate-pulse-slow"
          >
            Now Live!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-float"
              style={{ animationDelay: '0.2s' }}>
            Boost Your Server Right<br />
            Way at Discounted<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient">
              Rates!
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
      <section id="about" className="py-20 relative">
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
              <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
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


       {/* <section id="products" className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,purple-800,transparent)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-zinc-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Product {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Starting at $0.99</p>
                  <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
                    Purchase
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Clock />, title: "24/7 Support", desc: "Round-the-clock assistance for all your needs" },
              { icon: <Zap />, title: "Instant Delivery", desc: "Automated delivery system for immediate service" },
              { icon: <TagIcon />, title: "Best Prices", desc: "Competitive pricing without compromising quality" }
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
      <section id="faq" className="py-20 relative overflow-hidden">
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
        {/* Feedbacks Section */}
        <section id="feedbacks" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Customer Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="p-6 bg-zinc-800/50 rounded-lg border border-purple-500/20">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: feedback.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-purple-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-2">{feedback.comment}</p>
                <span className="text-gray-400 text-sm">{feedback.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
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
