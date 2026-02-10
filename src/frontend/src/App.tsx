import { useState } from 'react';
import { Heart, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const loveReasons = [
    {
      title: "Your Beautiful Smile",
      description: "The way your eyes light up when you're happy makes my whole world brighter, Linnuu."
    },
    {
      title: "Your Kindness",
      description: "You have the most caring heart, my cutie potato. You make everyone around you feel special."
    },
    {
      title: "Your Laughter",
      description: "Your laugh is my favorite sound in the entire world, kuchhuu puchhu. It's pure magic."
    },
    {
      title: "Your Strength",
      description: "Even when things are tough, you keep going. You inspire me every single day, Areebuu."
    }
  ];

  const handleForgiveClick = () => {
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with romantic image */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/romantic-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Decorative floating hearts */}
      <div className="fixed top-20 left-10 w-12 h-12 opacity-20 animate-float">
        <img src="/assets/generated/heart-icons.dim_256x256.png" alt="" className="w-full h-full" />
      </div>
      <div className="fixed top-40 right-20 w-16 h-16 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
        <img src="/assets/generated/heart-icons.dim_256x256.png" alt="" className="w-full h-full" />
      </div>
      <div className="fixed bottom-32 left-1/4 w-10 h-10 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
        <img src="/assets/generated/heart-icons.dim_256x256.png" alt="" className="w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Heart className="w-4 h-4 text-primary animate-pulse-soft" />
                  <span className="text-sm font-medium text-primary">For Someone Special</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Dear <span className="text-primary">Areebuu</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  My beautiful <span className="text-primary font-semibold">Linnuu</span>, my adorable <span className="text-primary font-semibold">cutie potato</span>, my precious <span className="text-primary font-semibold">kuchhuu puchhu</span>...
                </p>
                
                <p className="text-lg text-foreground/80">
                  I know you're upset with me, and I understand. But I need you to know that you mean everything to me. This page is my heart speaking to yours.
                </p>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-3xl overflow-hidden shadow-soft">
                  <img 
                    src="/assets/generated/hero-illustration.dim_1200x800.png" 
                    alt="Romantic illustration" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="py-20 px-4 bg-card/50 backdrop-blur-sm">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                I'm Sorry, <span className="text-primary">Areebuu</span>
              </h2>
              <div className="flex justify-center">
                <Sparkles className="w-8 h-8 text-primary animate-pulse-soft" />
              </div>
            </div>
            
            <Card className="border-2 border-primary/20 shadow-soft">
              <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
                <p>
                  I know I messed up, and I can see that I've hurt you. That's the last thing I ever want to do. You're not just important to me—you're everything.
                </p>
                <p>
                  Every moment without your smile feels incomplete. Every second without hearing your voice feels too long. I miss the way you laugh at my silly jokes, the way you look at me when you're happy, and even the way you get mad at me (though I promise I'm trying not to make that happen again).
                </p>
                <p className="text-primary font-semibold">
                  My dear Linnuu, my sweet cutie potato, my precious kuchhuu puchhu—please give me a chance to make things right.
                </p>
                <p>
                  I want to hold you close, see you smile again, and remind you every single day how much you mean to me. You deserve the world, and I want to be the one who gives it to you.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Reveal Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <Collapsible open={isRevealed} onOpenChange={setIsRevealed}>
              <div className="text-center space-y-6">
                <CollapsibleTrigger asChild>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 rounded-full shadow-glow hover:shadow-soft transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isRevealed ? 'Hide My Secret Message' : 'Reveal My Secret Message'}
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="animate-fade-in">
                  <Card className="mt-8 border-2 border-accent/30 bg-accent/5">
                    <CardContent className="p-8 md:p-12">
                      <p className="text-xl md:text-2xl text-center font-serif italic text-foreground leading-relaxed">
                        "In a world full of temporary things, you are my forever. My <span className="text-primary font-bold">Areebuu</span>, my <span className="text-primary font-bold">Linnuu</span>, my <span className="text-primary font-bold">cutie potato</span>, my <span className="text-primary font-bold">kuchhuu puchhu</span>—you are my always and my everything. I love you more than words could ever express."
                      </p>
                      <div className="flex justify-center mt-6">
                        <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" />
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        </section>

        {/* Little Things I Love Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Little Things I Love About You
              </h2>
              <p className="text-xl text-muted-foreground">
                Just a few of the infinite reasons why you're so special to me
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {loveReasons.map((reason, index) => (
                <Card 
                  key={index} 
                  className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Heart className="w-6 h-6 text-primary fill-primary" />
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-32 px-4">
          <div className="container max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                Can We Talk, <span className="text-primary">Areebuu</span>?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                I miss you so much. I miss us. Please let me make this right.
              </p>
            </div>
            
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  onClick={handleForgiveClick}
                  className="text-xl px-12 py-8 rounded-full shadow-glow hover:shadow-soft transition-all duration-300 hover:scale-105"
                >
                  <Heart className="w-6 h-6 mr-3 fill-current" />
                  Will You Forgive Me?
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center mb-4">
                    Thank You, My Love! 💕
                  </DialogTitle>
                  <DialogDescription className="text-center space-y-4 text-base">
                    <p className="text-lg">
                      I knew my beautiful <span className="text-primary font-semibold">Areebuu</span> has the kindest heart!
                    </p>
                    <p>
                      You're my <span className="text-primary font-semibold">Linnuu</span>, my <span className="text-primary font-semibold">cutie potato</span>, my <span className="text-primary font-semibold">kuchhuu puchhu</span>, and the love of my life.
                    </p>
                    <p className="text-primary font-semibold text-lg">
                      I promise to make you smile every single day! ✨
                    </p>
                    <div className="flex justify-center pt-4">
                      <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-soft" />
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} · Made with <Heart className="w-4 h-4 inline text-primary fill-primary" /> for Areebuu · Built with love using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'unknown-app')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
