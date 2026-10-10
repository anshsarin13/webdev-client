export default function TailwindResponsiveBreakpoint() {
  return (
    <div>
      <div
        id="wd-tailwind-responsive-breakpoint"
        className="bg-red-500 md:bg-green-500 p-4 text-white"
      >
        Red below md, green at md and up.
      </div>
      <div className="bg-red-500 lg:bg-purple-500 p-4 text-white mt-2">
        My own: red below lg, purple at lg and up.
      </div>
      <div
        id="wd-ai-responsive"
        className="bg-red-500 sm:bg-orange-500 p-4 text-white mt-2"
      >
        Sample AI: red below sm, orange at sm and up.
      </div>
    </div>
  );
}
