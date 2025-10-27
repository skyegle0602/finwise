import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Target, Bell, Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Transaction
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$12,450.00</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-accent font-medium">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Income</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$5,200.00</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-accent font-medium">+8.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Expenses</CardTitle>
              <TrendingDown className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$3,840.00</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-destructive font-medium">+3.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Savings Goal</CardTitle>
              <Target className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">68%</div>
              <p className="text-xs text-muted-foreground mt-1">$6,800 of $10,000 goal</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Spending Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Spending Overview</CardTitle>
              <CardDescription>Your expenses by category this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">Business Tools</span>
                    <span className="text-muted-foreground">$1,240 (32%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-1 rounded-full" style={{ width: "32%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">Marketing</span>
                    <span className="text-muted-foreground">$980 (26%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-2 rounded-full" style={{ width: "26%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">Office & Supplies</span>
                    <span className="text-muted-foreground">$620 (16%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-3 rounded-full" style={{ width: "16%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">Professional Services</span>
                    <span className="text-muted-foreground">$580 (15%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-4 rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">Other</span>
                    <span className="text-muted-foreground">$420 (11%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-5 rounded-full" style={{ width: "11%" }} />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Link href="/dashboard/budget">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Detailed Budget
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts & Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-1.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">Budget Alert</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        You've spent 85% of your marketing budget
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mt-1.5 shink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">Goal Progress</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        You're on track to reach your savings goal!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 bg-muted border border-border rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-1.5 shink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">Tip</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Consider reviewing your subscriptions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href="/dashboard/alerts">
                    <Button variant="ghost" size="sm" className="w-full">
                      View All Alerts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/dashboard/budget">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Manage Budget
                  </Button>
                </Link>
                <Link href="/dashboard/goals">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    View Savings Goals
                  </Button>
                </Link>
                <Link href="/dashboard/advice">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Get Financial Advice
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
