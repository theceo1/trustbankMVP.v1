function cn(...args: (string | undefined)[]) {
    return args.filter(Boolean).join(' ');
  }
  
  export default cn;
  