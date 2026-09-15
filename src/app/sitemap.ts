import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constant/site';
import { articles } from '@/components/pages/articles/dummy';
import { ourCase } from '@/components/pages/home/cards/case/dummy';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, changeFrequency: 'yearly', priority: 1 },
        { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/case-studies`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/articles`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/announcements`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${SITE_URL}/careers`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${SITE_URL}/contact-us`, changeFrequency: 'monthly', priority: 0.6 },
    ];

    const articleRoutes: MetadataRoute.Sitemap = articles.map((item) => ({
        url: `${SITE_URL}/articles/${item.slug}`,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    const caseStudyRoutes: MetadataRoute.Sitemap = ourCase.map((item) => ({
        url: `${SITE_URL}/case-studies/${item.slug}`,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...staticRoutes, ...articleRoutes, ...caseStudyRoutes];
}
