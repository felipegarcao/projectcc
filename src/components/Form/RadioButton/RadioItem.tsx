import * as RadioGroup from "@radix-ui/react-radio-group";

export type RadioItemProps = RadioGroup.RadioGroupItemProps & {
  text: string;
};

export function RadioItem({ text, ...props }: RadioItemProps) {
  return (
    <div className="flex items-center">
      <RadioGroup.Item
        className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_0px_2px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
        id={text}
        {...props}
        >
        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-500" />
      </RadioGroup.Item>
      <label className="text-violet-500 text-[15px] leading-none pl-[15px]" htmlFor={text}>{text}</label>
    </div>
  );
}
