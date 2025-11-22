export type SliderValues = {
  minLimit: number;
  maxLimit: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
};
