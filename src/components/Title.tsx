interface ITitle {
  title: string,
};

export default function Title({ title }: ITitle): JSX.Element {
  if (title.length <= 50) {
    return (
      <p className="item-title">{title}</p>
    )
  } else {
    return (
      <p className="item-title">{title.slice(0, 50) + "..."}</p>
    )
  };
};