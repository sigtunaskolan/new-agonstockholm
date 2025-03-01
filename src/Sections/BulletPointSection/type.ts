type BulletPointData = {
  title: string;
  description: string;
};

type BulletPointSectionProps = {
  sectionType: "steperSection";
  title: string;
  details: string;
  steps: BulletPointData[];
};

export type { BulletPointSectionProps, BulletPointData };
