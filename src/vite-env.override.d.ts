declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?react' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
