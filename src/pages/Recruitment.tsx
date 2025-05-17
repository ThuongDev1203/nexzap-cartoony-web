
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
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
import { Briefcase, Mail, User, Users } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
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

const JobCard = ({ title, icon: Icon, description, requirements }: { 
  title: string; 
  icon: React.ElementType; 
  description: string; 
  requirements: string[];
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
    <div className="flex items-start">
      <div className="mr-4 bg-orange-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-orange-500" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <p className="font-semibold mb-2">Requirements:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Recruitment = () => {
  const { t } = useLanguage();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
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
      console.log("Form submitted:", { ...data, resumeFile });
      
      // Simulate sending email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Application submitted successfully! We'll review your application soon.");
      form.reset();
      setResumeFile(null);
    } catch (error) {
      console.error("Error sending application:", error);
      toast.error("Failed to submit application. Please try again later.");
    }
  };

  const openPositions = [
    {
      title: "Game Developer",
      icon: Briefcase,
      description: "Join our team to create exciting game experiences using Unity or Unreal Engine.",
      requirements: [
        "At least 2 years of experience with Unity or Unreal Engine",
        "Strong C# or C++ programming skills",
        "Experience with 2D/3D game development",
        "Portfolio demonstrating game projects"
      ]
    },
    {
      title: "3D Artist",
      icon: User,
      description: "Create captivating 3D assets, characters and environments for our games.",
      requirements: [
        "Experience with 3D modeling software (Blender, Maya, or 3ds Max)",
        "Strong understanding of texturing and lighting",
        "Ability to create optimized game-ready assets",
        "An eye for cartoon-style design"
      ]
    },
    {
      title: "Game Design Lead",
      icon: Users,
      description: "Lead the design team in creating engaging gameplay mechanics and experiences.",
      requirements: [
        "5+ years of game design experience",
        "Experience leading design teams",
        "Strong understanding of player psychology and engagement",
        "Excellent communication and documentation skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Are you passionate about game development? We're looking for talented individuals 
            to join our creative team and help us build amazing gaming experiences.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="mr-2 text-orange-500" />
            Open Positions
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {openPositions.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Mail className="mr-2 text-orange-500" />
            Apply Now
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Applying For</FormLabel>
                      <FormControl>
                        <Input placeholder="Position title" {...field} />
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
                        rows={4} 
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
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why Join NexZap Studio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Creative Environment</h3>
              <p className="text-gray-600">Work in a vibrant, creative atmosphere where your ideas matter.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Grow Your Skills</h3>
              <p className="text-gray-600">Continuous learning and development opportunities for all team members.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Amazing Team</h3>
              <p className="text-gray-600">Join a talented, diverse team passionate about creating great games.</p>
            </div>
          </div>
          
          <p className="text-gray-600">
            Can't find a position that matches your skills? We're always looking for talented individuals.
            Send us your resume at <span className="text-orange-500 font-medium">careers@nexzap.studio</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
