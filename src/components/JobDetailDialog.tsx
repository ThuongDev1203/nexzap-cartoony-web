import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { JobPosition } from "@/types/job";
import { Calendar, Mail } from "lucide-react";
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
              <DialogTitle className="text-2xl font-bold">
                {job.title}
              </DialogTitle>
              <DialogDescription className="text-sm mt-1 text-gray-500">
                {job.department} · {job.locationType}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 my-2">
          <div>
            <p className="text-gray-700 whitespace-pre-line">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              {t("job.requirements") || "Yêu cầu"}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((req, i) => (
                <li key={i} className="text-gray-700">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              {t("job.responsibilities") || "Trách nhiệm"}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.responsibilities.map((res, i) => (
                <li key={i} className="text-gray-700">
                  {res}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              {t("job.benefits") || "Quyền lợi"}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.benefits.map((benefit, i) => (
                <li key={i} className="text-gray-700">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-4 items-center sm:items-end">
          <div className="flex-1 text-gray-600 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{t("job.applyBy") || "Hạn ứng tuyển"}: 30/06/2025</span>
            </div>
          </div>
          <div>
            <Button
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:thuongdev1203@gmail.com?subject=Ứng tuyển vị trí ${job.title}`;
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              {t("job.apply") || "Ứng tuyển"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailDialog;
