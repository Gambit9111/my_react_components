import "../../../app/globals.css";

export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

export default function Footer({ className, ...footerProps }: IFooter) {
  return (
    <footer
      {...footerProps}
      className={`w-full bg-slate-100 p-5 text-slate-500 ${className}`}
    >
      <p>Canada</p>
    </footer>
  );
}
