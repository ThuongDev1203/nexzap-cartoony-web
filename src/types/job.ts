
import { LucideIcon } from "lucide-react";

export interface JobPosition {
  id: string;
  title: string;
  icon: LucideIcon;
  department: string;
  locationType: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}
