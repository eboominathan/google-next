import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import { Suspense } from "react";

export default async function ImageSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=Image`
  );
  if (!response.ok) throw new Error("Something went wrong");

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <Suspense>
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl mb-4">
            No result found for {searchParams.searchTerm}
          </h1>
          <p className="text-lg">
            Try Searching the web or images for something else
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </p>
        </div>
      </Suspense>
    );
  }
  return <div>{results && <ImageSearchResults results={data} />}</div>;
}
