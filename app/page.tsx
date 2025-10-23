import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Target, Bell, Sparkles, Check } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">FinWise</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            AI-Powered Financial Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Smart Finance Management for Freelancers & SMBs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Take control of your finances with AI-guided budgeting, smart savings goals, and personalized advice
            tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Manage Your Finances
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful AI-driven features designed specifically for freelancers and small business owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">AI-Guided Budgeting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smart categorization and personalized budget recommendations based on your spending patterns
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Smart Savings Goals</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Set realistic goals with AI suggestions and track your progress with visual insights
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Spending Alerts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time notifications about overspending and unusual transactions to stay in control
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Personalized Advice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-driven financial recommendations tailored to your income, expenses, and goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free, upgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Free</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-foreground">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for getting started</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Basic budgeting tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Up to 3 savings goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Basic spending alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Monthly financial reports</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button variant="outline" className="w-full bg-transparent">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-primary border-2 border-primary rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-primary-foreground">$9.99</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>
                <p className="text-sm text-primary-foreground/80">For serious freelancers</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/90">Everything in Free</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/90">Unlimited savings goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/90">AI-powered insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/90">Advanced spending alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/90">Priority support</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button variant="secondary" className="w-full">
                  Start Free Trial
                </Button>
              </Link>
            </div>

            {/* Business Plan */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Business</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-foreground">$29.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">For growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Multi-user access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Dedicated account manager</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About FinWise</h2>
            <p className="text-lg text-muted-foreground">
              Empowering freelancers and small businesses with intelligent financial management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every freelancer and small business owner deserves access to sophisticated financial
                tools. FinWise combines cutting-edge AI technology with intuitive design to make financial management
                simple, smart, and accessible.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Why Choose Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional finance apps, FinWise is built specifically for the unique needs of freelancers and
                SMBs. Our AI learns from your spending patterns to provide personalized insights that help you make
                better financial decisions.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$50M+</div>
                <div className="text-sm text-muted-foreground">Money Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-chart-4 mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of freelancers and small businesses managing their finances smarter with FinWise
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Your Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">© 2025 FinWise. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
