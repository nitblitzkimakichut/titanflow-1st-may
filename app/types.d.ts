declare module 'react' {
  interface JSX {
    IntrinsicElements: {
      [elemName: string]: any;
      div: any;
      span: any;
      h1: any;
      h2: any;
      h3: any;
      p: any;
      a: any;
      button: any;
      iframe: any;
      script: any;
      path: any;
      svg: any;
      'wistia-player': {
        'media-id': string;
        aspect?: string;
        className?: string;
      };
    }
  }
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
}

declare module 'framer-motion' {
  export const motion: {
    div: any;
    h1: any;
    h2: any;
    h3: any;
    p: any;
    li: any;
    a: any;
    button: any;
    span: any;
  };
  export interface HTMLMotionProps<T> extends React.HTMLAttributes<T> {
    initial?: any;
    animate?: any;
    transition?: any;
    className?: string;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
  }
  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    mode?: 'sync' | 'wait' | 'popLayout';
    initial?: boolean;
    onExitComplete?: () => void;
  }>;
}

declare module 'lucide-react' {
  export const ArrowLeft: any;
  export const ArrowRight: any;
  export const Brain: any;
  export const Code2: any;
  export const Cpu: any;
  export const MessageSquare: any;
  export const Sparkles: any;
  export const Target: any;
  export const Users: any;
  export const Zap: any;
  export const Clock: any;
  export const Calendar: any;
  export const Phone: any;
  export const Video: any;
  export const Star: any;
  export const Share2: any;
  export const Globe: any;
  export const Mail: any;
  export const RefreshCcw: any;
  export const UserCheck: any;
  export const Bot: any;
  export const FileText: any;
  export const BellRing: any;
  export const UserPlus: any;
  export const ChevronDown: any;
  export const ChevronUp: any;
  export const CheckCircle2: any;
  export const Rocket: any;
  export const TrendingUp: any;
  export const Award: any;
  export const Menu: any;
  export const X: any;
  export const Play: any;
  export const Shield: any;
  export const CheckCircle: any;
  export const ShieldCheck: any;
}

declare module 'next/link' {
  import { ComponentProps } from 'react';
  export default function Link(props: ComponentProps<'a'>): JSX.Element;
}

declare module 'next/script' {
  import { ComponentProps } from 'react';
  export default function Script(props: { src: string; async?: boolean; type?: string }): JSX.Element;
}

declare module '@/components/ui/button' {
  export const Button: React.FC<{
    className?: string;
    children?: React.ReactNode;
    size?: 'default' | 'sm' | 'lg' | 'icon';
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    onClick?: () => void;
  }>;
}

declare module '@/components/Background3D' {
  export default function Background3D(): JSX.Element;
} 