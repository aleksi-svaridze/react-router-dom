import {
  useRouteError,
  isRouteErrorResponse,
  useParams,
} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const param = useParams();
  console.error(error); // Log the error for debugging

  let errorMessage;

  if (isRouteErrorResponse(error)) {
    // Handle specific status codes (e.g., 404, 401)
    errorMessage = error.statusText || error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <div className="bg-white">
      <section className="container mx-auto pt-5 md:py-20 text-center px-4">
        <h1 className="text-2xl">
          საინტერესო ფაქტი, სათაურით -
          <span className="font-bold">"{param.factTitle}"</span>, ვერ მოიძებნა
        </h1>
        <h3 className="mt-10 mb-4 font-bold text-xs">შეცდომის კოდი:</h3>
        <code className="p-10 border rounded inline-block">{errorMessage}</code>
      </section>
    </div>
  );
}
