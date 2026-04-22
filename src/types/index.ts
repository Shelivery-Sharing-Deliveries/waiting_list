export interface WaitingListEntry {
  id?: string;
  email: string;
  created_at?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'default' | 'accent';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}
