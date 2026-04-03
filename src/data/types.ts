export interface Phase {
  id: string;
  label: string;
  dot: string;
  title: string;
  desc: string;
}

export interface DayTrack {
  l: string;
  t: string;
}

export interface ResourceLink {
  url: string;
  label: string;
  cls: string;
}

export interface TaskData {
  text: string;
  tag: string;
  res: ResourceLink[];
}

export interface WeekData {
  phase: string;
  num: number;
  title: string;
  dates: string;
  type: string;
  focus: string;
  days: DayTrack[];
  tasks: TaskData[];
}
