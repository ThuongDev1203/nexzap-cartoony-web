
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Mail } from "lucide-react";
import JobDetailDialog from "@/components/JobDetailDialog";
import JobPositionsList from "@/components/recruitment/JobPositionsList";
import GeneralApplicationForm from "@/components/recruitment/GeneralApplicationForm";
import CompanyBenefits from "@/components/recruitment/CompanyBenefits";
import { JobPosition } from "@/types/job";
import { jobPositions } from "@/data/jobPositions";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Recruitment = () => {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleJobClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Keep the selected job in memory for a smooth transition if dialog reopens
    setTimeout(() => {
      setSelectedJob(null);
    }, 300);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-4xl font-bold">{t("recruitment.title")}</h1>
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("recruitment.subtitle")}
          </p>
        </div>

        <JobPositionsList jobs={jobPositions} onJobSelect={handleJobClick} />

        {/* Job details dialog */}
        <JobDetailDialog 
          job={selectedJob} 
          isOpen={isDialogOpen} 
          onClose={handleCloseDialog} 
        />

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Mail className="mr-2 text-orange-500" />
            {t("recruitment.applyNow")}
          </h2>
          
          <GeneralApplicationForm />
        </div>
        
        <CompanyBenefits />
      </div>
    </div>
  );
};

export default Recruitment;
