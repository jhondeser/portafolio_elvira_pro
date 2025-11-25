// types/services.ts
export type ServiceType = {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
} & (
  | {
      type: "content-production";
      location: string;
      price: string;
      minHours: number;
      features: string[];
      editingOptions: {
        basic: {
          price: string;
          description: string;
        };
        advanced: string;
      };
      whatWeCanRecord: string[];
      cta: string;
    }
  | {
      type: "content-editing";
      pricing: {
        basic: {
          price: string;
          description: string;
        };
        advanced: string;
      };
    }
  | {
      type: "personal-consultations";
      sessionDetails: string;
      support: string;
    }
);