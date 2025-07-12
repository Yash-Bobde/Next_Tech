interface DocsProps {
  params: { slug?: string[] };
}

export default function Docs({ params }: DocsProps) {
  const slug = params?.slug;

  if (!slug) {
    return <h1>Docs Home Page</h1>;
  }

  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug: {slug.join('/')}</p>
    </div>
  );
}