import { technologies } from "@/data/Technologies";

export default function Stack() {
  return (
    <section id="stack" className="py-20 bg-[#f8f8f8] dark:bg-[#111111]">
      <div className="container mx-auto px-6 md:px-14">
        <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
          <h2 className="text-3xl font-bold relative mb-8 inline-block">
            Tech Stack
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-primary/20 rounded-full">
              <div className="h-full w-2/3 bg-primary rounded-full"></div>
            </div>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-lg bg-background border border-border/20 transition-all duration-200 hover:border-border/40 group"
                >
                  <div className="p-2 sm:p-3 rounded-md mb-2 sm:mb-3 transition-all duration-200 group-hover:bg-opacity-15">
                    <Icon
                      size={32}
                      style={{
                        color: tech.color,
                      }}
                    />
                  </div>
                  <h3 className="text-sm font-medium">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
