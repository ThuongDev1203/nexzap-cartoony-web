
import React from "react";
import { JobPosition } from "@/types/job";
import { Briefcase } from "lucide-react";
import JobCard from "./JobCard";
import { useLanguage } from "@/context/LanguageContext";

interface JobPositionsListProps {
  jobs: JobPosition[];
  onJobSelect: (job: JobPosition) => void;
}

const JobPositionsList = ({ jobs, onJobSelect }: JobPositionsListProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Briefcase className="mr-2 text-orange-500" />
        {t("recruitment.openPositions")}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {jobs.map((job) => (
          <JobCard 
            key={job.id} 
            job={job} 
            onClick={() => onJobSelect(job)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobPositionsList;
