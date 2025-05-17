
import React from "react";
import { JobPosition } from "@/types/job";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface JobCardProps {
  job: JobPosition;
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => (
  <Card className="hover:shadow-md transition-all cursor-pointer" onClick={onClick}>
    <CardContent className="p-6">
      <div className="flex items-start">
        <div className="mr-4 bg-orange-100 p-3 rounded-full">
          <job.icon className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{job.department} · {job.locationType}</p>
          <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
          <Button size="sm" variant="outline" className="mt-2">View Details</Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default JobCard;
