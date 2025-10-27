"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingUp, Shield, PiggyBank, Zap, ChevronRight, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AdviceCard {
  id: string
  category: "savings" | "spending" | "investment" | "tax" | "general"
  priority: "high" | "medium" | "low"
  title: string
  description: string
  impact: string
  actionable: boolean
}

export default function AdvicePage() {
  const [advice] = useState<AdviceCard[]>([
    {
      id: "1",
      category: "savings",
      priority: "high",
      title: "Increase Emergency Fund Contributions",
      description:
        "Your emergency fund is at 68% of your target. Based on your income stability and expenses, we recommend increasing monthly contributions by $200 to reach your goal 3 months earlier.",
      impact: "Potential savings: $2,400 faster goal completion",
      actionable: true,
    },
    {
      id: "2",
      category: "spending",
      priority: "high",
      title: "Review Software Subscriptions",
      description:
        "You're spending $1,240/month on business tools. We've identified 3 subscriptions you haven't used in 60 days that could save you $180/month if cancelled.",
      impact: "Potential savings: $2,160/year",
      actionable: true,
    },
    {
      id: "3",
      category: "tax",
      priority: "high",
      title: "Optimize Quarterly Tax Payments",
      description:
        "Based on your current income trajectory, you should increase your quarterly tax reserve by $500/month to avoid underpayment penalties.",
      impact: "Avoid potential penalties: $500-1,000",
      actionable: true,
    },
    {
      id: "4",
      category: "spending",
      priority: "medium",
      title: "Negotiate Marketing Costs",
      description:
        "Your marketing spend is 19% of revenue. Industry average for your business type is 12-15%. Consider renegotiating contracts or exploring more cost-effective channels.",
      impact: "Potential savings: $400-600/month",
      actionable: true,
    },
    {
      id: "5",
      category: "investment",
      priority: "medium",
      title: "Start Retirement Contributions",
      description:
        "You have $800/month in surplus after expenses and savings goals. Consider opening a SEP IRA and contributing $500/month for tax benefits and long-term growth.",
      impact: "Tax savings: ~$150/month, Long-term growth potential",
      actionable: true,
    },
    {
      id: "6",
      category: "general",
      priority: "low",
      title: "Diversify Income Streams",
      description:
        "You rely on 2 main clients for 80% of income. Consider diversifying your client base or creating passive income streams to reduce financial risk.",
      impact: "Risk reduction and income stability",
      actionable: false,
    },
  ])

  const getCategoryIcon = (category: AdviceCard["category"]) => {
    switch (category) {
      case "savings":
        return <PiggyBank className="w-5 h-5" />
      case "spending":
        return <TrendingUp className="w-5 h-5" />
      case "investment":
        return <Zap className="w-5 h-5" />
      case "tax":
        return <Shield className="w-5 h-5" />
      default:
        return <Lightbulb className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: AdviceCard["category"]) => {
    switch (category) {
      case "savings":
        return "bg-accent text-accent-foreground"
      case "spending":
        return "bg-chart-1 text-white"
      case "investment":
        return "bg-chart-4 text-white"
      case "tax":
        return "bg-chart-3 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getPriorityBadge = (priority: AdviceCard["priority"]) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-destructive text-destructive-foreground">High Priority</Badge>
      case "medium":
        return <Badge variant="secondary">Medium Priority</Badge>
      default:
        return <Badge variant="outline">Low Priority</Badge>
    }
  }

  const filterByCategory = (category?: string) => {
    if (!category) return advice
    return advice.filter((item) => item.category === category)
  }

  const highPriorityCount = advice.filter((item) => item.priority === "high").length

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Financial Advice</h1>
          <p className="text-muted-foreground">AI-powered recommendations tailored to your finances</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-foreground">{highPriorityCount} high-priority actions</span>
        </div>
      </div>

      {/* Financial Health Score */}
      <Card className="mb-8 bg-linear-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Your Financial Health Score
          </CardTitle>
          <CardDescription>Based on your spending, savings, and financial habits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-8">
            <div className="shrink-0">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.78)}`}
                    className="text-accent"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">78</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">Good Financial Health</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You're doing well! Your savings rate is strong and spending is mostly under control. Focus on the
                  high-priority recommendations to improve further.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Savings Rate</p>
                  <p className="text-lg font-semibold text-accent">26%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Budget Adherence</p>
                  <p className="text-lg font-semibold text-chart-1">82%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Goal Progress</p>
                  <p className="text-lg font-semibold text-chart-4">68%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advice Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Advice</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="spending">Spending</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
          <TabsTrigger value="tax">Tax</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {advice.map((item) => (
            <Card key={item.id}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${getCategoryColor(item.category)}`}
                  >
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        {getPriorityBadge(item.priority)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">{item.impact}</span>
                      </div>
                      {item.actionable && (
                        <Button variant="ghost" size="sm" className="gap-2">
                          Take Action
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {["savings", "spending", "investment", "tax"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            {filterByCategory(category).map((item) => (
              <Card key={item.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${getCategoryColor(item.category)}`}
                    >
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                          {getPriorityBadge(item.priority)}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium text-foreground">{item.impact}</span>
                        </div>
                        {item.actionable && (
                          <Button variant="ghost" size="sm" className="gap-2">
                            Take Action
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      {/* Ask AI Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Ask FinWise AI
          </CardTitle>
          <CardDescription>Get personalized answers to your financial questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start h-auto py-3 px-4 bg-transparent">
                <div className="text-left">
                  <p className="font-medium text-sm">How can I reduce my tax burden?</p>
                  <p className="text-xs text-muted-foreground mt-1">Get tax optimization strategies</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-3 px-4 bg-transparent">
                <div className="text-left">
                  <p className="font-medium text-sm">Should I invest or save more?</p>
                  <p className="text-xs text-muted-foreground mt-1">Balance savings and investments</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-3 px-4 bg-transparent">
                <div className="text-left">
                  <p className="font-medium text-sm">How to price my services?</p>
                  <p className="text-xs text-muted-foreground mt-1">Optimize your pricing strategy</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-3 px-4 bg-transparent">
                <div className="text-left">
                  <p className="font-medium text-sm">When should I hire help?</p>
                  <p className="text-xs text-muted-foreground mt-1">Growth and scaling advice</p>
                </div>
              </Button>
            </div>
            <Button className="w-full gap-2">
              <Sparkles className="w-4 h-4" />
              Ask a Custom Question
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
