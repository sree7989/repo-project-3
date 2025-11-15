import Script from 'next/script';

export const metadata = {
 title: "Free Visa and Study Abroad Assessment Check Your Eligibility Online for Immigration Services",
  description: "Get expert visa & immigration help with VJC Overseas. Take our free assessment to explore top opportunities and start your global journey today.",
  keywords:"Free Assessment, visa Eligibility Check, Immigration Consultation, Study Abroad Assessment, Personalized visa Guidance, Free Counseling, Immigration Advice, Study visa Evaluation, Work visa Assessment, Permanent Residency Check, Free Eligibility Evaluation, visa Application support, Overseas Education Guidance, Job Seeker visa Assessment, Family Sponsorship Evaluation, Document Review, visa Interview Preparation, Overseas Career Counseling, VJC Overseas, Best Visa Immigration Consultants"
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
