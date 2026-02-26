export interface WebsiteCheck {
  label: string
  status: 'pass' | 'warning' | 'fail'
  detail: string
}

export interface ReportCategory {
  name: string
  weight: number
  score: number
  afterScore: number
  checks: WebsiteCheck[]
}

export interface ReportAction {
  title: string
  description: string
  urgency: 'Immediate' | 'This Month' | 'Ongoing'
  impact: 'High' | 'Medium' | 'Low'
}

export interface WebsiteReport {
  url: string
  domain: string
  overallScore: number
  afterScore: number
  grade: string
  afterGrade: string
  categories: ReportCategory[]
  topIssues: string[]
  strengths: string[]
  actions: ReportAction[]
  estimatedVisitorLoss: number
}
