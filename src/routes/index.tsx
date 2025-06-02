import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import { Button } from "../components/ui/button";
import { Calendar, Eye, Code, Palette, Trophy, Target } from "lucide-react";
import { challenges } from "@/data/challenges";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate({ from: "/" });
  const completedChallenges = challenges.filter(
    (c) => c.status === "completed"
  );
  const inProgressChallenges = challenges.filter(
    (c) => c.status === "in-progress"
  );
  const completionRate = (completedChallenges.length / challenges.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Daily UI Challenge Dashboard
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          A personal showcase of my solutions to the Daily UI challenges. Each
          challenge pushes the boundaries of design and development.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span>{completedChallenges.length} Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            <span>{challenges.length} Total Challenges</span>
          </div>
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>{Math.round(completionRate)}% Complete</span>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
          <CardDescription>Daily UI challenge completion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span>{Math.round(completionRate)}%</span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {completedChallenges.length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {inProgressChallenges.length}
                </div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {challenges.length -
                    completedChallenges.length -
                    inProgressChallenges.length}
                </div>
                <div className="text-sm text-muted-foreground">Not Started</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Challenge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card
            key={challenge.id}
            className="group hover:shadow-lg transition-shadow hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              navigate({
                to: "/challenge/$challengeId",
                params: { challengeId: challenge.id },
              })
            }
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">Day {challenge.day}</CardTitle>
                  <CardDescription className="font-medium">
                    {challenge.title}
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    challenge.status === "completed"
                      ? "default"
                      : challenge.status === "in-progress"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {challenge.status === "completed"
                    ? "Done"
                    : challenge.status === "in-progress"
                      ? "WIP"
                      : "Todo"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                {challenge.image ? (
                  <img
                    src={challenge.image || "/placeholder.svg"}
                    alt={challenge.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Palette className="h-8 w-8" />
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {challenge.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {challenge.completedDate || "Not completed"}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      to="/challenge/$challengeId"
                      params={{ challengeId: challenge.id }}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Link>
                  </Button>
                  {challenge.status === "completed" && (
                    <>
                      {challenge.codeUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={challenge.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Code className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
