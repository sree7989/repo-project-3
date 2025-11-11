import { coachingMetadata } from "../metadata";

export default function Head() {
  const { title, description, keywords } = coachingMetadata.ielts;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
}
