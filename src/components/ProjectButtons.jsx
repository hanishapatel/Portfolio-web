export default function ProjectButons({ children, onSelect, onClickListener }) {
  return (
    <button
      className={`ms-2 btn border-dark ${onSelect ? "btn-dark" : "btn-light"}`}
      id="btnAll"
      onClick={onClickListener}
    >
      {children}
    </button>
  );
}
