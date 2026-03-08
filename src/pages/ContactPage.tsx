import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { t } = useTranslation();
  const { prefix } = useLanguagePrefix();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.comments.trim()) {
      toast({ title: t("contact.errorTitle"), description: t("contact.errorDesc"), variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      toast({ title: t("contact.successTitle"), description: t("contact.successDesc") });
      setFormData({ firstName: "", lastName: "", email: "", comments: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link to={prefix}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("contact.backToHome")}
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Mail className="w-4 h-4" />
            <span className="font-semibold text-sm">{t("contact.badge")}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("contact.title")}
          </h1>
          <p className="text-muted-foreground">{t("contact.subtitle")}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {t("contact.firstName")} *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t("contact.firstNamePlaceholder")}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {t("contact.lastName")}
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t("contact.lastNamePlaceholder")}
                maxLength={100}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> {t("contact.email")} *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments" className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" /> {t("contact.comments")} *
            </Label>
            <Textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder={t("contact.commentsPlaceholder")}
              maxLength={1000}
              rows={5}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={sending}>
            <Send className="w-4 h-4 mr-2" />
            {sending ? t("contact.sending") : t("contact.send")}
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactPage;
