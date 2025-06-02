import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ModeToggle } from "@/components/mode-toggle";
import appLogo from "@/assets/logo.svg";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-xl font-bold">
              <img src={appLogo} alt="My Custom Icon" className="h-10 w-10" />
              <span className="hidden md:block">Daily UI Dashboard</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://dailyui.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Daily UI
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/benedekkata/100-day-daily-ui-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <ModeToggle />
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  ),
});
