
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { JobPosition } from "@/types/job";
import { Briefcase, Calendar, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface JobDetailDialogProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailDialog = ({ job, isOpen, onClose }: JobDetailDialogProps) => {
  const { t } = useLanguage();
  
  if (!job) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <job.icon className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <DialogTitle className="text-2xl">{job.title}</DialogTitle>
              <DialogDescription className="text-sm mt-1">
                {job.department} · {job.locationType}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 my-2">
          <div>
            <p className="text-gray-700">{job.description}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("job.requirements")}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="text-gray-700">{requirement}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("job.responsibilities")}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-gray-700">{responsibility}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("job.benefits")}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-4 items-center sm:items-end">
          <div className="flex-1 text-gray-600 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{t("job.applyBy")}: September 30, 2024</span>
            </div>
          </div>
          <div>
            <Button 
              className="flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:careers@nexzap.studio?subject=Application for ${job.title}`;
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              {t("job.apply")}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailDialog;
