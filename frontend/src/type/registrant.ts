export interface IRegisRequest {
  name: string;
  email: string;
  phone: string;
  program: string;
  notes?: string;
  documents: string[];
}

export interface IRegisForm {
  name: string;
  email: string;
  phone: string;
  program: string;
  notes?: string;
  documents: File[];
}
