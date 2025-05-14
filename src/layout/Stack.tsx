import { technologies } from "@/data/Technologies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function Stack() {
  return (
    <section
      id="stack"
      className="py-20 bg-[#f8f8f8] dark:bg-[#111111] min-h-[630px]"
    >
      <div className="container mx-auto px-12 sm:px-12 md:px-14">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-3xl font-bold mb-8 pb-2 relative">
            Tech Stack
            <span className="absolute bottom-0 left-0 w-12 border-b-2 rounded-full border-primary/50"></span>
          </h2>

          <Tabs defaultValue="frontend">
            <TabsList className="  dark:bg-neutral-950 w-full ">
              <TabsTrigger
                className="cursor-pointer text-xs sm:text-sm"
                value="frontend"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer text-xs sm:text-sm"
                value="backend"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer text-xs sm:text-sm"
                value="ui"
              >
                UI/UX
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer text-xs sm:text-sm"
                value="tools"
              >
                Tools
              </TabsTrigger>
            </TabsList>

            <Card className="p-6 h-full overflow-y-auto">
              <TabsContent value="frontend" className="flex flex-wrap gap-3  ">
                {technologies.frontend.map((tech) => (
                  <div
                    className="flex items-center gap-2 bg-background/80 border border-border/40 p-2 px-3 rounded-lg shadow-sm transition-transform hover:scale-105 w-full md:w-40 border-l-3 "
                    style={{
                      borderLeftColor: [
                        "Next.js",
                        "Three.js",
                        "shadcn",
                      ].includes(tech.name)
                        ? "var(--foreground)"
                        : tech.color,
                    }}
                  >
                    <tech.icon
                      className="h-5 w-5"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm ">{tech.name}</span>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="backend" className="flex flex-wrap gap-3">
                {technologies.backend.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-background/80 border border-border/40 p-2 px-3 rounded-lg shadow-sm transition-transform hover:scale-105 border-l-3 w-full md:w-40"
                    style={{
                      borderLeftColor: ["Express.js"].includes(tech.name)
                        ? "var(--foreground)"
                        : tech.color,
                    }}
                  >
                    <tech.icon
                      className="h-5 w-5"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="ui" className="flex flex-wrap gap-3">
                {technologies.ui.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-background/80 border border-border/40 p-2 px-3 rounded-lg shadow-sm transition-transform hover:scale-105 w-full md:w-40 border-l-3"
                    style={{
                      borderLeftColor: tech.color,
                    }}
                  >
                    <tech.icon
                      className="h-5 w-5"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="tools" className="flex flex-wrap gap-3">
                {technologies.tools.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-background/80 border border-border/40 p-2 px-3 rounded-lg shadow-sm transition-transform hover:scale-105 w-full md:w-40 border-l-3"
                    style={{
                      borderLeftColor: ["GitHub", "Vercel"].includes(tech.name)
                        ? "var(--foreground)"
                        : tech.color,
                    }}
                  >
                    <tech.icon
                      className="h-5 w-5"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
