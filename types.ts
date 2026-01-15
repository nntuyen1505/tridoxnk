
export interface CustomsChannel {
  name: string;
  code: string;
  desc: string;
  color: string;
}

export interface StepTip {
  title: string;
  detail: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface DocumentReference {
  name: string;
  imageUrl: string;
}

export interface Step {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  details: string;
  tips: StepTip[];
  docs: DocumentReference[]; // Updated from string[] to DocumentReference[]
  isOverview?: boolean;
  image?: string;
  isCustomsStep?: boolean;
  channels?: CustomsChannel[];
  quiz: QuizQuestion[];
}
