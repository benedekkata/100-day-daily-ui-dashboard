import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { challenges } from "@/data/challenges";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Palette,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/challenge/$challengeId")({
  component: ChallengeDetail,
  loader: ({ params }) => {
    const challenge = challenges.find((c) => c.id === params.challengeId);
    if (!challenge) {
      throw notFound();
    }
    return { challenge };
  },
});

function ChallengeDetail() {
  const { challenge } = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      {/* Challenge Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Day {challenge.day}: {challenge.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {challenge.description}
            </p>
          </div>
          <Badge
            variant={
              challenge.status === "completed"
                ? "default"
                : challenge.status === "in-progress"
                  ? "secondary"
                  : "outline"
            }
            className="text-sm"
          >
            {challenge.status === "completed"
              ? "Completed"
              : challenge.status === "in-progress"
                ? "In Progress"
                : "Not Started"}
          </Badge>
        </div>

        {/* Challenge Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Completed: {challenge.completedDate || "Not completed"}</span>
          </div>
          {challenge.timeSpent && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Time spent: {challenge.timeSpent}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Challenge #{challenge.day}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Challenge Image/Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Solution Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {challenge.image ? (
                  <img
                    src={challenge.image || "/placeholder.svg"}
                    alt={challenge.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Palette className="h-12 w-12" />
                    <span className="ml-4">Preview coming soon...</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Challenge Details */}
          <Card>
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Objective</h4>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>

              {challenge.learnings && (
                <div>
                  <h4 className="font-semibold mb-2">Key Learnings</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {challenge.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
              )}

              {challenge.challenges && (
                <div>
                  <h4 className="font-semibold mb-2">Challenges Faced</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {challenge.challenges.map((challengeItem, index) => (
                      <li key={index}>{challengeItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {challenge.liveUrl && (
                <Button className="w-full" asChild>
                  <a
                    href={challenge.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
              )}
              {challenge.codeUrl && (
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={challenge.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Technologies */}
          {challenge.technologies && (
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {challenge.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {challenge.day > 1 && (
                <Button variant="outline" className="w-full" asChild>
                  <Link
                    to="/challenge/$challengeId"
                    params={{ challengeId: `day-${challenge.day - 1}` }}
                  >
                    Previous Challenge
                  </Link>
                </Button>
              )}
              {challenge.day < 100 && (
                <Button variant="outline" className="w-full" asChild>
                  <Link
                    to="/challenge/$challengeId"
                    params={{ challengeId: `day-${challenge.day + 1}` }}
                  >
                    Next Challenge
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
