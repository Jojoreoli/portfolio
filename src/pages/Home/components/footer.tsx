interface IProps {
  onClick: () => void;
}

export const Footer = (props: IProps) => {
  return (
    <footer className="home__footer">
      <button onClick={props.onClick} className="home__footerButton">?</button>
    </footer>
  );
}