import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://mypaperbee.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add other pages here if the site expands
    ];
}
