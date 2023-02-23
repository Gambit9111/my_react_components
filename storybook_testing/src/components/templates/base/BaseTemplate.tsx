import "../../../app/globals.css";

export interface IBaseTemplate {
  sampleTextProp: string;
}

export default function BaseTemplate({ sampleTextProp }: IBaseTemplate) {
  return <div className="bg-cyan-500">{sampleTextProp}</div>;
}
