export interface Challenge {
  id: string;
  day: number;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "not-started";
  completedDate?: string;
  timeSpent?: string;
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  technologies?: string[];
  learnings?: string[];
  challenges?: string[];
}

export const challenges: Challenge[] = [
  {
    id: "day-1",
    day: 1,
    title: "Sign Up",
    description:
      "Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.",
    status: "in-progress",
  },
];
