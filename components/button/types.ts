export type ButtonProps = {
  importance?: 'primary' | 'secondary'
  className?: string;
  text: string;
  onClick?: () => any;
  type?: 'submit';
  disabled?: boolean;
};
