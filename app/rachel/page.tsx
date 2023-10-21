import ArticleComponent from "@/components/ArticleComponent";

export default function Home() {
  var heading = "This is the header";
  var summary = "This is the summary";
  var image_url =
    "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D";

  return (
    <ArticleComponent
      heading={heading}
      summary={summary}
      image_url={image_url}
    />
  );
}
