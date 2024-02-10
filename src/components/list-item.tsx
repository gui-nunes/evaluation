interface ListItemProps {
  title: string;
  image?: {
    src: string;
    alt: string;
  };
  supportingText?: string;
  action?: React.ReactNode;
}
export function ListItem(props: ListItemProps) {
  return (
    <div className="bg-white shadow-md rounded-md px-4 overflow-hidden my-2 flex items-center">
      {props.image && (
        <img
          src={props.image.src}
          alt={props.image.alt}
          className="object-cover w-[36px] h-[36px] rounded-full"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-medium ">{props.title}</h3>
        {props.supportingText && <p className="text-sm text-gray-500"> {props.supportingText}</p>}
      </div>
      {props.action && <div>{props.action}</div>}
    </div>
  );
}
