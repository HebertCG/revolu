// Mock data for the /demo experience. No backend, no persistence.

export type CourseAccent = "amber" | "yellow" | "orange" | "gold";

export interface DemoCourse {
  id: string;
  name: string;
  shortName: string;
  professor: string;
  professorInitials: string;
  cycle: "UDEP" | "UPAO";
  schedule: "Sábados" | "Lun-Vie";
  accent: CourseAccent;
}

export interface ScheduleClass {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7; // 1 = Mon, 7 = Sun
  course: DemoCourse;
  startHour: number; // 24h
  endHour: number;
}

export interface AttendanceRecord {
  id: string;
  date: string; // ISO
  formatted: string;
  course: string;
  cycle: "UDEP" | "UPAO";
  status: "presente" | "tarde" | "ausente";
}

export interface MaterialItem {
  id: string;
  title: string;
  type: "PDF" | "VIDEO" | "DOC";
  course: string;
  cycle: "UDEP" | "UPAO";
  date: string;
  size?: string;
}

export interface MaterialWeek {
  week: number;
  count: number;
  items: MaterialItem[];
}

export interface DemoExam {
  id: string;
  title: string;
  course: string;
  professor: string;
  cycle: "UDEP" | "UPAO";
  duration: number; // minutes
  questions: number;
  deadline: string;
  proctored: boolean;
  status: "active" | "scheduled" | "completed";
  topics: string[];
}

export const demoUser = {
  fullName: "Adrianzen Zapata Kristhel",
  shortName: "Adrianzen",
  initials: "AZ",
  role: "Estudiante" as const,
  email: "adrianzen.zapata@andinos-piura.pe",
  cycleName: "Verano 2026",
  cycleSchedule: "UDEP · Sábados" as const,
  enrollmentDate: "27/04/2026",
  todayFormatted: "Viernes, 08/05/2026",
  todayShort: "08/05/2026",
  greetingTime: "Buenos días",
};

export const demoAcademy = {
  name: "Andinos Piura",
  domain: "intranet.andinos-piura.pe",
  ciclo: "Ciclo Verano · Activo",
  weekRange: "Del 4 al 10 de mayo",
  weekNumber: 2,
  year: 2026,
};

export const demoCourses: DemoCourse[] = [
  {
    id: "raz-mate",
    name: "Razonamiento Matemático",
    shortName: "Raz. Mate.",
    professor: "Hebert Cornejo",
    professorInitials: "HC",
    cycle: "UDEP",
    schedule: "Sábados",
    accent: "amber",
  },
  {
    id: "raz-verbal",
    name: "Razonamiento Verbal",
    shortName: "Raz. Verbal",
    professor: "Prof. Carrillo",
    professorInitials: "PC",
    cycle: "UDEP",
    schedule: "Sábados",
    accent: "yellow",
  },
  {
    id: "algebra",
    name: "Álgebra · Aritmética",
    shortName: "Algebra",
    professor: "Armando Alama",
    professorInitials: "AA",
    cycle: "UDEP",
    schedule: "Sábados",
    accent: "orange",
  },
  {
    id: "geometria",
    name: "Geometría",
    shortName: "Geometría",
    professor: "Prof. Modesto",
    professorInitials: "PM",
    cycle: "UDEP",
    schedule: "Sábados",
    accent: "gold",
  },
];

const courseById = (id: string) => demoCourses.find((c) => c.id === id)!;

// Five classes Mon–Fri, 18:00–20:00 (matches screenshot)
export const demoSchedule: ScheduleClass[] = [
  { day: 1, course: courseById("raz-mate"), startHour: 18, endHour: 20 },
  { day: 2, course: courseById("algebra"), startHour: 18, endHour: 20 },
  { day: 3, course: courseById("geometria"), startHour: 18, endHour: 20 },
  { day: 4, course: courseById("raz-verbal"), startHour: 18, endHour: 20 },
  { day: 5, course: courseById("raz-mate"), startHour: 18, endHour: 20 },
];

// Today (May 8, 2026 Friday) the next class is at 18:00 = Razonamiento Matemático
export const demoNextClass = {
  course: courseById("raz-mate"),
  start: "18:00",
  end: "20:00",
  startLabel: "06:00 PM",
  endLabel: "08:00 PM",
  todayLabel: "Hoy a las 06:00 PM",
};

export const demoAttendance: AttendanceRecord[] = [
  {
    id: "a-1",
    date: "2026-04-27",
    formatted: "Lunes, 27 de Abril",
    course: "Razonamiento Matemático",
    cycle: "UDEP",
    status: "presente",
  },
];

export const demoAttendanceStats = {
  percentage: 100,
  totalRecords: 1,
  presents: 1,
  tardies: 0,
  absences: 0,
};

export const demoMaterials: MaterialWeek[] = [
  {
    week: 1,
    count: 4,
    items: [
      { id: "m-1-1", title: "Raz. Verbal 1", type: "PDF", course: "Razonamiento Verbal", cycle: "UDEP", date: "29/04/2026", size: "1.2 MB" },
      { id: "m-1-2", title: "Raz. Matemático 1", type: "PDF", course: "Razonamiento Matemático", cycle: "UDEP", date: "29/04/2026", size: "2.4 MB" },
      { id: "m-1-3", title: "Geometría 1", type: "PDF", course: "Geometría", cycle: "UDEP", date: "28/04/2026", size: "3.1 MB" },
      { id: "m-1-4", title: "Álgebra 1", type: "PDF", course: "Álgebra · Aritmética", cycle: "UDEP", date: "28/04/2026", size: "1.8 MB" },
    ],
  },
  {
    week: 2,
    count: 4,
    items: [
      { id: "m-2-1", title: "Raz. Verbal 2", type: "PDF", course: "Razonamiento Verbal", cycle: "UDEP", date: "06/05/2026", size: "1.4 MB" },
      { id: "m-2-2", title: "Raz. Matemático 2", type: "PDF", course: "Razonamiento Matemático", cycle: "UDEP", date: "06/05/2026", size: "2.6 MB" },
      { id: "m-2-3", title: "Geometría 2", type: "PDF", course: "Geometría", cycle: "UDEP", date: "05/05/2026", size: "2.8 MB" },
      { id: "m-2-4", title: "Álgebra 2", type: "PDF", course: "Álgebra · Aritmética", cycle: "UDEP", date: "05/05/2026", size: "1.6 MB" },
    ],
  },
];

export const demoExams: DemoExam[] = [
  {
    id: "ex-1",
    title: "Simulacro UDEP — Razonamiento Matemático",
    course: "Razonamiento Matemático",
    professor: "Hebert Cornejo",
    cycle: "UDEP",
    duration: 90,
    questions: 25,
    deadline: "Vence el viernes 15 de mayo, 06:00 PM",
    proctored: true,
    status: "active",
    topics: ["Sucesiones", "Funciones", "Probabilidad", "Análisis combinatorio"],
  },
  {
    id: "ex-2",
    title: "Práctica calificada — Álgebra",
    course: "Álgebra · Aritmética",
    professor: "Armando Alama",
    cycle: "UDEP",
    duration: 60,
    questions: 15,
    deadline: "Programado para el sábado 16 de mayo, 09:00 AM",
    proctored: false,
    status: "scheduled",
    topics: ["Polinomios", "Ecuaciones de 2do grado"],
  },
];

export const demoVocational = {
  questions: 400,
  careers: 25,
  durationMinutes: 25,
  precision: 99.8,
  practiceMode: true,
};

export const demoVocationalSample = {
  topCareers: [
    { name: "Ingeniería Industrial", match: 92 },
    { name: "Ingeniería Civil", match: 87 },
    { name: "Arquitectura", match: 71 },
  ],
};

export const courseAccentClasses: Record<
  CourseAccent,
  { bg: string; soft: string; border: string; text: string; chip: string }
> = {
  amber: {
    bg: "from-amber-300 to-amber-500",
    soft: "bg-amber-100 dark:bg-amber-400/15",
    border: "border-amber-300/60 dark:border-amber-400/30",
    text: "text-amber-700 dark:text-amber-300",
    chip: "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300",
  },
  yellow: {
    bg: "from-yellow-300 to-amber-400",
    soft: "bg-yellow-100 dark:bg-yellow-400/15",
    border: "border-yellow-300/60 dark:border-yellow-400/30",
    text: "text-yellow-700 dark:text-yellow-300",
    chip: "bg-yellow-100 text-yellow-700 dark:bg-yellow-400/15 dark:text-yellow-300",
  },
  orange: {
    bg: "from-orange-300 to-amber-500",
    soft: "bg-orange-100 dark:bg-orange-400/15",
    border: "border-orange-300/60 dark:border-orange-400/30",
    text: "text-orange-700 dark:text-orange-300",
    chip: "bg-orange-100 text-orange-700 dark:bg-orange-400/15 dark:text-orange-300",
  },
  gold: {
    bg: "from-amber-200 to-yellow-400",
    soft: "bg-amber-50 dark:bg-yellow-400/10",
    border: "border-amber-200/60 dark:border-amber-300/30",
    text: "text-amber-800 dark:text-amber-200",
    chip: "bg-amber-50 text-amber-800 dark:bg-amber-400/10 dark:text-amber-200",
  },
};
