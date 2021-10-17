/// <reference types="react" />
export default function Colorpicker({ value, onChange }: ColorpickerProps): JSX.Element;
interface ColorpickerProps {
    value: string;
    onChange: (value: string) => void;
}
export {};
