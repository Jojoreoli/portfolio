import { MainTheme } from "../../../styles/MainTheme";

interface IProps {
  direction: "right" | "left";
  onPress: () => void;
}

export const NavigationArrow = (props: IProps) => {
  if (props.direction === "right") {
    return (
      <button onClick={props.onPress} className="content__navigationButton right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={MainTheme.colors.red}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    );
  } else {
    return (
      <button onClick={props.onPress} className="content__navigationButton left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={MainTheme.colors.red}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    );
  }
};
