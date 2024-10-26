import useLocalStorage from "./useLocalStorage";

export default function ComTestLocalStroage() {
  const [localThemeStorage, setLocalThemeStorage] = useLocalStorage(
    "theme",
    "dark"
  );

  const switchMode = () => {
    if (localThemeStorage === "dark") {
      setLocalThemeStorage("light");
    } else {
      setLocalThemeStorage("dark");
    }
  };

  return (
    <div>
      <button onClick={switchMode}>Click to switch</button>
      <div>{localThemeStorage}</div>
    </div>
  );
}
