type StatData = {
  label: string;
  value: string;
};

type StatSectionProps = {
  sectionType: "statSection";
  title: string;
  description: string;
  image: string;
  stat: StatData[];
};

export type { StatSectionProps, StatData };
