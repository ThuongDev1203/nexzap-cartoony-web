
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Briefcase } from "lucide-react";
import { JobPosition } from "@/types/job";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface JobDetailDialogProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  experience: z.string().min(5, {
    message: "Experience details must be at least 5 characters.",
  }),
  message: z.string().optional(),
  agreeToTerms: z.boolean().refine(value => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const JobApplicationForm = ({ jobTitle, onBack }: { jobTitle: string, onBack: () => void }) => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
      agreeToTerms: false,
    },
  });
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (file.size > MAX_FILE_SIZE) {
        setFileError("File size must be less than 5MB");
        setResumeFile(null);
        return;
      }
      
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setFileError("File must be PDF or Word document");
        setResumeFile(null);
        return;
      }
      
      setFileError(null);
      setResumeFile(file);
    }
  };
  
  const onSubmit = async (data: FormValues) => {
    if (!resumeFile) {
      setFileError("Please upload your resume");
      return;
    }
    
    try {
      console.log("Form submitted:", { ...data, resumeFile, jobTitle });
      
      // Simulate sending email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Application submitted successfully! We'll review your application soon.");
      form.reset();
      setResumeFile(null);
      onBack(); // Return to job details
    } catch (error) {
      console.error("Error sending application:", error);
      toast.error("Failed to submit application. Please try again later.");
    }
  };

  return (
    <div>
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-4 pl-0 hover:bg-transparent"
      >
        <ArrowLeft className="mr-1" size={16} /> Back to job details
      </Button>
      
      <h2 className="text-xl font-semibold mb-4">Apply for: {jobTitle}</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience & Skills</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your relevant experience and skills..." 
                    rows={3} 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any additional information you'd like us to know..." 
                    rows={3} 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormLabel htmlFor="resume">Resume/CV</FormLabel>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="mt-1"
            />
            {resumeFile && (
              <p className="text-sm text-green-600 mt-1">
                File uploaded: {resumeFile.name}
              </p>
            )}
            {fileError && (
              <p className="text-sm text-red-500 mt-1">
                {fileError}
              </p>
            )}
            <FormDescription>
              Please upload your resume in PDF or Word format (max 5MB).
            </FormDescription>
          </div>

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the terms and conditions and consent to having my data processed.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={form.formState.isSubmitting || !resumeFile}
          >
            {form.formState.isSubmitting ? (
              <>Submitting Application...</>
            ) : (
              <>Submit Application</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

const JobDetailDialog = ({ job, isOpen, onClose }: JobDetailDialogProps) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <div className="mr-2 bg-orange-100 p-2 rounded-full">
              <Briefcase className="h-5 w-5 text-orange-500" />
            </div>
            {job.title}
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700">
            {job.department} · {job.locationType}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          {!showApplicationForm ? (
            <>
              <div>
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p className="text-gray-700">{job.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <DialogFooter className="mt-6">
                <Button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full sm:w-auto"
                >
                  Apply for this position
                </Button>
              </DialogFooter>
            </>
          ) : (
            <JobApplicationForm
              jobTitle={job.title}
              onBack={() => setShowApplicationForm(false)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailDialog;
