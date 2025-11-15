import Script from 'next/script';

export const metadata = {
  title: 'Blog | VJC Overseas Study Abroad Guides Career Opportunities',
  description:
    "Connect with VJC Overseas for expert guidance on visas, immigration, and study abroad services. We're here to help you start your journey smoothly.",
  keywords:
    'Study Abroad Guides, Career Opportunities, Visa Application Process, Immigration laws, Study visa requirements, Work Abroad tips, Cultural Adaptation, Overseas Education, International Job market, Visa Success stories, Scholarship Opportunities, Post-landing services, IELTS preparation, PTE coaching, VJC Overseas, Best Visa Immigration Consultants',
};

export default function ContactLayout({ children }) {
  return (
    <>
      {/* Google Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        strategy="afterInteractive"
        async
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16767451796');
        `}
      </Script>

      {children}
    </>
  );
}
