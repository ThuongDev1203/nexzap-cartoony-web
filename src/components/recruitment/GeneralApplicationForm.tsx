import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  position: z
    .string()
    .min(2, { message: "Position must be at least 2 characters." }),
  experience: z
    .string()
    .min(5, { message: "Experience details must be at least 5 characters." }),
  message: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const GeneralApplicationForm = () => {
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
      setFileError("Vui lòng tải lên sơ yếu lý lịch của bạn");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position", data.position);
    formData.append("experience", data.experience);
    formData.append("message", data.message || "");
    formData.append("agreeToTerms", data.agreeToTerms ? "Yes" : "No");
    formData.append("resume", resumeFile);

    try {
      const response = await fetch("https://getform.io/f/bjjoeewb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Đã gửi đơn thành công!");
        form.reset();
        setResumeFile(null);
      } else {
        toast.error("Không thể gửi đơn. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Có lỗi xảy ra khi gửi biểu mẫu.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và Tên</FormLabel>
                <FormControl>
                  <Input placeholder="Họ và Tên của bạn" {...field} />
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
                <FormLabel>Số Điện Thoại</FormLabel>
                <FormControl>
                  <Input placeholder="Số điện thoại" {...field} />
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
                <FormLabel>Vị trí</FormLabel>
                <FormControl>
                  <Input placeholder="Vị trí ứng tuyển" {...field} />
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
              <FormLabel>Kinh Nghiệm và Kỹ Năng</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hãy mô tả kinh nghiệm và kỹ năng có liên quan của bạn..."
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
              <FormLabel>Tin nhắn bổ sung (Tùy chọn)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Bạn có muốn chúng tôi cung cấp thêm thông tin nào không..."
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
            <p className="text-sm text-red-500 mt-1">{fileError}</p>
          )}
          <FormDescription>
            Vui lòng tải lên sơ yếu lý lịch của bạn ở định dạng PDF hoặc Word
            (tối đa 5MB).
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
                  Tôi đồng ý với các điều khoản và điều kiện và đồng ý cho phép
                  xử lý dữ liệu của tôi.
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
          {form.formState.isSubmitting ? <>Đang nộp đơn...</> : <>Nộp Đơn</>}
        </Button>
      </form>
    </Form>
  );
};

export default GeneralApplicationForm;
