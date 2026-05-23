export default function Hero() {
  return (
    <div className="flex  items-cente justify-center px-6 py-8">
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-16 lg:grid-cols-2">
        <div>
          <h1 className="max-w-[17ch] font-medium text-4xl leading-[1.2]! tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            Elite Associates Buy, Sell & Invest with Confidence Online
          </h1>
          <p className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
        </div>
        <div className="aspect-video w-full rounded-xl bg-accent flex justify-center items-center text-primary text-5xl font-bold" >
          Elite Associates
        </div>
      </div>
    </div>
  );
}
