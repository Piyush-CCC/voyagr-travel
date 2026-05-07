import type { SlideData } from "@/types/showcase";

export const slides: SlideData[] = [
  {
    id: "login-setup",
    sectionNumber: 1,
    title: "User Login & WhatsApp Setup",
    subtitle:
      "Secure authentication and seamless WhatsApp Business integration",
    narrationText:
      "Welcome to Messagify — the smart WhatsApp Business messaging platform. Start by logging in with your email and password. Then head to Account Settings to complete your WhatsApp integration by entering your Phone Number, WABA ID, Meta Business ID, Number ID, and Access Token.",
    mockupType: "login",
    features: [
      {
        iconName: "LogIn",
        label: "Login Form",
        description: "Secure email and password authentication",
      },
      {
        iconName: "MessageCircle",
        label: "WhatsApp Integration",
        description: "Connect your WhatsApp Business account",
      },
      {
        iconName: "Settings",
        label: "Account Settings",
        description: "Configure your business profile",
      },
      {
        iconName: "Key",
        label: "Access Token",
        description: "Secure token refreshed every 2 hours",
      },
    ],
    keyFields: [
      "Email Address",
      "Password",
      "Phone Number",
      "WABA ID",
      "Meta Business ID",
      "Number ID",
      "Access Token (expires 2h)",
    ],
  },
  {
    id: "creating-templates",
    sectionNumber: 2,
    title: "Creating Message Templates",
    subtitle: "Design rich, approval-ready WhatsApp message templates",
    narrationText:
      "Next, create message templates in the Templates tab. Choose your template name, category — Marketing, Utility, or Authentication — and language. Add a rich message header with Text, Image, Video, Document, or Location. Write your message body with variable support, add a footer, and include call-to-action buttons. Submit for approval when ready.",
    mockupType: "template",
    features: [
      {
        iconName: "FileText",
        label: "Template Builder",
        description: "Craft structured WhatsApp messages",
      },
      {
        iconName: "Tag",
        label: "Category Selection",
        description: "Marketing, Utility, or Authentication",
      },
      {
        iconName: "Image",
        label: "Header Options",
        description: "Text, Image, Video, Document, or Location",
      },
      {
        iconName: "Braces",
        label: "Variable Support",
        description: "Dynamic placeholders for personalization",
      },
    ],
    keyFields: [
      "Template Name",
      "Category (Marketing/Utility/Auth)",
      "Language",
      "Message Header",
      "Message Body",
      "Variables",
      "Footer",
      "Buttons",
      "Submit for Approval",
    ],
  },
  {
    id: "managing-contacts",
    sectionNumber: 3,
    title: "Managing Contacts & Leads",
    subtitle: "Build and organize your complete contact database",
    narrationText:
      "Build your contact database in the Contacts and Leads tab. Add contacts with full details: phone number, email, lead type, status, rating — Cold, Hot, or Warm — and source channel like CSV, Website, LinkedIn, or WhatsApp. Fill in basic details, assign to team members, add tags for product interest and preferred language, then save or add another contact.",
    mockupType: "contacts",
    features: [
      {
        iconName: "Users",
        label: "Contact Management",
        description: "Centralized contact database",
      },
      {
        iconName: "Target",
        label: "Lead Tracking",
        description: "Monitor leads through the sales funnel",
      },
      {
        iconName: "BarChart3",
        label: "Status & Rating",
        description: "Cold, Hot, Warm lead classification",
      },
      {
        iconName: "Tags",
        label: "Tags & Source",
        description: "CSV, Website, LinkedIn, WhatsApp sources",
      },
    ],
    keyFields: [
      "Phone (+91)",
      "Email",
      "Type (Lead/Customer)",
      "Status",
      "Rating (Cold/Hot/Warm)",
      "Source",
      "Assign To",
      "First/Last Name",
      "Gender",
      "DOB",
      "Location",
      "Tags",
    ],
  },
  {
    id: "broadcasting-messages",
    sectionNumber: 4,
    title: "Broadcasting Messages",
    subtitle: "Reach your audience at scale with scheduled broadcasts",
    narrationText:
      "Finally, reach your audience at scale with Broadcasts. Create a new broadcast with a name, schedule the date and time, select a pre-approved template, and choose your audience — registered contacts, imported contacts, or CSV upload. Select specific contacts from the system and submit your broadcast to send personalized WhatsApp messages to hundreds of leads at once.",
    mockupType: "broadcast",
    features: [
      {
        iconName: "Radio",
        label: "Broadcast Creator",
        description: "Mass messaging to your contact list",
      },
      {
        iconName: "Calendar",
        label: "Scheduling",
        description: "Schedule broadcasts for optimal timing",
      },
      {
        iconName: "FileCheck",
        label: "Template Selection",
        description: "Use pre-approved WhatsApp templates",
      },
      {
        iconName: "Users",
        label: "Audience Targeting",
        description: "Registered contacts, imports, or CSV",
      },
    ],
    keyFields: [
      "Broadcast Name",
      "Schedule Date & Time",
      "Template",
      "Audience Type (Registered/Contact/CSV)",
      "Contact Selection",
      "Submit Broadcast",
    ],
  },
];

export const TOTAL_SLIDES = slides.length;
export const SLIDE_DURATION = 9;
