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
  notes?: string;
}

export const challenges: Challenge[] = [
  {
    id: "day-1",
    day: 1,
    title: "Sign Up",
    description:
      "Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.",
    status: "in-progress",
    notes:
      "Project: Cosmic Explorers Club - Newsletter; A weekly newsletter delivering facts, stunning images, and updates about space exploration, astronomy, and recent discoveries. Sign Up for exclusive content, early access to interviews with astronomers, and printable star charts.",
  },
  {
    id: "day-2",
    day: 2,
    title: "Credit Card Checkout",
    description:
      "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.",
    status: "in-progress",
  },
];
