'use client'

import { useState } from 'react'
import Link from 'next/link'

type ContentType = 'all' | 'case-study' | 'guide'

export type ResourceItem = {
  type: 'case-study' | 'guide'
  title: string
  description: string
  slug: string
  tag?: string
  readTime?: string
}

const typeLabels: Record<ContentType, string> = {
  all: 'All',
  'case-study': 'Case Studies',
  guide: 'Guides',
}

const typeBadgeStyles: Record<string, string> = {
  'case-study': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  guide: 'bg-blue-50 text-blue-700 border-blue-100',
}

const typeIcons: Record<string, string> = {
  'case-study':
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  guide:
    'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
}

const filterTypes: ContentType[] = ['all', 'case-study', 'guide']

export default function BlogFilterGrid({ resources }: { resources: ResourceItem[] }) {
  const [activeFilter, setActiveFilter] = useState<ContentType>('all')

  const filtered =
    activeFilter === 'all'
      ? resources
      : resources.filter((r) => r.type === activeFilter)

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeFilter === type
                  ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              {typeLabels[type]}
              <span
                className={`inline-flex items-center justify-center min-w-[20px] ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                  activeFilter === type
                    ? 'bg-white/20 text-gray-300'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {type === 'all'
                  ? resources.length
                  : resources.filter((r) => r.type === type).length}
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}/`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all p-7 flex flex-col"
            >
              {/* Type badge + tag */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${typeBadgeStyles[item.type]}`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={typeIcons[item.type]}
                    />
                  </svg>
                  {typeLabels[item.type as ContentType]}
                </span>
                {item.tag && (
                  <span className="text-xs text-gray-400 font-medium">{item.tag}</span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                Read More
                <svg
                  className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
          <h3 className="text-gray-900 font-bold text-xl mb-2">
            Ready to put this into practice?
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Every site we build follows the same principles you&apos;re reading about here. Get started for $99/month, no contracts, no surprises.
          </p>
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
          >
            See Pricing
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
